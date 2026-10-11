"""Texts, keyboards, parsing and statistics. No network calls here, so it can be tested offline."""
import datetime as dt
import re
from html import escape

from telegram import InlineKeyboardButton as B, InlineKeyboardMarkup as KB

MOODS = {
    5: ("😄", "супер"),
    4: ("🙂", "добре"),
    3: ("😐", "так собі"),
    2: ("🙁", "погано"),
    1: ("😣", "жахливо"),
}
SLOTS = {"morning": "Ранок", "evening": "Вечір"}
HW_ORDER = [None, "done", "part", "miss", "none"]
HW = {None: ("⬜", "не позначено"), "done": ("✅", "зроблено"), "part": ("🟡", "частково"),
      "miss": ("❌", "не зроблено"), "none": ("➖", "не задали")}
WD_SHORT = ["пн", "вт", "ср", "чт", "пт", "сб", "нд"]
WD_FULL = ["понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота", "неділя"]
WD_ACC = ["понеділок", "вівторок", "середу", "четвер", "пʼятницю", "суботу", "неділю"]
MONTH_GEN = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня",
             "вересня", "жовтня", "листопада", "грудня"]
MONTH_NOM = ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень",
             "вересень", "жовтень", "листопад", "грудень"]

TOPICS = [  # key, title, Telegram icon colour
    ("day", "📅 День", 7322096),
    ("mood", "😊 Настрій", 16766590),
    ("schedule", "🕐 Розклад і заняття", 13338331),
    ("grades", "⭐ Оцінки і домашка", 16478047),
    ("habits", "✅ Звички", 9367192),
]

TOPIC_INTRO = {
    "day": "Тут щовечора зʼявляється підсумок дня: настрій, уроки, оцінки, домашка й звички. "
           "У неділю тут же підсумок тижня.\nКоманди: /today, /yesterday, /week, /month",
    "mood": "Тут бот вранці й увечері питає про настрій. Натисни смайлик. "
            "Щоб пояснити чому, просто напиши повідомлення в цю гілку.",
    "schedule": "Тут план занять на день, нагадування перед кожним заняттям і питання «як пройшло?» після нього.\n"
                "Розклад задається командою /schedule. Наступне заняття: /next",
    "grades": "Сюди приходять оцінки з уроків і щовечора питання про домашку.\n"
              "Додати оцінку вручну: напиши, наприклад, «Математика 10».",
    "habits": "Щоранку тут список звичок на день. Натискай, коли виконала.\n"
              "Змінити список: /habits",
}


# ---------- dates ----------
def d2s(d):
    return d.isoformat()


def s2d(s):
    return dt.date.fromisoformat(s)


def fmt_date(d):
    return f"{WD_FULL[d.weekday()].capitalize()}, {d.day} {MONTH_GEN[d.month - 1]}"


def plural(n, one, few, many):
    a, b = abs(n) % 100, abs(n) % 10
    if 10 < a < 20:
        return many
    if 1 < b < 5:
        return few
    if b == 1:
        return one
    return many


def fmt1(x):
    return f"{x:.1f}".replace(".", ",")


def tmin(s):
    h, m = s.split(":")
    return int(h) * 60 + int(m)


def mins_to_str(m):
    m = int(m)
    return f"{m // 60:02d}:{m % 60:02d}"


def until_text(minutes):
    minutes = int(minutes)
    if minutes < 60:
        return f"через {minutes} хв"
    h, m = divmod(minutes, 60)
    return f"через {h} год {m} хв" if m else f"через {h} год"


# ---------- parsing ----------
WD_ALIASES = {
    "пн": 0, "пон": 0, "понеділок": 0, "вт": 1, "вів": 1, "вівторок": 1, "ср": 2, "сер": 2, "середа": 2,
    "чт": 3, "чет": 3, "четвер": 3, "пт": 4, "птн": 4, "пʼятниця": 4, "п'ятниця": 4, "пятниця": 4,
    "сб": 5, "суб": 5, "субота": 5, "нд": 6, "нед": 6, "неділя": 6,
}
TIME_RE = re.compile(r"^(\d{1,2})[:.](\d{2})(?:\s*[-–—]\s*(\d{1,2})[:.](\d{2}))?\s+(.+)$")


