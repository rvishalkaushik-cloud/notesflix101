// Practice Marathon builder: collects the checked MCQs already inside every note and writes one
// question bank per class + subject into marathon/.
//   NF_PASSES="pass1,pass2,..." node _factory/tools/marathon.js      (run from the repo root)
// Passwords come from the environment only; never commit them.
// Output per subject:
//   marathon/<slug>.free.json  plain: questions from free notes (topped up to 20 with a fixed sample)
//   marathon/<slug>.full.json  every question, AES-GCM encrypted with that subject's note password
//   marathon/index.json        list of subjects with counts (used by marathon.html and the home page)
const fs = require('fs'), path = require('path'), vm = require('vm'), { webcrypto: c } = require('crypto');
const ROOT = process.cwd();
const PASSES = (process.env.NF_PASSES || '').split(',').map(s => s.trim()).filter(Boolean);
if (!PASSES.length) { console.error('Set NF_PASSES to the comma-separated note passwords'); process.exit(1); }
const enc = new TextEncoder(), dec = new TextDecoder(), b = s => Buffer.from(s, 'base64'), b64 = u => Buffer.from(u).toString('base64');
const RX = /const P=(\{"s":"[^"]*","i":"[^"]*","c":"[^"]*"\});/;
const ITER = 250000;
const keyFor = async (pw, salt, use) => c.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: ITER, hash: 'SHA-256' },
  await c.subtle.importKey('raw', enc.encode(pw), 'PBKDF2', false, ['deriveKey']), { name: 'AES-GCM', length: 256 }, false, use);
