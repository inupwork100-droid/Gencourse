#!/usr/bin/env python3
"""Агент створення рілсів: сценарій + бібліотека медіа (+ опційно стокове
резервне відео/фото та TTS-озвучка) -> готовий вертикальний mp4.

Приклад:
    python3 main.py --script examples/scenario_example.yaml \\
        --library "../швидкі рілс" --output out/result.mp4
"""
import argparse
import logging
import shutil
import sys
import tempfile
from pathlib import Path

from reel_agent import assembler, media_library, script_parser, stock_provider, tts
from reel_agent.config import Config

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger(__name__)


def build_reel(
    script_path: str,
    library_dir: str,
    output_path: str,
    use_stock: bool = True,
    use_voiceover: bool = True,
    keep_temp: bool = False,
) -> Path:
    config = Config.load()
    scenario = script_parser.parse_scenario(script_path)
    library_assets = media_library.load_library(library_dir)

    work_dir = Path(tempfile.mkdtemp(prefix="reel_agent_"))
    logger.info("Робоча тека: %s", work_dir)

    used_paths: set[str] = set()
    scene_clips: list[Path] = []

    try:
        for i, scene in enumerate(scenario.scenes, start=1):
            logger.info("Сцена %d/%d: %s", i, len(scenario.scenes), scene.text[:50])

            asset = media_library.find_best_match(
                library_assets, scene.tags, exclude=used_paths
            )
            if asset is not None:
                asset_path, asset_type = asset.path, asset.type
                used_paths.add(str(asset_path))
                logger.info("  медіа з бібліотеки: %s", asset_path.name)
            elif use_stock and (config.pexels_api_key or config.pixabay_api_key):
                result = stock_provider.fetch_stock_asset(
                    scene.tags,
                    str(work_dir),
                    config.pexels_api_key,
                    config.pixabay_api_key,
                )
                if result is None:
                    raise RuntimeError(
                        f"Сцена {i}: не знайшлося медіа ні в бібліотеці, ні в стоку "
                        f"за тегами {scene.tags}. Додайте файл у бібліотеку або "
                        "змініть теги сцени."
                    )
                asset_path, asset_type = result
                logger.info("  медіа зі стоку: %s", asset_path.name)
            else:
                raise RuntimeError(
                    f"Сцена {i}: немає відповідного медіа в бібліотеці за тегами "
                    f"{scene.tags}, а стокові API-ключі не задані. Додайте файл у "
                    f"бібліотеку ({library_dir}/manifest.yaml) або задайте "
                    "PEXELS_API_KEY / PIXABAY_API_KEY у .env."
                )

            clip_out = work_dir / f"scene_{i:02d}.mp4"
            assembler.render_scene(
                asset_path=str(asset_path),
                asset_type=asset_type,
                duration=scene.duration,
                text=scene.text,
                out_path=str(clip_out),
                work_dir=str(work_dir),
            )
            scene_clips.append(clip_out)

        logger.info("Склеюю %d сцен...", len(scene_clips))
        concat_video = assembler.concat_clips(
            [str(c) for c in scene_clips], str(work_dir / "concat_video.mp4"), str(work_dir)
        )

        final_video = concat_video
        if use_voiceover and config.elevenlabs_api_key:
            logger.info("Генерую озвучку (ElevenLabs)...")
            audio_clips = []
            voiceover_ok = True
            for i, scene in enumerate(scenario.scenes, start=1):
                audio_out = work_dir / f"voice_{i:02d}.mp3"
                result = tts.synthesize(
                    scene.text,
                    str(audio_out),
                    config.elevenlabs_api_key,
                    config.elevenlabs_voice_id,
                )
                if result is None:
                    logger.warning("Озвучка сцени %d не вдалась, пропускаю аудіо повністю", i)
                    voiceover_ok = False
                    break
                audio_clips.append(result)

            if voiceover_ok and audio_clips:
                concat_audio_path = assembler.concat_audio(
                    [str(a) for a in audio_clips],
                    str(work_dir / "concat_audio.mp3"),
                    str(work_dir),
                )
                final_video = assembler.mux_audio(
                    str(concat_video),
                    str(concat_audio_path),
                    str(work_dir / "final_with_audio.mp4"),
                )
        elif use_voiceover:
            logger.info("ELEVENLABS_API_KEY не задано — рілс без озвучки (тільки субтитри).")

        output = Path(output_path)
        output.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(final_video, output)
        logger.info("Готово: %s", output)
        return output

    finally:
        if not keep_temp:
            shutil.rmtree(work_dir, ignore_errors=True)
        else:
            logger.info("Тимчасові файли збережено: %s", work_dir)


def main() -> None:
    parser = argparse.ArgumentParser(description="Створити рілс за сценарієм")
    parser.add_argument("--script", required=True, help="Шлях до сценарію (YAML)")
    parser.add_argument(
        "--library", required=True, help="Шлях до теки теми з manifest.yaml"
    )
    parser.add_argument("--output", default="output.mp4", help="Куди зберегти результат")
    parser.add_argument("--no-stock", action="store_true", help="Не використовувати стокове резервне відео/фото")
    parser.add_argument("--no-voiceover", action="store_true", help="Не генерувати озвучку")
    parser.add_argument("--keep-temp", action="store_true", help="Не видаляти тимчасові файли (для дебагу)")
    args = parser.parse_args()

    try:
        build_reel(
            script_path=args.script,
            library_dir=args.library,
            output_path=args.output,
            use_stock=not args.no_stock,
            use_voiceover=not args.no_voiceover,
            keep_temp=args.keep_temp,
        )
    except Exception as e:
        logger.error("Помилка: %s", e)
        sys.exit(1)


if __name__ == "__main__":
    main()