def parse_schedule(text, default_len=45):
    """Lines like 'Пн' then '08:30-09:15 Математика', or 'Пн 08:30 Математика'. Returns [(wd, start, end, name)]."""
    items, wd, errors = [], None, []
    for raw in text.splitlines():
        line = raw.strip().strip("•-").strip()
        if not line:
            continue
        first = line.split()[0].lower().rstrip(":,.")
        if first in WD_ALIASES:
            wd = WD_ALIASES[first]
            line = line[len(line.split()[0]):].strip()
            if not line:
                continue
        m = TIME_RE.match(line)
        if not m or wd is None:
            errors.append(raw.strip())
            continue
        h1, m1, h2, m2, name = m.groups()
        start = int(h1) * 60 + int(m1)
        end = int(h2) * 60 + int(m2) if h2 else start + default_len
        if not (0 <= start < 24 * 60 and start < end <= 24 * 60):
            errors.append(raw.strip())
            continue
        items.append((wd, mins_to_str(start), mins_to_str(end), name.strip()))
    return items, errors


def format_schedule(lessons):
    if not lessons:
        return "Розклад ще не задано."
    out, cur = [], None
    for r in lessons:
        if r["weekday"] != cur:
            cur = r["weekday"]
            out.append(f"\n<b>{WD_FULL[cur].capitalize()}</b>")
        out.append(f"{r['start']}–{r['end']} {escape(r['name'])}")
    return "\n".join(out).strip()


GRADE_RE = re.compile(r"^(.+?)[\s:—–-]+(\d{1,2})$")


def parse_grade(text, subjects):
    m = GRADE_RE.match(text.strip())
    if not m:
        return None
    name, v = m.group(1).strip(), int(m.group(2))
    if not 1 <= v <= 12:
        return None
    low = name.lower()
    for s in subjects:
        if s.lower() == low or s.lower().startswith(low):
            return s, v
    return name[:1].upper() + name[1:], v


# ---------- keyboards & message texts ----------
def mood_text(slot, name, value=None):
    q = (f"Доброго ранку, {escape(name)}! Як настрій?" if slot == "morning"
         else f"{escape(name)}, як пройшов день? Який настрій зараз?")
    if value:
        e, label = MOODS[value]
        q += f"\n\nЗаписано: {e} <b>{label}</b>\nХочеш розповісти чому? Напиши повідомлення в цю гілку."
    return q


def mood_kb(date, slot, value=None):
    row = [B(f"·{MOODS[v][0]}·" if v == value else MOODS[v][0], callback_data=f"m:{date}:{slot}:{v}")
           for v in (5, 4, 3, 2, 1)]
    return KB([row])


def lesson_text(row):
    t = f"📝 Як пройшло заняття <b>{escape(row['name'])}</b> ({row['start']}–{row['end']})?"
    lines = []
    if row["rating"]:
        lines.append(f"Враження: {MOODS[row['rating']][0]} {MOODS[row['rating']][1]}")
    if row["grade"] is not None:
        lines.append(f"Оцінка: <b>{row['grade']}</b>" if row["grade"] else "Оцінки не було")
    if row["comment"]:
        lines.append(f"💬 {escape(row['comment'])}")
    if lines:
        t += "\n\n" + "\n".join(lines)
    if not row["comment"]:
        t += "\n\nЩоб написати коментар, відповідай (Reply) на це повідомлення."
    return t


def lesson_kb(row):
    lid = row["id"]
    rate = [B(f"·{MOODS[v][0]}·" if row["rating"] == v else MOODS[v][0], callback_data=f"l:{lid}:r:{v}")
            for v in (5, 4, 3, 2, 1)]
    g = row["grade"]
    g1 = [B(f"[{v}]" if g == v else str(v), callback_data=f"l:{lid}:g:{v}") for v in range(1, 7)]
    g2 = [B(f"[{v}]" if g == v else str(v), callback_data=f"l:{lid}:g:{v}") for v in range(7, 13)]
    none = [B("· Без оцінки ·" if g == 0 else "Без оцінки", callback_data=f"l:{lid}:g:0")]
    return KB([rate, g1, g2, none])


