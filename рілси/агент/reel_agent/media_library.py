"""Локальна бібліотека медіа: читає manifest.yaml теки-теми і підбирає
найкращий асет під теги сцени."""
from dataclasses import dataclass
from pathlib import Path

import yaml

MANIFEST_NAME = "manifest.yaml"


@dataclass
class Asset:
    path: Path
    type: str  # "video" | "image"
    tags: list[str]


def load_library(theme_dir: str) -> list[Asset]:
    theme_path = Path(theme_dir)
    manifest_path = theme_path / MANIFEST_NAME
    if not manifest_path.exists():
        return []

    with open(manifest_path, encoding="utf-8") as f:
        data = yaml.safe_load(f) or {}

    assets = []
    for raw in data.get("assets", []):
        file_path = theme_path / raw["file"]
        assets.append(
            Asset(
                path=file_path,
                type=raw.get("type", "video"),
                tags=[str(t).strip().lower() for t in raw.get("tags", [])],
            )
        )
    return assets


def find_best_match(
    assets: list[Asset], tags: list[str], exclude: set[str] | None = None
) -> Asset | None:
    """Повертає асет з найбільшим перетином тегів. Пропускає файли, яких
    немає на диску, і (за бажанням) вже використані файли в цьому рілсі."""
    exclude = exclude or set()
    tag_set = set(tags)

    best: Asset | None = None
    best_score = -1
    for asset in assets:
        if str(asset.path) in exclude:
            continue
        if not asset.path.exists():
            continue
        score = len(tag_set & set(asset.tags))
        if tag_set and score == 0:
            continue
        if score > best_score:
            best = asset
            best_score = score

    return best
