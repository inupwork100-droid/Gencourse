"""Завантаження налаштувань і API-ключів з .env файлу."""
import os
from dataclasses import dataclass

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass


@dataclass
class Config:
    pexels_api_key: str | None = None
    pixabay_api_key: str | None = None
    elevenlabs_api_key: str | None = None
    elevenlabs_voice_id: str | None = None
    heygen_api_key: str | None = None

    @classmethod
    def load(cls) -> "Config":
        return cls(
            pexels_api_key=os.getenv("PEXELS_API_KEY") or None,
            pixabay_api_key=os.getenv("PIXABAY_API_KEY") or None,
            elevenlabs_api_key=os.getenv("ELEVENLABS_API_KEY") or None,
            elevenlabs_voice_id=os.getenv("ELEVENLABS_VOICE_ID") or None,
            heygen_api_key=os.getenv("HEYGEN_API_KEY") or None,
        )
