"""Family diary Telegram bot: mood, lessons, grades, homework and habits in a forum group with topics."""
import datetime as dt
import logging
import os
from html import escape
from zoneinfo import ZoneInfo

from telegram import Update
from telegram.constants import ParseMode
from telegram.error import BadRequest, TelegramError
from telegram.ext import (Application, CallbackQueryHandler, CommandHandler, ContextTypes, Defaults,
                          MessageHandler, filters)

import charts
import logic as L
from db import DB

logging.basicConfig(format="%(asctime)s %(levelname)s %(name)s: %(message)s", level=logging.INFO)
logging.getLogger("httpx").setLevel(logging.WARNING)
log = logging.getLogger("diary")

TZ = ZoneInfo(os.getenv("TZ_NAME", "Europe/Kyiv"))
DB_PATH = os.getenv("DB_PATH", os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "diary.db"))
os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
db = DB(DB_PATH)

DEFAULT_TIMES = {"ранок": "07:30", "вечір": "20:00", "підсумок": "21:30"}
DEFAULT_REMIND = 10


def now():
    return dt.datetime.now(TZ)


def today():
    return now().date()


def child_name():
    return db.get("child_name", "сонечко")


def times():
    t = dict(DEFAULT_TIMES)
    t.update(db.get("times", {}))
    return t


def as_time(s):
    h, m = map(int, s.split(":"))
    return dt.time(h, m, tzinfo=TZ)


# ---------- sending ----------
async def send(bot, topic, text, kb=None, kind=None, ref=None):
    chat = db.get("chat_id")
    if not chat:
        return None
    try:
        m = await bot.send_message(chat, text, message_thread_id=db.get(f"topic_{topic}"), reply_markup=kb,
                                   disable_web_page_preview=True)
    except TelegramError as e:
        log.warning("send to %s failed: %s", topic, e)
        return None
    if kind:
        db.set_ctx(m.message_id, kind, ref)
    return m


async def send_photo(bot, topic, png, caption):
    chat = db.get("chat_id")
    if not chat:
        return
    try:
        await bot.send_photo(chat, png, caption=caption, message_thread_id=db.get(f"topic_{topic}"))
    except TelegramError as e:
        log.warning("photo to %s failed: %s", topic, e)


async def safe_edit(q, text, kb):
    try:
        await q.edit_message_text(text, reply_markup=kb, disable_web_page_preview=True)
    except BadRequest as e:
        if "not modified" not in str(e).lower():
            raise


async def is_admin(update: Update, ctx):
    chat, user = update.effective_chat, update.effective_user
    if chat.type == "private":
        return False
    try:
        member = await ctx.bot.get_chat_member(chat.id, user.id)
    except TelegramError:
        return False
    if member.status in ("administrator", "creator"):
        return True
    await update.effective_message.reply_text("Цю команду може виконати тільки адміністратор групи (мама).")
    return False


# ---------- scheduled posts ----------
def school_subjects(d):
    seen, out = set(), []
    for r in db.lessons_for(d.weekday()):
        if r["name"] not in seen:
            seen.add(r["name"])
            out.append(r["name"])
    return out


async def post_mood(bot, slot):
    date = L.d2s(today())
    value = db.moods(date).get(slot)
    await send(bot, "mood", L.mood_text(slot, child_name(), value), L.mood_kb(date, slot, value),
               "mood", {"date": date, "slot": slot})


async def post_habits(bot, d=None):
    date = L.d2s(d or today())
    habits, done = db.habits(), db.habits_done(date)
    if habits:
        await send(bot, "habits", L.habits_text(date, habits, done), L.habits_kb(date, habits, done),
                   "habits", {"date": date})


async def post_plan(bot):
    d = today()
    lessons = db.lessons_for(d.weekday())
    if not lessons:
        if not db.all_lessons():
            await send(bot, "schedule", "Розклад ще не задано. Мама може додати його командою /schedule.")
        return
    lines = [f"🗓 <b>План на {L.WD_ACC[d.weekday()]}</b>"]
    lines += [f"{r['start']}–{r['end']}  {escape(r['name'])}" for r in lessons]
    lines.append(f"\nНагадаю за {db.get('remind', DEFAULT_REMIND)} хв до кожного заняття. Гарного дня!")
    await send(bot, "schedule", "\n".join(lines))


