"""Розбір сценарію рілсу (YAML) у список сцен."""
from dataclasses import dataclass, field

import yaml


@dataclass
class Scene:
    text: str
    tags: list[str] = field(default_factory=list)
    duration: float = 3.0


@dataclass
class Scenario:
    title: str
    scenes: list[Scene]


def parse_scenario(path: str) -> Scenario:
    with open(path, encoding="utf-8") as f:
        data = yaml.safe_load(f)

    if not data or "scenes" not in data:
        raise ValueError(f"Сценарій {path} не містить поля 'scenes'")

    scenes = []
    for i, raw in enumerate(data["scenes"]):
        text = raw.get("text", "")
        if not text:
            raise ValueError(f"Сцена #{i + 1} без тексту")
        scenes.append(
            Scene(
                text=text,
                tags=[str(t).strip().lower() for t in raw.get("tags", [])],
                duration=float(raw.get("duration", 3.0)),
            )
        )

    return Scenario(title=data.get("title", "Без назви"), scenes=scenes)
