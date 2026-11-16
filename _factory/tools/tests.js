// Board Test Series builder: makes full board-pattern papers from the Revision Arena content.
//   NF_PASS="<note password>" node _factory/tools/tests.js        (run from the repo root)
// The password comes from the environment only; never commit it.
//
// Class XII Business Studies (054): 80 marks, 3 hours, 34 questions.
//   Q1-20  1 mark  (MCQ, assertion-reason, case-based MCQ)
//   Q21-24 3 marks · Q25-30 4 marks · Q31-34 6 marks
// Unit-group marks (CBSE 2026-27): Ch 1-3 = 16, Ch 4-5 = 14, Ch 6-8 = 20 (Part A = 50); Ch 9-10 = 15, Ch 11-12 = 15 (Part B = 30).
//
// Output:
//   tests/<slug>.free.json  plain: Paper 1 only (the free paper)
//   tests/<slug>.full.json  every paper, AES-GCM sealed with the note password (same format as marathon/)
//   tests/index.json        list of test series (used by tests.html and the home page)
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm"), { webcrypto: c } = require("crypto");
const ROOT = process.cwd();
const PASS = process.env.NF_PASS;
if (!PASS) { console.error("Set NF_PASS to the note password"); process.exit(1); }

const SERIES = [{
  slug: "xii-bst", cls: "XII", subject: "Business Studies", code: "054", papers: 6, minutes: 180,
  chapters: ["ch01", "ch02", "ch03", "ch04", "ch05", "ch06", "ch07", "ch08", "ch09", "ch10", "ch11", "ch12"],
  // one row per unit group: which chapters, marks, and how many questions of each mark value it gets
  groups: [
    { g: "A1", part: "A", name: "Nature of Management, Principles, Business Environment", ch: ["ch01", "ch02", "ch03"], marks: 16, n: { 1: 6, 3: 0, 4: 1, 6: 1 } },
    { g: "A2", part: "A", name: "Planning, Organising", ch: ["ch04", "ch05"], marks: 14, n: { 1: 4, 3: 0, 4: 1, 6: 1 } },
    { g: "A3", part: "A", name: "Staffing, Directing, Controlling", ch: ["ch06", "ch07", "ch08"], marks: 20, n: { 1: 4, 3: 2, 4: 1, 6: 1 } },
    { g: "B1", part: "B", name: "Financial Management, Financial Markets", ch: ["ch09", "ch10"], marks: 15, n: { 1: 2, 3: 1, 4: 1, 6: 1 } },
    { g: "B2", part: "B", name: "Marketing, Consumer Protection", ch: ["ch11", "ch12"], marks: 15, n: { 1: 4, 3: 1, 4: 2, 6: 0 } }
  ]
}];

const AR_OPTS = ["Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of Assertion (A).",
  "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).",
  "Assertion (A) is true, but Reason (R) is false.", "Assertion (A) is false, but Reason (R) is true."];
const WORDS = { 3: "about 60 to 80 words", 4: "about 150 words", 6: "about 200 words" };

function seeded(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = h << 13 | h >>> 19; }
  return () => { h = Math.imul(h ^ h >>> 16, 2246822507); h = Math.imul(h ^ h >>> 13, 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
}
const shuffle = (a, rnd) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

function loadChapter(id) {
  let D = null;
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, "arena", "data", id + ".js"), "utf8"), { NFArena: { register: d => { D = d; } } });
  if (!D) throw new Error("arena/data/" + id + ".js did not register");
  return D;
}

// Every usable item of a chapter, as test items. Written items keep their marking points and model answer.
function itemsOf(D) {
  const out = [], cn = k => (D.concepts[k] && D.concepts[k].n) || "";
  const pts = p => (p || []).map(x => ({ p: x.p, m: x.m, k: x.k || [] }));
  const sum = p => p.reduce((s, x) => s + (x.m || 0), 0);
  for (const q of D.questions) {
    const base = { ch: D.id, chNum: D.num, chTitle: D.title, c: q.c || "", cn: cn(q.c), src: D.id + ":" + q.id };
    if (q.t === "mcq" || q.t === "comp") out.push({ ...base, m: 1, kind: "mcq", q: q.q, o: q.o, a: q.a, why: q.why || "" });
    else if (q.t === "case" && q.m === 1 && q.o) out.push({ ...base, m: 1, kind: "mcq", passage: q.passage || "", q: q.q, o: q.o, a: q.a, why: q.why || "" });
    else if (q.t === "ar") out.push({ ...base, m: 1, kind: "ar", q: q.q, r: q.r, o: AR_OPTS, a: q.a, why: q.why || "" });
    else if ((q.t === "sa3" || q.t === "sa4" || q.t === "la6") && q.points && sum(q.points) === q.m)
      out.push({ ...base, m: q.m, kind: "written", q: q.q, hint: q.hint || "", points: pts(q.points), model: q.model || "" });
  }
  for (const cs of D.cases) cs.qs.forEach((q, i) => {
    if (![3, 4, 6].includes(q.m) || !q.points || sum(q.points) !== q.m) return;
    out.push({ ch: D.id, chNum: D.num, chTitle: D.title, c: q.c || "", cn: cn(q.c), src: D.id + ":" + cs.id + ":" + i, caseId: D.id + ":" + cs.id,
      m: q.m, kind: "written", passage: cs.text, q: q.q, hint: q.hint || "", points: pts(q.points), model: q.model || "", ans: q.ans || "" });
  });
  return out;
}