async function openNote(src) {
  const m = src.match(RX); if (!m) return { plain: src, pw: null };
  const P = JSON.parse(m[1]);
  for (const pw of PASSES) {
    try { const k = await keyFor(pw, b(P.s), ['decrypt']); return { plain: dec.decode(await c.subtle.decrypt({ name: 'AES-GCM', iv: b(P.i) }, k, b(P.c))), pw }; } catch (e) {}
  }
  return { plain: null, pw: '?' };
}
async function seal(text, pw) {
  const salt = c.getRandomValues(new Uint8Array(16)), iv = c.getRandomValues(new Uint8Array(12));
  const k = await keyFor(pw, salt, ['encrypt', 'decrypt']);
  const ct = new Uint8Array(await c.subtle.encrypt({ name: 'AES-GCM', iv }, k, enc.encode(text)));
  const back = dec.decode(await c.subtle.decrypt({ name: 'AES-GCM', iv }, k, ct));
  if (back !== text) throw new Error('verify failed');
  return { s: b64(salt), i: b64(iv), c: b64(ct), it: ITER };
}
const strip = s => String(s == null ? '' : s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
// questions that only make sense next to an on-screen widget
const CONTEXT = /needle|slider|simulator|\bthe (card|board|box|dial|meter|lever|machine)\b|\bon screen\b|\btap\b|\bdrag\b|above|below|केस:|सही क्रम कौन/i;
function matchBrace(s, i) {
  let d = 0, q = null;
  for (let j = i; j < s.length; j++) {
    const ch = s[j];
    if (q) { if (ch === '\\') { j++; continue; } if (ch === q) q = null; continue; }
    if (ch === '"' || ch === "'" || ch === '`') { q = ch; continue; }
    if (ch === '{') d++; else if (ch === '}') { d--; if (d === 0) return j; }
  }
  return -1;
}
// new-format notes: window.NOTE = {...}; mcq = [question, [correct, wrong...], explanation]
function fromNoteObject(html) {
  const j = html.indexOf('window.NOTE='); if (j < 0) return null;
  const i = html.indexOf('{', j), k = matchBrace(html, i); if (k < 0) return null;
  let o; try { o = JSON.parse(html.slice(i, k + 1)); } catch (e) { return null; }
  const out = [];
  (function walk(v) {
    if (Array.isArray(v) && v.length >= 2 && typeof v[0] === 'string' && Array.isArray(v[1]) && v[1].length >= 2 && v[1].length <= 4 && v[1].every(x => typeof x === 'string')) {
      out.push({ q: strip(v[0]), o: v[1].map(strip), x: typeof v[2] === 'string' ? strip(v[2]) : '' }); return;
    }
    if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  })(o);
  return out;
}
// older notes: object literals such as {q:"…", o:[…], a:1, e:"…"} in their scripts
function fromLiterals(html) {
  const js = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]).join('\n');
  const out = [], re = /\{\s*["']?(q|question)["']?\s*:/g; let m;
  while ((m = re.exec(js))) {
    const k = matchBrace(js, m.index); if (k < 0) continue;
    let o; try { o = vm.runInNewContext('(' + js.slice(m.index, k + 1) + ')', {}, { timeout: 50 }); } catch (e) { continue; }
    const q = o.q ?? o.question, opts = o.o ?? o.opts ?? o.options ?? o.choices;
    if (typeof q !== 'string' || !Array.isArray(opts) || opts.length < 2 || opts.length > 5 || !opts.every(x => typeof x === 'string')) continue;
    let a = o.a ?? o.ans ?? o.answer ?? o.correct;
    if (typeof a === 'string') a = /^[A-Ea-e]$/.test(a) ? 'ABCDE'.indexOf(a.toUpperCase()) : opts.indexOf(a);
    if (typeof a !== 'number' || a < 0 || a >= opts.length) continue;
    const ex = o.e ?? o.exp ?? o.why ?? o.explain ?? o.explanation ?? '';
    out.push({ q: strip(q), o: [strip(opts[a]), ...opts.filter((_, i) => i !== a).map(strip)], x: strip(typeof ex === 'string' ? ex : '') });
  }
  return out;
}
const SHORT = { 'Social Science (SST)': 'sst', 'Business Studies': 'bst', 'Accountancy': 'acc', 'Economics': 'eco', 'Entrepreneurship': 'ent', 'Science': 'science', 'English (Kaveri)': 'english', 'Hindi (Ganga)': 'hindi' };
const slugOf = (cls, sub) => cls.toLowerCase() + '-' + (SHORT[sub] || sub.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
(async () => {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const CH = vm.runInNewContext('(' + html.match(/const CHAPTERS = (\[[\s\S]*?\n\]);/)[1] + ')', {});
  const groups = new Map();
  for (const ch of CH) for (const e of ch.episodes || []) {
    const f = path.join(ROOT, e.url); if (!fs.existsSync(f)) continue;
    const { plain, pw } = await openNote(fs.readFileSync(f, 'utf8'));
    if (plain === null) { console.warn('skip (unknown password)', e.id); continue; }
    const qs = (fromNoteObject(plain) || fromLiterals(plain));
    const key = ch.cls + '|' + ch.subject;
    if (!groups.has(key)) groups.set(key, { cls: ch.cls, subject: ch.subject, chapters: [], pw: {}, qs: [], seen: new Set() });
    const g = groups.get(key);
    if (!g.chapters.find(x => x.id === ch.id)) g.chapters.push({ id: ch.id, num: ch.num || '', unit: ch.unit || '', title: ch.title, n: 0 });
    if (pw) g.pw[pw] = (g.pw[pw] || 0) + 1;
    for (const q of qs) {
      if (!q.q || q.q.length < 8 || CONTEXT.test(q.q) || new Set(q.o).size !== q.o.length || q.o.some(x => !x)) continue;
      const k = q.q.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '') + '|' + q.o[0].toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
      if (g.seen.has(k)) continue; g.seen.add(k);
      g.qs.push({ ...q, c: ch.id, free: !pw });
    }
  }
  fs.mkdirSync(path.join(ROOT, 'marathon'), { recursive: true });
  const index = [];
  for (const g of groups.values()) {
    if (g.qs.length < 20) { console.warn('too few questions, skipped', g.cls, g.subject, g.qs.length); continue; }
    const slug = slugOf(g.cls, g.subject);
    g.chapters.forEach(ch => { ch.n = g.qs.filter(q => q.c === ch.id).length; });
    const chapters = g.chapters.filter(ch => ch.n > 0);
    const pack = q => ({ q: q.q, o: q.o, x: q.x, c: q.c });
    let free = g.qs.filter(q => q.free);
    if (free.length < 20) {                                   // top up with an even, fixed sample
      const rest = g.qs.filter(q => !q.free), need = 20 - free.length, step = rest.length / need;
      free = free.concat(Array.from({ length: need }, (_, i) => rest[Math.floor(i * step)]));
    }
    const pwUse = Object.entries(g.pw).sort((a, b2) => b2[1] - a[1])[0];
    const meta = { slug, cls: g.cls, subject: g.subject, total: g.qs.length, freeCount: free.length, chapters, built: new Date().toISOString().slice(0, 10) };
    fs.writeFileSync(path.join(ROOT, 'marathon', slug + '.free.json'), JSON.stringify({ ...meta, questions: free.map(pack) }));
    if (pwUse) {
      const sealed = await seal(JSON.stringify(g.qs.map(pack)), pwUse[0]);
      fs.writeFileSync(path.join(ROOT, 'marathon', slug + '.full.json'), JSON.stringify(sealed));
    } else {
      fs.writeFileSync(path.join(ROOT, 'marathon', slug + '.full.json'), JSON.stringify({ open: g.qs.map(pack) }));
    }
    index.push({ slug, cls: g.cls, subject: g.subject, total: g.qs.length, freeCount: free.length, chapters: chapters.length });
    console.log(slug.padEnd(14), 'total', String(g.qs.length).padStart(4), 'free', String(free.length).padStart(4), 'chapters', chapters.length);
  }
  const ORDER = ['IX', 'X', 'XI', 'XII'];
  index.sort((a, b2) => ORDER.indexOf(a.cls) - ORDER.indexOf(b2.cls) || a.subject.localeCompare(b2.subject));
  fs.writeFileSync(path.join(ROOT, 'marathon', 'index.json'), JSON.stringify({ built: new Date().toISOString().slice(0, 10), subjects: index }, null, 1));
})().catch(e => { console.error(e); process.exit(1); });