async def post_homework(bot):
    d = today()
    for k in range(1, 4):  # next day with lessons, at most 3 days ahead
        nd = d + dt.timedelta(days=k)
        subjects = school_subjects(nd)
        if subjects:
            break
    else:
        return
    if k > 1 and d.weekday() not in (5, 6):  # e.g. Friday: ask on Sunday instead
        return
    date = L.d2s(nd)
    st = db.hw(date)
    await send(bot, "grades", L.hw_text(date, st, subjects), L.hw_kb(date, subjects, st),
               "hw", {"date": date, "subjects": subjects})


async def job_morning(ctx: ContextTypes.DEFAULT_TYPE):
    await post_mood(ctx.bot, "morning")
    await post_plan(ctx.bot)
    await post_habits(ctx.bot)


async def job_evening(ctx: ContextTypes.DEFAULT_TYPE):
    await post_mood(ctx.bot, "evening")
    await post_homework(ctx.bot)
    date = L.d2s(today())
    habits, done = db.habits(), db.habits_done(date)
    left = [h for h in habits if h["id"] not in done]
    if habits and left:
        await send(ctx.bot, "habits", L.habits_text(date, habits, done) + "\n\nЩе не відмічено: "
                   + escape(", ".join(h["name"] for h in left)), L.habits_kb(date, habits, done),
                   "habits", {"date": date})


async def job_summary(ctx: ContextTypes.DEFAULT_TYPE):
    await send(ctx.bot, "day", L.day_summary(db, today()))


async def job_reports(ctx: ContextTypes.DEFAULT_TYPE):
    d = today()
    if d.weekday() == 6:
        await send_report(ctx.bot, "week", d)
    if (d + dt.timedelta(days=1)).day == 1:
        await send_report(ctx.bot, "month", d)


async def job_remind(ctx: ContextTypes.DEFAULT_TYPE):
    r = ctx.job.data
    mins = max(0, round((dt.datetime.combine(today(), as_time(r["start"])) - now()).total_seconds() / 60))
    await send(ctx.bot, "schedule", f"⏰ {L.until_text(mins).capitalize()}: <b>{escape(r['name'])}</b> "
                                    f"({r['start']}–{r['end']})")


async def job_feedback(ctx: ContextTypes.DEFAULT_TYPE):
    r = ctx.job.data
    lid = db.lesson_log_id(r["date"], r["start"], r["end"], r["name"])
    row = db.lesson(lid)
    await send(ctx.bot, "schedule", L.lesson_text(row), L.lesson_kb(row), "lesson", {"id": lid})


async def job_plan_lessons(ctx: ContextTypes.DEFAULT_TYPE):
    plan_lessons(ctx.application)


def plan_lessons(app):
    jq = app.job_queue
    for j in jq.jobs():
        if j.name and j.name.startswith("lesson-"):
            j.schedule_removal()
    d, n = today(), now()
    remind = int(db.get("remind", DEFAULT_REMIND))
    for r in db.lessons_for(d.weekday()):
        data = {"date": L.d2s(d), "start": r["start"], "end": r["end"], "name": r["name"]}
        start = dt.datetime.combine(d, as_time(r["start"]))
        end = dt.datetime.combine(d, as_time(r["end"]))
        if remind and start - dt.timedelta(minutes=remind) > n:
            jq.run_once(job_remind, start - dt.timedelta(minutes=remind), data=data, name=f"lesson-r-{r['id']}")
        if end > n:
            jq.run_once(job_feedback, end, data=data, name=f"lesson-f-{r['id']}")


def schedule_jobs(app):
    jq = app.job_queue
    for j in jq.jobs():
        j.schedule_removal()
    t = times()
    summary = as_time(t["підсумок"])
    report_at = (dt.datetime.combine(dt.date(2000, 1, 1), summary) + dt.timedelta(minutes=5)).timetz()
    jq.run_daily(job_morning, as_time(t["ранок"]), name="morning")
    jq.run_daily(job_evening, as_time(t["вечір"]), name="evening")
    jq.run_daily(job_summary, summary, name="summary")
    jq.run_daily(job_reports, report_at, name="reports")
    jq.run_daily(job_plan_lessons, dt.time(0, 5, tzinfo=TZ), name="plan")
    plan_lessons(app)
    log.info("jobs scheduled: %s", t)


