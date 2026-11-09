/* NOTESFLIX ARCADE: task engine + scene-based game kits (no multiple-choice questions).
   Tasks are hands-on: sort items into bins, put steps in order, connect terms to meanings, work out numbers.
   Each kit wraps the same tasks in its own world with its own resource, goal and win/lose rules. */
(function () {
  'use strict';
  var NFA = window.NFA, el = NFA.el, esc = NFA.esc, K = NFA.kits, shuffle = NFA.shuffle;

  /* ---- build the rounds for a chapter ---- */
  function rounds(spec) {
    var out = [], i;
    if (spec.sort && spec.sort.length) { var a = NFA.batch(spec, 6), b = NFA.batch(spec, 6); out.push({ k: 'sort', items: a }); if (NFA.pool(spec).length > 7) out.push({ k: 'sort', items: b }); }
    (spec.seq || []).slice(0, 3).forEach(function (s) { out.push({ k: 'seq', name: s[0], steps: s[1] }); });
    if (spec.pair && spec.pair.length) { var p = shuffle(spec.pair.slice()); for (i = 0; i < p.length; i += 4) { var chunk = p.slice(i, i + 4); if (chunk.length >= 2) out.push({ k: 'pair', pairs: chunk }); else if (out.length) out[out.length - 1].pairs && out[out.length - 1].pairs.push(chunk[0]); } }
    (spec.calc || []).slice(0, 4).forEach(function (c) { out.push({ k: 'calc', q: c }); });
    /* interleave so different task types alternate */
    var by = {}; out.forEach(function (r) { (by[r.k] = by[r.k] || []).push(r); });
    var res = [], ks = Object.keys(by), more = true;
    while (more) { more = false; ks.forEach(function (k) { if (by[k].length) { res.push(by[k].shift()); more = true; } }); }
    return res;
  }
  NFA.rounds = rounds;

  /* ---- the task engine ---- */
  NFA.task = function (ctx, spec, cb) {
    var box = el('div'); box.style.cssText = 'max-width:480px;margin:8px auto'; cb.mount.appendChild(box);
    var R = rounds(spec), ri = -1, cur = null, msg = el('div', 'nfa-mute'); msg.style.cssText = 'max-width:480px;margin:8px auto;min-height:44px;font-size:14px'; cb.mount.appendChild(msg);
    var auto = {}, finished = false;
    function say(ok, t) { msg.innerHTML = (ok ? '✅ ' : '❌ ') + esc(t); }
    function good(k, t) { ctx.record(k, true); ctx.addScore(100); say(true, t); cb.ok && cb.ok(k); }
    function bad(k, t) { ctx.record(k, false); say(false, t); cb.bad && cb.bad(k); }
    function done() { cb.round && cb.round(ri + 1, R.length); next(); }
    function next() { ri++; box.innerHTML = ''; auto = {}; if (ri >= R.length) { finished = true; cb.win(); return; } cur = R[ri]; cb.round && cb.round(ri, R.length); ({ sort: tSort, seq: tSeq, pair: tPair, calc: tCalc })[cur.k](cur); }
    function head(t) { var h = el('div', 'nfa-eyebrow', esc(t)); h.style.margin = '0 0 8px'; box.appendChild(h); }
    function btn(label, fn, cls) { var b = el('button', 'nfa-btn' + (cls ? ' ' + cls : ''), esc(label)); b.style.cssText = 'margin:4px;white-space:normal;min-height:44px'; b.onclick = fn; return b; }

    function tSort(r) {
      head('Sort each item into its bin. Tap an item, then tap the bin.');
      var cats = NFA.cats(spec), left = r.items.length, sel = null, chips = el('div'), bins = el('div');
      chips.style.cssText = 'display:flex;flex-wrap:wrap;justify-content:center;margin-bottom:10px'; bins.style.cssText = 'display:grid;grid-template-columns:repeat(' + Math.min(3, cats.length) + ',1fr);gap:8px';
      var cmap = [];
      r.items.forEach(function (it) { var b = btn(it.t, function () { if (b.disabled) return; if (sel) sel.b.style.outline = ''; sel = { it: it, b: b }; b.style.outline = '3px solid #ffd24d'; }); cmap.push({ it: it, b: b }); chips.appendChild(b); });
      var bmap = [];
      cats.forEach(function (c, ci) {
        var d = el('div', 'nfa-card'); d.style.cssText = 'cursor:pointer;text-align:center;padding:10px 6px;min-height:84px'; d.innerHTML = '<b>' + esc(c) + '</b><div class="nfa-mute" style="font-size:12px;margin-top:6px"></div>';
        d.onclick = function () { place(ci); }; bins.appendChild(d); bmap.push(d);
      });
      function place(ci) {
        if (!sel) { say(false, 'Pick an item first.'); return; } var it = sel.it;
        if (it.c === ci) { sel.b.disabled = true; sel.b.style.opacity = 0.35; sel.b.style.outline = ''; bmap[ci].lastChild.innerHTML += esc(it.t) + '<br>'; sel = null; left--; good('sort', NFA.why(it)); if (!left) done(); }
        else bad('sort', NFA.why(it));
      }
      box.appendChild(chips); box.appendChild(bins);
      auto.go = function () { cmap.forEach(function (m) { if (finished || ri < 0 || cur !== r) return; sel = { it: m.it, b: m.b }; place(m.it.c); }); };
    }
    function tSeq(r) {
      head(r.name + ': tap the steps in the correct order.');
      var need = 0, bag = el('div'), line = el('ol'); bag.style.cssText = 'display:flex;flex-wrap:wrap;justify-content:center'; line.style.cssText = 'margin:12px 0 0;padding-left:22px;font-weight:700';
      var bs = [];
      shuffle(r.steps.map(function (t, i) { return { t: t, i: i }; })).forEach(function (s) {
        var b = btn(s.t, function () {
          if (b.disabled) return;
          if (s.i === need) { b.disabled = true; b.style.opacity = 0.35; var li = el('li'); li.textContent = s.t; line.appendChild(li); need++; good('seq', 'Step ' + need + ': ' + s.t); if (need >= r.steps.length) done(); }
          else bad('seq', 'Not yet. Step ' + (need + 1) + ' is: ' + r.steps[need]);
        });
        b.__i = s.i; bs.push(b); bag.appendChild(b);
      });
      box.appendChild(bag); box.appendChild(line);
      auto.go = function () { for (var k = 0; k < r.steps.length; k++) bs.filter(function (b) { return b.__i === k; })[0].click(); };
    }
    function tPair(r) {
      head('Connect each term to its meaning. Tap a term, then its meaning.');
      var left = r.pairs.length, selT = null, wrap = el('div'), L = el('div'), Rr = el('div'); wrap.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:8px';
      var tb = [], mb = [];
      r.pairs.forEach(function (p, i) { var b = btn(p[0], function () { if (b.disabled) return; if (selT) selT.style.outline = ''; selT = b; b.style.outline = '3px solid #ffd24d'; }); b.__i = i; tb.push(b); L.appendChild(b); });
      shuffle(r.pairs.map(function (p, i) { return { m: p[1], i: i }; })).forEach(function (m) {
        var b = btn(m.m, function () {
          if (b.disabled) return; if (!selT) { say(false, 'Pick a term first.'); return; }
          if (selT.__i === m.i) { selT.disabled = true; b.disabled = true; selT.style.opacity = b.style.opacity = 0.35; selT.style.outline = ''; var t = r.pairs[m.i]; selT = null; left--; good('pair', t[0] + ' = ' + t[1]); if (!left) done(); }
          else { var t2 = r.pairs[selT.__i]; bad('pair', t2[0] + ' means: ' + t2[1]); }
        }, 'alt'); b.__i = m.i; mb.push(b); Rr.appendChild(b);
      });
      wrap.appendChild(L); wrap.appendChild(Rr); box.appendChild(wrap);
      auto.go = function () { for (var i = 0; i < r.pairs.length; i++) { selT = tb.filter(function (b) { return b.__i === i; })[0]; mb.filter(function (b) { return b.__i === i; })[0].click(); } };
    }
    function tCalc(r) {
      var q = r.q; head('Work it out and type the answer.');
      var p = el('div', 'nfa-card', esc(q[0])); p.style.cssText = 'font-weight:700;margin-bottom:8px'; box.appendChild(p);
      var row = el('div'); row.style.cssText = 'display:flex;gap:8px;align-items:center'; var inp = el('input'); inp.type = 'text'; inp.inputMode = 'decimal'; inp.placeholder = 'Your answer'; inp.style.cssText = 'flex:1;padding:12px;border-radius:10px;border:2px solid #3d3b9a;background:#0d0d2b;color:#fff;font-size:16px;font-weight:700';
      var u = el('span', 'nfa-mute', esc(q[2] || '')); var go = btn('Check', function () { chk(); }); row.appendChild(inp); row.appendChild(u); row.appendChild(go); box.appendChild(row);
      var tries = 0;
      function val(s) { return parseFloat(String(s).replace(/[,\s%₹]/g, '')); }
      function chk() {
        var v = val(inp.value); if (isNaN(v)) { say(false, 'Type a number.'); return; }
        var a = val(q[1]), ok = Math.abs(v - a) <= Math.max(0.011, Math.abs(a) * 0.005);
        if (ok) { good('calc', q[3] || 'Correct.'); done(); } else { tries++; bad('calc', tries >= 2 ? 'The answer is ' + q[1] + (q[2] ? ' ' + q[2] : '') + '. ' + (q[3] || '') : 'Not quite. Check the formula and try again.'); if (tries >= 2) { inp.disabled = go.disabled = true; setTimeout(done, 1600 / NFA.T); } }
      }
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') chk(); });
      auto.go = function () { ctx.record('calc', true); ctx.addScore(100); cb.ok && cb.ok('calc'); done(); };
    }
    ctx.cleanup(function () { finished = true; });
    next();
    window.__auto = function () { var g = 0; while (!finished && g++ < 200) { if (auto.go) auto.go(); } };
  };

  /* ---- scene kits: each world has its own resource, goal and rules ---- */
  function scene(name, cfg) {
    K[cfg.key] = {
      name: name,
      howto: function () { return cfg.how.concat(['Every task is hands-on: sort, order, connect or calculate. There are no multiple-choice questions.', 'Mistakes cost ' + cfg.lossName + '. If it runs out, you restart the mission.']); },
      run: function (ctx, spec) {
        var th = NFA.theme(spec), top = el('div', 'nfa-card'); top.style.cssText = 'max-width:480px;margin:0 auto 8px;text-align:center;background:linear-gradient(135deg,' + th.a + ',' + th.b + ')';
        var row = el('div'); row.style.cssText = 'font-size:34px;letter-spacing:4px;min-height:44px'; var goal = el('div'); goal.style.cssText = 'font-weight:800;margin-top:4px'; top.appendChild(row); top.appendChild(goal); ctx.root.appendChild(top);
        var life = cfg.lives, prog = 0, tot = 1, res = cfg.start, over = false;
        function paint() {
          var n = Math.round(prog / tot * 8), s = ''; for (var i = 0; i < 8; i++) s += i < n ? cfg.icons[i % cfg.icons.length] : '▫️'; row.textContent = s;
          goal.innerHTML = esc(cfg.goal) + (cfg.money ? ' · ' + esc(cfg.resName) + ': <span style="color:' + th.acc + '">₹' + res + '</span>' : '');
          var h = {}; h[cfg.resName] = cfg.money ? '₹' + res : '❤'.repeat(Math.max(0, life)); h.Stage = Math.min(prog + 1, tot) + '/' + tot; ctx.setHud(h);
        }
        paint();
        NFA.task(ctx, spec, {
          mount: ctx.root,
          round: function (i, n) { prog = i; tot = n; paint(); },
          ok: function () { if (cfg.money) res += cfg.gain; paint(); },
          bad: function () { if (cfg.money) { res -= cfg.pain; if (res <= 0) { over = true; paint(); ctx.finish(false); } } else { life--; paint(); if (life <= 0 && !over) { over = true; ctx.finish(false); } } },
          win: function () { if (!over) { over = true; prog = tot; paint(); ctx.finish(true); } }
        });
      }
    };
  }
  scene('Formula Racing', { key: 'racing', icons: ['🏎️', '🏁'], goal: 'Finish the Grand Prix', resName: 'Engine', lives: 6, lossName: 'engine health', how: ['Each task you finish is a lap. Complete every lap to take the chequered flag.'] });
  scene('Detective Academy', { key: 'detective', icons: ['🔍', '🧩'], goal: 'Close the case', resName: 'Credibility', lives: 6, lossName: 'credibility', how: ['Each task you solve uncovers a clue. Collect them all to close the case.'] });
  scene('Escape Room', { key: 'escape', icons: ['🔐', '🔓'], goal: 'Unlock every lock', resName: 'Alarm', lives: 6, lossName: 'alarm margin', how: ['Each task opens a lock. Open them all to escape.'] });
  scene('Business Tycoon', { key: 'tycoon', icons: ['🏢', '💰'], goal: 'Reach the profit target', resName: 'Cash', money: true, start: 5000, gain: 1500, pain: 800, icons2: 0, lossName: 'cash', how: ['Every correct move earns profit, every mistake costs cash. Finish every task with cash left.'] });
  scene('Supermarket Simulator', { key: 'supermarket', icons: ['🛒', '🧾'], goal: 'Serve every customer', resName: 'Cash drawer', money: true, start: 3000, gain: 600, pain: 400, lossName: 'cash drawer', how: ['Each task is a customer at your counter. Serve them all.'] });
  scene('City Builder', { key: 'city', icons: ['🏙️', '🏗️'], goal: 'Complete the city', resName: 'Budget', money: true, start: 6000, gain: 700, pain: 600, lossName: 'budget', how: ['Each task builds a new part of the city. Build them all.'] });
  scene('Farm Master', { key: 'farm', icons: ['🌱', '🌾'], goal: 'Grow the harvest', resName: 'Crop health', lives: 6, lossName: 'crop health', how: ['Each task waters a field. Grow them all to harvest.'] });
  scene('Story Designer', { key: 'story', icons: ['📖', '✨'], goal: 'Finish the story', resName: 'Plot', lives: 6, lossName: 'plot strength', how: ['Each task writes a chapter of your story. Complete every chapter.'] });
  scene('Chapter Quest', { key: 'quest', icons: ['⚔️', '🏰'], goal: 'Reach the castle', resName: 'Hero HP', lives: 6, lossName: 'hero HP', how: ['Each task is a battle on your quest. Win them all to reach the castle.'] });
  scene('Build Your Machine', { key: 'machine', icons: ['⚙️', '🔩'], goal: 'Assemble the machine', resName: 'Parts', lives: 6, lossName: 'spare parts', how: ['Each task fits a part into your machine. Assemble it completely.'] });
  scene('Science Lab Simulator', { key: 'lab', icons: ['🧪', '🔬'], goal: 'Complete the experiments', resName: 'Lab safety', lives: 6, lossName: 'lab safety', how: ['Each task is an experiment. Run them all without losing lab safety.'] });
  scene('Art Studio', { key: 'art', icons: ['🎨', '🖌️'], goal: 'Finish the masterpiece', resName: 'Paint', lives: 6, lossName: 'paint', how: ['Each task adds a stroke to your artwork. Complete the painting.'] });
  scene('Circuit Master', { key: 'circuit', icons: ['💡', '🔌'], goal: 'Light the whole circuit', resName: 'Fuse', lives: 6, lossName: 'fuse strength', how: ['Each task wires one part of the circuit. Light it all up.'] });
  scene('Recipe Master', { key: 'recipe', icons: ['🍳', '🍽️'], goal: 'Serve the full menu', resName: 'Dishes', lives: 6, lossName: 'ingredients', how: ['Each task prepares a dish. Serve the complete menu.'] });
})();
