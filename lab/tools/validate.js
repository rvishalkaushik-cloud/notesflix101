/* Notesflix 101 · Accountancy Lab content check.
   Usage: node lab/tools/validate.js [chapterId]   (default: every file in lab/data)
   1. Structural checks for every chapter: journal entries balance, T-accounts and grids total, every account key exists,
      every MCQ answer index is valid, Balance Sheet game totals agree.
   2. Independent recomputation for Admission of a Partner: the answers are worked out again from the question's facts
      and compared with the answers stored in the data. */
"use strict";
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "..", "data");
let D = null;
const BASE = ["cash","bank","pla","pl","bal"].concat([..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].flatMap(x => ["cap" + x, "cur" + x]));
global.NFLab = { register: d => { D = d; D.acc = D.acc || {}; BASE.forEach(k => { if(!D.acc[k]) D.acc[k] = {n:k}; }); }, cap: x => ({n:x}), cur: x => ({n:x}) };
let fails = 0, checks = 0;
function ok(cond, msg){ checks++; if(!cond){ fails++; console.log("  ✗ " + msg); } }
function eq(a, b, msg){ ok(Math.abs(a - b) < 0.005, msg + " (data " + a + ", expected " + b + ")"); }
const sum = a => a.reduce((s, x) => s + (x || 0), 0);
const val = c => (c && typeof c === "object") ? c.a : c;

