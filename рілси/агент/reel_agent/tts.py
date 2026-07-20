"""Озвучка тексту сцени через ElevenLabs TTS.

Без ELEVENLABS_API_KEY просто повертає None — рілс збирається без
дикторського голосу (тільки субтитри)."""
import logging
from pathlib import Path

import requests

logger = logging.getLogger(__name__)

DEFAULT_VOICE_ID = "21m00Tcm4TlvDq8ikWAM"  # стандартний голос ElevenLabs


def synthesize(
    text: str,
    out_path: str,
    api_key: str | None,
    voice_id: str | None = None,
) -> Path | None:
    if not api_key:
        return None

    voice_id = voice_id or DEFAULT_VOICE_ID
    try:
        resp = requests.post(
            f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}",
            headers={
                "xi-api-key": api_key,
                "Content-Type": "application/json",
            },
            json={
                "text": text,
                "model_id": "eleven_multilingual_v2",
                "voice_settings": {"stability": 0.5, "similarity_boost": 0.75},
            },
            timeout=60,
        )
        resp.raise_for_status()
    except requests.RequestException as e:
        logger.warning("ElevenLabs TTS не вдався: %s", e)
        return None

    out = Path(out_path)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_bytes(resp.content)
    return out