function buildSeries(S) {
  const chapters = {}, pool = [];
  for (const id of S.chapters) { const D = loadChapter(id); chapters[id] = { id, num: D.num, title: D.title }; pool.push(...itemsOf(D)); }
  const used = {};                                   // src -> times used in earlier papers (avoid repeats until a pool runs out)
  const papers = [];
  for (let p = 1; p <= S.papers; p++) {
    const rnd = seeded(S.slug + "-paper-" + p), items = [], caseUsed = new Set(), srcUsed = new Set();
    for (const G of S.groups) {
      const chUse = {}; G.ch.forEach(ch => { chUse[ch] = 0; });
      for (const m of [1, 3, 4, 6]) {
        for (let k = 0; k < (G.n[m] || 0); k++) {
          let cand = pool.filter(it => G.ch.includes(it.ch) && it.m === m && !srcUsed.has(it.src) && !(it.caseId && caseUsed.has(it.caseId)));
          // one assertion-reason question in each group that has three or more 1-mark questions
          if (m === 1 && k === 0 && G.n[1] >= 3) { const ar = cand.filter(it => it.kind === "ar"); if (ar.length) cand = ar; }
          else if (m === 1) cand = cand.filter(it => it.kind !== "ar");
          if (!cand.length) throw new Error(S.slug + " paper " + p + ": no " + m + "-mark item left for group " + G.g);
          // spread over the group's chapters, then prefer the least-used items, then random
          const minCh = Math.min(...cand.map(it => chUse[it.ch]));
          cand = cand.filter(it => chUse[it.ch] === minCh);
          const minU = Math.min(...cand.map(it => used[it.src] || 0));
          cand = shuffle(cand.filter(it => (used[it.src] || 0) === minU), rnd);
          const it = cand[0];
          srcUsed.add(it.src); if (it.caseId) caseUsed.add(it.caseId); chUse[it.ch]++; used[it.src] = (used[it.src] || 0) + 1;
          items.push({ ...it, g: G.g, part: G.part });
        }
      }
    }
    // board order: by marks (Q1-20, 21-24, 25-30, 31-34), chapters in syllabus order inside each block
    items.sort((a, b) => a.m - b.m || a.ch.localeCompare(b.ch));
    const qs = items.map((it, i) => {
      const o = { n: i + 1, m: it.m, kind: it.kind, ch: it.ch, g: it.g, part: it.part, c: it.c, cn: it.cn, q: it.q };
      if (it.passage) o.passage = it.passage;
      if (it.kind !== "written") { o.o = it.o; o.a = it.a; o.why = it.why; if (it.r) o.r = it.r; }
      else { o.points = it.points; o.model = it.model; o.hint = it.hint; o.words = WORDS[it.m]; if (it.ans) o.ans = it.ans; }
      return o;
    });
    const total = qs.reduce((s, q) => s + q.m, 0);
    if (total !== 80 || qs.length !== 34) throw new Error(S.slug + " paper " + p + ": " + qs.length + " questions, " + total + " marks");
    for (const G of S.groups) { const gm = qs.filter(q => q.g === G.g).reduce((s, q) => s + q.m, 0); if (gm !== G.marks) throw new Error(G.g + " has " + gm + " marks, not " + G.marks); }
    papers.push({ id: p, title: "Board Practice Paper " + p, qs });
  }
  const repeats = Object.values(used).filter(v => v > 1).length;
  return { chapters, papers, poolSize: pool.length, repeats };
}

async function seal(text, pw) {
  const enc = new TextEncoder(), b64 = u => Buffer.from(u).toString("base64");
  const salt = c.getRandomValues(new Uint8Array(16)), iv = c.getRandomValues(new Uint8Array(12));
  const base = await c.subtle.importKey("raw", enc.encode(pw), "PBKDF2", false, ["deriveKey"]);
  const key = await c.subtle.deriveKey({ name: "PBKDF2", salt, iterations: 250000, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  const ct = new Uint8Array(await c.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(text)));
  if (new TextDecoder().decode(await c.subtle.decrypt({ name: "AES-GCM", iv }, key, ct)) !== text) throw new Error("seal verify failed");
  return { s: b64(salt), i: b64(iv), c: b64(ct), it: 250000 };
}

(async () => {
  const dir = path.join(ROOT, "tests"); fs.mkdirSync(dir, { recursive: true });
  const index = [];
  for (const S of SERIES) {
    const { chapters, papers, poolSize, repeats } = buildSeries(S);
    const meta = { slug: S.slug, cls: S.cls, subject: S.subject, code: S.code, minutes: S.minutes, marks: 80,
      groups: S.groups.map(G => ({ g: G.g, part: G.part, name: G.name, ch: G.ch, marks: G.marks })), chapters,
      paperList: papers.map(p => ({ id: p.id, title: p.title, free: p.id === 1 })), built: new Date().toISOString().slice(0, 10) };
    fs.writeFileSync(path.join(dir, S.slug + ".free.json"), JSON.stringify({ ...meta, papers: [papers[0]] }));
    fs.writeFileSync(path.join(dir, S.slug + ".full.json"), JSON.stringify(await seal(JSON.stringify(papers), PASS)));
    index.push({ slug: S.slug, cls: S.cls, subject: S.subject, papers: papers.length, marks: 80, minutes: S.minutes });
    console.log(S.slug, "papers", papers.length, "item pool", poolSize, "items used more than once", repeats);
  }
  fs.writeFileSync(path.join(dir, "index.json"), JSON.stringify({ built: new Date().toISOString().slice(0, 10), series: index }, null, 1));
})().catch(e => { console.error(e.message); process.exit(1); });