def habits_text(date, habits, done):
    n = sum(1 for h in habits if h["id"] in done)
    d = s2d(date)
    t = f"✅ <b>Звички на {d.day} {MONTH_GEN[d.month - 1]}</b>: {n} з {len(habits)}"
    if habits and n == len(habits):
        t += "\n\nВсе виконано! Ти молодець 🎉"
    else:
        t += "\nНатискай на звичку, коли виконаєш."
    return t


def habits_kb(date, habits, done):
    return KB([[B(("✅ " if h["id"] in done else "⬜ ") + h["name"], callback_data=f"h:{date}:{h['id']}")]
               for h in habits])


def hw_text(for_date, statuses, subjects):
    d = s2d(for_date)
    marked = sum(1 for s in subjects if statuses.get(s))
    t = (f"📚 <b>Домашка на {WD_ACC[d.weekday()]}, {d.day} {MONTH_GEN[d.month - 1]}</b>\n"
         f"Натискай на предмет, щоб змінити стан: ⬜ → ✅ зроблено → 🟡 частково → ❌ не зроблено → ➖ не задали")
    if marked:
        t += f"\n\nПозначено {marked} з {len(subjects)}"
    return t


def hw_kb(date, subjects, statuses):
    return KB([[B(f"{HW[statuses.get(s)][0]} {s}", callback_data=f"w:{date}:{i}")]
               for i, s in enumerate(subjects)])


def next_hw(status):
    return HW_ORDER[(HW_ORDER.index(status) + 1) % len(HW_ORDER)]


# ---------- day summary ----------
def day_summary(db, d):
    date = d2s(d)
    habits = db.habits()
    done = db.habits_done(date)
    moods = db.moods(date)
    logs = db.lesson_logs(date)
    grades = db.grades(date)
    hw = db.hw(date)
    notes = db.notes(date)
    out = [f"📅 <b>{fmt_date(d)}</b>"]

    if moods:
        parts = [f"{SLOTS[s].lower()} {MOODS[v][0]} {MOODS[v][1]}" for s, v in sorted(moods.items(), reverse=True)]
        out.append("\n<b>Настрій:</b> " + " · ".join(parts))
    else:
        out.append("\n<b>Настрій:</b> не відмічено")
    for n in notes:
        if n["kind"] in ("mood", "day"):
            out.append(f"💬 {escape(n['text'])}")

    if logs:
        out.append("\n<b>Заняття:</b>")
        for r in logs:
            bits = [f"{r['start']} {escape(r['name'])}"]
            if r["rating"]:
                bits.append(MOODS[r["rating"]][0])
            if r["grade"]:
                bits.append(f"оцінка {r['grade']}")
            line = " — ".join([bits[0], " ".join(bits[1:])]) if len(bits) > 1 else bits[0] + " — без відгуку"
            if r["comment"]:
                line += f" · «{escape(r['comment'])}»"
            out.append(line)

    if grades:
        out.append("\n<b>Оцінки:</b> " + ", ".join(f"{escape(g['subject'])} {g['value']}" for g in grades))

    if hw:
        cnt = {k: sum(1 for v in hw.values() if v == k) for k in ("done", "part", "miss")}
        line = f"\n<b>Домашка:</b> ✅ {cnt['done']} · 🟡 {cnt['part']} · ❌ {cnt['miss']}"
        missed = [s for s, v in hw.items() if v == "miss"]
        if missed:
            line += f" (не зроблено: {escape(', '.join(missed))})"
        out.append(line)

    if habits:
        out.append(f"\n<b>Звички:</b> {sum(1 for h in habits if h['id'] in done)} з {len(habits)}")
        out.append("  ".join(("✅ " if h["id"] in done else "⬜ ") + escape(h["name"]) for h in habits))
    return "\n".join(out)


# ---------- period statistics ----------
def period_bounds(kind, today):
    if kind == "week":
        start = today - dt.timedelta(days=today.weekday())
        end = start + dt.timedelta(days=6)
        pstart, pend = start - dt.timedelta(days=7), start - dt.timedelta(days=1)
        label = (f"{start.day}–{end.day} {MONTH_GEN[end.month - 1]}" if start.month == end.month
                 else f"{start.day} {MONTH_GEN[start.month - 1]} – {end.day} {MONTH_GEN[end.month - 1]}")
    else:
        start = today.replace(day=1)
        end = (start + dt.timedelta(days=32)).replace(day=1) - dt.timedelta(days=1)
        pend = start - dt.timedelta(days=1)
        pstart = pend.replace(day=1)
        label = f"{MONTH_NOM[start.month - 1]} {start.year}"
    return start, end, pstart, pend, label


