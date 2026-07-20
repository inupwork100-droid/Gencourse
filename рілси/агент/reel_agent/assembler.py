"""Монтаж рілсу через ffmpeg: нормалізація сцен у вертикальний формат
9:16 з випаленими субтитрами, склеювання сцен, накладання озвучки."""
import subprocess
import textwrap
import uuid
from pathlib import Path

WIDTH = 1080
HEIGHT = 1920
FPS = 30
DEFAULT_FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"


def _run(cmd: list[str]) -> None:
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise RuntimeError(
            "ffmpeg помилка:\n"
            + " ".join(cmd)
            + "\n"
            + result.stderr[-3000:]
        )


def _escape_filter_path(path: str) -> str:
    return str(path).replace("\\", "\\\\").replace(":", "\\:")


def _wrap_text(text: str, width: int = 24) -> str:
    return "\n".join(textwrap.wrap(text, width=width)) or text


def render_scene(
    asset_path: str,
    asset_type: str,
    duration: float,
    text: str,
    out_path: str,
    work_dir: str,
    font_path: str = DEFAULT_FONT,
) -> Path:
    """Створює один нормалізований кліп-сцену: 9:16, задана тривалість,
    випалені субтитри знизу."""
    caption_file = Path(work_dir) / f"caption_{uuid.uuid4().hex}.txt"
    caption_file.write_text(_wrap_text(text), encoding="utf-8")

    draw_text = (
        f"drawtext=fontfile={_escape_filter_path(font_path)}:"
        f"textfile={_escape_filter_path(str(caption_file))}:"
        "fontcolor=white:fontsize=54:borderw=3:bordercolor=black@0.8:"
        "line_spacing=8:x=(w-text_w)/2:y=h-text_h-140"
    )

    if asset_type == "video":
        vf = (
            f"scale={WIDTH}:{HEIGHT}:force_original_aspect_ratio=increase,"
            f"crop={WIDTH}:{HEIGHT},fps={FPS},{draw_text}"
        )
        cmd = [
            "ffmpeg", "-y",
            "-stream_loop", "-1", "-i", str(asset_path),
            "-t", str(duration),
            "-vf", vf,
            "-an",
            "-c:v", "libx264", "-pix_fmt", "yuv420p",
            str(out_path),
        ]
    else:  # image -> відео з легким наближенням (Ken Burns)
        frames = max(1, int(duration * FPS))
        vf = (
            f"scale={WIDTH * 2}:{HEIGHT * 2},"
            f"zoompan=z='min(zoom+0.0015,1.3)':d={frames}:s={WIDTH}x{HEIGHT}:fps={FPS},"
            f"{draw_text}"
        )
        cmd = [
            "ffmpeg", "-y",
            "-loop", "1", "-i", str(asset_path),
            "-t", str(duration),
            "-vf", vf,
            "-an",
            "-c:v", "libx264", "-pix_fmt", "yuv420p",
            str(out_path),
        ]

    _run(cmd)
    return Path(out_path)


def concat_clips(clip_paths: list[str], out_path: str, work_dir: str) -> Path:
    list_file = Path(work_dir) / "concat_video_list.txt"
    with open(list_file, "w", encoding="utf-8") as f:
        for p in clip_paths:
            f.write(f"file '{Path(p).resolve()}'\n")

    cmd = [
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0", "-i", str(list_file),
        "-c", "copy",
        str(out_path),
    ]
    _run(cmd)
    return Path(out_path)


def concat_audio(audio_paths: list[str], out_path: str, work_dir: str) -> Path:
    list_file = Path(work_dir) / "concat_audio_list.txt"
    with open(list_file, "w", encoding="utf-8") as f:
        for p in audio_paths:
            f.write(f"file '{Path(p).resolve()}'\n")

    cmd = [
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0", "-i", str(list_file),
        "-c", "copy",
        str(out_path),
    ]
    _run(cmd)
    return Path(out_path)


def mux_audio(video_path: str, audio_path: str, out_path: str) -> Path:
    """Накладає озвучку на відео. Довжина фінального файлу — по коротшому
    з двох (відео чи аудіо); точна синхронізація тривалості сцен під
    довжину озвучки — можлива майбутня доробка."""
    cmd = [
        "ffmpeg", "-y",
        "-i", str(video_path),
        "-i", str(audio_path),
        "-map", "0:v", "-map", "1:a",
        "-c:v", "copy", "-c:a", "aac",
        "-shortest",
        str(out_path),
    ]
    _run(cmd)
    return Path(out_path)
