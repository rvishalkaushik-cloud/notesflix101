#!/usr/bin/env python3
"""One command: build → test → lock → thumbnails → home page → roadmap → git commit+push.
   NF_PASS=<class password> python3 publish.py <part_id> <content.js> [--no-push]
   Run from anywhere. Repo root = two folders above this file."""
import json, os, re, subprocess, sys, datetime, collections
T = os.path.dirname(os.path.abspath(__file__)); F = os.path.dirname(T); REPO = os.path.dirname(F)
pid, content = sys.argv[1], os.path.abspath(sys.argv[2]); push = '--no-push' not in sys.argv
rm = json.load(open(os.path.join(F, 'roadmap.json'))); part = next(p for p in rm['parts'] if p['id'] == pid)
work = os.path.join(os.environ.get('TMPDIR', '/tmp'), 'nf_' + pid); os.makedirs(work, exist_ok=True)
plain = os.path.join(work, pid + '.html')
run = lambda *a, **k: subprocess.run(list(a), check=True, **k)
# 1 build (palette from roadmap → every part looks different)
run('python3', os.path.join(T, 'build.py'), content, plain, str(part['palette']))
# 2 test
r = subprocess.run(['node', os.path.join(T, 'test.js'), plain, os.path.join(work, 'shots')])
if r.returncode: sys.exit('TEST FAILED: fix the content and run again. Screenshots in ' + work + '/shots')
# 3 lock
if not os.environ.get('NF_PASS'): sys.exit('NF_PASS not set: cannot lock the note')
run('node', os.path.join(T, 'lock.js'), plain, os.path.join(REPO, 'notes', pid + '.html'))
# 4 thumbnails
c = part['chapter']; kick = ('CLASS %s · ECONOMICS' % part['cls'])
spec = [dict(kind='episode', out=os.path.join(REPO, 'img', 'ep', pid + '.jpg'), palette=part['palette'], kicker='CLASS %s · ECONOMICS · UNIT %s' % (part['cls'], c['num']), chip='PART %d' % part['part'], isNew=True, title=part['title'], emojis=part['emojis'])]
if not os.path.exists(os.path.join(REPO, c['thumb'])) or os.environ.get('NF_RETHUMB'):
    spec.append(dict(kind='chapter', out=os.path.join(REPO, c['thumb']), palette=part['palette'], kicker=kick + ' · UNIT ' + c['num'], title=c.get('short', c['title']), sub=c['tagline'], emojis=part['emojis']))
if not os.path.exists(os.path.join(REPO, rm['subjImg'])):
    spec.append(dict(kind='subject', out=os.path.join(REPO, rm['subjImg']), palette=1, kicker='CLASS XI · XII', title='Economics', sub=rm['subjBlurb'], emojis=['📊', '🏦', '🌍']))
sp = os.path.join(work, 'thumbs.json'); json.dump(spec, open(sp, 'w')); run('node', os.path.join(T, 'thumbs.js'), sp)
# 5 search keys from the note's own text
txt = re.sub(r'<[^>]+>|\$\$\w+', ' ', open(plain).read().split('window.NOTE=', 1)[1].split('</script>', 1)[0]).lower()
stop = set('the a an and or of to in is are for on by with as it its be this that from at was were which into than then not only also each every can will your you their they them our we he she his her has have had more most such one two three part step tap what why how when who whom'.split())
words = [w for w in re.findall(r'[a-z][a-z\-]{3,}', txt) if w not in stop and not w.startswith(('http', 'stroke', 'fill', 'font', 'svg', 'text', 'rect', 'circle', 'anchor', 'width', 'height', 'viewbox', 'path', 'middle', 'weight'))]
keys = ' '.join(w for w, _ in collections.Counter(words).most_common(60))
ep = dict(id=pid, title=part['title'] + (' (Part %d)' % part['part'] if part['parts'] > 1 else ''), mins=25, tier='free', art=c.get('art', 'chart'),
          desc=part.get('desc') or ('Story, animations, 3D board, simulations and board-exam practice on ' + ', '.join(part['topics'][:3]) + '.'), url='notes/%s.html' % pid, keys=keys)
run('python3', os.path.join(T, 'site.py'), REPO, json.dumps(dict(subject=rm['subject'], subjImg=rm['subjImg'], subjArt=rm['subjArt'], subjBlurb=rm['subjBlurb'], chapter=dict(c, cls=part['cls']), episode=ep)))
# 6 roadmap
part['status'] = 'done'; part['published'] = datetime.date.today().isoformat()
json.dump(rm, open(os.path.join(F, 'roadmap.json'), 'w'), indent=1, ensure_ascii=False)
# 7 git
run('git', '-C', REPO, 'add', 'notes/%s.html' % pid, 'img', 'index.html', 'sw.js', '_factory/roadmap.json')
run('git', '-C', REPO, 'commit', '-m', 'Economics: add %s (%s)' % (part['title'], pid))
if push:
    subprocess.run(['git', '-C', REPO, 'pull', '--rebase', 'origin', 'main'])
    run('git', '-C', REPO, 'push', 'origin', 'HEAD:main')
print('PUBLISHED', pid)
