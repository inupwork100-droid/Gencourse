"""Build the installable phone app (docs/) from щоденник/index.html.

Run:  python3 щоденник/build_pwa.py
GitHub Pages serves the docs/ folder, so the app can be added to the iPhone home screen from Safari.
"""
import hashlib
import json
import pathlib

from PIL import Image, ImageDraw

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "щоденник" / "index.html"
OUT = ROOT / "docs"
NAME, SHORT = "Щоденник зростання", "Зростання"
BG, ACCENT = "#f2f4fa", "#3550d6"

HEAD = """<!doctype html>
<html lang="uk">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="{bg}">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="{short}">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icon-180.png">
<link rel="icon" type="image/png" href="icon-192.png">
<style>
:root{{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}
body{{margin:0;font-size:14px}} img{{max-width:100%}} [hidden]{{display:none!important}}
</style>
</head>
<body>
"""

TAIL = """
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
</script>
</body>
</html>
"""

SW = """const CACHE = 'zrostannia-%s';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
"""


def icon(size):
    s = size / 512
    img = Image.new("RGB", (size, size), ACCENT)
    d = ImageDraw.Draw(img)
    white, soft = "#ffffff", "#cfd8ff"
    # ground
    d.rounded_rectangle([140 * s, 372 * s, 372 * s, 396 * s], radius=12 * s, fill=soft)
    # stem
    d.rounded_rectangle([244 * s, 196 * s, 268 * s, 384 * s], radius=12 * s, fill=white)
    # leaves
    d.ellipse([120 * s, 170 * s, 262 * s, 262 * s], fill=white)
    d.ellipse([250 * s, 112 * s, 404 * s, 214 * s], fill=white)
    return img


def main():
    OUT.mkdir(exist_ok=True)
    page = HEAD.format(bg=BG, short=SHORT) + SRC.read_text(encoding="utf-8") + TAIL
    (OUT / "index.html").write_text(page, encoding="utf-8")
    for size in (180, 192, 512):
        icon(size).save(OUT / f"icon-{size}.png")
    manifest = {
        "name": NAME, "short_name": SHORT, "lang": "uk", "start_url": "./", "scope": "./",
        "display": "standalone", "background_color": BG, "theme_color": BG,
        "icons": [{"src": f"icon-{n}.png", "sizes": f"{n}x{n}", "type": "image/png", "purpose": "any"}
                  for n in (192, 512)],
    }
    (OUT / "manifest.webmanifest").write_text(json.dumps(manifest, ensure_ascii=False, indent=1), encoding="utf-8")
    version = hashlib.sha1(page.encode()).hexdigest()[:10]
    (OUT / "sw.js").write_text(SW % version, encoding="utf-8")
    (OUT / ".nojekyll").write_text("")
    print("built docs/ version", version)


if __name__ == "__main__":
    main()
