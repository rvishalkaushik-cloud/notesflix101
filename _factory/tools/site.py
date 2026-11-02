#!/usr/bin/env python3
"""Put a finished note on the Notesflix 101 home page.
python3 site.py <repo> '<json>'   json = {
  "subject":"Economics", "subjImg":"img/subj-eco.jpg", "subjArt":"chart", "subjBlurb":"...",
  "chapter":{"id":"eco12-ni","cls":"XII","unit":"Unit","num":"1","title":"National Income and Related Aggregates",
             "tagline":"...","art":"chart","thumb":"img/eco12-ni.jpg"},
  "episode":{"id":"eco12-ni-1","title":"...","mins":25,"tier":"free","art":"chart","desc":"...","url":"notes/eco12-ni-1.html","keys":"..."}}
Idempotent: re-running replaces the same episode id. Bumps the sw.js cache."""
import json, re, sys
repo, d = sys.argv[1], json.loads(sys.argv[2])
ip = repo + '/index.html'; s = open(ip).read()
sub = d['subject']; js = lambda v: json.dumps(v, ensure_ascii=False)
# 1. subject tab + SUBJECTS card
if f'data-subj="{sub}"' not in s and '<button class="classtab subjtab"' in s:
    anchor = s.find('<button class="classtab subjtab"', s.find('class="tabrow" role="tablist"'))
    end = s.find('</div>', anchor)
    s = s[:end] + f'  <button class="classtab subjtab" type="button" data-subj="{sub}" aria-selected="false">{sub}</button>\n    ' + s[end:]
if f'{{ name:"{sub}"' not in s and f'name:"{sub}"' not in s:
    i = s.find('var SUBJECTS = ['); j = s.find('];', i)
    body = s[i:j].rstrip()
    s = s[:i] + body + f',\n    {{ name:{js(sub)}, img:{js(d.get("subjImg",""))}, art:{js(d.get("subjArt","chart"))}, blurb:{js(d.get("subjBlurb",""))} }}\n  ' + s[j:]
# 2. chapter
c = d['chapter']; ep = d['episode']
i0 = s.find('const CHAPTERS = ['); iend = s.find('\n];', i0)
block_start = s.find('{ id:"%s"' % c['id'], i0)
eline = '      { id:%s, title:%s, mins:%d, tier:%s, art:%s, desc:%s, url:%s, keys:%s },' % (
    js(ep['id']), js(ep['title']), ep.get('mins', 25), js(ep.get('tier', 'free')), js(ep.get('art', 'chart')), js(ep['desc']), js(ep['url']), js(ep.get('keys', '')))
if block_start < 0 or block_start > iend:
    marker = '\n  // ===================== %s =====================\n' % sub.upper()
    head = '  { id:%s, cls:%s, subject:%s,%s num:%s, title:%s,\n    tagline:%s,\n    art:%s, thumb:%s, episodes:[\n%s\n    ]},\n' % (
        js(c['id']), js(c['cls']), js(sub), (' unit:%s,' % js(c['unit'])) if c.get('unit') else '', js(c['num']), js(c['title']), js(c['tagline']), js(c.get('art', 'chart')), js(c.get('thumb', '')), eline)
    ins = (marker if marker.strip() not in s else '') + head
    # keep a subject's chapters together: insert after the last chapter of this subject+class, else before the closing ];
    last = [m.end() for m in re.finditer(r'\n  \{ id:"[^"]+", cls:"%s", subject:"%s".*?\]\},\n' % (c['cls'], re.escape(sub)), s[i0:iend], re.S)]
    pos = i0 + last[-1] if last else iend + 1
    s = s[:pos] + ins + s[pos:]
else:
    bend = s.find(']},', block_start)
    blk = s[block_start:bend]
    m = re.search(r'\n\s*\{ id:%s,.*?\},?(?=\n)' % re.escape(js(ep['id'])), blk)
    if m: blk = blk[:m.start()] + '\n' + eline + blk[m.end():]
    else:
        blk = re.sub(r'episodes:\[\s*\]', 'episodes:[\n' + eline + '\n    ', blk) if re.search(r'episodes:\[\s*\]', blk) else blk.rstrip() + '\n' + eline + '\n    '
    s = s[:block_start] + blk + s[bend:]
open(ip, 'w').write(s)
# 3. copy that mentions subjects
# 4. service worker cache bump
sp = repo + '/sw.js'; w = open(sp).read()
w = re.sub(r'notesflix-v(\d+)', lambda m: 'notesflix-v%d' % (int(m.group(1)) + 1), w, count=1)
open(sp, 'w').write(w)
print('site updated:', sub, c['id'], ep['id'], re.search(r'notesflix-v\d+', w).group(0))
