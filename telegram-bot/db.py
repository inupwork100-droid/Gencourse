"""SQLite storage for the family diary bot."""
import json
import sqlite3
import threading

SCHEMA = """
CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT);
CREATE TABLE IF NOT EXISTS lessons (
  id INTEGER PRIMARY KEY, weekday INTEGER, start TEXT, end TEXT, name TEXT);
CREATE TABLE IF NOT EXISTS habits (
  id INTEGER PRIMARY KEY, name TEXT, active INTEGER DEFAULT 1, pos INTEGER DEFAULT 0);
CREATE TABLE IF NOT EXISTS moods (
  date TEXT, slot TEXT, value INTEGER, at TEXT, PRIMARY KEY (date, slot));
CREATE TABLE IF NOT EXISTS lesson_log (
  id INTEGER PRIMARY KEY, date TEXT, start TEXT, end TEXT, name TEXT,
  rating INTEGER, grade INTEGER, comment TEXT, UNIQUE (date, start, name));
CREATE TABLE IF NOT EXISTS grades (
  id INTEGER PRIMARY KEY, date TEXT, subject TEXT, value INTEGER, lesson_log_id INTEGER);
CREATE TABLE IF NOT EXISTS habit_log (
  date TEXT, habit_id INTEGER, done INTEGER, PRIMARY KEY (date, habit_id));
CREATE TABLE IF NOT EXISTS homework (
  date TEXT, subject TEXT, status TEXT, PRIMARY KEY (date, subject));
CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY, date TEXT, kind TEXT, ref TEXT, author TEXT, text TEXT, at TEXT);
CREATE TABLE IF NOT EXISTS msgctx (message_id INTEGER PRIMARY KEY, kind TEXT, ref TEXT);
"""

DEFAULT_HABITS = [
    "🤸 Зарядка зранку",
    "📚 Читання 20 хвилин",
    "🧹 Прибрати в кімнаті",
    "🪥 Почистити зуби двічі",
    "📵 Без телефону до уроків",
]


