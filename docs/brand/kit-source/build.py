"""Golden Eagle brand kit: renders every asset from HTML templates with headless Chrome.

python build.py            -> writes PNGs to docs/brand/kit/
"""
import pathlib
import subprocess

HERE = pathlib.Path(__file__).parent
SRC = HERE / "src"
OUT = pathlib.Path(r"C:\Users\Admin\Desktop\Projects\docs\brand\kit")
PUB = pathlib.Path(r"C:\Users\Admin\Desktop\Projects\public\images")
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
MARK = (PUB / "eagle-mark.png").as_uri()
PHOTO = (PUB / "hero-home-skyline.jpg").as_uri()
PHOTO2 = (PUB / "hero-advisory-blue-hour.jpg").as_uri()
SRC.mkdir(exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)

BASE = """<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Manrope:wght@500;600;700&display=block">
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:%(w)dpx;height:%(h)dpx;overflow:hidden;background:%(bg)s}
body{font-family:Manrope,sans-serif;-webkit-font-smoothing:antialiased;position:relative}
.serif{font-family:"Libre Caslon Display",Georgia,serif;font-weight:400}
.caps{text-transform:uppercase;letter-spacing:.32em;font-weight:600}
.duo{position:absolute;inset:0;background-size:cover;background-position:center;filter:grayscale(1) contrast(1.05) brightness(.8)}
.tint{position:absolute;inset:0;background:#0a1d37;mix-blend-mode:color}
.scrim{position:absolute;inset:0}
.center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
</style></head><body>%(body)s</body></html>"""


def lockup(color, sub_color, size, stacked=False):
    """Recommended wordmark: spaced Caslon capitals over a hairline and a tracked subline."""
    if stacked:
        return (
            f'<div style="display:flex;flex-direction:column;align-items:center;font-size:{size}px;color:{color}">'
            f'<img src="{MARK}" style="height:2.3em;width:auto;margin-bottom:.55em">'
            f'<div class="serif" style="letter-spacing:.09em;text-transform:uppercase;line-height:1">Golden Eagle</div>'
            f'<div class="caps" style="font-size:.235em;letter-spacing:.42em;margin-top:.7em;padding-top:.7em;'
            f'border-top:1px solid {sub_color};color:{sub_color}">Insurance &amp; Investments</div></div>'
        )
    return (
        f'<div style="display:flex;align-items:center;gap:.55em;font-size:{size}px;color:{color}">'
        f'<img src="{MARK}" style="height:1.45em;width:auto">'
        f'<div><div class="serif" style="letter-spacing:.09em;text-transform:uppercase;line-height:1">Golden Eagle</div>'
        f'<div class="caps" style="font-size:.235em;letter-spacing:.42em;margin-top:.62em;padding-top:.62em;'
        f'border-top:1px solid {sub_color};color:{sub_color}">Insurance &amp; Investments</div></div></div>'
    )


def lockup_mixed(color, sub_color, size):
    """Alternative: today's mixed-case wordmark, refined."""
    return (
        f'<div style="display:flex;align-items:center;gap:.5em;font-size:{size}px;color:{color}">'
        f'<img src="{MARK}" style="height:1.4em;width:auto">'
        f'<div><div class="serif" style="line-height:1">Golden Eagle</div>'
        f'<div class="caps" style="font-size:.24em;letter-spacing:.3em;margin-top:.5em;color:{sub_color}">'
        f'Insurance &amp; Investments</div></div></div>'
    )


def photo_bg(url, grad):
    return (
        f'<div class="duo" style="background-image:url({url})"></div><div class="tint"></div>'
        f'<div class="scrim" style="background:{grad}"></div>'
    )


YEARS = "".join(
    f'<div class="serif" style="font-size:64px;color:#d4b04c;border-top:2px solid #d4b04c;padding-top:16px">{y}</div>'
    for y in (2018, 2019, 2023)
)