function journal(entries, where){
  entries.forEach((e, i) => {
    const dr = sum(e.lines.map(l => l.dr)), cr = sum(e.lines.map(l => l.cr));
    eq(dr, cr, where + " entry " + (i + 1) + " Dr = Cr");
    e.lines.forEach(l => ok(D.acc[l.a], where + " entry " + (i + 1) + ": account key '" + l.a + "' is defined"));
    ok(e.narr && /^\(Being/.test(e.narr), where + " entry " + (i + 1) + " has a narration starting '(Being'");
  });
}
function tacc(f, where){
  const L = sum(f.left.map(r => r.amt)), R = sum(f.right.map(r => r.amt));
  eq(L, R, where + " both sides equal"); eq(L, f.total, where + " total");
  f.left.concat(f.right).forEach(r => ok(D.acc[r.a], where + ": account key '" + r.a + "' is defined"));
}
function grid(f, where){
  if(f.single){ (f.sum || []).forEach(c => { const rows = f.rows, tot = rows[rows.length - 1]; eq(sum(rows.slice(0, -1).map(r => val(r[c]))), val(tot[c]), where + " column '" + f.head[c] + "' adds to its total"); }); return; }
  const rows = f.rows, tot = rows[rows.length - 1], body = rows.slice(0, -1), half = f.head.length / 2;
  for(let c = 1; c < f.head.length; c++){
    if(c === half) continue;
    eq(sum(body.map(r => val(r[c]))), val(tot[c]), where + " column '" + f.head[c] + "' adds to its total");
  }
  for(let c = 1; c < half; c++) eq(val(tot[c]), val(tot[c + half]), where + " Dr and Cr totals agree for '" + f.head[c] + "'");
}
function fmt(f, where){
  if(f.type === "journal") journal(f.entries, where);
  else if(f.type === "tacc") tacc(f, where);
  else if(f.type === "grid") grid(f, where);
  else if(f.type === "multi") f.parts.forEach((p, i) => fmt(p, where + " part " + (i + 1)));
}
function mcq(q, where){ ok(Array.isArray(q.opts) && q.a >= 0 && q.a < q.opts.length, where + " answer index valid"); }

function structural(){
  (D.illus || []).forEach(x => x.format && fmt(x.format, "illustration " + x.id));
  (D.lab || []).forEach(x => fmt(x.format, "lab " + x.id));
  (D.prereq || []).forEach((p, i) => mcq(p.check, "prereq " + (i + 1)));
  (D.kid || []).forEach(k => mcq(k.check, "class-7 card " + k.id));
  (D.mistakes || []).forEach(m => mcq(m, "mistake " + m.id));
  (D.revision.mcq || []).forEach((m, i) => mcq(m, "revision mcq " + (i + 1)));
  (D.revision.ar || []).forEach((m, i) => ok(m.ans >= 0 && m.ans < 4, "A&R " + (i + 1) + " answer valid"));
  (D.cases || []).forEach(c => c.qs.forEach((q, i) => q.type === "mcq" && mcq(q, "case " + c.id + " q" + (i + 1))));
  D.test.items.forEach((t, i) => { if(t.type === "mcq") mcq(t, "test q" + (i + 1)); if(t.type === "journal") journal(t.entries, "test q" + (i + 1)); });
  eq(sum(D.test.items.map(t => t.m)), 25, "test totals 25 marks");
  ok(D.visual && D.visual.flow && D.visual.flow.length, "visual flow present");
  (D.kid || []).forEach(k => ok(k.art, "class-7 card " + k.id + " has a picture"));
  const g = D.games;
  if(g && g.bs && g.bs.total){ const L = sum(g.bs.items.filter(x => x.b === 0).map(x => x.amt)), A = sum(g.bs.items.filter(x => x.b === 1).map(x => x.amt));
    eq(L, A, "Balance Sheet Builder: liabilities = assets"); eq(L, g.bs.total, "Balance Sheet Builder total"); }
  if(g && g.dc) g.dc.forEach((x, i) => ok(x.bad.indexOf(x.ok) < 0 && x.bad.length === 3, "Debit or Credit item " + (i + 1) + " has 3 distinct wrong options"));
  (D.revision.numericals || []).forEach(id => ok((D.lab || []).some(l => l.id === id) || (D.solver || []).some(s => s.id === id), "revision numerical '" + id + "' exists"));
}

/* ---------- Admission of a Partner: answers recomputed from the facts ---------- */
function admission(){
  const F = (n, d) => n / d;
  // L2–L5 : A:B 3:2, C 1/5, capital 1,00,000, premium 30,000
  const old = {A:120000, B:80000}, r = {A:3/5, B:2/5};
  const gains = (44000 - 40000) + (95000 - 80000), losses = 60000 * 0.10 + 50000 * 0.05, rev = gains - losses;
  const capA = old.A + 20000 * r.A + 30000 * r.A + rev * r.A, capB = old.B + 20000 * r.B + 30000 * r.B + rev * r.B, capC = 100000;
  const cash = 30000 + 100000 + 30000;
  const bs = 40000 + capA + capB + capC, assets = cash + (50000 - 2500) + 44000 + (60000 - 6000) + 95000;
  const L = id => D.lab.find(x => x.id === id);
  eq(L("L3").format.total, gains, "L3 Revaluation total = gains");
  eq(L("L3").format.left.find(x => x.a === "capA").amt, rev * r.A, "L3 A's revaluation profit");
  const g4 = L("L4").format.rows; eq(val(g4[5][1]), capA, "L4 A's closing capital"); eq(val(g4[5][2]), capB, "L4 B's closing capital");
  eq(L("L5").format.total, bs, "L5 Balance Sheet total"); eq(bs, assets, "L5 recomputed liabilities = assets");
  eq(L("L5").format.right.find(x => x.a === "cash").amt, cash, "L5 cash");
  eq(L("L2").format.entries[5].lines[0].dr, rev, "L2 revaluation profit entry");
  // L0 and L1
  eq(L("L0").format.entries[1].lines[1].cr, 50000 * 3/5, "L0 A's premium");
  eq(L("L1").format.entries[1].lines[0].dr, 60000 / 6, "L1 D's goodwill share");
  eq(L("L1").format.entries[0].lines[0].dr, 20000 * 3/5, "L1 X's goodwill write-off");
  // Illustration 3: P:Q 2:1, R 1/4
  const rv = 15000 - 5000 - 1000, P = 90000 + 15000 * 2/3 + 24000 * 2/3 + rv * 2/3, Q = 60000 + 15000/3 + 24000/3 + rv/3;
  const i3 = D.illus.find(x => x.id === "i3").format.parts;
  eq(val(i3[1].rows[5][1]), P, "Illus 3 P's capital"); eq(val(i3[1].rows[5][2]), Q, "Illus 3 Q's capital");
  eq(i3[2].total, 30000 + 1000 + P + Q + 70000, "Illus 3 Balance Sheet total"); eq(i3[2].total, (25000 + 70000 + 24000) + 40000 + 50000 + 15000 + 75000, "Illus 3 assets side");
  eq(D.games.bs.total, i3[2].total, "Balance Sheet Builder uses Illus 3 totals");
  // Illustration 1 and solver s2 ratio checks
  const a1 = F(3,5) - F(1,6), b1 = F(2,5) - F(1,12); eq(a1 * 60, 26, "Illus 1 A = 26/60"); eq(b1 * 60, 19, "Illus 1 B = 19/60");
  // solver
  const S = id => D.solver.find(x => x.id === id).steps.map(s => s.ans);
  const s1 = S("s1"), avg = (40000 + 50000 + 60000) / 3;
  eq(s1[1], avg, "s1 average"); eq(s1[3], avg * 2, "s1 goodwill"); eq(s1[4], avg * 2 / 4, "s1 premium"); eq(s1[5], avg * 2 / 4 * 3/4, "s1 A's share");
  const s2 = S("s2"); eq(s2[1][0] / s2[1][1], F(5,8) - F(1,8), "s2 X new"); eq(s2[2][0] / s2[2][1], F(3,8) - F(1,8), "s2 Y new");
  const s3 = S("s3"), hg = 50000 * 4 - (60000 + 40000 + 50000); eq(s3[2], hg, "s3 hidden goodwill"); eq(s3[4], hg / 4 / 2, "s3 A credit");
  const s4 = S("s4"); eq(s4[3], 200000 * 5/4 / 5, "s4 R's capital");
  // case study
  const cs = D.cases[0].qs; eq(cs[3].ans, 40000 * 4, "case: implied goodwill"); eq(cs[4].ans, (10000 - (50000 - 46000)) * 3/5, "case: Meera's IFR");
  // games
  const pf = D.games.profit, run = sum(pf.steps.map(s => s.v)); eq(pf.final.ans, run * 3/5, "Profit Master final share");
  const es = D.games.escape.locks; eq(es[0].ans, 12 + 8 + 5, "Escape 1"); eq(es[1].ans, 100000 / 5 * 3/5, "Escape 2"); eq(es[2].ans, 20000 - 6000 - 40000 * 0.05, "Escape 3"); eq(es[3].ans, 60000 * 4 - (150000 + 60000), "Escape 4");
  const ms = D.games.missing; eq(ms[3].ans, 40000 * 5 - (130000 + 40000), "Missing 4"); eq(ms[4].ans, 150000 * 4/3 / 4, "Missing 5");
  // test
  const T = D.test.items;
  const t10 = T.find(t => t.c === "hidden"); eq(t10.parts[0].ans, 75000 * 3 - (70000 + 50000 + 75000), "Test hidden goodwill"); eq(t10.parts[1].ans, t10.parts[0].ans / 3, "Test C's share");
  const t11 = T.find(t => t.type === "nums" && t.c === "reval"); const tr = 12000 + 4000 - 50000 * 0.1 - 1000; eq(t11.parts[0].ans, tr, "Test revaluation"); eq(t11.parts[1].ans, tr * 3/5, "Test A's share");
  const tj = T.find(t => t.type === "journal"); eq(tj.entries[1].lines[1].dr, 80000 / 5 - 10000, "Test R's current debit");
}

/* ---------- Goodwill ---------- */
function goodwill(){
  const L = id => D.lab.find(x => x.id === id), S = id => D.solver.find(x => x.id === id).steps.map(s => s.ans);
  const adj = [120000, 150000 - 10000, 170000 + 20000], avg = (adj[0] + adj[1] + adj[2]) / 3;
  eq(val(L("L0").format.rows[3][4]), adj[0] + adj[1] + adj[2], "L0 total adjusted"); eq(S("s1")[4], avg * 2, "s1 goodwill");
  const w = (90000 + 120000 * 2 + 150000 * 3) / 6; eq(val(L("L1").format.rows[4][3]), w, "L1 weighted average"); eq(val(L("L1").format.rows[5][3]), w * 2, "L1 goodwill"); eq(S("s2")[3], w * 2, "s2 goodwill");
  eq(val(L("L2").format.rows[3][1]), (150000 - 1000000 * .1) * 3, "L2 goodwill"); eq(S("s3")[2], (150000 - 100000) * 3, "s3");
  const ce = 1450000 - 100000 - 50000 - 300000, sp = (155000 - 5000) - ce * .1; eq(val(L("L3").format.rows[4][1]), ce, "L3 capital employed"); eq(val(L("L3").format.rows[8][1]), sp * 100 / 10, "L3 goodwill");
  eq(val(L("L4").format.rows[3][1]), 150000 * 100 / 12 - 1000000, "L4 goodwill");
  eq(S("s4")[1], 150000 * 10 - 1000000, "s4 (a)"); eq(S("s4")[3], 50000 * 10, "s4 (b)");
  eq(D.illus[2].steps.length, 3, "Illus 3 steps"); eq((120000 - 20000) * 10 - 800000, 200000, "Illus 3 goodwill");
  const cs = D.cases[0].qs, cavg = 100000, csp = cavg - 600000 * .12; eq(cs[2].ans, csp * 2, "case super"); ok(Math.abs(cs[3].ans - csp * 100 / 12) < 0.5, "case capitalisation");
  const ms = D.games.missing; eq(ms[1].ans, 90000 / 3 + 50000, "Missing 2"); eq(ms[5].ans, (30000 + 120000 + 210000) / 6, "Missing 6");
  const es = D.games.escape.locks; eq(es[0].ans, (100000 + 120000 - 10000) / 3, "Escape 1"); eq(es[1].ans, (60000 + 160000 + 300000) / 6 * 3, "Escape 2"); eq(es[2].ans, (150000 - 120000) * 2, "Escape 3"); eq(es[3].ans, 90000 * 100 / 12 - 600000, "Escape 4");
  const pf = D.games.profit; eq(pf.final.ans, (pf.from + pf.steps.reduce((a, s) => a + s.v, 0)) * 2, "Normal Profit Master");
  const rc = D.games.race; eq(rc[3].amt, 100000 * 10 - 800000, "Race 4"); eq(rc[4].amt, 360000 / 6 * 2, "Race 5"); eq(rc[5].amt, (55000 - 40000) * 4, "Race 6");
  const T = D.test.items; eq(T[8].parts[0].ans, (80000 + 90000 + 100000) / 3, "Test avg"); eq(T[10].parts[1].ans, 120000 * 100 / 12 - 800000, "Test cap"); eq(T[12].parts[0].ans, (60000 + 180000 + 360000) / 6, "Test wavg");
}
/* ---------- Change in PSR ---------- */
function changePsr(){
  const L = id => D.lab.find(x => x.id === id), S = id => D.solver.find(x => x.id === id).steps.map(s => s.ans);
  const o = [15, 10, 5], n = [12, 12, 6], gw = 90000, ch = o.map((x, i) => (x - n[i]) / 30);
  eq(L("L0").format.entries[0].lines[2].cr, gw * ch[0], "L0 A credit"); eq(L("L0").format.entries[0].lines[0].dr, -gw * ch[1], "L0 B debit"); eq(L("L0").format.entries[0].lines[1].dr, -gw * ch[2], "L0 C debit");
  const rv = 18000 - 6000, caps = [100000, 80000, 50000].map((c, i) => c + rv * o[i] / 30 + 30000 * o[i] / 30 + gw * ch[i]);
  const g = L("L3").format.rows; eq(val(g[4][1]), caps[0], "L3 A"); eq(val(g[4][2]), caps[1], "L3 B"); eq(val(g[4][3]), caps[2], "L3 C");
  eq(L("L4").format.entries[0].lines[0].dr, (20000 + 5000 + 10000 + 50000) * (3 / 5 - 1 / 2), "L4 single entry");
  eq(L("L5").format.entries[0].lines[2].cr, (20000 - 8000) / 2, "L5 IFR");
  eq(S("s1")[3], gw * 2 / 30, "s1 B"); eq(S("s2")[2], 85000 / 10, "s2"); eq(S("s3")[2], 6000 * 2 / 3, "s3"); eq(S("s4")[2], 6000, "s4");
  const cs = D.cases[0].qs; eq(cs[2].ans, 120000 * (2 / 5 - 1 / 4), "case Kunal"); eq(cs[3].ans, 120000 * (2 / 4 - 2 / 5), "case Isha"); eq(cs[4].ans, (40000 - 10000) / 5, "case Manav");
  const es = D.games.escape.locks; eq(es[1].ans, 72000 * (1 / 2 - 3 / 8), "Escape 2"); eq(es[2].ans, 15000 * 3 / 5, "Escape 3"); eq(es[3].ans, 60000 / 12, "Escape 4");
  const pf = D.games.profit; eq(pf.final.ans, pf.steps.reduce((a, s) => a + s.v, 0) / 6, "Revaluation Master");
  const T = D.test.items; eq(T[9].parts[0].ans, 150000 * (1 / 3 - 1 / 5), "Test C credit"); eq(T[9].parts[1].ans, 150000 * (2 / 5 - 1 / 3), "Test A debit"); eq(T[10].parts[1].ans, 80000 * (1 / 2 - 2 / 5), "Test single");
  eq(T[12].entries[1].lines[0].dr, 80000 * (1 / 2 - 1 / 4), "Test N goodwill");
}
/* ---------- Retirement and Death ---------- */
function retirement(){
  const L = id => D.lab.find(x => x.id === id), S = id => D.solver.find(x => x.id === id).steps.map(s => s.ans);
  const rv = 24000 - 6000, gw = 120000 / 6, due = 60000 + rv / 6 + 36000 / 6 + gw;
  eq(L("L1").format.entries[5].lines[0].dr, due, "L1 C due"); eq(L("L1").format.entries[5].lines[2].cr, due - 29000, "L1 loan");
  const g = L("L3").format.rows; eq(val(g[3][1]), 120000 + rv / 2 + 18000 - gw * 3 / 5, "L3 A"); eq(val(g[3][2]), 80000 + rv / 3 + 12000 - gw * 2 / 5, "L3 B");
  eq(L("L4").format.entries[0].lines[0].dr, 120000 * 3 / 12 / 5, "L4 Z profit"); eq(L("L5").format.total, 64000 + 6000, "L5 executor");
  eq(S("s1")[4], 72000 * 2 / 6 * 3 / 8, "s1 A"); eq(S("s2")[2], 89000 - 4000 - 25000, "s2 loan"); eq(S("s3")[2], 6000, "s3"); eq(S("s4")[2], 300000 * .15 / 4, "s4");
  const cs = D.cases[0].qs; eq(cs[1].ans, 120000 * 5 / 12 / 5, "case profit"); eq(cs[2].ans, 80000 * .06 * 5 / 12, "case interest");
  const es = D.games.escape.locks; eq(es[0].ans, 1 + 5, "Escape 1"); eq(es[2].ans, 144000 * 7 / 12 / 3, "Escape 3");
  const pf = D.games.profit; eq(pf.final.ans, pf.from + pf.steps.reduce((a, s) => a + s.v, 0) - 25000, "Amount Due Master");
  const ms = D.games.missing; eq(ms[3].ans, 200000 * .15 / 3, "Missing 4");
  const T = D.test.items; eq(T[9].parts[1].ans, 240000 * .15 / 6, "Test R share"); eq(T[10].parts[0].ans, 70000 + 8000 - 3000 + 25000 - 5000, "Test due");
  eq(T[12].entries[1].lines[2].cr, 50000 / 5, "Test Z goodwill");
}
/* ---------- Dissolution ---------- */
function dissolution(){
  const L = id => D.lab.find(x => x.id === id), S = id => D.solver.find(x => x.id === id).steps.map(s => s.ans);
  const dr = 30000 + 50000 + 70000 + 38000 + 3000, cr = 40000 + 28000 + 45000 + 60000, loss = dr - cr;
  eq(L("L2").format.total, dr, "L2 total"); eq(L("L2").format.right[4].amt, loss * 3 / 5, "L2 A loss");
  const pA = 60000 + 9000 - 45000 - loss * 3 / 5, pB = 40000 + 6000 - loss * 2 / 5;
  eq(L("L1").format.entries[8].lines[0].dr, pA, "L1 A final"); eq(L("L1").format.entries[8].lines[1].dr, pB, "L1 B final");
  eq(15000 + 28000 + 60000 - 38000 - 3000 - 10000, pA + pB, "Cash closes at nil"); eq(L("L4").format.total, 15000 + 28000 + 60000, "L4 cash total");
  eq(S("s1")[2], loss, "s1"); eq(S("s2")[2], pA, "s2"); eq(S("s3")[1], 18000 * .95, "s3"); eq(S("s4")[2], 103000 - 41000 - 10000, "s4");
  const cs = D.cases[0].qs; eq(cs[1].ans, 141000 - (24000 + 72000 + 18000 + 14000), "case loss"); eq(cs[2].ans, cs[1].ans * 3 / 4, "case Kavya");
  const es = D.games.escape.locks; eq(es[2].ans, (50000 + 19000) - (20000 + 33500 + 8000), "Escape 3"); eq(es[3].ans, 30000 - 8000 - 4500, "Escape 4");
  const pf = D.games.profit; eq(pf.final.ans, -pf.steps.reduce((a, s) => a + s.v, 0) * 2 / 5, "Realisation Master");
  eq(D.games.missing[4].ans, 30000 * .9, "Missing 5");
  const T = D.test.items; eq(T[8].parts[0].ans, (100000 + 29000 + 1000) - (30000 + 85000), "Test loss"); eq(T[9].parts[0].ans, 25000 * .96, "Test creditors"); eq(T[10].parts[0].ans, 40000 + 5000 + 3000 - 12000, "Test P");
}
const RECOMPUTE = {admission:admission, partnership:partnership, goodwill:goodwill, "change-psr":changePsr, retirement:retirement, dissolution:dissolution};
/* ---------- Partnership Fundamentals ---------- */
function partnership(){
  const L = id => D.lab.find(x => x.id === id), S = id => D.solver.find(x => x.id === id).steps.map(s => s.ans);
  // L1–L3 main case
  const iocA = 400000 * .1, iocB = 200000 * .1, sal = 3000 * 12, iodA = 60000 * .1 * 6 / 12, iodB = 48000 * .1 * 6 / 12;
  const div = 150000 + iodA + iodB - iocA - iocB - sal, pA = div * 3 / 5, pB = div * 2 / 5;
  eq(L("L1").format.entries[4].lines[0].dr, div, "L1 divisible profit"); eq(L("L1").format.entries[3].lines[0].dr, iodA, "L1 IOD A");
  eq(L("L2").format.total, 150000 + iodA + iodB, "L2 Appropriation total");
  const g3 = L("L3").format.rows; eq(val(g3[4][1]), 10000 + iocA + pA - 60000 - iodA, "L3 A closing current"); eq(val(g3[4][2]), 5000 + iocB + sal + pB - 48000 - iodB, "L3 B closing current");
  // L4 past adjustment X,Y,Z 1:1:1, 6%
  const ix = [150000, 100000, 50000].map(c => c * .06), tot = ix[0] + ix[1] + ix[2];
  eq(L("L4").format.entries[0].lines[1].cr, ix[0] - tot / 3, "L4 X net credit"); eq(L("L4").format.entries[0].lines[0].dr, tot / 3 - ix[2], "L4 Z net debit"); eq(ix[1] - tot / 3, 0, "L4 Y nil");
  // L5 guarantee
  eq(L("L5").format.entries[1].lines[2].cr, 50000 - 200000 / 5, "L5 deficiency");
  // illustrations
  eq(60000 * .06 * 6.5 / 12, 1950, "Illus 1 IOD");
  const i3 = D.illus.find(x => x.id === "i3").format.parts, d3 = 100000 + 3500 - 12000 - 9000 - 24000;
  eq(i3[0].left[3].amt, d3 * 3 / 5, "Illus 3 P profit"); eq(val(i3[1].rows[4][1]), 200000 + 12000 + 24000 + d3 * 3 / 5 - 32000, "Illus 3 P capital"); eq(val(i3[1].rows[4][2]), 150000 + 9000 + d3 * 2 / 5 - 21500, "Illus 3 Q capital");
  // solver
  eq(S("s1")[3], 60000 * .08 * 7.5 / 12, "s1 IOD"); eq(S("s2")[3], 15000 * 12 / 20, "s2 X"); eq(S("s3")[2], 120000 / 2 - (30000 - 20000), "s3 A");
  eq(S("s4")[3], 10000 - 7500, "s4 net");
  // games
  const pf = D.games.profit; eq(pf.final.ans, (pf.from + pf.steps.reduce((a, s) => a + s.v, 0)) * 3 / 5, "Profit Flow final");
  const ms = D.games.missing; eq(ms[0].ans, 48000 * .12 * 5.5 / 12, "Missing 1"); eq(ms[1].ans, 105000 * 5 / 105, "Missing 2"); eq(ms[3].ans, 10000 + 50000 * .1 / 2, "Missing 4"); eq(ms[4].ans, 30000 - 5000 * 3 / 5, "Missing 5");
  const es = D.games.escape.locks; eq(es[0].ans, 72000 * .1 * 6.5 / 12, "Escape 1"); eq(es[1].ans, 80000 * .06 / 2, "Escape 2"); eq(es[2].ans, 60000 - 10000, "Escape 3"); eq(es[3].ans, 220000 * 10 / 110, "Escape 4");
  const T = D.test.items; eq(T[8].parts[1].ans, 24000 * .09 * 6.5 / 12, "Test IOD"); eq(T[10].parts[0].ans, 120000 + 2000 - 20000 - 20000, "Test divisible");
  eq(T[12].entries[0].lines[2].cr, 12000 - 8000, "Test P net");
}
const files = process.argv[2] ? [process.argv[2] + ".js"] : fs.readdirSync(dir).filter(f => f.endsWith(".js"));
files.forEach(f => {
  D = null; require(path.join(dir, f));
  console.log("Checking " + f + " · " + D.title);
  structural();
  if(RECOMPUTE[D.id]) RECOMPUTE[D.id](); else { fails++; console.log("  ✗ no recomputation written for " + D.id); }
});
console.log((fails ? "FAILED " + fails : "All") + " of " + checks + " checks" + (fails ? "" : " passed"));
process.exit(fails ? 1 : 0);