def days_between(a, b):
    return [a + dt.timedelta(days=i) for i in range((b - a).days + 1)]


def avg(xs):
    xs = list(xs)
    return sum(xs) / len(xs) if xs else None


def stats(db, start, end):
    s, e = d2s(start), d2s(end)
    days = days_between(start, end)
    mood_by_day = {}
    for r in db.moods_range(s, e):
        mood_by_day.setdefault(r["date"], []).append(r["value"])
    mood_day = {k: avg(v) for k, v in mood_by_day.items()}
    by_wd = [[] for _ in range(7)]
    for k, v in mood_day.items():
        by_wd[s2d(k).weekday()].append(v)

    habits = db.habits()
    hl = db.habit_log_range(s, e)
    active_days = sorted({r["date"] for r in hl} | set(mood_day))
    habit_counts = {h["id"]: 0 for h in habits}
    for r in hl:
        if r["habit_id"] in habit_counts:
            habit_counts[r["habit_id"]] += 1
    n_days = len(active_days)
    habit_pct = {h["id"]: (habit_counts[h["id"]] / n_days if n_days else None) for h in habits}

    grades = {}
    for g in db.grades_range(s, e):
        grades.setdefault(g["subject"], []).append((g["date"], g["value"]))

    hw = {"done": 0, "part": 0, "miss": 0}
    hw_subj = {}
    for r in db.hw_range(s, e):
        if r["status"] in hw:
            hw[r["status"]] += 1
            hw_subj.setdefault(r["subject"], {"done": 0, "part": 0, "miss": 0})[r["status"]] += 1
    hw_total = sum(hw.values())

    lessons = db.lesson_logs_range(s, e)
    lesson_rating = {}
    for r in lessons:
        if r["rating"]:
            lesson_rating.setdefault(r["name"], []).append(r["rating"])

    all_g = [v for lst in grades.values() for _, v in lst]
    return {
        "days": days, "mood_day": mood_day, "mood_avg": avg(mood_day.values()),
        "mood_wd": [avg(x) for x in by_wd],
        "habits": habits, "habit_pct": habit_pct, "n_days": n_days,
        "habit_all": (sum(habit_counts.values()) / (n_days * len(habits))) if n_days and habits else None,
        "grades": grades, "grade_avg": avg(all_g), "grade_n": len(all_g),
        "hw": hw, "hw_total": hw_total, "hw_subj": hw_subj,
        "hw_pct": (hw["done"] + 0.5 * hw["part"]) / hw_total if hw_total else None,
        "lesson_rating": {k: avg(v) for k, v in lesson_rating.items()},
    }


def arrow(cur, prev, pct=False):
    if cur is None or prev is None:
        return ""
    d = cur - prev
    if pct:
        v = round(d * 100)
        return "" if v == 0 else (f" ↑{v}%" if v > 0 else f" ↓{-v}%")
    v = round(d, 1)
    return "" if abs(v) < 0.1 else (f" ↑{fmt1(v)}" if v > 0 else f" ↓{fmt1(-v)}")


def best_worst(wd):
    have = [(v, i) for i, v in enumerate(wd) if v is not None]
    if len(have) < 2:
        return None
    best, worst = max(have), min(have)
    if best[0] == worst[0]:
        return None
    return best[1], worst[1]


def mood_caption(cur, prev, label):
    if cur["mood_avg"] is None:
        return f"😊 <b>Настрій · {label}</b>\nЗа цей період настрій не відмічали."
    v = round(cur["mood_avg"])
    t = (f"😊 <b>Настрій · {label}</b>\nСередній: {MOODS[v][0]} {fmt1(cur['mood_avg'])} з 5"
         f"{arrow(cur['mood_avg'], prev['mood_avg'])}")
    bw = best_worst(cur["mood_wd"])
    if bw:
        t += f"\nНайкращий настрій у {WD_ACC[bw[0]]}, найважче у {WD_ACC[bw[1]]}."
    return t