# ---------- reports ----------
async def send_report(bot, kind, d):
    start, end, pstart, pend, label = L.period_bounds(kind, d)
    cur, prev = L.stats(db, start, end), L.stats(db, pstart, pend)
    await send(bot, "day", L.overview_text(cur, prev, label, kind))
    if cur["mood_avg"] is not None:
        await send_photo(bot, "mood", charts.mood_chart(cur, label), L.mood_caption(cur, prev, label))
    else:
        await send(bot, "mood", L.mood_caption(cur, prev, label))
    if cur["n_days"] and cur["habits"]:
        await send_photo(bot, "habits", charts.habits_chart(cur, prev, label), L.habits_caption(cur, prev, label))
    else:
        await send(bot, "habits", L.habits_caption(cur, prev, label))
    if cur["grade_n"]:
        await send_photo(bot, "grades", charts.grades_chart(cur, prev, label), L.grades_caption(cur, prev, label))
    else:
        await send(bot, "grades", L.grades_caption(cur, prev, label))


# ---------- commands ----------
HELP = (
    "<b>Як користуватися</b>\n"
    "Бот сам пише в гілки: зранку питає про настрій, присилає план занять і звички, "
    "нагадує перед кожним заняттям, а після нього питає, як пройшло. Увечері питає про домашку "
    "й надсилає підсумок дня. У неділю й наприкінці місяця надсилає графіки.\n\n"
    "<b>Для всіх</b>\n"
    "/today — підсумок сьогодні\n/yesterday — підсумок учора\n/next — наступне заняття\n"
    "/week — графіки за тиждень\n/month — графіки за місяць\n/mood — відмітити настрій зараз\n"
    "/habits_today — список звичок на сьогодні\n"
    "Оцінка вручну: напиши в гілку «Оцінки» щось на кшталт «Математика 10».\n\n"
    "<b>Для мами (адміністратора)</b>\n"
    "/setup — створити гілки (один раз)\n"
    "/schedule — задати розклад\n/habits — задати список звичок\n"
    "/name Софійко — як бот звертається до доньки\n"
    "/time ранок 07:30 · /time вечір 20:00 · /time підсумок 21:30\n"
    "/remind 10 — за скільки хвилин нагадувати про заняття (0 — вимкнути)"
)

SCHEDULE_HELP = (
    "Надішли розклад одним повідомленням, починаючи з /schedule. День тижня окремим рядком, "
    "під ним заняття з часом. Можна додавати й гуртки чи секції.\n\n"
    "<code>/schedule\nПн\n08:30-09:15 Математика\n09:25-10:10 Українська мова\n16:00-17:00 Танці\n"
    "Вт\n08:30-09:15 Англійська мова</code>\n\n"
    "Якщо вказати тільки початок (<code>08:30 Математика</code>), заняття вважається 45-хвилинним."
)


async def cmd_start(update: Update, ctx):
    await update.effective_message.reply_text(
        "Привіт! Я сімейний щоденник: настрій, заняття, оцінки, домашка й звички.\n\n"
        "1. Створи групу, увімкни в її налаштуваннях «Теми» (Topics).\n"
        "2. Додай мене в групу й зроби адміністратором із правом керувати темами.\n"
        "3. Напиши в групі /setup.\n\n" + HELP)


async def cmd_help(update: Update, ctx):
    await update.effective_message.reply_text(HELP)


async def cmd_setup(update: Update, ctx):
    chat = update.effective_chat
    if chat.type != "supergroup" or not chat.is_forum:
        await update.effective_message.reply_text(
            "Спершу увімкни в налаштуваннях групи «Теми» (Topics), а потім знову напиши /setup.")
        return
    if not await is_admin(update, ctx):
        return
    if db.get("chat_id") not in (None, chat.id):
        log.info("moving bot from chat %s to %s", db.get("chat_id"), chat.id)
        for key, *_ in L.TOPICS:
            db.set(f"topic_{key}", None)
    db.set("chat_id", chat.id)
    created = []
    for key, title, color in L.TOPICS:
        if db.get(f"topic_{key}"):
            continue
        try:
            t = await ctx.bot.create_forum_topic(chat.id, title, icon_color=color)
        except TelegramError as e:
            await update.effective_message.reply_text(
                f"Не вдалося створити гілку «{title}»: {escape(str(e))}\n"
                "Перевір, що я адміністратор із правом «Керування темами».")
            return
        db.set(f"topic_{key}", t.message_thread_id)
        created.append(title)
        await send(ctx.bot, key, L.TOPIC_INTRO[key])
    schedule_jobs(ctx.application)
    msg = "Готово! " + (f"Створено гілки: {', '.join(created)}." if created else "Гілки вже були створені.")
    if not db.all_lessons():
        msg += "\n\nДалі задай розклад. " + SCHEDULE_HELP
    await update.effective_message.reply_text(msg)


