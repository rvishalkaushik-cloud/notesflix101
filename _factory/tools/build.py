#!/usr/bin/env python3
"""Assemble one note.  python3 build.py <content.js|json> <out.html> [palette_index]
content.js must do: module.exports = { meta:{...}, ... }   (see _factory/SCHEMA.md)"""
import json, os, re, subprocess, sys
F = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src, out = sys.argv[1], sys.argv[2]
if src.endswith('.js'):
    raw = subprocess.check_output(['node', '-e', 'process.stdout.write(JSON.stringify(require(process.argv[1])))', os.path.abspath(src)]).decode()
else:
    raw = open(src).read()
note = json.loads(raw)
pals = json.load(open(os.path.join(F, 'palettes.json')))
pi = int(sys.argv[3]) if len(sys.argv) > 3 else int(note.get('meta', {}).get('palette', 0))
p = pals[pi % len(pals)]

def hx(c): c = c.lstrip('#'); return [int(c[i:i+2], 16) for i in (0, 2, 4)]
def mix(a, b, t): A, B = hx(a), hx(b); return '#' + ''.join('%02x' % round(A[i]*(1-t)+B[i]*t) for i in range(3))
def rgba(c, a): r, g, b = hx(c); return f'rgba({r},{g},{b},{a})'
P = dict(p)
P.update(H2=mix(p['H'], p['P'], .25), BG2=mix(p['BG'], p['A'], .18), L=mix(p['BG'], p['H'], .14),
         T=mix('#ffffff', p['S'], .35), TI=mix(p['S'], '#000000', .55),
         G1=mix(p['BG'], p['A'], .45), G2=mix(p['BG'], p['S'], .32))
css = (':root{--bg:%(BG)s;--bg2:%(BG2)s;--navy:%(H)s;--navy2:%(H2)s;--ink:%(H)s;--orange:%(P)s;--amber:%(A)s;--teal:%(S)s;'
       '--mint:%(T)s;--coral:%(C)s;--line:%(L)s;--g1:%(G1)s;--g2:%(G2)s;') % P
css += '--topbg:%s;--tint1:%s;--tint1ink:%s;--tint1b:%s;--tint2:%s;--tint2ink:%s;--mut:%s;--shadow:0 10px 26px %s}' % (
    rgba(p['BG'], .92), mix('#ffffff', p['P'], .12), mix(p['P'], '#000000', .6), mix('#ffffff', p['P'], .3),
    mix('#ffffff', p['S'], .14), mix(p['S'], '#000000', .62), mix(p['H'], p['BG'], .35), rgba(p['H'], .13))
css += '\n.cv .lb.sm{font-size:.6rem;padding:2px 7px}'
# colour tokens usable anywhere in the content: $$P $$A $$S $$H $$H2 $$C $$BG $$BG2 $$L $$T $$TI
for k in sorted(P, key=len, reverse=True):
    if k != 'name':
        raw = raw.replace('$$' + k, P[k])
assert '$$' not in raw, 'unknown colour token: ' + raw[raw.find('$$'):raw.find('$$')+8]
note = json.loads(raw)
m = note['meta']
eng = lambda n: open(os.path.join(F, 'engine', n)).read()
h = eng('shell.html')
title = re.sub('<[^>]+>', ' ', m.get('title') or m.get('titleHtml', 'Notes')).strip()
safe = json.dumps(note, ensure_ascii=False).replace('</', '<\\/')
for k, v in [('__TITLE__', title + ' · Notesflix 101'), ('__PALETTE__', css),
             ('__FOOT__', m.get('foot', 'Notesflix 101 · ' + m.get('kicker', '') + ' · Pictures, animations and 3D models are drawn in code. Simulator numbers are made up for practice.')),
             ('__NOTE__', safe), ('__MOTION__', eng('motion.js')), ('__BOARD__', eng('board3d.js')), ('__RENDER__', eng('render.js'))]:
    h = h.replace(k, v, 1)
# palette goes inside the existing <style>: shell has __PALETTE__ as a line within <style>
os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
open(out, 'w').write(h)
bad = re.findall(r'vishal|c&s|cms ', h, re.I)
print(out, len(h), 'palette', p['name'], 'BRANDING!' if bad else 'clean')
