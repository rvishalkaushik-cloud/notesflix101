/* Notesflix 101 · Accountancy Lab · core
   One engine for every Accountancy chapter. Content lives in lab/data/<chapterId>.js and calls NFLab.register({...}).
   Page: lab/index.html?ch=<chapterId>#<section>
   Files: lab.js (core, layout, learning sections) · lab-fmt.js (accounting formats + numerical solver) ·
          lab-play.js (activities, games, revision, test, report).
   Progress: saved on the device (localStorage "nf.lab.v1") and, when the student is signed in with Google,
   in their own Firestore record (students/{uid}.lab), the same record the home page already uses. */
(function(){
"use strict";
var X = window.NFLX = {};
/* the lab's chapter list (sidebar). A chapter is "live" when lab/data/<id>.js exists and is listed here. */
var CHAPTERS = [
  {id:"partnership", t:"Accounting for Partnership Firms: Fundamentals", s:"live"},
  {id:"goodwill", t:"Goodwill: Nature and Valuation", s:"live"},
  {id:"change-psr", t:"Change in Profit Sharing Ratio", s:"live"},
  {id:"admission", t:"Admission of a Partner", s:"live"},
  {id:"retirement", t:"Retirement and Death of a Partner", s:"live"},
  {id:"dissolution", t:"Dissolution of a Partnership Firm", s:"live"},
  {id:"shares", t:"Accounting for Share Capital", s:"live"},
  {id:"debentures", t:"Issue of Debentures", s:"live"}
];
/* accounts every chapter may use; a chapter's own acc list adds to these */
function cap(x){ return {n: x + "'s Capital A/c", al:[x + " capital", "capital " + x, "capital of " + x, x + " cap", "capital a c of " + x]}; }
function cur(x){ return {n: x + "'s Current A/c", al:[x + " current", "current " + x, "current a c of " + x, "current account of " + x]}; }
var BASE_ACC = {
  cash:{n:"Cash A/c", al:["cash","cash in hand"]}, bank:{n:"Bank A/c", al:["bank","cash at bank"]},
  pla:{n:"Profit and Loss Appropriation A/c", al:["profit and loss appropriation","p l appropriation","pl appropriation","profit loss appropriation","appropriation"]},
  pl:{n:"Profit and Loss A/c", al:["profit and loss","p l","pl","profit loss"]},
  bal:{n:"Balance", al:["balance","balance c d","balance b d","balance cd","balance bd","bal c d","bal b d"]}
};
"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(function(x){ BASE_ACC["cap" + x] = cap(x); BASE_ACC["cur" + x] = cur(x); });           // shared internals for the other lab files
var D = null, ROOT = null, KEY = "nf.lab.v1";
var S = {v:1, ch:{}, badges:{}, t:0}, P = null;

/* ---------------- utils ---------------- */
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
function $(s, el){ return (el || document).querySelector(s); }
function $$(s, el){ return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
function el(html){ var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }
function inr(n){ if(n == null || n === "" || isNaN(n)) return ""; var neg = n < 0; n = Math.abs(Math.round(n * 100) / 100); return (neg ? "−" : "") + n.toLocaleString("en-IN"); }
function rupee(n){ return "₹" + inr(n); }
function shuffle(a){ a = a.slice(); for(var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function pct(a, b){ return b ? Math.round(a * 100 / b) : 0; }
function fmtTime(sec){ sec = Math.max(0, Math.round(sec)); var m = Math.floor(sec / 60); return (m >= 60 ? Math.floor(m / 60) + "h " + (m % 60) + "m" : m + ":" + ("0" + sec % 60).slice(-2)); }
function mins(sec){ sec = Math.round(sec || 0); return sec < 60 ? sec + " s" : Math.round(sec / 60) + " min"; }
function gcd(a, b){ a = Math.abs(a); b = Math.abs(b); while(b){ var t = b; b = a % b; a = t; } return a || 1; }
/* numbers typed by students: "1,56,300", "₹ 6300", "−2,500", "(2,500)" */
function parseNum(s){
  s = String(s == null ? "" : s).trim(); if(!s) return NaN;
  var neg = /^[-−–]|^\(.*\)$/.test(s), low = s.toLowerCase(), mult = /\b(lakhs?|lacs?)\b/.test(low) ? 100000 : /\bcrores?\b/.test(low) ? 10000000 : 1;
  s = low.replace(/\b(rs|inr)\.?/g, "").replace(/[^0-9.]/g, "").replace(/^\.+/, ""); if(!s) return NaN;
  var n = parseFloat(s) * mult; return neg ? -n : n;
}
function parseFrac(s){
  s = String(s || "").trim().replace(/\s+/g, ""); if(!s) return NaN;
  var m = s.match(/^(-?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/); if(m) return +m[2] ? m[1] / m[2] : NaN;
  if(/^-?\d*\.?\d+$/.test(s)) return +s;
  return NaN;
}
function parseRatio(s){
  var p = String(s || "").split(/\s*[:∶]\s*/).map(function(x){ return parseFloat(x.replace(/[^0-9.]/g, "")); });
  return p.length > 1 && p.every(function(x){ return !isNaN(x); }) ? p : null;
}
function sameRatio(a, b){
  if(!a || !b || a.length !== b.length) return false;
  for(var i = 0; i < a.length; i++) for(var j = 0; j < a.length; j++) if(Math.abs(a[i] * b[j] - a[j] * b[i]) > 1e-6) return false;
  return a.some(function(x){ return x !== 0; });
}
/* one comparison for every answer kind used by the solver, cases, games and test */
function check(kind, raw, ans, tol){
  if(kind === "frac"){ var v = parseFrac(raw); return {v:v, ok:!isNaN(v) && Math.abs(v - ans[0] / ans[1]) < 1e-3}; }
  if(kind === "ratio"){ var r = parseRatio(raw); return {v:r, ok:sameRatio(r, ans)}; }
  var n = parseNum(raw); return {v:n, ok:!isNaN(n) && Math.abs(n - ans) <= (tol == null ? 0.5 : tol)};
}
function trapHit(kind, v, traps){
  return (traps || []).filter(function(t){
    if(kind === "frac") return !isNaN(v) && Math.abs(v - t.v[0] / t.v[1]) < 1e-3;
    if(kind === "ratio") return sameRatio(v, t.v);
    return !isNaN(v) && Math.abs(v - t.v) < 0.5;
  })[0];
}
function showAns(kind, a){ return kind === "frac" ? a[0] + "/" + a[1] : kind === "ratio" ? a.join(" : ") : rupeeOr(a); }
function rupeeOr(a){ return Math.abs(a) >= 100 ? rupee(a) : String(a); }

/* account names: "To A's Capital A/c (profit)" → "a capital" */
function normAcc(s){
  s = String(s || "").toLowerCase().replace(/[’`]/g, "'").replace(/&/g, " and ");
  /* common short forms students write */
  s = s.replace(/\bapprop(n)?\b\.?/g, "appropriation").replace(/\bprov\b\.?/g, "provision").replace(/\bdeb\b\.?/g, "debenture").replace(/\bint\b\.?/g, "interest").replace(/\bexps?\b\.?/g, "expenses");
  s = s.replace(/\([^)]*\)/g, " ").replace(/\ba\s*\/\s*cs?\b|\baccounts?\b/g, " ");
  s = s.replace(/'s\b/g, "").replace(/s'/g, "s").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
  s = s.replace(/\bp and l\b/g, "p l").replace(/^(to|by)\s+/, "").replace(/\b(dr|cr)\b\.?/g, " ").replace(/\s+/g, " ").trim();
  s = s.replace(/^(profit|loss|gain)\s+(on\s+revaluation\s+)?(transferred\s+)?to\s+/, "").replace(/^(less|add)\s+/, "");
  return s.trim();
}
var ACC = null;   // [{k, names:[normalised]}]
function buildAcc(){
  var a = {}; Object.keys(BASE_ACC).forEach(function(k){ a[k] = BASE_ACC[k]; }); Object.keys(D.acc || {}).forEach(function(k){ a[k] = D.acc[k]; }); D.acc = a;
  ACC = Object.keys(D.acc).map(function(k){
    var a = D.acc[k]; return {k:k, names:[normAcc(a.n)].concat((a.al || []).map(normAcc)).filter(Boolean)};
  });
}
function matchAcc(raw){
  var s = normAcc(raw); if(!s) return null;
  var best = null, len = 0;
  ACC.forEach(function(a){ a.names.forEach(function(n){
    if(s === n && n.length + 1000 > len){ best = a.k; len = n.length + 1000; }
    else if(s.indexOf(n + " ") === 0 && n.length > len){ best = a.k; len = n.length; }
  }); });
  return best;
}
function accName(k){ return (D.acc[k] && D.acc[k].n) || k; }

function toast(msg){
  var t = $(".toast"); if(!t){ t = el('<div class="toast" role="status"></div>'); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("in"); clearTimeout(t._h); t._h = setTimeout(function(){ t.classList.remove("in"); }, 2400);
}
function xpPop(at, txt){
  if(!at || !at.getBoundingClientRect) return;
  var r = at.getBoundingClientRect(), x = el('<div class="xp">' + esc(txt) + '</div>');
  x.style.left = (r.left + r.width / 2 - 24) + "px"; x.style.top = (r.top - 6) + "px"; document.body.appendChild(x);
  setTimeout(function(){ x.remove(); }, 1100);
}
/* the four-part explanation every wrong answer gets */
function fb(ok, o){
  if(ok) return '<div class="fb good" role="status"><b>✓ Correct.</b> ' + (o.why || "") + '</div>';
  return '<div class="fb bad" role="status"><b>✗ Not yet.</b><dl>' +
    '<dt>What went wrong</dt><dd>' + (o.what || "This answer does not match.") + '</dd>' +
    (o.whyWrong ? '<dt>Why it is incorrect</dt><dd>' + o.whyWrong + '</dd>' : '') +
    '<dt>Correct approach</dt><dd>' + (o.why || "") + '</dd>' +
    (o.avoid ? '<dt>Next time</dt><dd>' + o.avoid + '</dd>' : '') + '</dl></div>';
}

/* ---------------- progress ---------------- */
function load(){ try{ var r = localStorage.getItem(KEY); if(r){ var o = JSON.parse(r); if(o && o.ch) S = o; } }catch(e){} if(!S.badges) S.badges = {}; }
var saveT = null;
function save(){
  P.t = Date.now(); S.t = P.t;
  try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){}
  clearTimeout(saveT); saveT = setTimeout(cloudSave, 3000);
}
function initP(){
  P = S.ch[D.id] = S.ch[D.id] || {};
  ["done","pre","kid","ka","ws","sv","mist","cs","games","rev","wk","errs","time","seen"].forEach(function(k){ if(!P[k] || typeof P[k] !== "object") P[k] = {}; });
  if(!Array.isArray(P.tests)) P.tests = [];
  if(!P.mode) P.mode = "kid";
}
/* concept accuracy: wk[c] = [right, wrong] ; errs[tag] = count of repeated mistakes */
function mark(c, ok, tag){
  if(c){ var w = P.wk[c] = P.wk[c] || [0, 0]; w[ok ? 0 : 1]++; }
  if(!ok && tag){ P.errs[tag] = (P.errs[tag] || 0) + 1; }
}
function done(sec){ if(!P.done[sec]){ P.done[sec] = Date.now(); save(); paintProgress(); toast("Section complete: " + secName(sec)); } }
function badge(id, name){ if(S.badges[id]) return; S.badges[id] = {n:name, at:Date.now()}; save(); toast("🏅 Badge unlocked: " + name); }

/* ---------------- cloud sync (Firebase, optional) ---------------- */
var cloud = {user:null, db:null, state:"local"};
function cloudInit(){
  var cfg = window.NF_AUTH;
  if(!cfg || !window.firebase || !cfg.firebase) return paintSync();
  try{
    if(!firebase.apps.length) firebase.initializeApp(cfg.firebase);
    cloud.db = firebase.firestore();
    firebase.auth().onAuthStateChanged(function(u){
      cloud.user = u || null; paintSync();
      if(!u) return;
      cloud.db.collection("students").doc(u.uid).get().then(function(d){
        var r = d.exists && d.data().lab;
        if(r && r.ch){
          Object.keys(r.ch).forEach(function(id){ if(!S.ch[id] || (r.ch[id].t || 0) > (S.ch[id].t || 0)) S.ch[id] = r.ch[id]; });
          Object.keys(r.badges || {}).forEach(function(b){ if(!S.badges[b]) S.badges[b] = r.badges[b]; });
          initP(); try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){}
          paintProgress(); route();
        }
        cloud.state = "synced"; paintSync(); cloudSave();
      }).catch(function(){ cloud.state = "local"; paintSync(); });
    });
  }catch(e){ paintSync(); }
}
function cloudSave(){
  if(!cloud.user || !cloud.db) return;
  cloud.db.collection("students").doc(cloud.user.uid).set({lab:S, labAt:firebase.firestore.FieldValue.serverTimestamp()}, {merge:true})
    .then(function(){ cloud.state = "synced"; paintSync(); }).catch(function(){ cloud.state = "local"; paintSync(); });
}
function paintSync(){
  var p = $("#sync"); if(!p) return;
  p.textContent = cloud.user ? (cloud.state === "synced" ? "☁ Saved to your account" : "☁ Saving…") : "💾 Saved on this device";
  p.title = cloud.user ? "Progress is saved in your Notesflix 101 account and follows you to any device." : "Sign in on the Notesflix 101 home page to save progress to your account.";
}

/* time spent per section (only while the tab is visible) */
var curSec = null;
setInterval(function(){ if(P && curSec && !document.hidden){ P.time[curSec] = (P.time[curSec] || 0) + 5; if(Math.random() < 0.2) save(); } }, 5000);

/* ---------------- sections ---------------- */
var SECS = [
  {k:"intro", n:"Chapter Introduction", e:"🎬", g:"learn"},
  {k:"objectives", n:"Learning Objectives", e:"🎯", g:"learn"},
  {k:"prereq", n:"Prerequisite Knowledge", e:"🧩", g:"learn"},
  {k:"kid", n:"Learn Like Class 7", e:"🧒", g:"learn"},
  {k:"exam", n:"Class 12 Detailed Explanation", e:"🎓", g:"learn"},
  {k:"visual", n:"Concept Visualisation", e:"📊", g:"learn"},
  {k:"formulas", n:"Formulas and Rules", e:"🧮", g:"learn"},
  {k:"illus", n:"Solved Illustrations", e:"📘", g:"practice"},
  {k:"solver", n:"Step-by-Step Solver", e:"🪜", g:"practice"},
  {k:"lab", n:"Accounting Practice Lab", e:"🧾", g:"practice"},
  {k:"blanks", n:"Blank Format Worksheets", e:"📄", g:"practice"},
  {k:"mistakes", n:"Mistake Detection", e:"🔎", g:"activities"},
  {k:"cases", n:"Case Study Practice", e:"💼", g:"activities"},
  {k:"games", n:"Interactive Games", e:"🎮", g:"games"},
  {k:"revision", n:"Chapter Revision", e:"📝", g:"revision"},
  {k:"test", n:"Chapter Test", e:"✅", g:"test"},
  {k:"report", n:"Performance Report", e:"📈", g:"mastery"}
];
var JOURNEY = [{g:"learn", n:"Learn", s:"Concepts", e:"📖"},{g:"practice", n:"Practice", s:"Numericals", e:"🧾"},{g:"activities", n:"Activities", s:"Interactive", e:"🧩"},{g:"games", n:"Games", s:"Learn & play", e:"🎮"},{g:"revision", n:"Revision", s:"Quick recap", e:"📝"},{g:"test", n:"Test", s:"Exam practice", e:"✅"},{g:"mastery", n:"Mastery", s:"Chapter complete", e:"🏆"}];
function secName(k){ var s = SECS.filter(function(x){ return x.k === k; })[0]; return s ? s.n : k; }
function secIndex(k){ for(var i = 0; i < SECS.length; i++) if(SECS[i].k === k) return i; return -1; }
function chapterPct(){ return pct(SECS.filter(function(s){ return P.done[s.k]; }).length, SECS.length); }
function groupDone(g){ var a = SECS.filter(function(s){ return s.g === g; }); return a.every(function(s){ return P.done[s.k]; }); }
function accuracy(){ var r = 0, w = 0; Object.keys(P.wk).forEach(function(c){ r += P.wk[c][0]; w += P.wk[c][1]; }); return {r:r, w:w, p:pct(r, r + w)}; }
function bestTest(){ return P.tests.reduce(function(m, t){ return Math.max(m, pct(t.got, t.max)); }, 0); }
function mastery(){ var a = accuracy(); return Math.round(chapterPct() * 0.3 + (a.r + a.w ? a.p : 0) * 0.4 + bestTest() * 0.3); }

var ROUTES = {};
X.route = function(k, fn){ ROUTES[k] = fn; };
function route(){
  var h = (location.hash || "#home").slice(1).split("/"), k = h[0], sub = h[1];
  if(!ROUTES[k]) k = "home";
  curSec = k === "home" ? null : k;
  ROOT.innerHTML = ""; ROOT.className = "main fade"; void ROOT.offsetWidth;
  if(k !== "home"){ P.last = k; P.seen[k] = (P.seen[k] || 0) + 1; save(); }
  ROUTES[k](ROOT, sub);
  paintNav(k);
  if(!X.keepScroll) window.scrollTo(0, 0); X.keepScroll = false;
  document.title = (k === "home" ? D.title : secName(k) + " · " + D.title) + " | Accountancy Lab | Notesflix 101";
}
function go(k){ if(location.hash === "#" + k) route(); else location.hash = k; }

/* section heading with prev/next and completion */
function head(k, sub){
  var s = SECS[secIndex(k)];
  return '<div class="shead"><span class="snum">' + ("0" + (secIndex(k) + 1)).slice(-2) + '</span><div class="grow"><h2>' + s.e + ' ' + s.n + '</h2>' + (sub ? '<p>' + sub + '</p>' : '') + '</div>' +
    (P.done[k] ? '<span class="chip ok">✓ Completed</span>' : '') + '</div>';
}
function foot(k, label){
  var i = secIndex(k), prev = SECS[i - 1], next = SECS[i + 1];
  return '<div class="sfoot">' + (prev ? '<a class="btn ghost" href="#' + prev.k + '">← ' + prev.n + '</a>' : '<span></span>') +
    (label && !P.done[k] ? '<button class="btn ok" data-done="' + k + '">✓ ' + label + '</button>' : '') +
    (next ? '<a class="btn" href="#' + next.k + '">' + next.n + ' →</a>' : '') + '</div>';
}
document.addEventListener("click", function(e){
  var d = e.target.closest && e.target.closest("[data-done]");
  if(d){ done(d.dataset.done); d.remove(); }
});

/* single MCQ widget used across sections. store = object to remember the answer, key = its id */
function mcqHTML(q, id){
  return '<div class="mcq" data-mcq="' + id + '"><p class="q">' + q.q + '</p><div class="opts">' +
    q.opts.map(function(o, i){ return '<button class="opt" data-i="' + i + '"><span class="ol">' + "ABCD"[i] + '</span>' + o + '</button>'; }).join("") +
    '</div><div class="fbx"></div></div>';
}
function wireMcq(box, q, store, id, c, onAns){
  var m = $('[data-mcq="' + id + '"]', box); if(!m) return;
  function paint(i){
    $$(".opt", m).forEach(function(b, j){ b.disabled = true; b.classList.toggle("right", j === q.a); b.classList.toggle("wrong", j === i && i !== q.a); });
    $(".fbx", m).innerHTML = fb(i === q.a, {what:"You chose “" + q.opts[i] + "”.", why:q.why || ("The answer is “" + q.opts[q.a] + "”.")});
    if(i !== q.a){ var r = el('<button class="btn sm ghost retry">Try again</button>'); r.onclick = function(){ delete store[id]; save(); $$(".opt", m).forEach(function(b){ b.disabled = false; b.className = "opt"; }); $(".fbx", m).innerHTML = ""; }; $(".fbx", m).appendChild(r); }
  }
  if(store[id] != null) paint(store[id]);
  $$(".opt", m).forEach(function(b){ b.onclick = function(){
    var i = +b.dataset.i; var first = store[id] == null; store[id] = i; mark(c, i === q.a, i === q.a ? null : c);
    if(i === q.a && first) xpPop(b, "+10 XP");
    save(); paint(i); if(onAns) onAns(i === q.a);
  }; });
}

/* ---------------- art: coded doodle illustrations ---------------- */
var ink = "#16123a";
function kidFace(x, y, s, shirt, hair, letter){
  return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<path d="M-26 70c2-26 12-36 26-36s24 10 26 36z" fill="' + shirt + '" stroke="' + ink + '" stroke-width="3"/>' +
    '<circle cx="0" cy="12" r="20" fill="#ffd3a8" stroke="' + ink + '" stroke-width="3"/>' +
    '<path d="M-20 8c0-16 9-22 20-22s20 6 20 20c-6-6-12-8-20-6-6-4-14-2-20 8z" fill="' + hair + '" stroke="' + ink + '" stroke-width="3"/>' +
    '<circle cx="-7" cy="14" r="2.6" fill="' + ink + '"/><circle cx="7" cy="14" r="2.6" fill="' + ink + '"/>' +
    '<path d="M-6 22q6 5 12 0" fill="none" stroke="' + ink + '" stroke-width="2.6" stroke-linecap="round"/>' +
    (letter ? '<text x="0" y="62" text-anchor="middle" font-family="Baloo 2,system-ui" font-weight="800" font-size="20" fill="#fff" stroke="' + ink + '" stroke-width=".8">' + letter + '</text>' : '') + '</g>';
}
var ART = {
  shop:function(){ return '<svg viewBox="0 0 320 200" class="art"><rect x="40" y="40" width="240" height="120" rx="10" fill="#ffe8b8" stroke="' + ink + '" stroke-width="3"/>' +
    '<path d="M30 40h260l-14-26H44z" fill="#ff6b6b" stroke="' + ink + '" stroke-width="3"/><path d="M58 14v26M86 14v26M114 14v26M142 14v26M170 14v26M198 14v26M226 14v26M254 14v26" stroke="#fff" stroke-width="8" opacity=".55"/>' +
    '<rect x="110" y="50" width="100" height="26" rx="6" fill="#fff" stroke="' + ink + '" stroke-width="2.5"/><text x="160" y="69" text-anchor="middle" font-family="Baloo 2,system-ui" font-weight="800" font-size="15" fill="' + ink + '">LEMONADE</text>' +
    kidFace(95, 108, 1, "#ff5d6c", "#3a2414", "A") + kidFace(160, 108, 1, "#3d7bff", "#1d1d1d", "B") + '<g class="joiner">' + kidFace(250, 112, 1, "#2ec27e", "#5b3a1a", "C") + '</g>' +
    '<path d="M205 150q18-14 30-6" fill="none" stroke="' + ink + '" stroke-width="3" stroke-dasharray="5 5"/></svg>'; },
  pizza:function(){
    function pie(cx, cy, r, n, col, cls){ var o = ""; for(var i = 0; i < n; i++){ var a0 = (i * 360 / n - 90) * Math.PI / 180, a1 = ((i + 1) * 360 / n - 90) * Math.PI / 180;
      o += '<path class="' + (cls ? cls + ' s' + Math.min(i, 4) : '') + '" d="M' + cx + ' ' + cy + 'L' + (cx + r * Math.cos(a0)).toFixed(1) + ' ' + (cy + r * Math.sin(a0)).toFixed(1) + 'A' + r + ' ' + r + ' 0 0 1 ' + (cx + r * Math.cos(a1)).toFixed(1) + ' ' + (cy + r * Math.sin(a1)).toFixed(1) + 'z" fill="' + col(i) + '" stroke="' + ink + '" stroke-width="' + (n > 10 ? 1 : 3) + '"/>'; } return o; }
    return '<svg viewBox="0 0 320 200" class="art"><g style="transform-origin:80px 92px">' + pie(80, 92, 64, 5, function(i){ return i < 3 ? "#ff5d6c" : "#3d7bff"; }, "slice") + '</g>' +
      '<text x="80" y="188" text-anchor="middle" class="cap">Before: 3 : 2</text>' +
      '<path d="M150 92h14" stroke="' + ink + '" stroke-width="3"/><path d="M162 85l8 7-8 7z" fill="' + ink + '"/>' +
      '<g class="after">' + pie(240, 92, 64, 25, function(j){ return j < 12 ? "#ff5d6c" : j < 20 ? "#3d7bff" : "#2ec27e"; }) + '<text x="240" y="188" text-anchor="middle" class="cap">After: 12 : 8 : 5</text></g></svg>'; },
  sacrifice:function(){ return '<svg viewBox="0 0 320 200" class="art">' +
    '<rect x="20" y="30" width="130" height="30" rx="6" fill="#ff5d6c55" stroke="' + ink + '" stroke-width="2"/><rect x="20" y="30" width="104" height="30" rx="6" fill="#ff5d6c" stroke="' + ink + '" stroke-width="2"/><text x="24" y="22" class="cap" text-anchor="start">A: 15/25 → 12/25</text>' +
    '<rect x="20" y="110" width="87" height="30" rx="6" fill="#3d7bff55" stroke="' + ink + '" stroke-width="2"/><rect x="20" y="110" width="70" height="30" rx="6" fill="#3d7bff" stroke="' + ink + '" stroke-width="2"/><text x="24" y="102" class="cap" text-anchor="start">B: 10/25 → 8/25</text>' +
    '<g class="flyA"><rect x="124" y="30" width="26" height="30" rx="4" fill="#ff5d6c" stroke="' + ink + '" stroke-width="2"/></g><g class="flyB"><rect x="90" y="110" width="17" height="30" rx="4" fill="#3d7bff" stroke="' + ink + '" stroke-width="2"/></g>' +
    '<rect x="220" y="66" width="80" height="44" rx="10" fill="#2ec27e" stroke="' + ink + '" stroke-width="3"/><text x="260" y="93" text-anchor="middle" font-family="Baloo 2,system-ui" font-weight="800" font-size="15" fill="#fff">C: 5/25</text>' +
    '<text x="160" y="180" text-anchor="middle" class="cap">Gave up 3/25 and 2/25 → sacrificing ratio 3 : 2</text></svg>'; },
  goodwill:function(){ return '<svg viewBox="0 0 320 200" class="art"><rect x="20" y="40" width="130" height="110" rx="10" fill="#ffe8b8" stroke="' + ink + '" stroke-width="3"/><path d="M12 40h146l-12-22H24z" fill="#ffb02e" stroke="' + ink + '" stroke-width="3"/>' +
    '<text x="85" y="100" text-anchor="middle" font-size="34">⭐</text><text x="85" y="135" text-anchor="middle" class="cap">famous stall</text>' +
    [0,1,2,3].map(function(i){ return '<circle cx="' + (175 + i * 32) + '" cy="132" r="13" fill="' + ["#ff9f43","#8f6bff","#3fe0ff","#ff5fa2"][i] + '" stroke="' + ink + '" stroke-width="2.5"/>'; }).join("") +
    '<text x="225" y="170" text-anchor="middle" class="cap">ready customers</text><g class="coin"><circle cx="250" cy="60" r="22" fill="#ffd84d" stroke="' + ink + '" stroke-width="3"/><text x="250" y="67" text-anchor="middle" font-family="Baloo 2,system-ui" font-weight="800" font-size="18" fill="' + ink + '">₹</text></g><text x="250" y="28" text-anchor="middle" class="cap">premium</text></svg>'; },
  reval:function(){ return '<svg viewBox="0 0 320 200" class="art"><rect x="30" y="60" width="90" height="70" rx="8" fill="#cfd8ff" stroke="' + ink + '" stroke-width="3"/><text x="75" y="102" text-anchor="middle" class="cap">juicer</text>' +
    '<g class="tag"><path d="M120 60l40-14 10 22-40 14z" fill="#ff5d6c" stroke="' + ink + '" stroke-width="2.5"/><text x="146" y="72" text-anchor="middle" font-size="11" fill="#fff" font-weight="800" transform="rotate(-19 146 72)">−500</text></g>' +
    '<rect x="190" y="50" width="100" height="90" rx="8" fill="#ffe8b8" stroke="' + ink + '" stroke-width="3"/><path d="M182 50h116l-58-30z" fill="#8f6bff" stroke="' + ink + '" stroke-width="3"/><text x="240" y="102" text-anchor="middle" class="cap">shop space</text>' +
    '<g class="tag2"><path d="M262 140l40 6-4 24-40-6z" fill="#2ec27e" stroke="' + ink + '" stroke-width="2.5"/><text x="281" y="160" text-anchor="middle" font-size="11" fill="#fff" font-weight="800">+</text></g>' +
    '<circle cx="110" cy="160" r="20" fill="none" stroke="' + ink + '" stroke-width="4"/><path d="M124 174l18 18" stroke="' + ink + '" stroke-width="6" stroke-linecap="round"/></svg>'; },
  piggy:function(){ return '<svg viewBox="0 0 320 200" class="art"><ellipse cx="150" cy="110" rx="80" ry="58" fill="#ff9fc0" stroke="' + ink + '" stroke-width="3"/><circle cx="215" cy="98" r="16" fill="#ff9fc0" stroke="' + ink + '" stroke-width="3"/><circle cx="210" cy="94" r="2.5" fill="' + ink + '"/><circle cx="220" cy="94" r="2.5" fill="' + ink + '"/>' +
    '<path d="M110 60l14 14M160 52h30" stroke="' + ink + '" stroke-width="4" stroke-linecap="round"/><rect x="100" y="160" width="14" height="22" fill="#ff9fc0" stroke="' + ink + '" stroke-width="3"/><rect x="180" y="160" width="14" height="22" fill="#ff9fc0" stroke="' + ink + '" stroke-width="3"/>' +
    '<text x="150" y="118" text-anchor="middle" font-family="Baloo 2,system-ui" font-weight="800" font-size="20" fill="' + ink + '">₹1,000</text>' +
    '<g class="coin"><circle cx="60" cy="60" r="14" fill="#ffd84d" stroke="' + ink + '" stroke-width="2.5"/><text x="60" y="65" text-anchor="middle" font-size="12" font-weight="800">600</text></g><g class="coin d2"><circle cx="270" cy="160" r="14" fill="#ffd84d" stroke="' + ink + '" stroke-width="2.5"/><text x="270" y="165" text-anchor="middle" font-size="12" font-weight="800">400</text></g>' +
    '<text x="60" y="94" text-anchor="middle" class="cap">Asha</text><text x="270" y="194" text-anchor="middle" class="cap">Bunty</text></svg>'; },
  scale:function(){ return '<svg viewBox="0 0 320 200" class="art"><path d="M160 30v140M100 180h120" stroke="' + ink + '" stroke-width="5" stroke-linecap="round"/><g class="beam"><path d="M60 60h200" stroke="' + ink + '" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M60 60l-30 50h60z" fill="#ffd84d55" stroke="' + ink + '" stroke-width="2.5"/><path d="M260 60l-30 50h60z" fill="#2ec27e55" stroke="' + ink + '" stroke-width="2.5"/>' +
    '<text x="60" y="104" text-anchor="middle" class="cap">A+B ₹20,000</text><text x="260" y="104" text-anchor="middle" class="cap">C ₹5,000</text></g>' +
    '<text x="160" y="22" text-anchor="middle" class="cap">4/5 : 1/5</text></svg>'; },
  hero:function(){ return '<svg viewBox="0 0 300 170" class="art hero-art"><rect x="60" y="20" width="180" height="120" rx="12" fill="#2c2a6b" stroke="#ffd84d" stroke-width="3"/><path d="M50 20h200l-14-18H64z" fill="#ff5d6c" stroke="' + ink + '" stroke-width="3"/>' +
    '<text x="150" y="48" text-anchor="middle" font-family="Baloo 2,system-ui" font-weight="800" font-size="16" fill="#ffd84d">PARTNERSHIP FIRM</text>' +
    kidFace(105, 82, .9, "#ff5d6c", "#3a2414", "A") + kidFace(150, 82, .9, "#3d7bff", "#1d1d1d", "B") + kidFace(200, 86, .9, "#2ec27e", "#5b3a1a", "C") + '</svg>'; }
};
/* a scene from data: {s:[["🧑","Ram"],["➡️"],["🏪","Shop"]], cap:"…"} drawn as big emoji tiles */
function scene(o){ return '<div class="scene"><div class="srow">' + o.s.map(function(x, i){ return '<div class="sc-i" style="--i:' + i + '"><span>' + x[0] + '</span>' + (x[1] ? '<b>' + esc(x[1]) + '</b>' : '') + '</div>'; }).join("") + '</div>' + (o.cap ? '<p class="scap">' + esc(o.cap) + '</p>' : '') + '</div>'; }
X.art = function(k){ return k && typeof k === "object" ? scene(k) : ART[k] ? ART[k]() : ""; };

/* ---------------- layout ---------------- */
function shell(){
  document.body.innerHTML =
  '<header class="top"><button class="ham" id="ham" aria-label="Open chapters" aria-expanded="false">☰</button>' +
  '<a class="logo" href="../" aria-label="Notesflix 101 home">Notesflix<b>101</b></a>' +
  '<nav class="tnav" aria-label="Site"><a href="../">🏠 <span>Home</span></a><a href="../learn/">📚 <span>Subjects</span></a><a class="on" href="#home">📊 <span>Accountancy</span></a><a href="#lab">📝 <span>Practice</span></a><a href="#games">🎮 <span>Games</span></a><a href="#report">📈 <span>My Progress</span></a></nav>' +
  '<span class="sync" id="sync"></span></header>' +
  '<div class="layout"><aside class="side" id="side" aria-label="Chapters"><div class="sbrand"><span class="sico">🧾</span><div><b>Accountancy</b><small>Class ' + esc(D.cls) + ' (CBSE)</small></div></div>' +
  '<div class="cls"><span>Class 11</span><span class="on">Class 12</span></div><h4>☰ Chapters</h4><ol class="chlist">' +
  (D.chapters || CHAPTERS).map(function(c, i){ var cur = c.id === D.id;
    return '<li class="' + (cur ? "cur" : "") + (c.s !== "live" ? " lock" : "") + '">' + (c.s === "live" && !cur ? '<a href="?ch=' + c.id + '">' : '<span>') + '<i>' + (i + 1) + '.</i><span>' + esc(c.t) + '</span>' +
      (cur ? '<em>▶</em>' : c.s !== "live" ? '<em title="Lab coming soon">🔒</em>' : '') + (c.s === "live" && !cur ? '</a>' : '</span>') + '</li>'; }).join("") +
  '</ol><div class="pcard"><div class="pc-top"><span>🏆</span><div><small>Chapter progress</small><b id="cpct">0%</b></div></div><div class="bar"><i id="cbar"></i></div><small id="cmast"></small></div>' +
  '<a class="back" href="' + esc(D.notesLink) + '">← All Class 12 Accountancy notes</a></aside>' +
  '<div class="center"><section class="chero"><div class="cico">' + esc(D.icon || "🤝") + '</div><div class="ctext"><small>Chapter ' + esc(D.num) + ' · ' + esc(D.unit) + '</small><h1>' + esc(D.title) + '</h1><p>' + esc(D.tagline) + '</p></div><div class="cart">' + ART.hero() + '</div>' +
  '<div class="modes" role="group" aria-label="Choose your learning mode"><b>Choose your learning mode</b><div class="mrow">' +
  '<button class="mode m7" data-mode="kid"><span class="mi">🧒</span><span><b>Explain Like I’m in Class 7</b><small>Simple · Fun · Relatable examples</small></span></button>' +
  '<button class="mode m12" data-mode="exam"><span class="mi">🎓</span><span><b>Class 12 (CBSE) Mode</b><small>Detailed · Conceptual · Exam ready</small></span></button></div></div></section>' +
  '<nav class="secnav" id="secnav" aria-label="Chapter sections"></nav>' +
  '<main id="app" class="main" aria-live="polite"></main></div>' +
  '<aside class="tool" id="tool" aria-label="Chapter toolkit"></aside></div>' +
  '<footer class="journey" id="journey" aria-label="Complete the chapter"></footer>';
  ROOT = $("#app");
  $("#ham").onclick = function(){ var o = document.body.classList.toggle("sideopen"); this.setAttribute("aria-expanded", o); };
  $("#side").addEventListener("click", function(e){ if(e.target.closest("a")) document.body.classList.remove("sideopen"); });
  $$(".mode").forEach(function(b){ b.onclick = function(){ P.mode = b.dataset.mode; save(); paintMode(); go(P.mode); }; });
  paintMode(); paintTool(); paintSync();
}
function paintMode(){ $$(".mode").forEach(function(b){ b.classList.toggle("on", b.dataset.mode === P.mode); b.setAttribute("aria-pressed", b.dataset.mode === P.mode); }); }
function paintNav(k){
  $("#secnav").innerHTML = '<a href="#home" class="' + (k === "home" ? "on" : "") + '">🏠 Overview</a>' + SECS.map(function(s, i){
    return '<a href="#' + s.k + '" class="' + (k === s.k ? "on " : "") + (P.done[s.k] ? "dn" : "") + '"><i>' + ("0" + (i + 1)).slice(-2) + '</i>' + s.n + (P.done[s.k] ? ' <b>✓</b>' : '') + '</a>'; }).join("");
  var on = $("#secnav .on"); if(on && on.scrollIntoView) on.scrollIntoView({block:"nearest", inline:"center"});
  paintProgress();
}
function paintProgress(){
  var c = chapterPct(); if($("#cpct")) $("#cpct").textContent = c + "%"; if($("#cbar")) $("#cbar").style.width = c + "%";
  if($("#cmast")) $("#cmast").textContent = "Mastery " + mastery() + "% · " + SECS.filter(function(s){ return P.done[s.k]; }).length + " of 17 sections";
  var j = $("#journey"); if(!j) return;
  j.innerHTML = '<b class="jtitle">🎯 Complete the Chapter</b><div class="jrow">' + JOURNEY.map(function(x, i){
    var d = x.g === "mastery" ? mastery() >= 80 : groupDone(x.g);
    return (i ? '<span class="jline" aria-hidden="true"></span>' : '') + '<a class="jn' + (d ? " d" : "") + '" href="#' + (x.g === "learn" ? P.mode : x.g === "practice" ? "lab" : x.g === "activities" ? "mistakes" : x.g === "mastery" ? "report" : x.g) + '"><span class="je">' + x.e + (d ? '<i>✓</i>' : '') + '</span><b>' + x.n + '</b><small>' + x.s + '</small></a>'; }).join("") + '</div>';
}
function paintTool(){
  var t = $("#tool");
  t.innerHTML = '<div class="tcard"><h3>🧰 Chapter Toolkit</h3>' +
    [["kid","📖","Interactive Notes","Concepts with visuals & examples","b1"],["lab","🧾","Practice Lab","Solve in real accounting formats","b2"],["games","🎮","Accountancy Games","Learn through challenges","b3"],["revision","📝","Revision & Summary","One-page notes, formulas & key points","b4"],["test","✅","Chapter Test","MCQs, numericals & case studies","b5"]]
    .map(function(x){ return '<a class="tkl ' + x[4] + '" href="#' + (x[0] === "kid" ? P.mode : x[0]) + '"><span>' + x[1] + '</span><div><b>' + x[2] + '</b><small>' + x[3] + '</small></div><i>›</i></a>'; }).join("") + '</div>' +
    '<div class="tcard"><h3>🎮 Games Zone</h3><div class="gz">' + (X.gameList ? X.gameList().map(function(g){ return '<a class="gzb" style="--g:' + g.col + '" href="#games/' + g.k + '"><span>' + g.e + '</span>' + g.n + '</a>'; }).join("") : "") + '</div></div>';
}
X.paintTool = paintTool;

/* ================= ROUTES: overview ================= */
X.route("home", function(R){
  var resume = P.last && P.last !== "home" ? '<div class="resume"><span>⏯ Continue where you stopped: <b>' + esc(secName(P.last)) + '</b></span><a class="btn" href="#' + P.last + '">Resume →</a></div>' : "";
  var k = D.kid[0], tq = D.revision.mcq[2], sv = D.solver[1];
  R.innerHTML = resume + '<div class="dash">' +
    '<section class="card learn"><div class="ch"><h3>🔍 Learn the Concept <small>(' + (P.mode === "kid" ? "Class 7 Mode" : "Class 12 Mode") + ')</small></h3><a class="btn sm" href="#' + (P.mode === "kid" ? "exam" : "kid") + '">Try ' + (P.mode === "kid" ? "Class 12" : "Class 7") + ' Mode →</a></div>' +
      (P.mode === "kid" ? '<div class="lc"><div class="lart">' + X.art(k.art) + '</div><div><h4>' + esc((D.home || {}).q || k.title) + '</h4>' + k.story.split("</p>")[0] + '</p><ul class="ticks">' + ((D.home || {}).ticks || []).map(function(t){ return '<li>' + esc(t) + '</li>'; }).join("") + '</ul><a class="btn" href="#kid">Start the story →</a></div></div>'
      : '<div class="lc one">' + D.exam[0].html + '<a class="btn" href="#exam">Read the full explanation →</a></div>') + '</section>' +
    '<section class="card solv"><h3>🎯 Step-by-Step Solver</h3><p class="muted">' + esc(sv.title) + '</p><ol class="steps">' + sv.steps.map(function(s, i){ var d = P.sv[sv.id] && P.sv[sv.id].g && P.sv[sv.id].g > i; return '<li class="' + (d ? "d" : "") + '"><i>' + (d ? "✓" : i + 1) + '</i>' + esc(s.label) + '</li>'; }).join("") + '</ol><a class="btn" href="#solver/' + sv.id + '">Solve step by step →</a></section>' +
    '<section class="card try"><h3>🎯 Try It Yourself</h3><div id="dashq"></div></section>' +
    '<section class="card mini"><div class="ch"><h3>🧾 Interactive Accounting Lab</h3><span class="chip">Journal Entry Practice</span></div><div id="dashlab"></div></section>' +
    '</div>';
  wireMcqInto($("#dashq"), tq, P.rev, "dash", tq.c);
  if(X.worksheet) X.worksheet($("#dashlab"), D.lab[0], {compact:true});
});
function wireMcqInto(box, q, store, id, c){ box.innerHTML = mcqHTML(q, id); wireMcq(box, q, store, id, c); }

/* 01 Chapter introduction */
X.route("intro", function(R){
  R.innerHTML = head("intro", "Why this chapter matters") + '<div class="card story"><div class="lart">' + ART.shop() + '</div><p class="hook">' + esc(D.intro.hook) + '</p></div>' +
    '<div class="card"><ul class="big">' + D.intro.points.map(function(p){ return '<li>' + p + '</li>'; }).join("") + '</ul><p class="note">📌 ' + esc(D.intro.weight) + '</p></div>' +
    '<div class="card"><h3>What you will do in this chapter</h3><div class="flowmini">' + D.visual.flow.map(function(f, i){ return '<span>' + (i + 1) + '. ' + esc(f) + '</span>'; }).join("<b>→</b>") + '</div></div>' + foot("intro", "Mark introduction as read");
});
/* 02 Objectives */
X.route("objectives", function(R){
  R.innerHTML = head("objectives", "Tick each one when you can do it without help") + '<div class="card"><ul class="objs">' + D.objectives.map(function(o, i){
    var on = P.seen["obj" + i]; return '<li><label><input type="checkbox" data-o="' + i + '"' + (on ? " checked" : "") + '> <span>' + esc(o) + '</span></label></li>'; }).join("") + '</ul></div>' + foot("objectives", "Mark objectives as read");
  $$("[data-o]", R).forEach(function(c){ c.onchange = function(){ P.seen["obj" + c.dataset.o] = c.checked ? 1 : 0; save(); }; });
});
/* 03 Prerequisites */
X.route("prereq", function(R){
  R.innerHTML = head("prereq", "Three quick checks. If one goes wrong, read the tip and try again.") + D.prereq.map(function(p, i){
    return '<div class="card pre"><h3>' + (i + 1) + '. ' + esc(p.t) + '</h3><p>' + esc(p.d) + '</p>' + mcqHTML(p.check, "pre" + i) + '</div>'; }).join("") + foot("prereq");
  D.prereq.forEach(function(p, i){ wireMcq(R, p.check, P.pre, "pre" + i, null, function(){ if(D.prereq.every(function(q, j){ return P.pre["pre" + j] === q.check.a; })) done("prereq"); }); });
});
/* 04 Learn like Class 7 */
X.route("kid", function(R){
  P.mode = "kid"; paintMode();
  R.innerHTML = head("kid", "Simple words, everyday examples. Answer the small question after each story.") +
    '<div class="kidnav">' + D.kid.map(function(k, i){ return '<a href="#k-' + k.id + '" class="' + (P.kid[k.id] === k.check.a ? "d" : "") + '">' + (i + 1) + '</a>'; }).join("") + '</div>' +
    D.kid.map(function(k, i){
      return '<article class="card kid" id="k-' + k.id + '"><div class="kh"><span class="kn">' + (i + 1) + '</span><h3>' + esc(k.title) + '</h3><button class="btn sm ghost replay" data-r="' + k.id + '" title="Play the picture again">▶ Replay</button></div>' +
        '<div class="kbody"><div class="lart anim">' + X.art(k.art) + '</div><div class="ktext">' + k.story + '</div></div>' +
        '<div class="qa">' + k.qa.map(function(q){ return '<details><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>'; }).join("") + '</div>' +
        '<div class="kq"><span class="tagq">Small question</span>' + mcqHTML(k.check, k.id) + '</div></article>'; }).join("") +
    D.kidActs.map(function(a){ return '<div class="card act" id="' + a.id + '"></div>'; }).join("") + foot("kid");
  D.kid.forEach(function(k){ wireMcq(R, k.check, P.kid, k.id, k.c, function(){ kidDone(); var a = $('.kidnav a[href="#k-' + k.id + '"]'); if(a && P.kid[k.id] === k.check.a) a.classList.add("d"); }); });
  $$(".replay", R).forEach(function(b){ b.onclick = function(){ var a = $("#k-" + b.dataset.r + " .lart"); a.classList.remove("anim"); void a.offsetWidth; a.classList.add("anim"); }; });
  $$(".kidnav a", R).forEach(function(a){ a.onclick = function(e){ e.preventDefault(); var t = $(a.getAttribute("href")); if(t) t.scrollIntoView({behavior:"smooth"}); }; });
  D.kidActs.forEach(function(a){ if(X.activity) X.activity($("#" + a.id), a); });
});
function kidDone(){ if(D.kid.every(function(k){ return P.kid[k.id] === k.check.a; })) done("kid"); }
/* 05 Class 12 explanation */
X.route("exam", function(R){
  P.mode = "exam"; paintMode();
  R.innerHTML = head("exam", "CBSE syllabus and NCERT approach. Open each block; the last one shows how to present answers in the board exam.") +
    '<div class="tocx">' + D.exam.map(function(e, i){ return '<a href="#" data-x="' + e.id + '" class="' + (P.seen["x" + e.id] ? "d" : "") + '">' + (i + 1) + '. ' + esc(e.title) + '</a>'; }).join("") + '</div>' +
    D.exam.map(function(e, i){ return '<details class="card exb" id="x-' + e.id + '"' + (i === 0 ? " open" : "") + '><summary><span class="kn">' + (i + 1) + '</span>' + esc(e.title) + '<span class="cpt">' + esc(D.concepts[e.c].n) + '</span></summary><div class="exc">' + e.html + '</div></details>'; }).join("") + foot("exam");
  function seen(id){ P.seen["x" + id] = 1; save(); var a = $('[data-x="' + id + '"]', R); if(a) a.classList.add("d"); if(D.exam.every(function(e){ return P.seen["x" + e.id]; })) done("exam"); }
  $$("details.exb", R).forEach(function(d){ if(d.open) seen(d.id.slice(2)); d.addEventListener("toggle", function(){ if(d.open) seen(d.id.slice(2)); }); });
  $$("[data-x]", R).forEach(function(a){ a.onclick = function(e){ e.preventDefault(); var d = $("#x-" + a.dataset.x); d.open = true; d.scrollIntoView({behavior:"smooth"}); }; });
});
/* 06 Concept visualisation: an interactive playground (kind set by the chapter) + the chapter flow */
function Fr(n, d){ if(d < 0){ n = -n; d = -d; } var g = gcd(n, d) || 1; return [n / g, d / g]; }
function fadd(a, b){ return Fr(a[0] * b[1] + b[0] * a[1], a[1] * b[1]); }
function fsub(a, b){ return Fr(a[0] * b[1] - b[0] * a[1], a[1] * b[1]); }
function fmul(a, b){ return Fr(a[0] * b[0], a[1] * b[1]); }
function fs(a){ return a[0] === 0 ? "0" : a[1] === 1 ? String(a[0]) : a[0] + "/" + a[1]; }
function toRatio(arr){ var L = arr.reduce(function(l, x){ return l * x[1] / gcd(l, x[1]); }, 1), r = arr.map(function(x){ return x[0] * L / x[1]; }), g = r.reduce(function(a, b){ return gcd(a, b); }); return r.map(function(x){ return x / (g || 1); }); }
var COLS = ["#ff5d6c","#3d7bff","#2ec27e","#ffb02e"];
function bar(n, oldF, newF, col){ return '<div class="brow"><b>' + n + '</b><div class="btrack"><i class="old" style="width:' + (oldF[0] / oldF[1] * 100) + '%"></i><i style="width:' + Math.max(0, newF[0] / newF[1] * 100) + '%;background:' + col + '"></i></div><span>' + (oldF[0] ? fs(oldF) : "—") + ' → <b>' + (newF[0] ? fs(newF) : "—") + '</b></span></div>'; }
function num(id, v, w){ return '<input type="number" id="' + id + '" value="' + v + '" min="0" style="width:' + (w || 70) + 'px">'; }
var PLAY = {
  admit:function(V){
    return {ctl:'<label>Old ratio ' + V.names[0] + ' : ' + V.names[1] + ' <span>' + num("o1", V.old[0], 58) + ' : ' + num("o2", V.old[1], 58) + '</span></label><label>' + V.newName + '’s share: <b id="shv"></b><input type="range" id="sh" min="2" max="10" value="' + V.share[1] + '"></label><label>How ' + V.newName + ' gets it <select id="how"><option value="old">From both, in the old ratio</option><option value="eq">Equally from both</option><option value="a">Only from ' + V.names[0] + '</option><option value="b">Only from ' + V.names[1] + '</option></select></label>',
      draw:function(){
        var o1 = Math.max(1, +$("#o1").value || 1), o2 = Math.max(1, +$("#o2").value || 1), d = +$("#sh").value, how = $("#how").value;
        var A = Fr(o1, o1 + o2), B = Fr(o2, o1 + o2), C = [1, d], sa, sb;
        if(how === "old"){ sa = fmul(C, A); sb = fmul(C, B); } else if(how === "eq"){ sa = Fr(1, 2 * d); sb = Fr(1, 2 * d); } else if(how === "a"){ sa = C; sb = [0, 1]; } else { sa = [0, 1]; sb = C; }
        var nA = fsub(A, sa), nB = fsub(B, sb); $("#shv").textContent = "1/" + d;
        if(nA[0] < 0 || nB[0] < 0) return ['', '<p class="fb bad">That partner does not have enough share to give. Choose a smaller share.</p>'];
        var r = toRatio([nA, nB, C]), sr = toRatio([sa, sb].map(function(x){ return x[0] ? x : [0, 1]; }));
        return [bar(V.names[0], A, nA, COLS[0]) + bar(V.names[1], B, nB, COLS[1]) + bar(V.newName, [0, 1], C, COLS[2]),
          '<div class="kpis"><div><small>New ratio</small><b>' + r.join(" : ") + '</b></div><div><small>Sacrifice ' + V.names[0] + '</small><b>' + fs(sa) + '</b></div><div><small>Sacrifice ' + V.names[1] + '</small><b>' + fs(sb) + '</b></div><div><small>Sacrificing ratio</small><b>' + sr.join(" : ") + '</b></div></div><p class="muted">Working: ' + V.names[0] + ' = ' + fs(A) + ' − ' + fs(sa) + ' = ' + fs(nA) + '; ' + V.names[1] + ' = ' + fs(B) + ' − ' + fs(sb) + ' = ' + fs(nB) + '; ' + V.newName + ' = 1/' + d + '.</p>'];
      }};
  },
  retire:function(V){
    return {ctl:'<label>Old ratio ' + V.names.join(" : ") + ' <span>' + V.old.map(function(x, i){ return num("o" + i, x, 52); }).join(" : ") + '</span></label><label>Who retires? <select id="who">' + V.names.map(function(n, i){ return '<option value="' + i + '"' + (i === V.out ? " selected" : "") + '>' + n + '</option>'; }).join("") + '</select></label><label>Remaining partners take his share <select id="how"><option value="old">In their old ratio</option><option value="eq">Equally</option></select></label>',
      draw:function(){
        var o = V.names.map(function(n, i){ return Math.max(1, +$("#o" + i).value || 1); }), T = o.reduce(function(a, b){ return a + b; }), w = +$("#who").value, how = $("#how").value;
        var old = o.map(function(x){ return Fr(x, T); }), rest = V.names.map(function(n, i){ return i; }).filter(function(i){ return i !== w; }), RT = rest.reduce(function(a, i){ return a + o[i]; }, 0);
        var gain = V.names.map(function(n, i){ return i === w ? [0, 1] : how === "old" ? fmul(old[w], Fr(o[i], RT)) : fmul(old[w], Fr(1, rest.length)); });
        var nw = V.names.map(function(n, i){ return i === w ? [0, 1] : fadd(old[i], gain[i]); });
        var r = toRatio(rest.map(function(i){ return nw[i]; })), gr = toRatio(rest.map(function(i){ return gain[i]; }));
        return [V.names.map(function(n, i){ return bar(n + (i === w ? " ✈" : ""), old[i], nw[i], COLS[i]); }).join(""),
          '<div class="kpis"><div><small>New ratio ' + rest.map(function(i){ return V.names[i]; }).join(":") + '</small><b>' + r.join(" : ") + '</b></div><div><small>Gaining ratio</small><b>' + gr.join(" : ") + '</b></div>' + rest.map(function(i){ return '<div><small>Gain of ' + V.names[i] + '</small><b>' + fs(gain[i]) + '</b></div>'; }).join("") + '</div><p class="muted">Gain = New share − Old share. ' + V.names[w] + '’s share of ' + fs(old[w]) + ' is taken by the others.</p>'];
      }};
  },
  change:function(V){
    return {ctl:'<label>Old ratio ' + V.names.join(" : ") + ' <span>' + V.old.map(function(x, i){ return num("o" + i, x, 52); }).join(" : ") + '</span></label><label>New ratio <span>' + V.nw.map(function(x, i){ return num("n" + i, x, 52); }).join(" : ") + '</span></label>',
      draw:function(){
        var o = V.names.map(function(n, i){ return Math.max(0, +$("#o" + i).value || 0); }), n = V.names.map(function(x, i){ return Math.max(0, +$("#n" + i).value || 0); });
        var TO = o.reduce(function(a, b){ return a + b; }) || 1, TN = n.reduce(function(a, b){ return a + b; }) || 1;
        var old = o.map(function(x){ return Fr(x, TO); }), nw = n.map(function(x){ return Fr(x, TN); }), diff = old.map(function(x, i){ return fsub(x, nw[i]); });
        return [V.names.map(function(x, i){ return bar(x, old[i], nw[i], COLS[i]); }).join(""),
          '<div class="kpis">' + V.names.map(function(x, i){ var d = diff[i]; return '<div><small>' + x + '</small><b>' + (d[0] > 0 ? "Sacrifice " + fs(d) : d[0] < 0 ? "Gain " + fs([-d[0], d[1]]) : "No change") + '</b></div>'; }).join("") + '</div><p class="muted">Old share − New share: positive = sacrifice, negative = gain. Gaining partners compensate sacrificing partners for goodwill in this proportion.</p>'];
      }};
  },
  approp:function(V){
    return {ctl:'<label>Net profit (₹) ' + num("np", V.profit, 110) + '</label><label>Capitals ' + V.names.join(", ") + ' <span>' + V.caps.map(function(x, i){ return num("c" + i, x, 100); }).join(" ") + '</span></label><label>Interest on capital % ' + num("ioc", V.rate, 60) + '</label><label>Salary to ' + V.names[1] + ' (₹ a year) ' + num("sal", V.salary, 90) + '</label><label>Ratio ' + V.names.join(":") + ' <span>' + V.ratio.map(function(x, i){ return num("r" + i, x, 50); }).join(" : ") + '</span></label>',
      draw:function(){
        var np = +$("#np").value || 0, caps = V.names.map(function(n, i){ return +$("#c" + i).value || 0; }), rate = +$("#ioc").value || 0, sal = +$("#sal").value || 0, rr = V.names.map(function(n, i){ return +$("#r" + i).value || 0; }), RT = rr.reduce(function(a, b){ return a + b; }) || 1;
        var ioc = caps.map(function(c){ return c * rate / 100; }), dues = ioc.concat([sal]), need = dues.reduce(function(a, b){ return a + b; }, 0), ok = np >= need, f = ok ? 1 : (need ? np / need : 0);
        var rem = ok ? np - need : 0, rows = [];
        V.names.forEach(function(n, i){ rows.push(["Interest on capital: " + n, ioc[i] * f]); });
        rows.push(["Salary: " + V.names[1], sal * f]);
        V.names.forEach(function(n, i){ rows.push(["Share of profit: " + n, rem * rr[i] / RT]); });
        var mx = Math.max(np, 1);
        return ['<div class="wf">' + rows.map(function(r, i){ return '<div class="brow"><b style="font-size:13px;width:auto">' + (i + 1) + '</b><div class="btrack"><i style="width:' + (r[1] / mx * 100) + '%;background:' + COLS[i % 4] + '"></i></div><span>' + esc(r[0]) + ': <b>₹' + inr(Math.round(r[1])) + '</b></span></div>'; }).join("") + '</div>',
          '<div class="kpis"><div><small>Appropriations due</small><b>₹' + inr(need) + '</b></div><div><small>Profit available</small><b>₹' + inr(np) + '</b></div><div><small>Case</small><b>' + (ok ? "Sufficient" : "Insufficient") + '</b></div><div><small>Divisible profit</small><b>₹' + inr(Math.round(rem)) + '</b></div></div><p class="muted">' + (ok ? "Profit covers interest and salary; the balance is shared in the profit sharing ratio." : "Profit is less than the appropriations: the whole profit is shared in the ratio of the amounts due (interest on capital and salary), and nothing is left to share in the profit sharing ratio.") + '</p>'];
      }};
  },
  goodwill:function(V){
    return {ctl:'<label>Profits of last 3 years (₹) <span>' + V.profits.map(function(x, i){ return num("p" + i, x, 95); }).join(" ") + '</span></label><label>Years’ purchase ' + num("yp", V.yp, 55) + '</label><label>Normal rate of return % ' + num("nrr", V.nrr, 55) + '</label><label>Capital employed (₹) ' + num("ce", V.ce, 110) + '</label>',
      draw:function(){
        var p = [0, 1, 2].map(function(i){ return +$("#p" + i).value || 0; }), yp = +$("#yp").value || 0, nrr = +$("#nrr").value || 0, ce = +$("#ce").value || 0;
        var avg = (p[0] + p[1] + p[2]) / 3, wavg = (p[0] * 1 + p[1] * 2 + p[2] * 3) / 6, np = ce * nrr / 100, sp = avg - np;
        var k = [["Average profit", avg], ["Goodwill: average profit × " + yp, avg * yp], ["Weighted average (weights 1, 2, 3)", wavg], ["Goodwill: weighted average × " + yp, wavg * yp], ["Normal profit = " + nrr + "% of capital", np], ["Super profit = average − normal", sp], ["Goodwill: super profit × " + yp, sp * yp], ["Capitalisation of super profit", nrr ? sp * 100 / nrr : 0], ["Capitalisation of average profit", nrr ? avg * 100 / nrr - ce : 0]];
        return ['', '<div class="kpis">' + k.map(function(x){ return '<div><small>' + esc(x[0]) + '</small><b>₹' + inr(Math.round(x[1])) + '</b></div>'; }).join("") + '</div><p class="muted">Change any figure: every method recalculates. Notice that a negative super profit means no goodwill.</p>'];
      }};
  },
  forfeit:function(V){
    return {ctl:'<label>Face value (₹) ' + num("fv", V.fv, 60) + '</label><label>Amount paid per share before forfeiture (₹) ' + num("pd", V.paid, 60) + '</label><label>Shares forfeited ' + num("nf", V.n, 80) + '</label><label>Shares reissued ' + num("nr", V.re, 80) + '</label><label>Reissue price per share (₹, fully paid) ' + num("rp", V.price, 60) + '</label>',
      draw:function(){
        var fv = +$("#fv").value || 0, pd = +$("#pd").value || 0, nf = +$("#nf").value || 0, nr = Math.min(+$("#nr").value || 0, nf), rp = +$("#rp").value || 0;
        var forf = pd * nf, onRe = pd * nr, disc = Math.max(0, fv - rp) * nr, ok = disc <= onRe, cr = ok ? onRe - disc : 0, left = forf - onRe;
        return ['', '<div class="kpis"><div><small>Amount forfeited (Share Forfeiture A/c)</small><b>₹' + inr(forf) + '</b></div><div><small>Forfeited amount on reissued shares</small><b>₹' + inr(onRe) + '</b></div><div><small>Discount on reissue</small><b>₹' + inr(disc) + '</b></div><div><small>Transfer to Capital Reserve</small><b>₹' + inr(cr) + '</b></div><div><small>Balance left in Share Forfeiture</small><b>₹' + inr(left) + '</b></div></div>' +
          (ok ? '<p class="muted">Discount on reissue can never exceed the amount forfeited on those shares. What is left on the reissued shares is a capital profit and goes to Capital Reserve; the forfeited amount on shares not yet reissued stays in Share Forfeiture A/c.</p>' : '<p class="fb bad">Not allowed: the discount (₹' + inr(disc) + ') is more than the amount forfeited on these shares (₹' + inr(onRe) + '). Raise the reissue price.</p>')];
      }};
  },
  debenture:function(V){
    return {ctl:'<label>Number of debentures ' + num("dn", V.n, 90) + '</label><label>Face value (₹) ' + num("dfv", V.fv, 70) + '</label><label>Issued at <select id="dk"><option value="d">discount</option><option value="p">premium</option><option value="par">par</option></select> of % ' + num("dip", V.issue, 55) + '</label><label>Redeemable at premium % ' + num("drp", V.red, 55) + '</label><label>Interest rate % ' + num("dir", V.rate, 55) + '</label>',
      draw:function(){
        var n = +$("#dn").value || 0, fv = +$("#dfv").value || 0, k = $("#dk").value, ip = k === "par" ? 0 : (+$("#dip").value || 0), rp = +$("#drp").value || 0, rt = +$("#dir").value || 0;
        var price = k === "d" ? fv * (1 - ip / 100) : k === "p" ? fv * (1 + ip / 100) : fv, cash = price * n, nominal = fv * n;
        var loss = (k === "d" ? nominal - cash : 0) + nominal * rp / 100, sp = k === "p" ? cash - nominal : 0;
        return ['', '<div class="kpis"><div><small>Cash received</small><b>₹' + inr(cash) + '</b></div><div><small>Debentures A/c credited</small><b>₹' + inr(nominal) + '</b></div><div><small>Securities Premium</small><b>₹' + inr(sp) + '</b></div><div><small>Premium on redemption (liability)</small><b>₹' + inr(nominal * rp / 100) + '</b></div><div><small>Loss on issue</small><b>₹' + inr(loss) + '</b></div><div><small>Yearly interest (on face value)</small><b>₹' + inr(nominal * rt / 100) + '</b></div></div><p class="muted">Debentures are always credited at face value. Discount on issue and premium payable on redemption together make the Loss on Issue of Debentures; interest is always calculated on the face value, not on the issue price.</p>'];
      }};
  },
  realise:function(V){
    return {ctl:V.assets.map(function(a, i){ return '<label>' + esc(a[0]) + ' (book ₹' + inr(a[1]) + ') realised % ' + num("a" + i, a[2], 60) + '</label>'; }).join("") + '<label>Creditors (book ₹' + inr(V.cred) + ') paid at discount % ' + num("cd", V.disc, 55) + '</label><label>Realisation expenses (₹) ' + num("ex", V.exp, 80) + '</label>',
      draw:function(){
        var dr = 0, cr = 0; V.assets.forEach(function(a, i){ dr += a[1]; cr += a[1] * (+$("#a" + i).value || 0) / 100; });
        var paid = V.cred * (1 - (+$("#cd").value || 0) / 100), ex = +$("#ex").value || 0; cr += V.cred; dr += paid + ex;
        var res = cr - dr, rr = V.ratio, RT = rr.reduce(function(a, b){ return a + b; });
        return ['', '<div class="kpis"><div><small>Debit side (assets + payments + expenses)</small><b>₹' + inr(Math.round(dr)) + '</b></div><div><small>Credit side (liabilities + cash realised)</small><b>₹' + inr(Math.round(cr)) + '</b></div><div><small>' + (res >= 0 ? "Profit" : "Loss") + ' on realisation</small><b>₹' + inr(Math.round(Math.abs(res))) + '</b></div>' + V.names.map(function(n, i){ return '<div><small>' + n + '’s share</small><b>₹' + inr(Math.round(Math.abs(res) * rr[i] / RT)) + '</b></div>'; }).join("") + '</div><p class="muted">Assets are debited and liabilities credited at book value; cash realised is credited and payments are debited. The difference is the profit or loss, shared in the profit sharing ratio.</p>'];
      }};
  }
};
X.route("visual", function(R){
  var V = D.visual, pl = PLAY[V.kind || "admit"](V);
  R.innerHTML = head("visual", V.sub || "Move the controls and watch the figures change. Everything is calculated exactly.") +
    '<div class="card play"><h3>' + esc(V.title || "Playground") + '</h3><div class="pctl">' + pl.ctl + '</div><div id="bars" class="bars"></div><div id="pout" class="pout"></div></div>' +
    '<div class="card"><h3>' + esc(V.flowTitle || "The chapter flow") + '</h3><div class="flow">' + V.flow.map(function(f, i){ return '<div class="fnode" style="--i:' + i + '"><b>' + (i + 1) + '</b>' + esc(f) + '</div>'; }).join("") + '</div></div>' + foot("visual", "Mark visualisation as done");
  function draw(){ var o = pl.draw(); $("#bars").innerHTML = o[0] ? o[0] + (/^(admit|retire|change)$/.test(V.kind || "admit") ? '<p class="legend"><i class="old"></i> old <i class="nw"></i> new</p>' : '') : ""; $("#pout").innerHTML = o[1]; }
  $$(".pctl input,.pctl select", R).forEach(function(x){ x.addEventListener("input", function(){ draw(); P.seen.play = 1; save(); }); });
  draw();
});
/* 07 Formulas and rules */
X.route("formulas", function(R){
  R.innerHTML = head("formulas", "Each formula has a memory code. Tap a card to hide the formula and test yourself.") +
    '<div class="fgrid">' + D.formulas.map(function(f, i){ return '<button class="fcard" data-f="' + i + '"><small>' + esc(D.concepts[f.c].n) + '</small><h4>' + esc(f.n) + '</h4><p class="ff">' + esc(f.f) + '</p><p class="code">🧠 ' + esc(f.code) + '</p></button>'; }).join("") + '</div>' + foot("formulas", "Mark formulas as revised");
  $$(".fcard", R).forEach(function(b){ b.onclick = function(){ b.classList.toggle("hide"); }; });
});

/* ---------------- boot ---------------- */
window.NFLab = {
  register:function(d){ D = d; }, cap:cap, cur:cur, chapters:CHAPTERS, baseAcc:BASE_ACC,
  boot:function(){
    if(!D){ document.body.innerHTML = '<p style="padding:40px;color:#fff">This chapter’s lab is not ready yet. <a href="../" style="color:#ffd84d">Back to Notesflix 101</a></p>'; return; }
    load(); initP(); buildAcc(); shell();
    window.addEventListener("hashchange", route);
    route(); cloudInit();
  }
};
X.D = function(){ return D; }; X.P = function(){ return P; }; X.S = function(){ return S; };
X.util = {esc:esc, $:$, $$:$$, el:el, inr:inr, rupee:rupee, shuffle:shuffle, pct:pct, fmtTime:fmtTime, mins:mins, parseNum:parseNum, check:check, trapHit:trapHit, showAns:showAns,
  matchAcc:matchAcc, accName:accName, toast:toast, xpPop:xpPop, fb:fb, mark:mark, done:done, save:save, badge:badge, head:head, foot:foot, mcqHTML:mcqHTML, wireMcq:wireMcq,
  secName:secName, SECS:SECS, chapterPct:chapterPct, accuracy:accuracy, mastery:mastery, bestTest:bestTest, go:go, normAcc:normAcc, paintProgress:paintProgress};
})();