async def cmd_schedule(update: Update, ctx):
    text = update.effective_message.text.split(None, 1)
    if len(text) < 2:
        await update.effective_message.reply_text(
            "<b>Поточний розклад</b>\n" + L.format_schedule(db.all_lessons()) + "\n\n" + SCHEDULE_HELP)
        return
    if not await is_admin(update, ctx):
        return
    items, errors = L.parse_schedule(text[1])
    if not items:
        await update.effective_message.reply_text("Не зміг прочитати розклад.\n\n" + SCHEDULE_HELP)
        return
    db.set_schedule(items)
    plan_lessons(ctx.application)
    reply = "Розклад збережено ✅\n\n" + L.format_schedule(db.all_lessons())
    if errors:
        reply += "\n\nЦі рядки я не зрозумів і пропустив:\n" + escape("\n".join(errors))
    await update.effective_message.reply_text(reply)


async def cmd_habits(update: Update, ctx):
    text = update.effective_message.text.split(None, 1)
    if len(text) < 2:
        cur = "\n".join(escape(h["name"]) for h in db.habits()) or "—"
        await update.effective_message.reply_text(
            f"<b>Звички зараз</b>\n{cur}\n\nЩоб змінити, надішли новий список, кожна звичка з нового рядка:\n"
            "<code>/habits\n🤸 Зарядка зранку\n📚 Читання 20 хвилин</code>")
        return
    if not await is_admin(update, ctx):
        return
    names = [line.strip() for line in text[1].splitlines() if line.strip()]
    db.set_habits(names[:20])
    await update.effective_message.reply_text("Список звичок оновлено ✅\n" + escape("\n".join(names[:20])))


async def cmd_name(update: Update, ctx):
    parts = update.effective_message.text.split(None, 1)
    if len(parts) < 2:
        await update.effective_message.reply_text(f"Зараз я звертаюся так: «{escape(child_name())}». "
                                                  "Змінити: /name Софійко")
        return
    if not await is_admin(update, ctx):
        return
    db.set("child_name", parts[1].strip()[:40])
    await update.effective_message.reply_text(f"Добре, звертатимусь «{escape(parts[1].strip()[:40])}» 🙂")


async def cmd_time(update: Update, ctx):
    parts = update.effective_message.text.split()
    t = times()
    if len(parts) != 3 or parts[1].lower() not in DEFAULT_TIMES:
        await update.effective_message.reply_text(
            f"Зараз: ранок {t['ранок']}, вечір {t['вечір']}, підсумок {t['підсумок']}.\n"
            "Змінити: <code>/time ранок 07:15</code>")
        return
    if not await is_admin(update, ctx):
        return
    try:
        as_time(parts[2])
        value = L.mins_to_str(L.tmin(parts[2]))
    except ValueError:
        await update.effective_message.reply_text("Час пиши так: 07:30")
        return
    custom = db.get("times", {})
    custom[parts[1].lower()] = value
    db.set("times", custom)
    schedule_jobs(ctx.application)
    await update.effective_message.reply_text(f"Збережено: {parts[1].lower()} о {value} ✅")


async def cmd_remind(update: Update, ctx):
    parts = update.effective_message.text.split()
    if len(parts) != 2 or not parts[1].isdigit():
        await update.effective_message.reply_text(
            f"Зараз нагадую за {db.get('remind', DEFAULT_REMIND)} хв. Змінити: /remind 15 (0 — вимкнути)")
        return
    if not await is_admin(update, ctx):
        return
    db.set("remind", min(120, int(parts[1])))
    plan_lessons(ctx.application)
    await update.effective_message.reply_text("Збережено ✅")


async def cmd_today(update: Update, ctx):
    await update.effective_message.reply_text(L.day_summary(db, today()))


async def cmd_yesterday(update: Update, ctx):
    await update.effective_message.reply_text(L.day_summary(db, today() - dt.timedelta(days=1)))