ASSETS = {
    # ---- Logos (transparent backgrounds) ----
    "logo-horizontal-navy": (1600, 420, "transparent", f'<div class="center">{lockup("#0a1d37", "#7a5c10", 120)}</div>'),
    "logo-horizontal-white": (1600, 420, "transparent", f'<div class="center">{lockup("#ffffff", "#d4b04c", 120)}</div>'),
    "logo-stacked-navy": (1200, 1200, "transparent", f'<div class="center">{lockup("#0a1d37", "#7a5c10", 120, True)}</div>'),
    "logo-stacked-white": (1200, 1200, "transparent", f'<div class="center">{lockup("#ffffff", "#d4b04c", 120, True)}</div>'),
    "alt-logo-horizontal-mixedcase": (1600, 420, "#fbfbf9", f'<div class="center">{lockup_mixed("#0a1d37", "#7a5c10", 120)}</div>'),
    # ---- Profile pictures: mark kept inside the central circle (WhatsApp, Instagram, LinkedIn, X, Facebook crop to a circle) ----
    "profile-navy-1080": (1080, 1080, "#0a1d37", f'<div class="center"><img src="{MARK}" style="width:560px"></div>'),
    "profile-paper-1080": (1080, 1080, "#fbfbf9", f'<div class="center"><img src="{MARK}" style="width:560px"></div>'),
    # ---- Covers (text kept away from where each platform overlaps the profile picture) ----
    "cover-facebook-1640x624": (
        1640, 624, "#0a1d37",
        photo_bg(PHOTO, "linear-gradient(90deg,rgba(7,20,39,.96) 0%,rgba(8,23,45,.86) 50%,rgba(8,23,45,.45) 100%)")
        + '<div style="position:absolute;left:260px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;color:#fff">'
        '<div class="caps" style="font-size:20px;color:#d4b04c">Insurance Agency · Nairobi · Since 2006</div>'
        '<div class="serif" style="font-size:76px;line-height:1.05;margin-top:22px">The Right Cover, and<br>Help When You Claim</div>'
        '<div style="font-size:24px;margin-top:26px;color:rgba(255,255,255,.8)">goldeneagleltd.org &nbsp;·&nbsp; +254 791 389 518</div></div>',
    ),
    "cover-linkedin-1128x191": (
        1128, 191, "#0a1d37",
        photo_bg(PHOTO, "linear-gradient(90deg,rgba(8,23,45,.55) 0%,rgba(7,20,39,.95) 45%)")
        + '<div style="position:absolute;right:56px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;color:#fff;text-align:right">'
        '<div class="serif" style="font-size:34px">Insurance and Investment Advice</div>'
        '<div class="caps" style="font-size:12px;color:#d4b04c;margin-top:12px">3× AKI #1 Professional Indemnity · IRA Reg. No. 11611</div></div>',
    ),
    "cover-x-1500x500": (
        1500, 500, "#0a1d37",
        photo_bg(PHOTO, "linear-gradient(90deg,rgba(8,23,45,.5) 0%,rgba(7,20,39,.94) 55%)")
        + '<div style="position:absolute;right:90px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;color:#fff;width:720px">'
        '<div class="caps" style="font-size:17px;color:#d4b04c">Insurance Agency · Nairobi</div>'
        '<div class="serif" style="font-size:64px;line-height:1.05;margin-top:18px">The Right Cover, and Help When You Claim</div></div>',
    ),
    # ---- Link preview (WhatsApp, LinkedIn, X, Facebook) ----
    "share-link-1200x630": (
        1200, 630, "#0a1d37",
        photo_bg(PHOTO, "linear-gradient(100deg,rgba(7,20,39,.96) 0%,rgba(8,23,45,.86) 55%,rgba(8,23,45,.55) 100%)")
        + '<div style="position:absolute;inset:64px 72px;display:flex;flex-direction:column;justify-content:space-between;color:#fff">'
        + lockup("#ffffff", "#d4b04c", 44)
        + '<div><div class="serif" style="font-size:70px;line-height:1.05">The Right Cover, and<br>Help When You Claim</div>'
        '<div style="font-size:24px;margin-top:22px;color:rgba(255,255,255,.8)">Three-time AKI winner for professional indemnity</div></div>'
        '<div class="caps" style="font-size:15px;color:rgba(255,255,255,.6);letter-spacing:.22em">Licensed by the IRA · Reg. No. 11611</div></div>',
    ),
    # ---- Social posts ----
    "post-awards-1080x1350": (
        1080, 1350, "#0a1d37",
        '<div style="position:absolute;inset:96px;display:flex;flex-direction:column;justify-content:space-between;color:#fff">'
        f'<img src="{MARK}" style="width:150px">'
        '<div><div class="caps" style="font-size:22px;color:#d4b04c">Association of Kenya Insurers</div>'
        '<div class="serif" style="font-size:118px;line-height:1;margin-top:28px">First in<br>Professional<br>Indemnity</div>'
        f'<div style="display:flex;gap:28px;margin-top:44px">{YEARS}</div></div>'
        '<div style="font-size:26px;color:rgba(255,255,255,.75)">Doctors&rsquo; indemnity from KES 6,000 a year · goldeneagleltd.org</div></div>',
    ),
    "post-claims-1080x1350": (
        1080, 1350, "#fbfbf9",
        '<div style="position:absolute;inset:96px;display:flex;flex-direction:column;justify-content:space-between;color:#0a1d37">'
        '<div class="serif" style="font-size:180px;line-height:.6;color:#c9a227">&ldquo;</div>'
        '<div class="serif" style="font-size:72px;line-height:1.15">We help you prepare the claim and follow it up with the insurer until it&rsquo;s settled.</div>'
        '<div style="display:flex;justify-content:space-between;align-items:flex-end">'
        + lockup("#0a1d37", "#7a5c10", 42)
        + '<div style="font-size:24px;color:#5b6576">goldeneagleltd.org</div></div></div>',
    ),
    "story-whatsapp-1080x1920": (
        1080, 1920, "#0a1d37",
        photo_bg(PHOTO2, "linear-gradient(180deg,rgba(7,20,39,.55) 0%,rgba(7,20,39,.92) 55%)")
        + '<div style="position:absolute;inset:150px 90px 220px;display:flex;flex-direction:column;justify-content:space-between;color:#fff">'
        + lockup("#ffffff", "#d4b04c", 54)
        + '<div><div class="serif" style="font-size:120px;line-height:1.02">Need Cover?<br>Talk to Us.</div>'
        '<div style="font-size:36px;line-height:1.45;margin-top:40px;color:rgba(255,255,255,.85)">Free quotes from ten of Kenya&rsquo;s leading insurers, back within one business day.</div>'
        '<div style="display:inline-block;margin-top:56px;background:#c9a227;color:#0a1d37;font-weight:700;font-size:38px;padding:26px 44px;border-radius:10px">WhatsApp +254 791 389 518</div></div></div>',
    ),
    # ---- Email signature banner ----
    "email-signature-600x150": (
        600, 150, "#ffffff",
        '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-top:3px solid #c9a227">'
        + lockup("#0a1d37", "#7a5c10", 30)
        + '<div style="text-align:right;font-size:12px;line-height:1.6;color:#5b6576">+254 791 389 518<br>goldeneagleltd.org<br>IRA Reg. No. 11611</div></div>',
    ),
}


def render(name, w, h, bg, body):
    src = SRC / f"{name}.html"
    src.write_text(BASE % {"w": w, "h": h, "bg": bg, "body": body}, encoding="utf8")
    out = OUT / f"{name}.png"
    args = [CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
            f"--user-data-dir={HERE / 'profile'}", f"--window-size={w},{h}", "--virtual-time-budget=12000",
            "--force-device-scale-factor=1", f"--screenshot={out}", src.as_uri()]
    if bg == "transparent":
        args.insert(3, "--default-background-color=00000000")
    subprocess.run(args, capture_output=True, timeout=180)
    print(f"{name}.png", w, "x", h, out.stat().st_size // 1024, "KB")


if __name__ == "__main__":
    for name, (w, h, bg, body) in ASSETS.items():
        render(name, w, h, bg, body)
