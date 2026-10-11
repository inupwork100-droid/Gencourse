"""PNG charts for weekly and monthly reports."""
import io
import re

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402

from logic import WD_SHORT, avg  # noqa: E402

INK, MUTED, LINE, BG = "#1a2140", "#646d8c", "#e0e4f0", "#ffffff"
MOOD_C = {1: "#d9455f", 2: "#ef7d2d", 3: "#e9b024", 4: "#84bf3c", 5: "#2aa876"}
GOOD, BAD, ACCENT, EMPTY = "#1f9a6a", "#d23f58", "#3550d6", "#d5dae8"
SERIES = ["#3550d6", "#e05a8a", "#2aa876", "#ef7d2d", "#8a5cd6", "#1aa3b8", "#b8892a", "#6b7a99"]

plt.rcParams.update({
    "font.family": "DejaVu Sans", "font.size": 11, "axes.edgecolor": LINE, "axes.labelcolor": MUTED,
    "xtick.color": MUTED, "ytick.color": MUTED, "axes.spines.top": False, "axes.spines.right": False,
    "figure.facecolor": BG, "axes.facecolor": BG,
})


def plain(text):
    """Drop emoji: the chart font cannot draw them."""
    return re.sub(r"[\U00010000-\U0010ffff\u2600-\u27bf\ufe0f\u200d]", "", text).strip()


def grade_color(v):
    return MOOD_C[5] if v >= 10 else MOOD_C[4] if v >= 7 else MOOD_C[2] if v >= 4 else MOOD_C[1]


def _png(fig):
    buf = io.BytesIO()
    fig.savefig(buf, format="png", dpi=150, bbox_inches="tight")
    plt.close(fig)
    buf.seek(0)
    return buf


def _xlabels(days):
    if len(days) <= 7:
        return [WD_SHORT[d.weekday()] for d in days]
    return [str(d.day) if d.day == 1 or d.day % 5 == 0 else "" for d in days]


def mood_chart(st, title):
    days = st["days"]
    monthly = len(days) > 7
    fig, axes = plt.subplots(2 if monthly else 1, 1, figsize=(8, 6.4 if monthly else 3.6),
                             gridspec_kw={"hspace": 0.55})
    ax = axes[0] if monthly else axes
    xs = range(len(days))
    for i, d in enumerate(days):
        v = st["mood_day"].get(d.isoformat())
        if v is None:
            ax.bar(i, 0.08, color=EMPTY, width=0.7)
        else:
            ax.bar(i, v, color=MOOD_C[round(v)], width=0.7)
    ax.set_xticks(list(xs), _xlabels(days))
    ax.set_ylim(0, 5.3)
    ax.set_yticks([1, 2, 3, 4, 5], ["жахливо", "погано", "так собі", "добре", "супер"])
    ax.grid(axis="y", color=LINE, linewidth=0.8)
    ax.set_axisbelow(True)
    ax.set_title(f"Настрій по днях · {title}", loc="left", color=INK, fontsize=13, fontweight="bold")
    if st["mood_avg"] is not None:
        ax.axhline(st["mood_avg"], color=ACCENT, linestyle="--", linewidth=1.3)
        ax.text(len(days) - 0.5, st["mood_avg"] + 0.12, f"середній {st['mood_avg']:.1f}".replace(".", ","),
                ha="right", color=ACCENT, fontsize=10, fontweight="bold")
    if monthly:
        ax2 = axes[1]
        wd = st["mood_wd"]
        have = [v for v in wd if v is not None]
        best, worst = (max(have), min(have)) if len(have) > 1 else (None, None)
        for i, v in enumerate(wd):
            if v is None:
                ax2.bar(i, 0.08, color=EMPTY, width=0.6)
                continue
            strong = v in (best, worst) and best != worst
            ax2.bar(i, v, color=MOOD_C[round(v)], width=0.6, alpha=1 if strong else 0.55)
            ax2.text(i, v + 0.1, f"{v:.1f}".replace(".", ","), ha="center", color=INK, fontsize=10, fontweight="bold")
        ax2.set_xticks(range(7), WD_SHORT)
        ax2.set_ylim(0, 5.6)
        ax2.set_yticks([])
        ax2.spines["left"].set_visible(False)
        ax2.set_title("Середній настрій за днями тижня", loc="left", color=INK, fontsize=12, fontweight="bold")
    return _png(fig)


