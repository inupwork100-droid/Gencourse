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
# the second built-in textbook: Oxford International Primary Geography 6 (sits next to this folder)
geo = here.parent / "oxford-geography-6"
images.update({f.stem: uri(f) for f in sorted((geo / "images").glob("*.jpg"))})
# the third built-in book: Science (lessons made from PDF slide decks)
sci = here.parent / "science"
images.update({f.stem: uri(f) for f in sorted((sci / "images").glob("*.jpg"))})
# the fourth built-in book: English (grammar, word building, writing, speeches)
eng = here.parent / "english"
images.update({f.stem: uri(f) for f in sorted((eng / "images").glob("*.jpg"))})
app = app.replace("{{IMAGES_JSON}}", json.dumps(images))
# photos of the textbook spreads the book was made from (shown in the folder's edit sheet)
app = app.replace("{{PAGES_JSON}}", json.dumps([uri(f) for f in sorted((here / "images" / "pages").glob("*.jpg"))]))
# усі уроки по черзі: lesson-1-1.js, lesson-1-2.js, …
lessons = sorted(here.glob("lesson-*.js"), key=lambda f: [int(x) for x in f.stem.split("-")[1:]])
geo_js = sorted(geo.glob("lesson-*.js"), key=lambda f: [int(x) for x in f.stem.split("-")[1:]]) + sorted(geo.glob("dict-*.js")) + [geo / "quiz.js", geo / "contents.js"]
sci_js = sorted(sci.glob("lesson-*.js"), key=lambda f: [int(x) for x in f.stem.split("-")[1:]]) + sorted(sci.glob("dict-*.js")) + [sci / "contents.js"]
eng_js = sorted(eng.glob("lesson-*.js"), key=lambda f: [int(x) for x in f.stem.split("-")[1:]]) + sorted(eng.glob("dict-*.js")) + [eng / "contents.js"]
app = app.replace("{{ENG_JS}}", "\n".join(f.read_text(encoding="utf-8") for f in eng_js if f.exists()))
app = app.replace("{{SCI_JS}}", "\n".join(f.read_text(encoding="utf-8") for f in sci_js if f.exists()))
app = app.replace("{{GEO_JS}}", "\n".join(f.read_text(encoding="utf-8") for f in geo_js if f.exists()))
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
