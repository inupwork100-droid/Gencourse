"""Резервне джерело відео/фото: безкоштовні стокові API (Pexels, Pixabay)
з ліцензією, що дозволяє комерційне використання.

Працює тільки якщо заданий відповідний API-ключ у .env
(PEXELS_API_KEY / PIXABAY_API_KEY). Без ключів просто повертає None —
пайплайн тоді обходиться без стокового резерву.
"""
import logging
from pathlib import Path

import requests

logger = logging.getLogger(__name__)

TIMEOUT = 20


def _search_pexels_video(query: str, api_key: str) -> str | None:
    resp = requests.get(
        "https://api.pexels.com/videos/search",
        headers={"Authorization": api_key},
        params={"query": query, "per_page": 1, "orientation": "portrait"},
        timeout=TIMEOUT,
    )
    resp.raise_for_status()
    videos = resp.json().get("videos", [])
    if not videos:
        return None
    files = sorted(
        videos[0]["video_files"], key=lambda f: f.get("height", 0), reverse=True
    )
    return files[0]["link"] if files else None


def _search_pexels_photo(query: str, api_key: str) -> str | None:
    resp = requests.get(
        "https://api.pexels.com/v1/search",
        headers={"Authorization": api_key},
        params={"query": query, "per_page": 1, "orientation": "portrait"},
        timeout=TIMEOUT,
    )
    resp.raise_for_status()
    photos = resp.json().get("photos", [])
    if not photos:
        return None
    return photos[0]["src"].get("large2x") or photos[0]["src"].get("original")


def _search_pixabay_video(query: str, api_key: str) -> str | None:
    resp = requests.get(
        "https://pixabay.com/api/videos/",
        params={"key": api_key, "q": query, "per_page": 3},
        timeout=TIMEOUT,
    )
    resp.raise_for_status()
    hits = resp.json().get("hits", [])
    if not hits:
        return None
    videos = hits[0]["videos"]
    for quality in ("large", "medium", "small"):
        if quality in videos:
            return videos[quality]["url"]
    return None


def _search_pixabay_photo(query: str, api_key: str) -> str | None:
    resp = requests.get(
        "https://pixabay.com/api/",
        params={"key": api_key, "q": query, "image_type": "photo", "per_page": 3},
        timeout=TIMEOUT,
    )
    resp.raise_for_status()
    hits = resp.json().get("hits", [])
    if not hits:
        return None
    return hits[0].get("largeImageURL")


def _download(url: str, dest: Path) -> Path:
    resp = requests.get(url, stream=True, timeout=60)
    resp.raise_for_status()
    dest.parent.mkdir(parents=True, exist_ok=True)
    with open(dest, "wb") as f:
        for chunk in resp.iter_content(chunk_size=1 << 16):
            f.write(chunk)
    return dest


def fetch_stock_asset(
    tags: list[str],
    dest_dir: str,
    pexels_api_key: str | None,
    pixabay_api_key: str | None,
) -> tuple[Path, str] | None:
    """Шукає й завантажує відео/фото за тегами. Повертає (шлях, тип) або None."""
    query = " ".join(tags) or "abstract"
    dest_dir_path = Path(dest_dir)

    searches = []
    if pexels_api_key:
        searches.append(("video", lambda: _search_pexels_video(query, pexels_api_key)))
        searches.append(("image", lambda: _search_pexels_photo(query, pexels_api_key)))
    if pixabay_api_key:
        searches.append(
            ("video", lambda: _search_pixabay_video(query, pixabay_api_key))
        )
        searches.append(
            ("image", lambda: _search_pixabay_photo(query, pixabay_api_key))
        )

    for kind, search_fn in searches:
        try:
            url = search_fn()
        except requests.RequestException as e:
            logger.warning("Стоковий пошук не вдався (%s): %s", kind, e)
            continue
        if not url:
            continue
        ext = ".mp4" if kind == "video" else ".jpg"
        safe_query = "_".join(tags) or "stock"
        dest = dest_dir_path / f"stock_{safe_query}{ext}"
        try:
            return _download(url, dest), kind
        except requests.RequestException as e:
            logger.warning("Завантаження стокового файлу не вдалось: %s", e)
            continue

    return None
