"""Збирає застосунок в один файл: картинки вбудовуються як data URI.

python3 build.py            → index.html (відкривається в будь-якому браузері)
python3 build.py --artifact → тіло сторінки без <html>/<head> для публікації як Artifact
"""
import base64, pathlib, sys

here = pathlib.Path(__file__).parent
app = (here / "app.html").read_text(encoding="utf-8")
for name in ("cover", "map", "raid"):
    data = base64.b64encode((here / "images" / f"{name}.jpg").read_bytes()).decode()
    app = app.replace("{{IMG_%s}}" % name, "data:image/jpeg;base64," + data)
app = app.replace("{{LESSON_JS}}", (here / "lesson-1-1.js").read_text(encoding="utf-8"))
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