def habits_chart(cur, prev, title):
    habits = cur["habits"]
    fig, ax = plt.subplots(figsize=(8, 0.6 * len(habits) + 1.2))
    names = [plain(h["name"]) for h in habits][::-1]
    vals = [cur["habit_pct"].get(h["id"]) or 0 for h in habits][::-1]
    pvals = [prev["habit_pct"].get(h["id"]) for h in habits][::-1]
    ys = range(len(names))
    ax.barh(list(ys), [1] * len(names), color="#eef1f8", height=0.55)
    ax.barh(list(ys), vals, color=[GOOD if v >= 0.7 else MOOD_C[3] if v >= 0.4 else BAD for v in vals], height=0.55)
    for y, v, p in zip(ys, vals, pvals):
        label = f"{round(v * 100)}%"
        color = INK
        if p is not None:
            d = round((v - p) * 100)
            if d:
                label += f"  {'↑' if d > 0 else '↓'}{abs(d)}"
                color = GOOD if d > 0 else BAD
            ax.plot([p, p], [y - 0.32, y + 0.32], color=INK, linewidth=2)
        ax.text(1.02, y, label, va="center", color=color, fontsize=11, fontweight="bold")
    ax.set_yticks(list(ys), names)
    ax.set_xlim(0, 1)
    ax.set_xticks([0, 0.5, 1], ["0%", "50%", "100%"])
    ax.spines["left"].set_visible(False)
    ax.tick_params(axis="y", length=0)
    ax.set_title(f"Звички · {title}", loc="left", color=INK, fontsize=13, fontweight="bold")
    ax.annotate("Риска: результат минулого періоду", xy=(0, 0), xycoords="axes fraction",
                xytext=(0, -36), textcoords="offset points", color=MUTED, fontsize=9)
    return _png(fig)


def grades_chart(cur, prev, title):
    subjects = sorted(cur["grades"], key=lambda s: -avg(v for _, v in cur["grades"][s]))
    fig, (ax, ax2) = plt.subplots(2, 1, figsize=(8, 0.55 * len(subjects) + 5.2),
                                  gridspec_kw={"height_ratios": [max(1.5, 0.55 * len(subjects)), 3.2], "hspace": 0.45})
    ys = list(range(len(subjects)))[::-1]
    for y, s in zip(ys, subjects):
        a = avg(v for _, v in cur["grades"][s])
        ax.barh(y, a, color=grade_color(a), height=0.55)
        label = f"{a:.1f}".replace(".", ",")
        color = INK
        p = prev["grades"].get(s)
        if p:
            pa = avg(v for _, v in p)
            d = round(a - pa, 1)
            ax.plot([pa, pa], [y - 0.32, y + 0.32], color=INK, linewidth=2)
            if abs(d) >= 0.1:
                label += f"  {'↑' if d > 0 else '↓'}{abs(d):.1f}".replace(".", ",")
                color = GOOD if d > 0 else BAD
        ax.text(12.3, y, label, va="center", color=color, fontsize=11, fontweight="bold")
    ax.set_yticks(ys, subjects)
    ax.set_xlim(0, 12)
    ax.set_xticks([1, 4, 7, 10, 12])
    ax.spines["left"].set_visible(False)
    ax.tick_params(axis="y", length=0)
    ax.set_title(f"Середня оцінка з предметів · {title}", loc="left", color=INK, fontsize=13, fontweight="bold")

    days = cur["days"]
    idx = {d.isoformat(): i for i, d in enumerate(days)}
    for lo, hi, c in ((1, 3.5, MOOD_C[1]), (3.5, 6.5, MOOD_C[2]), (6.5, 9.5, MOOD_C[4]), (9.5, 12.5, MOOD_C[5])):
        ax2.axhspan(lo, hi, color=c, alpha=0.07)
    for k, s in enumerate(subjects):
        pts = sorted((idx[d], v) for d, v in cur["grades"][s] if d in idx)
        if not pts:
            continue
        c = SERIES[k % len(SERIES)]
        ax2.plot([p[0] for p in pts], [p[1] for p in pts], "-o", color=c, label=s, markersize=7,
                 linewidth=1.6, markeredgecolor="white", markeredgewidth=1.2)
    ax2.set_xticks(range(len(days)), _xlabels(days))
    ax2.set_xlim(-0.5, len(days) - 0.5)
    ax2.set_ylim(0.5, 12.5)
    ax2.set_yticks([1, 4, 7, 10, 12])
    ax2.grid(axis="y", color=LINE, linewidth=0.8)
    ax2.set_title("Кожна оцінка по днях", loc="left", color=INK, fontsize=12, fontweight="bold")
    ax2.legend(loc="upper center", bbox_to_anchor=(0.5, -0.12), ncol=3, frameon=False, fontsize=9)
    return _png(fig)

