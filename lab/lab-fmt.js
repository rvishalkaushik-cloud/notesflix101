/* Notesflix 101 · Accountancy Lab · accounting formats and the numerical solver
   Reusable formats: journal (one block per transaction), tacc (T-format ledger account or horizontal Balance Sheet),
   grid (columnar statements such as Partners' Capital Accounts). Each runs in three modes:
   grade (student fills, engine checks), show (filled solution) and free (blank worksheet with live totals). */
(function(){
"use strict";
var X = window.NFLX, U = X.util, $ = U.$, $$ = U.$$, esc = U.esc;
function D(){ return X.D(); } function P(){ return X.P(); }
var ROMAN = ["i","ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii"];
function tagLabel(t){ return t === "board" ? '<span class="chip tb" title="Written in CBSE board style for Notesflix 101; not a previous-year question">Board-style question</span>' : '<span class="chip to" title="An original practice question written for Notesflix 101">Original practice question</span>'; }
X.tagLabel = tagLabel;
function inp(k, cls, ph, mode){ return '<input class="' + (cls || "") + '" data-k="' + k + '"' + (ph ? ' placeholder="' + ph + '"' : '') + ' autocomplete="off" spellcheck="false"' + (cls === "amt" ? ' inputmode="decimal"' : '') + (mode === "show" ? " readonly" : "") + '>'; }

/* ================= JOURNAL ================= */
function journalHTML(spec, mode, rows){
  var h = '<table class="acct jt"><thead><tr><th class="c-date">Date</th><th class="c-part">Particulars</th><th class="c-lf">L.F.</th><th class="c-amt">Debit (₹)</th><th class="c-amt">Credit (₹)</th></tr></thead><tbody>';
  if(mode === "free"){
    for(var r = 0; r < rows; r++) h += '<tr class="jl"><td>' + inp("r" + r + "t", "dt") + '</td><td class="pc">' + inp("r" + r + "p", "pt", r === 0 ? "e.g. Cash A/c … Dr." : "") + '</td><td>' + inp("r" + r + "f", "lf") + '</td><td>' + inp("r" + r + "d", "amt") + '</td><td>' + inp("r" + r + "c", "amt") + '</td></tr>';
  } else {
    spec.entries.forEach(function(e, b){
      if(e.label) h += '<tr class="lbl"><td colspan="5">(' + ROMAN[b] + ') <span class="lt">' + esc(e.label) + '</span><span class="lx">Entry ' + (b + 1) + '</span></td></tr>';
      var n = mode === "show" ? e.lines.length : e.lines.length + 1;
      for(var r = 0; r < n; r++){
        var L = mode === "show" ? e.lines[r] : null;
        h += '<tr class="jl' + (L ? (L.dr ? " isdr" : " iscr") : "") + '" data-b="' + b + '" data-r="' + r + '"><td class="dcell">' + (r === 0 ? esc(e.date) : "") + '</td>' +
          (L ? '<td class="pc"><span class="pv">' + (L.cr ? "To " : "") + esc(L.n || U.accName(L.a)) + '</span>' + (L.dr ? '<span class="drt">Dr.</span>' : '') + '</td><td></td><td class="num">' + U.inr(L.dr) + '</td><td class="num">' + U.inr(L.cr) + '</td>'
             : '<td class="pc">' + inp("b" + b + "r" + r + "p", "pt", r === 0 ? "Account to debit" : r === 1 ? "To account to credit" : "") + '<span class="drt">Dr.</span><i class="mk"></i></td><td>' + inp("b" + b + "r" + r + "f", "lf") + '</td><td>' + inp("b" + b + "r" + r + "d", "amt") + '</td><td>' + inp("b" + b + "r" + r + "c", "amt") + '</td>') + '</tr>';
      }
      h += '<tr class="nr" data-b="' + b + '"><td></td><td class="pc">' + (mode === "show" ? '<span class="narr">' + esc(e.narr) + '</span>' : inp("b" + b + "n", "nt", "(Being …)") + '<i class="mk"></i>') + '</td><td></td><td></td><td></td></tr>';
    });
  }
  h += '</tbody><tfoot><tr><td></td><td class="tl">Total</td><td></td><td class="num" data-tot="d">' + (mode === "show" ? U.inr(spec.entries.reduce(function(s, e){ return s + e.lines.reduce(function(t, l){ return t + (l.dr || 0); }, 0); }, 0)) : "") + '</td><td class="num" data-tot="c">' + (mode === "show" ? U.inr(spec.entries.reduce(function(s, e){ return s + e.lines.reduce(function(t, l){ return t + (l.cr || 0); }, 0); }, 0)) : "") + '</td></tr></tfoot></table>';
  return h;
}
function journalLive(box){
  var d = 0, c = 0;
  $$("tr.jl", box).forEach(function(tr){
    var di = $('[data-k$="d"]', tr), ci = $('[data-k$="c"]', tr); if(!di) return;
    var dv = U.parseNum(di.value), cv = U.parseNum(ci.value);
    if(!isNaN(dv)) d += dv; if(!isNaN(cv)) c += cv;
    tr.classList.toggle("isdr", !isNaN(dv) && isNaN(cv)); tr.classList.toggle("iscr", !isNaN(cv) && isNaN(dv));
  });
  var td = $('[data-tot="d"]', box), tc = $('[data-tot="c"]', box);
  if(td){ td.textContent = d ? U.inr(d) : ""; tc.textContent = c ? U.inr(c) : ""; var bal = d && Math.abs(d - c) < 0.5; td.parentNode.classList.toggle("agree", !!bal); td.parentNode.classList.toggle("disagree", !!(d || c) && !bal); }
}
function gradeJournal(box, spec){
  var items = 0, got = 0, issues = [], expectsPrem = false;
  spec.entries.forEach(function(e, b){
    var stu = $$('tr.jl[data-b="' + b + '"]', box).map(function(tr){
      var g = function(s){ var i = $('[data-k="b' + b + 'r' + tr.dataset.r + s + '"]', tr); return i ? i.value.trim() : ""; };
      return {tr:tr, p:g("p"), k:U.matchAcc(g("p")), d:U.parseNum(g("d")), c:U.parseNum(g("c")), used:false};
    }).filter(function(s){ return s.p || !isNaN(s.d) || !isNaN(s.c); });
    var tag = "(" + ROMAN[b] + ")";
    e.lines.forEach(function(L){
      items++; if(L.a === "prem") expectsPrem = true;
      var s = stu.filter(function(x){ return !x.used && x.k === L.a; })[0], nm = U.accName(L.a), side = L.dr ? "debited" : "credited", amt = L.dr || L.cr;
      if(!s){ issues.push({c:spec.c, t:"missing", h:tag + " " + nm + " is missing", o:{what:"Entry " + tag + " has no line for <b>" + esc(nm) + "</b>.", whyWrong:"Every account affected by the transaction must appear in the entry.", why:esc(nm) + " should be <b>" + side + "</b> with " + U.rupee(amt) + "." + (L.why ? " " + L.why : ""), avoid:"Before writing, list every account the transaction touches and decide its side."}}); return; }
      s.used = true;
      var onSide = L.dr ? (!isNaN(s.d) && isNaN(s.c)) : (!isNaN(s.c) && isNaN(s.d)), val = L.dr ? s.d : s.c;
      if(!onSide){ s.tr.classList.add("bad"); issues.push({c:spec.c, t:"side", h:tag + " " + nm + " is on the wrong side", o:{what:"In entry " + tag + ", <b>" + esc(nm) + "</b> is " + (L.dr ? "credited" : "debited") + ".", whyWrong:esc(nm) + " must be <b>" + side + "</b> here." + (L.why ? " " + L.why : ""), why:"Write " + esc(nm) + (L.dr ? " … Dr. with " : " (To …) with ") + U.rupee(amt) + " in the " + (L.dr ? "Debit" : "Credit") + " column.", avoid:"Ask: does this account receive (debit) or give (credit)? For revaluation use AU-LD = Gain."}}); return; }
      if(Math.abs(val - amt) > 0.5){ s.tr.classList.add("bad"); issues.push({c:spec.c, t:"amount", h:tag + " amount of " + nm, o:{what:"You wrote " + U.rupee(val) + " for <b>" + esc(nm) + "</b> in entry " + tag + ".", whyWrong:"That figure does not follow from the question.", why:(L.why || "The amount should be " + U.rupee(amt) + ".") , avoid:"Write the calculation in a working note first, then copy the figure."}}); return; }
      s.tr.classList.add("good"); got++;
    });
    stu.filter(function(s){ return !s.used; }).forEach(function(s){
      s.tr.classList.add("bad");
      if(s.k === "goodwill" && expectsPrem) issues.push({c:"goodwill", t:"goodwill-raised", h:tag + " Goodwill A/c should not be used", o:{what:"Entry " + tag + " uses <b>Goodwill A/c</b>.", whyWrong:"As per AS-26, goodwill is not raised in the books at the time of admission.", why:"Credit the cash brought for goodwill to <b>Premium for Goodwill A/c</b>, then transfer it to the sacrificing partners.", avoid:"Remember: at admission, Goodwill A/c only appears when OLD goodwill is written off."}});
      else issues.push({c:spec.c, t:"extra", h:tag + " extra line “" + s.p + "”", o:{what:"Entry " + tag + " has a line “" + esc(s.p || "(no account name)") + "” that does not belong to it.", whyWrong:s.k ? esc(U.accName(s.k)) + " is not affected by this transaction." : "This is not an account title used in this transaction (check the spelling, e.g. “Premium for Goodwill A/c”).", why:"Keep only the accounts this transaction affects.", avoid:"Write full account titles: “A's Capital A/c”, “Revaluation A/c”."}});
    });
    items += 0.5;
    var ni = $('[data-k="b' + b + 'n"]', box), nv = ni ? ni.value.trim() : "", ntr = $('tr.nr[data-b="' + b + '"]', box);
    if(nv.length >= 6){ got += 0.5; ntr.classList.add("good"); }
    else { ntr.classList.add("bad"); issues.push({c:"entries", t:"narration", h:tag + " narration missing", o:{what:"Entry " + tag + " has no narration.", whyWrong:"Every journal entry needs a short narration; CBSE awards marks for it.", why:"For example: " + esc(e.narr), avoid:"Write the narration in brackets, starting with “Being…”."}}); }
    var sd = stu.reduce(function(t, s){ return t + (isNaN(s.d) ? 0 : s.d); }, 0), sc = stu.reduce(function(t, s){ return t + (isNaN(s.c) ? 0 : s.c); }, 0);
    if(stu.length && Math.abs(sd - sc) > 0.5) issues.push({c:"entries", t:"unbalanced", h:tag + " Dr ≠ Cr", o:{what:"In entry " + tag + " the debit total is " + U.rupee(sd) + " and the credit total is " + U.rupee(sc) + ".", whyWrong:"In double entry the debit and credit amounts of every entry are equal.", why:"Re-check each amount until both sides agree.", avoid:"Add each column before moving to the next entry."}});
  });
  return {items:items, got:got, issues:issues};
}
function journalUnits(spec){
  return spec.entries.map(function(e, b){
    return {h:"(" + ROMAN[b] + ") " + (e.label || "Entry"), html:journalHTML({entries:[e]}, "show").replace(/<tfoot>[\s\S]*<\/tfoot>/, ""), why:e.lines.filter(function(l){ return l.why; }).map(function(l){ return "<b>" + esc(U.accName(l.a)) + "</b>: " + l.why; }).join("<br>")};
  });
}

/* ================= T-ACCOUNT / HORIZONTAL BALANCE SHEET ================= */
function isLedger(spec){ return (spec.heads || [])[0] === "Particulars"; }
function taccHTML(spec, mode, rows){
  var led = isLedger(spec), H = spec.heads || ["Particulars","₹","Particulars","₹"];
  var n = mode === "show" ? Math.max(spec.left.length, spec.right.length) : mode === "free" ? rows : Math.max(spec.left.length, spec.right.length) + 2;
  function side(s, arr, r){
    var row = mode === "show" ? arr[r] : null;
    var dt = led ? '<td class="c-date">' + (mode === "show" ? (row ? (row.d || spec.date || "") : "") : inp(s + r + "t", "dt")) + '</td>' : '';
    var jf = led ? '<td class="c-lf">' + (mode === "show" ? "" : inp(s + r + "f", "lf")) + '</td>' : '';
    if(mode === "show") return dt + '<td class="pc">' + (row ? esc(row.p) : "") + '</td>' + jf + '<td class="num">' + (row ? U.inr(row.amt) : "") + '</td>';
    return dt + '<td class="pc">' + inp(s + r + "p", "pt", r === 0 ? (led ? (s === "L" ? "To …" : "By …") : (s === "L" ? "e.g. Creditors" : "e.g. Cash")) : "") + '<i class="mk"></i></td>' + jf + '<td>' + inp(s + r + "a", "amt") + '</td>';
  }
  var cols = led ? 4 : 2;
  var h = '<div class="tname">' + (led ? '<span>Dr.</span>' : '') + '<b>' + esc(spec.name || "Account") + '</b>' + (led ? '<span>Cr.</span>' : '') + '</div><table class="acct ta' + (led ? " led" : "") + '"><thead><tr>' +
    (led ? '<th class="c-date">Date</th>' : '') + '<th class="c-part">' + esc(H[0]) + '</th>' + (led ? '<th class="c-lf">J.F.</th>' : '') + '<th class="c-amt">' + esc(H[1]) + '</th>' +
    (led ? '<th class="c-date sp">Date</th>' : '') + '<th class="c-part' + (led ? "" : " sp") + '">' + esc(H[2]) + '</th>' + (led ? '<th class="c-lf">J.F.</th>' : '') + '<th class="c-amt">' + esc(H[3]) + '</th></tr></thead><tbody>';
  for(var r = 0; r < n; r++) h += '<tr data-r="' + r + '">' + side("L", spec.left || [], r).replace('<td', '<td') + side("R", spec.right || [], r).replace(/^<td class="(c-date|pc)/, '<td class="$1 sp') + '</tr>';
  var tot = mode === "show" ? U.inr(spec.total) : "";
  h += '</tbody><tfoot><tr>' + (led ? '<td></td>' : '') + '<td class="tl">Total</td>' + (led ? '<td></td>' : '') + '<td>' + (mode === "show" ? '<span class="num">' + tot + '</span>' : mode === "free" ? '<span class="num" data-tot="L"></span>' : inp("Lt", "amt tot", "Total")) + '</td>' +
    (led ? '<td class="sp"></td>' : '') + '<td class="tl' + (led ? "" : " sp") + '">Total</td>' + (led ? '<td></td>' : '') + '<td>' + (mode === "show" ? '<span class="num">' + tot + '</span>' : mode === "free" ? '<span class="num" data-tot="R"></span>' : inp("Rt", "amt tot", "Total")) + '</td></tr></tfoot></table>';
  return h;
}
function taccLive(box){
  ["L","R"].forEach(function(s){
    var t = 0; $$('[data-k^="' + s + '"][data-k$="a"]', box).forEach(function(i){ var v = U.parseNum(i.value); if(!isNaN(v)) t += v; });
    var o = $('[data-tot="' + s + '"]', box); if(o) o.textContent = t ? U.inr(t) : "";
  });
  var l = $('[data-tot="L"]', box), r = $('[data-tot="R"]', box);
  if(l){ var a = U.parseNum(l.textContent), b = U.parseNum(r.textContent), tf = l.closest("tr"); tf.classList.toggle("agree", !!a && Math.abs(a - b) < 0.5); tf.classList.toggle("disagree", !!(a || b) && !(Math.abs(a - b) < 0.5)); }
}
function gradeTacc(box, spec){
  var items = 0, got = 0, issues = [], led = isLedger(spec);
  var sideName = led ? {L:"debit (left)", R:"credit (right)"} : {L:"Liabilities", R:"Assets"};
  function rowsOf(s){ return $$('[data-k^="' + s + '"][data-k$="p"]', box).map(function(i){
    var r = i.dataset.k.slice(1, -1), a = $('[data-k="' + s + r + 'a"]', box);
    return {s:s, td:i.closest("td"), p:i.value.trim(), n:U.normAcc(i.value), k:U.matchAcc(i.value), amt:U.parseNum(a ? a.value : ""), used:false}; }).filter(function(x){ return x.p || !isNaN(x.amt); }); }
  var stu = {L:rowsOf("L"), R:rowsOf("R")}, exp = {L:spec.left, R:spec.right};
  /* a row matches an expected line by its account or by one of the line's own wordings (e.g. "Interest on Capital: A") */
  function hit(x, e){ if(e.al && e.al.some(function(a){ a = U.normAcc(a); return x.n === a || x.n.indexOf(a + " ") === 0; })) return true; return x.k === e.a && !(e.al && e.strict); }
  var pick = {L:[], R:[]};
  ["L","R"].forEach(function(s){
    exp[s].forEach(function(e, j){ var m = stu[s].filter(function(x){ return !x.used && hit(x, e) && Math.abs(x.amt - e.amt) <= 0.5; })[0]; if(m){ m.used = true; pick[s][j] = m; } });
    exp[s].forEach(function(e, j){ if(pick[s][j]) return; var m = stu[s].filter(function(x){ return !x.used && hit(x, e); })[0]; if(m){ m.used = true; pick[s][j] = m; } });
  });
  ["L","R"].forEach(function(s){
    var o = s === "L" ? "R" : "L";
    exp[s].forEach(function(e, j){
      items++;
      var m = pick[s][j], nm = e.p;
      if(m) m.used = false;
      if(!m){
        var w = stu[o].filter(function(x){ return !x.used && hit(x, e) && !exp[o].some(function(y){ return hit(x, y); }); })[0];
        if(w){ w.used = true; w.td.classList.add("bad"); issues.push({c:spec.c, t:"side", h:nm + " is on the wrong side", o:{what:"“" + esc(w.p) + "” is written on the " + sideName[o] + " side.", whyWrong:esc(nm) + " belongs on the " + sideName[s] + " side." + (e.why ? " " + e.why : ""), why:"Move it to the " + sideName[s] + " side with " + U.rupee(e.amt) + ".", avoid:led ? "Revaluation A/c: losses on the debit side, gains on the credit side (AU-LD = Gain)." : "Liabilities and capital on the left, assets on the right."}}); }
        else issues.push({c:spec.c, t:"missing", h:nm + " is missing", o:{what:"<b>" + esc(nm) + "</b> is missing from the " + sideName[s] + " side.", whyWrong:"It is part of this " + (led ? "account" : "statement") + ".", why:esc(nm) + ": " + U.rupee(e.amt) + "." + (e.why ? " " + e.why : ""), avoid:"Tick each adjustment in the question as you post it."}});
        return;
      }
      m.used = true;
      if(Math.abs(m.amt - e.amt) > 0.5){ m.td.classList.add("bad"); issues.push({c:spec.c, t:"amount", h:"Amount of " + nm, o:{what:"You wrote " + (isNaN(m.amt) ? "no amount" : U.rupee(m.amt)) + " for <b>" + esc(nm) + "</b>.", whyWrong:"The figure does not follow from the question.", why:(e.why || "") + " Correct figure: " + U.rupee(e.amt) + ".", avoid:"Show the calculation as a working note."}}); return; }
      m.td.classList.add("good"); got++;
    });
  });
  ["L","R"].forEach(function(s){ stu[s].filter(function(x){ return !x.used; }).forEach(function(x){
    x.td.classList.add("bad");
    var g = (spec.gone || []).filter(function(y){ return y.a === x.k; })[0];
    issues.push({c:spec.c, t:g ? "gone" : "extra", h:"“" + x.p + "” should not be here", o:{what:"“" + esc(x.p) + "” is not part of this " + (led ? "account" : "Balance Sheet") + ".", whyWrong:g ? g.why : (x.k ? esc(U.accName(x.k)) + " is not affected here." : "This is not an account title from the question."), why:"Remove the line.", avoid:"Only accounts that change, or balances that remain open, belong here."}});
  }); });
  items++;
  var lt = $('[data-k="Lt"]', box), rt = $('[data-k="Rt"]', box), lv = U.parseNum(lt && lt.value), rv = U.parseNum(rt && rt.value);
  if(Math.abs(lv - spec.total) <= 0.5 && Math.abs(rv - spec.total) <= 0.5){ got++; lt.classList.add("good"); rt.classList.add("good"); }
  else { if(lt) lt.classList.add("bad"); if(rt) rt.classList.add("bad");
    issues.push({c:spec.c, t:"total", h:"Totals", o:{what:"Your totals are " + (isNaN(lv) ? "blank" : U.rupee(lv)) + " and " + (isNaN(rv) ? "blank" : U.rupee(rv)) + ".", whyWrong:"Both sides of a " + (led ? "ledger account" : "Balance Sheet") + " must total the same figure.", why:"The correct total on both sides is " + U.rupee(spec.total) + "." + (led ? " The partners' profit is the balancing figure on the debit side." : ""), avoid:"Add each side twice; if they differ, look for a missed or wrong-side item."}}); }
  return {items:items, got:got, issues:issues};
}
function taccUnits(spec){
  var u = [];
  spec.left.forEach(function(r){ u.push({h:(isLedger(spec) ? "Debit side: " : "Liabilities: ") + esc(r.p), html:'<p class="num big">' + U.rupee(r.amt) + '</p>', why:r.why || ""}); });
  spec.right.forEach(function(r){ u.push({h:(isLedger(spec) ? "Credit side: " : "Assets: ") + esc(r.p), html:'<p class="num big">' + U.rupee(r.amt) + '</p>', why:r.why || ""}); });
  u.push({h:"Totals", html:'<p class="num big">' + U.rupee(spec.total) + ' on both sides</p>', why:"Both sides agree, so the account/statement is complete."});
  u.push({h:"Complete " + (isLedger(spec) ? "account" : "statement"), html:taccHTML(spec, "show"), why:""});
  return u;
}

/* ================= GRID (columnar) ================= */
function gridHTML(spec, mode, rows){
  var head = spec.head, half = spec.single ? head.length : head.length / 2, h = '<div class="tname">' + (spec.single ? '' : '<span>Dr.</span>') + '<b>' + esc(spec.name || "") + '</b>' + (spec.single ? '' : '<span>Cr.</span>') + '</div><table class="acct gd"><thead><tr>' + head.map(function(c, i){ return '<th class="' + (i % half === 0 ? "c-part" : "c-amt") + (i === half ? " sp" : "") + '">' + esc(c) + '</th>'; }).join("") + '</tr></thead><tbody>';
  if(mode === "free"){
    for(var r = 0; r < rows; r++) h += '<tr>' + head.map(function(c, i){ return '<td class="' + (i === half ? "sp" : "") + '">' + inp("g" + r + "_" + i, i % half === 0 ? "pt" : "amt", i === 0 && r === 0 ? "To …" : i === half && r === 0 ? "By …" : "") + '</td>'; }).join("") + '</tr>';
    h += '</tbody><tfoot><tr>' + head.map(function(c, i){ return '<td class="' + (i === half ? "sp " : "") + (i % half === 0 ? "tl" : "num") + '"' + (i % half ? ' data-col="' + i + '"' : '') + '>' + (i % half === 0 ? "Total" : "") + '</td>'; }).join("") + '</tr></tfoot></table>';
    return h;
  }
  spec.rows.forEach(function(row, r){
    var last = r === spec.rows.length - 1;
    h += '<tr class="' + (last ? "trow" : "") + '" data-r="' + r + '">' + row.map(function(cell, i){
      var cls = (i === half ? "sp " : "") + (i % half === 0 ? "pc" : "num");
      if(cell === null || cell === "") return '<td class="' + cls + ' na"></td>';
      if(typeof cell === "string") return '<td class="' + cls + (last ? " tl" : "") + '">' + esc(cell) + '</td>';
      if(typeof cell === "number") return '<td class="' + cls + '">' + U.inr(cell) + '</td>';
      if(mode === "show") return '<td class="' + cls + '">' + (cell.a == null ? "—" : U.inr(cell.a)) + '</td>';
      return '<td class="' + cls + '">' + inp("g" + r + "_" + i, "amt" + (last ? " tot" : "")) + '</td>';
    }).join("") + '</tr>';
  });
  return h + '</tbody></table>';
}
function gridLive(box){
  $$("[data-col]", box).forEach(function(td){
    var c = td.dataset.col, t = 0; $$('[data-k$="_' + c + '"]', box).forEach(function(i){ var v = U.parseNum(i.value); if(!isNaN(v)) t += v; }); td.textContent = t ? U.inr(t) : "";
  });
}
function gradeGrid(box, spec){
  var items = 0, got = 0, issues = [], half = spec.single ? spec.head.length : spec.head.length / 2;
  spec.rows.forEach(function(row, r){
    var label = row[0] || row[half];
    row.forEach(function(cell, i){
      if(!cell || typeof cell !== "object") return;
      items++;
      var input = $('[data-k="g' + r + '_' + i + '"]', box), raw = input ? input.value.trim() : "", v = U.parseNum(raw);
      var ok = cell.a == null ? (!raw || raw === "-" || raw === "—" || v === 0) : Math.abs(v - cell.a) <= 0.5;
      input.classList.add(ok ? "good" : "bad");
      if(ok){ got++; return; }
      issues.push({c:spec.c, t:cell.a == null ? "extra" : "amount", h:label + " · " + spec.head[i], o:{what:"<b>" + esc(label) + "</b>, column " + esc(spec.head[i]) + ": you wrote " + (raw ? esc(raw) : "nothing") + ".",
        whyWrong:cell.a == null ? "This partner has no amount in this row." : "That figure does not match the question.",
        why:(cell.why ? cell.why + " " : "") + (cell.a == null ? "Leave it blank." : "Correct figure: " + U.rupee(cell.a) + "."), avoid:spec.single ? "Work down the statement one line at a time; each line uses the one above." : "Fill the account row by row from your journal entries; the closing balance is the balancing figure."}});
    });
  });
  return {items:items, got:got, issues:issues};
}
function gridUnits(spec){
  var half = spec.single ? spec.head.length : spec.head.length / 2;
  return spec.rows.map(function(row){
    var label = row[0] || row[half], vals = row.map(function(c, i){ return c && typeof c === "object" && c.a != null ? spec.head[i].replace(" (₹)", "") + " " + U.rupee(c.a) : null; }).filter(Boolean);
    var why = row.map(function(c){ return c && c.why; }).filter(Boolean).join(" ");
    return {h:esc(label), html:'<p>' + (vals.join(" · ") || "—") + '</p>', why:why};
  }).concat([{h:"Complete accounts", html:gridHTML(spec, "show"), why:""}]);
}

/* ================= worksheet shell ================= */
var KIND = {
  journal:{html:journalHTML, live:journalLive, grade:gradeJournal, units:journalUnits},
  tacc:{html:taccHTML, live:taccLive, grade:gradeTacc, units:taccUnits},
  grid:{html:gridHTML, live:gridLive, grade:gradeGrid, units:gridUnits}
};
X.KIND = KIND;
/* a mistake shown either as a wrong journal entry (shown) or as wrong working lines (work) */
X.shownWork = function(m){
  if(m.work) return '<ol class="work">' + m.work.map(function(w){ return '<li>' + esc(w) + '</li>'; }).join("") + '</ol>';
  return '<table class="acct jt wrongent"><thead><tr><th>Particulars</th><th></th><th class="c-amt">Debit (₹)</th><th class="c-amt">Credit (₹)</th></tr></thead><tbody>' +
    m.shown.map(function(r){ return '<tr class="' + (r[3] !== "" && r[3] != null ? "iscr" : "") + '"><td class="pc">' + esc(r[0]) + '</td><td>' + r[1] + '</td><td class="num">' + U.inr(r[2]) + '</td><td class="num">' + U.inr(r[3]) + '</td></tr>'; }).join("") + '</tbody></table>';
};
X.formatShow = function(f){
  if(f.type === "multi") return f.parts.map(function(p){ return '<div class="fpart">' + KIND[p.type].html(p, "show") + '</div>'; }).join("");
  return KIND[f.type].html(f, "show");
};
function enterNav(box){
  box.addEventListener("keydown", function(e){
    if(e.key !== "Enter" || e.target.tagName !== "INPUT") return;
    e.preventDefault();
    var all = $$("input:not([readonly])", box), i = all.indexOf(e.target), n = all[i + (e.shiftKey ? -1 : 1)];
    if(n){ n.focus(); n.select && n.select(); }
  });
}
function draftWire(box, id, live){
  var p = P(); p.ws[id] = p.ws[id] || {}; var W = p.ws[id]; W.draft = W.draft || {};
  $$("input[data-k]", box).forEach(function(i){ if(W.draft[i.dataset.k] != null) i.value = W.draft[i.dataset.k]; });
  live(box);
  var t = null;
  box.addEventListener("input", function(e){
    var i = e.target; if(!i.dataset || !i.dataset.k) return;
    W.draft[i.dataset.k] = i.value; i.classList.remove("good","bad"); var td = i.closest("td,tr"); if(td){ td.classList.remove("good","bad"); }
    live(box); clearTimeout(t); t = setTimeout(U.save, 600);
  });
}
function fsToggle(ws){
  var on = ws.classList.toggle("fs"); document.body.classList.toggle("noscroll", on);
  var b = $(".fsb", ws); if(b) b.textContent = on ? "✕ Exit full screen" : "⛶ Full screen";
}
document.addEventListener("keydown", function(e){ if(e.key === "Escape"){ var f = $(".ws.fs"); if(f) fsToggle(f); } });

/* graded worksheet: spec = a lab item {id, title, q, level, tag, c, format} */
X.worksheet = function(box, spec, opt){
  opt = opt || {};
  var f = spec.format, K = KIND[f.type], p = P(), W = p.ws[spec.id] = p.ws[spec.id] || {}, revealed = 0, units = K.units(f), hintN = 0;
  box.innerHTML = '<div class="ws" data-ws="' + spec.id + '">' +
    (opt.compact ? '<p class="wq">' + spec.q + '</p>' :
    '<div class="wh"><div><h3>' + esc(spec.id) + ' · ' + esc(spec.title) + '</h3><div class="chips">' + tagLabel(spec.tag) + '<span class="chip lv">' + esc(spec.level) + '</span><span class="chip">' + esc(D().concepts[spec.c].n) + '</span>' + (W.best != null ? '<span class="chip ok">Best ' + W.best + '%</span>' : '') + '</div></div><div>' + (f.type === "journal" ? '<label class="exs" title="Hide the entry titles, as in the board exam"><input type="checkbox"' + (X.S().examStyle ? " checked" : "") + '> Exam style</label> ' : '') + '<button class="btn sm ghost fsb">⛶ Full screen</button></div></div>' +
    (spec.ref ? '<details class="wq refq"' + (opt.openRef ? ' open' : '') + '><summary>📄 Question ' + spec.ref + ' (tap to ' + 'show)</summary>' + D().lab.filter(function(l){ return l.id === spec.ref; })[0].q + '</details>' : '') +
    '<div class="wq">' + spec.q + '</div>') +
    '<p class="howto">Type account names and amounts. <kbd>Tab</kbd> or <kbd>Enter</kbd> moves to the next cell. Your work saves automatically.</p>' +
    '<div class="sheet">' + K.html(f, "grade") + '</div>' +
    '<div class="wact"><button class="btn ok chk">✓ Check Answer</button><button class="btn ghost hint">💡 Show Hint</button><button class="btn ghost sol"' + (W.tries ? '' : ' disabled title="Attempt the question first"') + '>📖 Step-by-Step Solution</button><button class="btn ghost clr">↺ Clear</button></div>' +
    '<div class="wres"></div><div class="wsol"></div></div>';
  var ws = $(".ws", box), sheet = $(".sheet", ws);
  enterNav(sheet); draftWire(sheet, spec.id, K.live);
  ws.classList.toggle("examstyle", !!X.S().examStyle);
  var exs = $(".exs input", ws); if(exs) exs.onchange = function(){ X.S().examStyle = exs.checked; ws.classList.toggle("examstyle", exs.checked); U.save(); };
  if($(".fsb", ws)) $(".fsb", ws).onclick = function(){ fsToggle(ws); };
  $(".clr", ws).onclick = function(){ W.draft = {}; U.save(); X.worksheet(box, spec, opt); };
  $(".hint", ws).onclick = function(){
    var u = units[Math.min(hintN, units.length - 1)]; hintN++;
    var acc = f.type === "journal" ? "This entry needs " + f.entries[Math.min(hintN - 1, f.entries.length - 1)].lines.length + " lines. Start with the account that is debited." : f.type === "tacc" ? (isLedger(f) ? "Losses (asset down, liability up) go on the debit side; gains on the credit side. The partners' share of profit balances the account." : "Capitals and outside liabilities on the left; assets at revised values on the right.") : "Work row by row: opening balance, then each credit from the journal, then the closing balance.";
    $(".wres", ws).innerHTML = '<div class="fb tip">💡 <b>Hint ' + hintN + ':</b> ' + acc + (u && u.why ? '<br><span class="muted">Look at: ' + u.h + '</span>' : '') + '</div>';
  };
  $(".chk", ws).onclick = function(){
    $$(".good,.bad", sheet).forEach(function(x){ x.classList.remove("good","bad"); });
    var r = K.grade(sheet, f), sc = U.pct(r.got, r.items);
    W.tries = (W.tries || 0) + 1; if(W.first == null) W.first = sc; W.best = Math.max(W.best || 0, sc); W.last = sc; W.at = Date.now();
    r.issues.forEach(function(i){ U.mark(i.c, false, i.t); }); for(var g = 0; g < Math.round(r.got); g++) U.mark(spec.c, true);
    U.save(); $(".sol", ws).disabled = false;
    $(".wres", ws).innerHTML = '<div class="score ' + (sc === 100 ? "full" : sc >= 60 ? "mid" : "low") + '"><b>' + sc + '%</b><span>' + (Math.round(r.got * 10) / 10) + ' of ' + r.items + ' marks · attempt ' + W.tries + '</span>' + (sc === 100 ? '<span>🎉 Perfect! Every line is right.</span>' : '<span>' + r.issues.length + ' thing' + (r.issues.length === 1 ? "" : "s") + ' to fix. Open each one below, correct the sheet and check again.</span>') + '</div>' +
      r.issues.map(function(i, n){ return '<details class="iss"' + (n < 2 ? " open" : "") + '><summary>✗ ' + i.h + '</summary>' + U.fb(false, i.o) + '</details>'; }).join("");
    if(sc === 100){ U.xpPop(this, "+50 XP"); if(!opt.compact && W.tries === 1) U.badge("firsttry", "First-try perfect sheet"); }
    if(sc >= 60 && !opt.compact) U.done("lab");
    if(opt.onGrade) opt.onGrade(sc, r);
  };
  $(".sol", ws).onclick = function(){
    var sol = $(".wsol", ws);
    if(!sol.innerHTML) sol.innerHTML = '<div class="solh"><h4>📖 Solution, one step at a time</h4><div><button class="btn sm nx">Reveal next step</button> <button class="btn sm ghost all">Show full solution</button></div></div><div class="units"></div>';
    function show(n){ var U2 = $(".units", sol); while(revealed < Math.min(n, units.length)){ var u = units[revealed++]; U2.insertAdjacentHTML("beforeend", '<div class="unit"><h5>Step ' + revealed + ' · ' + u.h + '</h5>' + u.html + (u.why ? '<p class="why">' + u.why + '</p>' : '') + '</div>'); }
      if(revealed >= units.length){ $(".nx", sol).disabled = true; $(".all", sol).disabled = true; } }
    $(".nx", sol).onclick = function(){ show(revealed + 1); }; $(".all", sol).onclick = function(){ show(units.length); };
    show(1); sol.scrollIntoView({behavior:"smooth", block:"nearest"});
  };
};
/* free (blank) worksheet */
X.blankSheet = function(box, b){
  var K = KIND[b.type], spec = b.type === "tacc" ? {heads:b.heads, left:[], right:[], name:b.t} : b.type === "grid" ? {head:b.head, name:b.t, single:b.single} : {};
  box.innerHTML = '<div class="ws free" data-ws="' + b.id + '"><div class="wh"><h3>' + esc(b.t) + '</h3><div><button class="btn sm ghost fsb">⛶ Full screen</button> <button class="btn sm ghost prt">🖨 Print</button> <button class="btn sm ghost clr">↺ Clear</button></div></div><div class="sheet">' + K.html(spec, "free", b.rows) + '</div><p class="muted">Totals update as you type. Green total row = both sides agree.</p></div>';
  var ws = $(".ws", box), sheet = $(".sheet", ws); enterNav(sheet); draftWire(sheet, b.id, K.live);
  $(".fsb", ws).onclick = function(){ fsToggle(ws); };
  $(".prt", ws).onclick = function(){ document.body.classList.add("printing"); ws.classList.add("print"); window.print(); setTimeout(function(){ document.body.classList.remove("printing"); ws.classList.remove("print"); }, 500); };
  $(".clr", ws).onclick = function(){ P().ws[b.id] = {}; U.save(); X.blankSheet(box, b); };
};

/* ================= ROUTES ================= */
/* 08 solved illustrations */
X.route("illus", function(R){
  var d = D();
  R.innerHTML = U.head("illus", "Given → Required → Formula → Steps → Format → Answer → Why. Reveal the steps one by one.") + d.illus.map(function(x, n){
    return '<article class="card ill" id="il-' + x.id + '"><div class="ih"><h3>Illustration ' + (n + 1) + ': ' + esc(x.title) + '</h3><div class="chips">' + tagLabel(x.tag) + '<span class="chip">' + esc(d.concepts[x.c].n) + '</span></div></div>' +
      '<dl class="gr"><dt>1 · Given</dt><dd>' + x.given + '</dd><dt>2 · Required</dt><dd>' + x.required + '</dd><dt>3 · Formula / treatment</dt><dd class="formula">' + x.formula + '</dd></dl>' +
      '<h4>4 · Step-by-step working</h4><ol class="isteps">' + x.steps.map(function(s, i){ return '<li class="' + (i ? "hid" : "") + '">' + s + '</li>'; }).join("") + '</ol>' +
      '<div class="ib"><button class="btn sm nx">Next step →</button><button class="btn sm ghost al">Show all steps</button></div>' +
      '<div class="irest hid">' + (x.format ? '<h4>5 · Accounting format</h4><div class="sheet show">' + X.formatShow(x.format) + '</div>' : '') +
      '<h4>6 · Final answer</h4><p class="ans">' + x.answer + '</p><h4>7 · Why this treatment is correct</h4><p>' + x.why + '</p></div></article>'; }).join("") + U.foot("illus");
  $$(".ill", R).forEach(function(a){
    function step(all){ var h = $$(".isteps li.hid", a); (all ? h : h.slice(0, 1)).forEach(function(li){ li.classList.remove("hid"); });
      if(!$$(".isteps li.hid", a).length){ $(".irest", a).classList.remove("hid"); $(".ib", a).remove(); P().seen["il" + a.id] = 1; U.save();
        if(d.illus.every(function(x){ return P().seen["ilil-" + x.id]; })) U.done("illus"); } }
    $(".nx", a).onclick = function(){ step(false); }; $(".al", a).onclick = function(){ step(true); };
    if(P().seen["il" + a.id]) step(true);
  });
});
/* 10 practice lab */
X.route("lab", function(R, sub){
  var d = D(), cur = d.lab.filter(function(l){ return l.id === sub; })[0] || d.lab.filter(function(l){ return !(P().ws[l.id] && P().ws[l.id].best === 100); })[0] || d.lab[0];
  R.innerHTML = U.head("lab", "Solve directly inside real accounting formats. Check, read the feedback, fix and check again.") +
    '<div class="wlist">' + d.lab.map(function(l){ var w = P().ws[l.id] || {}; return '<a class="wl' + (l.id === cur.id ? " on" : "") + '" href="#lab/' + l.id + '"><b>' + l.id + '</b><span>' + esc(l.title) + '</span><small>' + esc(l.level) + ' · ' + ({journal:"Journal", tacc:/Balance/.test(l.format.name) ? "Balance Sheet" : "Ledger", grid:"Capital A/cs"}[l.format.type]) + '</small><em>' + (w.best != null ? w.best + "%" : "New") + '</em></a>'; }).join("") + '</div>' +
    '<div id="wsbox"></div>' + U.foot("lab");
  X.worksheet($("#wsbox"), cur);
});
/* 11 blank worksheets */
X.route("blanks", function(R, sub){
  var d = D(), cur = d.blanks.filter(function(b){ return b.id === sub; })[0] || d.blanks[0];
  R.innerHTML = U.head("blanks", "Empty CBSE answer-sheet formats for any question: from your textbook, a sample paper or your teacher.") +
    '<div class="tabs">' + d.blanks.map(function(b){ return '<a class="tab' + (b.id === cur.id ? " on" : "") + '" href="#blanks/' + b.id + '">' + esc(b.t) + '</a>'; }).join("") + '</div>' +
    '<div class="card"><label class="qpick">Show a question above the sheet: <select id="qp"><option value="">My own question</option>' + d.lab.map(function(l){ return '<option value="' + l.id + '">' + l.id + ' · ' + esc(l.title) + '</option>'; }).join("") + '</select></label><div id="qtext" class="wq hid"></div></div><div id="bbox"></div>' + U.foot("blanks", "Mark worksheets as explored");
  $("#qp").onchange = function(){ var l = d.lab.filter(function(x){ return x.id === this.value; }, this)[0]; $("#qtext").innerHTML = l ? (l.ref ? '<p class="muted">Uses the question of ' + l.ref + ':</p>' + d.lab.filter(function(x){ return x.id === l.ref; })[0].q : l.q) : ""; $("#qtext").classList.toggle("hid", !l); };
  X.blankSheet($("#bbox"), cur);
});
/* 12 mistake detection */
X.route("mistakes", function(R){
  var d = D();
  R.innerHTML = U.head("mistakes", (d.mistakeSub || "Each item below has one error. Find it.")) + d.mistakes.map(function(m, i){
    return '<div class="card mist"><h3>Error ' + (i + 1) + '</h3><p>' + esc(m.q) + '</p>' + X.shownWork(m) +
      U.mcqHTML({q:"What is wrong?", opts:m.opts}, m.id) + '</div>'; }).join("") + U.foot("mistakes");
  d.mistakes.forEach(function(m){ U.wireMcq(R, m, P().mist, m.id, m.c, function(){ if(d.mistakes.every(function(x){ return P().mist[x.id] === x.a; })) U.done("mistakes"); }); });
});

/* ================= 09 STEP-BY-STEP SOLVER ================= */
X.route("solver", function(R, sub){
  var d = D(), pr = d.solver.filter(function(s){ return s.id === sub; })[0];
  if(!pr){
    R.innerHTML = U.head("solver", "Three levels for every numerical: Guided (hints and formulas), Independent (blank answers, feedback after submission) and Exam (timed, no help).") +
      '<div class="plist">' + d.solver.map(function(s){ var v = P().sv[s.id] || {};
        return '<a class="card pl" href="#solver/' + s.id + '"><div class="chips">' + tagLabel(s.tag) + '<span class="chip">' + esc(d.concepts[s.c].n) + '</span></div><h3>' + esc(s.title) + '</h3><p>' + s.q + '</p><div class="lvls"><span class="' + (v.gDone ? "d" : "") + '">Guided ' + (v.gDone ? "✓" : "") + '</span><span class="' + (v.ind != null ? "d" : "") + '">Independent ' + (v.ind != null ? v.ind + "%" : "") + '</span><span class="' + (v.ex != null ? "d" : "") + '">Exam ' + (v.ex != null ? v.ex + "%" : "") + '</span></div></a>'; }).join("") + '</div>' + U.foot("solver");
    return;
  }
  var v = P().sv[pr.id] = P().sv[pr.id] || {}, lvl = v.lvl || "g";
  R.innerHTML = U.head("solver") + '<a class="btn sm ghost" href="#solver">← All problems</a><div class="card prob"><div class="chips">' + tagLabel(pr.tag) + '<span class="chip">' + esc(d.concepts[pr.c].n) + '</span></div><h3>' + esc(pr.title) + '</h3><p class="wq">' + pr.q + '</p>' +
    '<div class="tabs lv" role="tablist">' + [["g","Level 1 · Guided practice"],["i","Level 2 · Independent practice"],["e","Level 3 · Exam simulation"]].map(function(t){ return '<button class="tab' + (lvl === t[0] ? " on" : "") + '" data-l="' + t[0] + '" role="tab">' + t[1] + '</button>'; }).join("") + '</div><div id="lvbox"></div></div>';
  $$(".tabs.lv .tab", R).forEach(function(b){ b.onclick = function(){ v.lvl = b.dataset.l; U.save(); X.keepScroll = true; route2(); }; });
  function route2(){ $$(".tabs.lv .tab", R).forEach(function(b){ b.classList.toggle("on", b.dataset.l === v.lvl); }); lvl = v.lvl || "g"; ({g:guided, i:indep, e:exam})[lvl]($("#lvbox")); }
  route2();

  function stepFb(s, raw){
    var r = U.check(s.kind, raw, s.ans, s.tol), t = r.ok ? null : U.trapHit(s.kind, r.v, s.traps);
    return {ok:r.ok, html:U.fb(r.ok, r.ok ? {why:s.why} : {what:raw ? "You entered " + U.esc(raw) + "." : "No answer entered.", whyWrong:t ? t.why : (s.kind === "ratio" ? "Write the ratio like 2:1:1." : s.kind === "frac" ? "Write a fraction like 13/30." : "The figure does not follow from the data."), why:s.formula + ". " + (s.attempts >= 2 ? s.why : "Use the hint if you need it."), avoid:s.avoid}), trap:t};
  }
  function guided(B){
    var g = v.g || 0;
    B.innerHTML = '<p class="muted">Answer each step to unlock the next one. The formula is shown; hints are free.</p><ol class="gsteps">' + pr.steps.map(function(s, i){
      if(i < g) return '<li class="d"><b>Step ' + (i + 1) + ': ' + esc(s.label) + '</b><p>' + esc(s.prompt) + ' = <span class="num">' + U.showAns(s.kind, s.ans) + '</span></p><p class="why">' + s.why + '</p></li>';
      if(i === g) return '<li class="cur"><b>Step ' + (i + 1) + ': ' + esc(s.label) + '</b><p class="formula">📐 ' + esc(s.formula) + '</p><label>' + esc(s.prompt) + ' <input class="sin" id="gin" ' + (s.kind === "num" ? 'inputmode="decimal"' : '') + ' placeholder="' + (s.kind === "ratio" ? "e.g. 2:1" : s.kind === "frac" ? "e.g. 3/5" : "₹") + '"></label><div class="btns"><button class="btn ok" id="gck">Check</button><button class="btn ghost" id="ghn">💡 Hint</button><button class="btn ghost hid" id="gsa">Show answer</button></div><div id="gfb"></div></li>';
      return '<li class="lock"><b>Step ' + (i + 1) + ': ' + esc(s.label) + '</b> 🔒</li>'; }).join("") + '</ol>' +
      (g >= pr.steps.length ? '<div class="fb good">🎉 Problem solved step by step. Now try Level 2 without the formulas. <button class="btn sm" id="gre">Restart guided</button></div>' : '');
    if(g >= pr.steps.length){ $("#gre", B).onclick = function(){ v.g = 0; U.save(); guided(B); }; return; }
    var s = pr.steps[g], tries = 0;
    $("#gin", B).focus();
    $("#gin", B).onkeydown = function(e){ if(e.key === "Enter") $("#gck", B).click(); };
    $("#ghn", B).onclick = function(){ $("#gfb", B).innerHTML = '<div class="fb tip">💡 ' + esc(s.hint) + '</div>'; };
    $("#gck", B).onclick = function(){
      tries++; s.attempts = tries; var r = stepFb(s, $("#gin", B).value.trim());
      U.mark(pr.c, r.ok, r.ok ? null : "step:" + pr.id + ":" + g);
      if(r.ok){ v.g = g + 1; if(v.g >= pr.steps.length){ v.gDone = 1; U.done("solver"); } U.save(); U.xpPop(this, "+10 XP"); setTimeout(function(){ guided(B); }, 650); $("#gfb", B).innerHTML = r.html; return; }
      $("#gfb", B).innerHTML = r.html; if(tries >= 2) $("#gsa", B).classList.remove("hid");
    };
    $("#gsa", B).onclick = function(){ $("#gin", B).value = U.showAns(s.kind, s.ans).replace("₹", ""); $("#gfb", B).innerHTML = '<div class="fb tip">Answer: <b>' + U.showAns(s.kind, s.ans) + '</b>. ' + s.why + ' Press Check to continue.</div>'; };
  }
  function allInputs(B, timed){
    B.insertAdjacentHTML("beforeend", '<ol class="isteps2">' + pr.steps.map(function(s, i){ return '<li><label><b>' + (i + 1) + '.</b> ' + esc(timed ? s.prompt : s.label + ": " + s.prompt) + ' <input class="sin" data-s="' + i + '" placeholder="' + (s.kind === "ratio" ? "a:b" : s.kind === "frac" ? "a/b" : "₹") + '"></label><div class="sfb"></div></li>'; }).join("") + '</ol>');
    var all = $$(".sin", B); all.forEach(function(x, i){ x.onkeydown = function(e){ if(e.key === "Enter" && all[i + 1]) all[i + 1].focus(); }; });
  }
  function submitAll(B){
    var right = 0;
    pr.steps.forEach(function(s, i){ s.attempts = 2; var inpEl = $('[data-s="' + i + '"]', B), r = stepFb(s, inpEl.value.trim()); if(r.ok) right++; U.mark(pr.c, r.ok, r.ok ? null : "step:" + pr.id + ":" + i);
      inpEl.classList.add(r.ok ? "good" : "bad"); inpEl.readOnly = true; $(".sfb", inpEl.closest("li")).innerHTML = r.html; });
    return U.pct(right, pr.steps.length);
  }
  function indep(B){
    B.innerHTML = '<p class="muted">No formulas, no hints. Fill every answer, then submit for feedback.</p>';
    allInputs(B, false);
    B.insertAdjacentHTML("beforeend", '<div class="btns"><button class="btn ok" id="isb">Submit answers</button></div><div id="ires"></div>');
    $("#isb", B).onclick = function(){ var sc = submitAll(B); v.ind = Math.max(v.ind || 0, sc); U.save(); if(sc >= 60) U.done("solver");
      $("#ires", B).innerHTML = '<div class="score ' + (sc === 100 ? "full" : sc >= 60 ? "mid" : "low") + '"><b>' + sc + '%</b><span>Read the feedback under each answer.</span><button class="btn sm" id="iag">Try again</button></div>';
      this.disabled = true; $("#iag", B).onclick = function(){ indep(B); }; };
  }
  function exam(B){
    var secs = (pr.mins || 6) * 60;
    B.innerHTML = '<div class="exintro"><p>⏱ Time limit <b>' + pr.mins + ' minutes</b> · ' + pr.steps.length + ' answers · equal marks · no hints or formulas. The paper submits itself when time runs out.</p>' + (v.ex != null ? '<p>Your best: <b>' + v.ex + '%</b></p>' : '') + '<button class="btn ok" id="est">Start exam</button></div>';
    $("#est", B).onclick = function(){
      var t0 = Date.now(), left = secs, tm;
      B.innerHTML = '<div class="timer" id="etm"></div>'; allInputs(B, true);
      B.insertAdjacentHTML("beforeend", '<div class="btns"><button class="btn ok" id="esb">Submit paper</button></div><div id="eres"></div>');
      function tick(){ left = secs - Math.floor((Date.now() - t0) / 1000); var e = $("#etm", B); if(!e){ clearInterval(tm); return; } e.textContent = "⏱ " + U.fmtTime(left); e.classList.toggle("warn", left <= 60); if(left <= 0) fin(); }
      function fin(){ clearInterval(tm); if(!$("#esb", B) || $("#esb", B).disabled) return; $("#esb", B).disabled = true;
        var sc = submitAll(B), took = Math.min(secs, Math.round((Date.now() - t0) / 1000)); v.ex = Math.max(v.ex || 0, sc); U.save(); if(sc >= 60) U.done("solver"); if(sc === 100) U.badge("examace", "Exam-mode ace");
        $("#eres", B).innerHTML = '<div class="score ' + (sc === 100 ? "full" : sc >= 60 ? "mid" : "low") + '"><b>' + sc + '%</b><span>Marks ' + Math.round(sc * pr.steps.length / 100) + ' / ' + pr.steps.length + ' · time taken ' + U.fmtTime(took) + ' of ' + U.fmtTime(secs) + '</span><span>' + (sc >= 80 ? "Exam-ready on this type." : sc >= 50 ? "Nearly there: revisit the wrong steps in Guided mode." : "Go back to Guided mode for this problem.") + '</span><button class="btn sm" id="ere">Retake</button></div>';
        $("#ere", B).onclick = function(){ exam(B); }; }
      $("#esb", B).onclick = fin; tm = setInterval(tick, 1000); tick();
      var f = $(".sin", B); if(f) f.focus();
    };
  }
});
})();
