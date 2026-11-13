#!/usr/bin/env node
/* Revision Arena content checker.
   Usage: node arena/tools/validate.js            (checks every file in arena/data)
          node arena/tools/validate.js ch02 xi-u2 (checks only these)
   Fails (exit 1) on anything that would break a module: missing fields, answer indexes out of range,
   concept tags that are not in the concept list, marking schemes that do not add up, too few items for a game. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const DIR = path.join(__dirname, "..", "data");
const ids = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(DIR).filter(f => f.endsWith(".js")).map(f => f.replace(/\.js$/, ""));
const TYPES = ["mcq","ar","tf","match","fill","short","sa3","sa4","la6","comp","case"];
let bad = 0;

for (const id of ids) {
  const errs = [], warns = [];
  let D = null;
  try {
    vm.runInNewContext(fs.readFileSync(path.join(DIR, id + ".js"), "utf8"), { NFArena: { register: d => { D = d; } } }, { filename: id + ".js" });
  } catch (e) { console.log("✗ " + id + ": does not load: " + e.message); bad++; continue; }
  const E = m => errs.push(m), W = m => warns.push(m);
  if (!D) { console.log("✗ " + id + ": register() was never called"); bad++; continue; }
  if (D.id !== id) E("id is '" + D.id + "' but the file is '" + id + ".js'");
  ["cls","subject","num","title","tagline","concepts","overview","sections","flashcards","cases","questions","find"].forEach(k => { if (D[k] == null) E("missing " + k); });
  if (errs.length) { console.log("✗ " + id + "\n   " + errs.join("\n   ")); bad++; continue; }

  const C = D.concepts, secIds = D.sections.map(s => s.id);
  const cref = (c, where) => { if (!c) W(where + ": no concept tag (weak-concept tracking skips it)"); else if (!C[c]) E(where + ": concept '" + c + "' is not in concepts"); };
  Object.keys(C).forEach(k => { if (secIds.indexOf(C[k].s) < 0) E("concept " + k + " points to section '" + C[k].s + "' which does not exist"); });
  if (!D.overview.map || !D.overview.map.branches || D.overview.map.branches.length < 3) E("overview.map needs at least 3 branches");

  // Module 1
  D.sections.forEach(s => {
    ["id","title","icon","color","quick"].forEach(k => { if (!s[k]) E("section " + s.id + ": missing " + k); });
    if (!s.cards && !s.table && !s.tables && !s.defs) W("section " + s.id + ": no cards or tables; detailed mode will show the quick points as a list");
    (s.cards || []).forEach((c, i) => { if (!c.t || !c.b) E("section " + s.id + " card " + i + ": needs t and b"); });
    [s.table].concat(s.tables || []).filter(Boolean).forEach(t => t.rows.forEach((r, i) => { if (r.length !== t.head.length) E("section " + s.id + " table '" + t.cap + "' row " + i + " has " + r.length + " cells, head has " + t.head.length); }));
  });
  // Module 3
  D.flashcards.forEach((f, i) => { if (!f.q || !f.a) E("flashcard " + i + ": needs q and a"); cref(f.c, "flashcard " + i); });
  // Module 2
  const caseIds = {};
  D.cases.forEach(c => {
    if (caseIds[c.id]) E("duplicate case id " + c.id); caseIds[c.id] = 1;
    if (!(c.lvl >= 1 && c.lvl <= 3)) E("case " + c.id + ": lvl must be 1-3");
    if (!c.text || !c.qs || !c.qs.length) E("case " + c.id + ": needs text and qs");
    (c.qs || []).forEach((q, j) => {
      const w = "case " + c.id + " q" + (j + 1);
      ["q","m","type","hint","points","structure","model"].forEach(k => { if (q[k] == null) E(w + ": missing " + k); });
      cref(q.c, w);
      const sum = (q.points || []).reduce((s, p) => s + p.m, 0);
      if (q.points && sum !== q.m) E(w + ": marking points add to " + sum + ", question is worth " + q.m);
      if (q.keys && !q.ans) E(w + ": has keys but no ans");
    });
  });
  const lv = [1,2,3].map(l => D.cases.filter(c => c.lvl === l).length);
  if (lv.some(n => !n)) W("cases: not every difficulty level is present (" + lv.join("/") + ")");
  // Module 4
  const qIds = {};
  D.questions.forEach(q => {
    const w = "question " + q.id;
    if (qIds[q.id]) E("duplicate question id " + q.id); qIds[q.id] = 1;
    if (TYPES.indexOf(q.t) < 0) E(w + ": unknown type " + q.t);
    if (["E","M","C"].indexOf(q.d) < 0) E(w + ": d must be E, M or C");
    if (!q.q || !q.m || !q.hint) E(w + ": needs q, m and hint");
    cref(q.c, w);
    if (/mcq|comp|case/.test(q.t)) { if (!Array.isArray(q.o) || q.o.length < 2 || !(q.a >= 0 && q.a < q.o.length)) E(w + ": options / answer index wrong"); if (!q.why) E(w + ": needs why"); }
    if (q.t === "ar") { if (!q.r || !(q.a >= 0 && q.a <= 3)) E(w + ": A&R needs r and a in 0-3"); if (!q.why) E(w + ": needs why"); }
    if (q.t === "tf" && typeof q.a !== "boolean") E(w + ": true/false answer must be true or false");
    if (q.t === "match") { if (!q.pairs || q.pairs.length < 3) E(w + ": needs 3+ pairs"); else { const r = q.pairs.map(p => p[1]); if (new Set(r).size !== r.length) E(w + ": duplicate right-hand items"); } }
    if (q.t === "fill" && !(q.acc && q.acc.length)) E(w + ": fill needs acc");
    const selfMarked = /sa3|sa4|la6/.test(q.t) || (q.t === "short" && !q.acc);
    if (selfMarked) {
      if (!q.points || !q.model) E(w + ": self-marked question needs points and model");
      else { const sum = q.points.reduce((s, p) => s + p.m, 0); if (sum !== q.m) E(w + ": points add to " + sum + ", worth " + q.m); }
    }
  });
  const have = TYPES.filter(t => D.questions.some(q => q.t === t));
  if (have.length < TYPES.length) W("question types missing: " + TYPES.filter(t => have.indexOf(t) < 0).join(", "));
  // Module 5
  const F = D.find;
  ["mcq","match","wrong","para","explain"].forEach(k => { if (!Array.isArray(F[k]) || !F[k].length) E("find." + k + " is empty"); });
  if (F.mcq.length < 10) E("find.mcq needs at least 10 items for a Spot It round (has " + F.mcq.length + ")");
  F.mcq.forEach((it, i) => { if (!(it.a >= 0 && it.a < it.o.length)) E("find.mcq " + i + ": answer index"); if (!it.why) E("find.mcq " + i + ": needs why"); if (["E","M","C"].indexOf(it.d) < 0) E("find.mcq " + i + ": d must be E/M/C"); cref(it.c, "find.mcq " + i); });
  F.match.forEach((m, i) => { if (m.pairs.length < 6) E("find.match " + i + ": needs 6+ pairs (a round uses 6)"); const r = m.pairs.map(p => p[1]); if (new Set(r).size !== r.length) E("find.match " + i + ": duplicate concepts"); m.pairs.forEach(p => cref(p[2], "find.match " + i)); });
  F.wrong.forEach((it, i) => { if (!(it.a >= 0 && it.a < it.stmts.length)) E("find.wrong " + i + ": answer index"); cref(it.c, "find.wrong " + i); });
  F.para.forEach((it, i) => { if (!(it.a >= 0 && it.a < it.sents.length)) E("find.para " + i + ": answer index"); cref(it.c, "find.para " + i); });
  F.explain.forEach((it, i) => { if (!(it.a >= 0 && it.a < it.o.length)) E("find.explain " + i + ": answer index"); cref(it.c, "find.explain " + i); });
  // Module 6: a 30-question mixed battle needs 9 easy, 12 moderate, 9 challenging
  const pool = D.questions.filter(q => /mcq|ar|tf|fill|comp|case/.test(q.t)).concat(F.mcq.map(it => ({ d: it.d })));
  const by = { E: 0, M: 0, C: 0 }; pool.forEach(q => by[q.d]++);
  if (pool.length < 30) E("battle pool has " + pool.length + " objective items; 30 are needed for the longest battle");
  if (by.E < 9 || by.M < 12 || by.C < 9) W("battle pool by level E/M/C = " + by.E + "/" + by.M + "/" + by.C + " (mixed 30-question battle wants 9/12/9; it will top up from other levels)");

  const counts = "sections " + D.sections.length + " · flashcards " + D.flashcards.length + " · cases " + D.cases.length + " (" + D.cases.reduce((s, c) => s + c.qs.length, 0) + " qs) · questions " + D.questions.length + " · find " + (F.mcq.length + F.wrong.length + F.para.length + F.explain.length + F.match.reduce((s, m) => s + m.pairs.length, 0)) + " · battle pool " + pool.length + " (E" + by.E + "/M" + by.M + "/C" + by.C + ")";
  if (errs.length) { bad++; console.log("✗ " + id + "  " + counts + "\n   " + errs.join("\n   ")); }
  else console.log("✓ " + id + "  " + counts);
  warns.forEach(w => console.log("   ⚠ " + w));
}
process.exit(bad ? 1 : 0);
