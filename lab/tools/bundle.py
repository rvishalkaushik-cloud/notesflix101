"""Build one self-contained preview file (engine + chapter inlined) for sharing a lab for review.
Usage: python3 lab/tools/bundle.py admission out.html"""
import sys, os
here = os.path.join(os.path.dirname(__file__), "..")
ch, out = sys.argv[1], sys.argv[2]
r = lambda f: open(os.path.join(here, f), encoding="utf-8").read()
html = f"""<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Accountancy Lab preview | Notesflix 101</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Poppins:wght@400;500;600;700&display=swap">
<style>{r('lab.css')}</style></head><body>
<script>{r('lab.js')}</script><script>{r('lab-fmt.js')}</script><script>{r('lab-play.js')}</script><script>{r('data/' + ch + '.js')}</script>
<script>NFLab.boot();</script></body></html>"""
open(out, "w", encoding="utf-8").write(html.replace("</script><script>", "</script>\n<script>"))
print(out, len(html))