async def cmd_next(update: Update, ctx):
    n = now()
    cur_min = n.hour * 60 + n.minute
    for k in range(0, 8):
        d = n.date() + dt.timedelta(days=k)
        for r in db.lessons_for(d.weekday()):
            s, e = L.tmin(r["start"]), L.tmin(r["end"])
            if k == 0 and s <= cur_min < e:
                await update.effective_message.reply_text(
                    f"Зараз триває <b>{escape(r['name'])}</b> ({r['start']}–{r['end']}), "
                    f"до кінця {e - cur_min} хв.")
                return
            if k > 0 or s > cur_min:
                when = (L.until_text(s - cur_min) if k == 0
                        else f"{'завтра' if k == 1 else 'у ' + L.WD_ACC[d.weekday()]} о {r['start']}")
                await update.effective_message.reply_text(
                    f"Наступне заняття: <b>{escape(r['name'])}</b> ({r['start']}–{r['end']}), {when}.")
                return
    await update.effective_message.reply_text("Найближчих занять немає. Розклад: /schedule")


async def cmd_mood(update: Update, ctx):
    slot = "morning" if now().hour < 15 else "evening"
    date = L.d2s(today())
    value = db.moods(date).get(slot)
    m = await update.effective_message.reply_text(L.mood_text(slot, child_name(), value),
                                                  reply_markup=L.mood_kb(date, slot, value))
    db.set_ctx(m.message_id, "mood", {"date": date, "slot": slot})


async def cmd_habits_today(update: Update, ctx):
    date = L.d2s(today())
    habits, done = db.habits(), db.habits_done(date)
    m = await update.effective_message.reply_text(L.habits_text(date, habits, done),
                                                  reply_markup=L.habits_kb(date, habits, done))
    db.set_ctx(m.message_id, "habits", {"date": date})


async def cmd_report(update: Update, ctx):
    kind = "week" if update.effective_message.text.lstrip("/").startswith("week") else "month"
    if not db.get("chat_id"):
        await update.effective_message.reply_text("Спершу налаштуй групу командою /setup.")
        return
    await send_report(ctx.bot, kind, today())
    if update.effective_chat.id == db.get("chat_id"):
        try:
            await update.effective_message.set_reaction("👍")
        except TelegramError:
            pass


async def cmd_grade(update: Update, ctx):
    parts = update.effective_message.text.split(None, 1)
    known = sorted({r["name"] for r in db.all_lessons()})
    res = L.parse_grade(parts[1], known) if len(parts) > 1 else None
    if not res:
        await update.effective_message.reply_text("Напиши так: /grade Математика 10")
        return
    await save_grade(update, ctx, *res)


async def save_grade(update, ctx, subject, value):
    db.add_grade(L.d2s(today()), subject, value)
    msg = update.effective_message
    try:
        await msg.set_reaction("✍")
    except TelegramError:
        await msg.reply_text(f"Записано: {escape(subject)} — {value}")
    if msg.message_thread_id != db.get("topic_grades"):
        await send(ctx.bot, "grades", f"⭐ Нова оцінка: <b>{escape(subject)} — {value}</b>")


# ---------- buttons ----------
async def on_button(update: Update, ctx):
    q = update.callback_query
    parts = q.data.split(":")
    kind = parts[0]
    if kind == "m":
        date, slot, v = parts[1], parts[2], int(parts[3])
        db.set_mood(date, slot, v, now().isoformat(timespec="minutes"))
        await safe_edit(q, L.mood_text(slot, child_name(), v), L.mood_kb(date, slot, v))
        await q.answer(f"Записано: {L.MOODS[v][1]}")
    elif kind == "h":
        date, hid = parts[1], int(parts[2])
        new = db.toggle_habit(date, hid)
        habits, done = db.habits(), db.habits_done(date)
        await safe_edit(q, L.habits_text(date, habits, done), L.habits_kb(date, habits, done))
        await q.answer("Виконано ✅" if new else "Знято позначку")
    elif kind == "l":
        lid, field, v = int(parts[1]), parts[2], int(parts[3])
        row = db.lesson(lid)
        if not row:
            await q.answer("Цього заняття вже немає")
            return
        if field == "r":
            db.update_lesson(lid, "rating", None if row["rating"] == v else v)
        else:
            db.update_lesson(lid, "grade", None if row["grade"] == v else v)
            if v and row["grade"] != v:
                await send(ctx.bot, "grades", f"⭐ Нова оцінка: <b>{escape(row['name'])} — {v}</b>")
        row = db.lesson(lid)
        await safe_edit(q, L.lesson_text(row), L.lesson_kb(row))
        await q.answer("Записано")
    elif kind == "w":
        date, i = parts[1], int(parts[2])
        _, ref = db.ctx(q.message.message_id)
        subjects = ref["subjects"] if ref else school_subjects(L.s2d(date))
        if i >= len(subjects):
            await q.answer()
            return
        st = db.hw(date)
        new = L.next_hw(st.get(subjects[i]))
        db.set_hw(date, subjects[i], new)
        st = db.hw(date)
        await safe_edit(q, L.hw_text(date, st, subjects), L.hw_kb(date, subjects, st))
        await q.answer(f"{subjects[i]}: {L.HW[new][1]}")
    else:
        await q.answer()