def habits_caption(cur, prev, label):
    if not cur["n_days"]:
        return f"✅ <b>Звички · {label}</b>\nЗа цей період звички не відмічали."
    t = (f"✅ <b>Звички · {label}</b>\nВиконано в середньому {round(cur['habit_all'] * 100)}%"
         f"{arrow(cur['habit_all'], prev['habit_all'], True)} за {cur['n_days']} "
         f"{plural(cur['n_days'], 'день', 'дні', 'днів')}")
    ups, downs = [], []
    for h in cur["habits"]:
        c, p = cur["habit_pct"].get(h["id"]), prev["habit_pct"].get(h["id"])
        if c is not None and p is not None:
            if c - p >= 0.1:
                ups.append(h["name"])
            elif p - c >= 0.1:
                downs.append(h["name"])
    if ups:
        t += "\n📈 Прокачалось: " + escape(", ".join(ups))
    if downs:
        t += "\n📉 Просіло: " + escape(", ".join(downs))
    return t


def grades_caption(cur, prev, label):
    t = f"⭐ <b>Оцінки і домашка · {label}</b>"
    if cur["grade_n"]:
        t += (f"\nСередня оцінка: {fmt1(cur['grade_avg'])}{arrow(cur['grade_avg'], prev['grade_avg'])} "
              f"({cur['grade_n']} {plural(cur['grade_n'], 'оцінка', 'оцінки', 'оцінок')})")
        ups, downs = [], []
        for subj, lst in cur["grades"].items():
            p = prev["grades"].get(subj)
            if p:
                d = avg(v for _, v in lst) - avg(v for _, v in p)
                (ups if d >= 0.5 else downs if d <= -0.5 else []).append(subj)
        if ups:
            t += "\n📈 Пішло вгору: " + escape(", ".join(ups))
        if downs:
            t += "\n📉 Варто підтягнути: " + escape(", ".join(downs))
    else:
        t += "\nОцінок за цей період немає."
    if cur["hw_total"]:
        t += (f"\nДомашка: зроблено {round(cur['hw_pct'] * 100)}%{arrow(cur['hw_pct'], prev['hw_pct'], True)} "
              f"(✅ {cur['hw']['done']} · 🟡 {cur['hw']['part']} · ❌ {cur['hw']['miss']})")
    return t


def overview_text(cur, prev, label, kind):
    prev_name = "минулим тижнем" if kind == "week" else "минулим місяцем"
    t = [f"📊 <b>Підсумок: {label}</b>", f"<i>Стрілки: зміна порівняно з {prev_name}</i>\n"]
    if cur["mood_avg"] is not None:
        t.append(f"😊 Настрій: {MOODS[round(cur['mood_avg'])][0]} {fmt1(cur['mood_avg'])} з 5"
                 f"{arrow(cur['mood_avg'], prev['mood_avg'])}")
    if cur["habit_all"] is not None:
        t.append(f"✅ Звички: {round(cur['habit_all'] * 100)}%{arrow(cur['habit_all'], prev['habit_all'], True)}")
    if cur["grade_n"]:
        t.append(f"⭐ Середня оцінка: {fmt1(cur['grade_avg'])}{arrow(cur['grade_avg'], prev['grade_avg'])}")
    if cur["hw_total"]:
        t.append(f"📚 Домашка: {round(cur['hw_pct'] * 100)}%{arrow(cur['hw_pct'], prev['hw_pct'], True)}")
    if cur["lesson_rating"]:
        fav = max(cur["lesson_rating"].items(), key=lambda kv: kv[1])
        low = min(cur["lesson_rating"].items(), key=lambda kv: kv[1])
        t.append(f"🕐 Найбільше сподобалось: {escape(fav[0])} {MOODS[round(fav[1])][0]}")
        if low[0] != fav[0] and low[1] < 3.5:
            t.append(f"   Найменше: {escape(low[0])} {MOODS[round(low[1])][0]}")
    if len(t) == 2:
        t.append("За цей період ще немає записів.")
    t.append("\nГрафіки надіслано в гілки «Настрій», «Звички» та «Оцінки і домашка».")
    return "\n".join(t)
