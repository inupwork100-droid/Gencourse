"""Збирає застосунок в один файл: картинки вбудовуються як data URI.

python3 build.py            → index.html (відкривається в будь-якому браузері)
python3 build.py --artifact → тіло сторінки без <html>/<head> для публікації як Artifact
"""
import base64, pathlib, sys

here = pathlib.Path(__file__).parent
app = (here / "app.html").read_text(encoding="utf-8")
import json
uri = lambda f: "data:image/jpeg;base64," + base64.b64encode(f.read_bytes()).decode()
app = app.replace("{{IMG_cover}}", uri(here / "images" / "cover.jpg"))
images = {f.stem: uri(f) for f in sorted((here / "images").glob("*.jpg")) if f.stem != "cover"}
app = app.replace("{{IMAGES_JSON}}", json.dumps(images))
# усі уроки по черзі: lesson-1-1.js, lesson-1-2.js, …
lessons = sorted(here.glob("lesson-*.js"), key=lambda f: [int(x) for x in f.stem.split("-")[1:]])
app = app.replace("{{LESSON_JS}}", "\n".join(f.read_text(encoding="utf-8") for f in lessons))
app = app.replace("{{CONTENTS_JS}}", (here / "contents.js").read_text(encoding="utf-8"))
app = app.replace("{{DICT_JS}}", (here / "dictionary.js").read_text(encoding="utf-8"))

if "--artifact" in sys.argv:
    out = pathlib.Path(sys.argv[sys.argv.index("--artifact") + 1]) if len(sys.argv) > 2 else here / "artifact.html"
    out.write_text(app, encoding="utf-8")
else:
    head = ('<!doctype html>\n<html lang="uk">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
            '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
            'body{margin:0} img{max-width:100%} [hidden]{display:none!important}</style>\n</head>\n<body>\n')
    out = here / "index.html"
    out.write_text(head + app + "\n</body>\n</html>\n", encoding="utf-8")
print("built", out, out.stat().st_size, "bytes")