# ---------- free text: comments, notes, grades ----------
async def on_text(update: Update, ctx):
    msg = update.effective_message
    if not msg or not msg.text or update.effective_chat.id != db.get("chat_id"):
        return
    author = msg.from_user.first_name if msg.from_user else ""
    at = now().isoformat(timespec="minutes")
    date = L.d2s(today())
    reply = msg.reply_to_message
    if reply and reply.from_user and reply.from_user.id == ctx.bot.id:
        kind, ref = db.ctx(reply.message_id)
        if kind == "lesson":
            db.update_lesson(ref["id"], "comment", msg.text.strip()[:500])
            row = db.lesson(ref["id"])
            try:
                await ctx.bot.edit_message_text(L.lesson_text(row), chat_id=msg.chat_id,
                                                message_id=reply.message_id, reply_markup=L.lesson_kb(row))
            except TelegramError:
                pass
            await react(msg)
            return
        if kind == "mood":
            db.add_note(ref["date"], "mood", ref["slot"], author, msg.text.strip()[:1000], at)
            await react(msg)
            return
    thread = msg.message_thread_id
    if thread == db.get("topic_grades"):
        res = L.parse_grade(msg.text, sorted({r["name"] for r in db.all_lessons()}))
        if res:
            await save_grade(update, ctx, *res)
    elif thread == db.get("topic_mood"):
        db.add_note(date, "mood", None, author, msg.text.strip()[:1000], at)
        await react(msg)
    elif thread == db.get("topic_day"):
        db.add_note(date, "day", None, author, msg.text.strip()[:1000], at)
        await react(msg)


async def react(msg):
    try:
        await msg.set_reaction("👍")
    except TelegramError:
        pass


async def on_error(update, ctx: ContextTypes.DEFAULT_TYPE):
    log.exception("handler error", exc_info=ctx.error)


async def post_init(app):
    schedule_jobs(app)
    await app.bot.set_my_commands([
        ("today", "Підсумок сьогодні"), ("yesterday", "Підсумок учора"), ("next", "Наступне заняття"),
        ("mood", "Відмітити настрій"), ("habits_today", "Звички на сьогодні"),
        ("week", "Графіки за тиждень"), ("month", "Графіки за місяць"), ("grade", "Додати оцінку"),
        ("schedule", "Розклад"), ("habits", "Список звичок"), ("help", "Допомога"),
    ])


def main():
    token = os.getenv("BOT_TOKEN")
    if not token:
        raise SystemExit("Вкажи токен бота у змінній середовища BOT_TOKEN")
    app = (Application.builder().token(token)
           .defaults(Defaults(parse_mode=ParseMode.HTML, tzinfo=TZ))
           .post_init(post_init).build())
    for name, fn in [("start", cmd_start), ("help", cmd_help), ("setup", cmd_setup), ("schedule", cmd_schedule),
                     ("habits", cmd_habits), ("name", cmd_name), ("time", cmd_time), ("remind", cmd_remind),
                     ("today", cmd_today), ("yesterday", cmd_yesterday), ("next", cmd_next), ("mood", cmd_mood),
                     ("habits_today", cmd_habits_today), ("week", cmd_report), ("month", cmd_report),
                     ("grade", cmd_grade)]:
        app.add_handler(CommandHandler(name, fn))
    app.add_handler(CallbackQueryHandler(on_button))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, on_text))
    app.add_error_handler(on_error)
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