class DB:
    def __init__(self, path):
        self.c = sqlite3.connect(path, check_same_thread=False)
        self.c.row_factory = sqlite3.Row
        self.lock = threading.Lock()
        with self.lock:
            self.c.executescript(SCHEMA)
            self.c.commit()
        if self.get("habits_seeded") is None:
            self.set_habits(DEFAULT_HABITS)
            self.set("habits_seeded", True)

    # ---- low level ----
    def q(self, sql, args=()):
        with self.lock:
            return self.c.execute(sql, args).fetchall()

    def x(self, sql, args=()):
        with self.lock:
            cur = self.c.execute(sql, args)
            self.c.commit()
            return cur.lastrowid

    # ---- settings ----
    def get(self, key, default=None):
        rows = self.q("SELECT value FROM settings WHERE key=?", (key,))
        return json.loads(rows[0]["value"]) if rows else default

    def set(self, key, value):
        self.x("INSERT INTO settings(key, value) VALUES(?, ?) "
               "ON CONFLICT(key) DO UPDATE SET value=excluded.value", (key, json.dumps(value)))

    # ---- schedule ----
    def set_schedule(self, items):
        with self.lock:
            self.c.execute("DELETE FROM lessons")
            self.c.executemany("INSERT INTO lessons(weekday, start, end, name) VALUES(?,?,?,?)", items)
            self.c.commit()

    def lessons_for(self, weekday):
        return self.q("SELECT * FROM lessons WHERE weekday=? ORDER BY start", (weekday,))

    def all_lessons(self):
        return self.q("SELECT * FROM lessons ORDER BY weekday, start")

    # ---- habits ----
    def habits(self):
        return self.q("SELECT * FROM habits WHERE active=1 ORDER BY pos, id")

    def set_habits(self, names):
        existing = {r["name"]: r["id"] for r in self.q("SELECT id, name FROM habits")}
        with self.lock:
            self.c.execute("UPDATE habits SET active=0")
            for pos, name in enumerate(names):
                if name in existing:
                    self.c.execute("UPDATE habits SET active=1, pos=? WHERE id=?", (pos, existing[name]))
                else:
                    self.c.execute("INSERT INTO habits(name, active, pos) VALUES(?, 1, ?)", (name, pos))
            self.c.commit()

    def toggle_habit(self, date, habit_id):
        rows = self.q("SELECT done FROM habit_log WHERE date=? AND habit_id=?", (date, habit_id))
        new = 0 if rows and rows[0]["done"] else 1
        self.x("INSERT INTO habit_log(date, habit_id, done) VALUES(?,?,?) "
               "ON CONFLICT(date, habit_id) DO UPDATE SET done=excluded.done", (date, habit_id, new))
        return new

    def habits_done(self, date):
        return {r["habit_id"] for r in self.q("SELECT habit_id FROM habit_log WHERE date=? AND done=1", (date,))}

    def habit_log_range(self, start, end):
        return self.q("SELECT * FROM habit_log WHERE date BETWEEN ? AND ? AND done=1", (start, end))

    # ---- moods ----
    def set_mood(self, date, slot, value, at):
        self.x("INSERT INTO moods(date, slot, value, at) VALUES(?,?,?,?) "
               "ON CONFLICT(date, slot) DO UPDATE SET value=excluded.value, at=excluded.at",
               (date, slot, value, at))

    def moods(self, date):
        return {r["slot"]: r["value"] for r in self.q("SELECT slot, value FROM moods WHERE date=?", (date,))}

    def moods_range(self, start, end):
        return self.q("SELECT * FROM moods WHERE date BETWEEN ? AND ? ORDER BY date", (start, end))

    # ---- lessons log ----
    def lesson_log_id(self, date, start, end, name):
        self.x("INSERT OR IGNORE INTO lesson_log(date, start, end, name) VALUES(?,?,?,?)", (date, start, end, name))
        return self.q("SELECT id FROM lesson_log WHERE date=? AND start=? AND name=?", (date, start, name))[0]["id"]

    def lesson(self, log_id):
        rows = self.q("SELECT * FROM lesson_log WHERE id=?", (log_id,))
        return rows[0] if rows else None

    def update_lesson(self, log_id, field, value):
        assert field in ("rating", "grade", "comment")
        self.x(f"UPDATE lesson_log SET {field}=? WHERE id=?", (value, log_id))
        if field == "grade":
            row = self.lesson(log_id)
            self.x("DELETE FROM grades WHERE lesson_log_id=?", (log_id,))
            if value:
                self.x("INSERT INTO grades(date, subject, value, lesson_log_id) VALUES(?,?,?,?)",
                       (row["date"], row["name"], value, log_id))

    def lesson_logs(self, date):
        return self.q("SELECT * FROM lesson_log WHERE date=? ORDER BY start", (date,))

    def lesson_logs_range(self, start, end):
        return self.q("SELECT * FROM lesson_log WHERE date BETWEEN ? AND ?", (start, end))

    # ---- grades ----
    def add_grade(self, date, subject, value):
        return self.x("INSERT INTO grades(date, subject, value) VALUES(?,?,?)", (date, subject, value))

    def grades(self, date):
        return self.q("SELECT * FROM grades WHERE date=? ORDER BY id", (date,))

    def grades_range(self, start, end):
        return self.q("SELECT * FROM grades WHERE date BETWEEN ? AND ? ORDER BY date, id", (start, end))

    def delete_grade(self, grade_id):
        self.x("DELETE FROM grades WHERE id=?", (grade_id,))

    # ---- homework ----
    def set_hw(self, date, subject, status):
        if status is None:
            self.x("DELETE FROM homework WHERE date=? AND subject=?", (date, subject))
        else:
            self.x("INSERT INTO homework(date, subject, status) VALUES(?,?,?) "
                   "ON CONFLICT(date, subject) DO UPDATE SET status=excluded.status", (date, subject, status))

    def hw(self, date):
        return {r["subject"]: r["status"] for r in self.q("SELECT * FROM homework WHERE date=?", (date,))}

    def hw_range(self, start, end):
        return self.q("SELECT * FROM homework WHERE date BETWEEN ? AND ?", (start, end))

    # ---- notes ----
    def add_note(self, date, kind, ref, author, text, at):
        self.x("INSERT INTO notes(date, kind, ref, author, text, at) VALUES(?,?,?,?,?,?)",
               (date, kind, ref, author, text, at))

    def notes(self, date):
        return self.q("SELECT * FROM notes WHERE date=? ORDER BY id", (date,))

    # ---- message context (which bot message is about what) ----
    def set_ctx(self, message_id, kind, ref):
        self.x("INSERT OR REPLACE INTO msgctx(message_id, kind, ref) VALUES(?,?,?)",
               (message_id, kind, json.dumps(ref)))

    def ctx(self, message_id):
        rows = self.q("SELECT kind, ref FROM msgctx WHERE message_id=?", (message_id,))
        return (rows[0]["kind"], json.loads(rows[0]["ref"])) if rows else (None, None)
