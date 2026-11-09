/* NOTESFLIX ARCADE: shared helpers and the real-time (canvas) game kits.
   No multiple-choice questions anywhere. Content comes in four game-native forms:
     sort: [[category, [items...]], ...]   things to collect, shoot, dodge or sort into bins
     seq:  [[name, [step1, step2, ...]]]   an ordered process or timeline
     pair: [[term, meaning], ...]          things to connect
     calc: [[prompt, answer, unit, why]]   numbers to work out and type
   Every kit sets window.__auto, a bot that plays the game correctly. It is used only by automatic tests. */
(function () {
  'use strict';
  var NFA = window.NFA, el = NFA.el, esc = NFA.esc;
  var K = NFA.kits = {};
  var shuffle = function (a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  NFA.shuffle = shuffle;
  NFA.say = function (box, ok, w) { box.innerHTML = (ok ? '✅ ' : '❌ ') + esc(w || ''); };
  NFA.why = function (it) { return it.t + ' belongs to ' + it.cat + '.'; };
  NFA.cats = function (spec) { return spec.sort.map(function (s) { return s[0]; }); };
  NFA.pool = function (spec) { var o = []; spec.sort.forEach(function (s, ci) { s[1].forEach(function (t) { o.push({ t: t, c: ci, cat: s[0] }); }); }); return o; };
  NFA.batch = function (spec, n) {
    var by = spec.sort.map(function (s, ci) { return shuffle(s[1].map(function (t) { return { t: t, c: ci, cat: s[0] }; })); }), out = [], i = 0, guard = 0;
    while (out.length < n && guard++ < 500) { var b = by[i % by.length]; if (b.length) out.push(b.pop()); i++; }
    return shuffle(out);
  };
  NFA.canvas = function (root, W, H) {
    var d = Math.min(2, window.devicePixelRatio || 1), c = el('canvas');
    c.width = W * d; c.height = H * d;
    c.style.cssText = 'width:100%;max-width:' + W + 'px;aspect-ratio:' + W + '/' + H + ';display:block;margin:0 auto;border-radius:16px;touch-action:none;background:#000;border:2px solid #3d3b9a';
    var g = c.getContext('2d'); g.scale(d, d); root.appendChild(c);
    return { c: c, g: g, W: W, H: H, pt: function (e) { var r = c.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width * W, y: (e.clientY - r.top) / r.height * H }; } };
  };
  NFA.bar = function (root) { var d = el('div', 'nfa-card'); d.style.cssText = 'margin:0 auto 8px;max-width:420px;font-weight:800;text-align:center'; root.appendChild(d); return d; };
  NFA.note = function (root) { var d = el('div', 'nfa-mute'); d.style.cssText = 'max-width:420px;margin:8px auto 0;min-height:44px;font-size:14px'; root.appendChild(d); return d; };
  NFA.loop = function (ctx, step, draw) {
    var last = 0, run = true, id;
    function f(t) { if (!run) return; var dt = Math.min(0.05, (t - last) / 1000 || 0); last = t; if (!ctx.isPaused()) step(dt); draw(); id = requestAnimationFrame(f); }
    id = requestAnimationFrame(f); ctx.cleanup(function () { run = false; cancelAnimationFrame(id); });
  };
  NFA.keys = function (ctx, map) {
    function dn(e) { var f = map[e.key] || map[String(e.key).toLowerCase()]; if (f) { e.preventDefault(); f(); } }
    window.addEventListener('keydown', dn); ctx.cleanup(function () { window.removeEventListener('keydown', dn); });
  };
  NFA.swipe = function (c, left, right, tap) {
    var sx = 0;
    c.addEventListener('pointerdown', function (e) { sx = e.clientX; });
    c.addEventListener('pointerup', function (e) { var dx = e.clientX - sx; if (Math.abs(dx) > 28) { dx < 0 ? left() : right(); } else if (tap) tap(e); });
  };
  NFA.txt = function (g, s, x, y, size, col, al) { g.font = '800 ' + size + 'px system-ui,sans-serif'; g.fillStyle = col || '#fff'; g.textAlign = al || 'center'; g.textBaseline = 'middle'; g.fillText(s, x, y); };
  NFA.wrap = function (g, s, x, y, maxW, lh, size, col) {
    g.font = '800 ' + size + 'px system-ui,sans-serif'; g.fillStyle = col || '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
    var w = String(s).split(' '), lines = [], cur = '';
    w.forEach(function (t) { var tt = cur ? cur + ' ' + t : t; if (g.measureText(tt).width > maxW && cur) { lines.push(cur); cur = t; } else cur = tt; });
    lines.push(cur); lines = lines.slice(0, 3); var y0 = y - (lines.length - 1) * lh / 2;
    lines.forEach(function (l, i) { g.fillText(l, x, y0 + i * lh); });
  };
  NFA.theme = function (spec) {
    var h = 0; for (var i = 0; i < spec.id.length; i++) h = (h * 31 + spec.id.charCodeAt(i)) % 360;
    return { h: h, a: 'hsl(' + h + ',70%,22%)', b: 'hsl(' + h + ',75%,12%)', acc: 'hsl(' + h + ',90%,62%)', acc2: 'hsl(' + ((h + 160) % 360) + ',90%,62%)' };
  };
  NFA.game = function (spec) {
    var kit = K[spec.kit], concepts = {};
    var labels = { sort: function () { return 'Classifying: ' + NFA.cats(spec).join(' / '); }, seq: function () { return 'Order of steps: ' + spec.seq.map(function (s) { return s[0]; }).join(', '); }, pair: function () { return 'Key terms and meanings'; }, calc: function () { return 'Numericals'; } };
    var order = ['sort', 'seq', 'pair', 'calc'].filter(function (k) { return spec[k] && spec[k].length; }), P = spec.parts;
    order.forEach(function (k, i) { concepts[k] = { label: labels[k](), part: P[Math.min(i, P.length - 1)] }; });
    NFA.boot({ chapterId: spec.id, title: spec.title, genre: kit.name, tagline: spec.mission, howto: kit.howto(spec), concepts: concepts, start: function (ctx) { kit.run(ctx, spec); } });
  };

  function targets(spec, R) { /* rounds of {it, tg, tc}: collect/destroy the target category */
    var cats = NFA.cats(spec), order = shuffle(cats.map(function (c, i) { return i; })), rows = [], pool = NFA.pool(spec);
    for (var r = 0; r < R; r++) {
      var tc = order[r % order.length];
      var tg = shuffle(pool.filter(function (x) { return x.c === tc; })).slice(0, 4), ot = shuffle(pool.filter(function (x) { return x.c !== tc; })).slice(0, 4);
      shuffle(tg.map(function (x) { return { it: x, tg: 1, tc: tc }; }).concat(ot.map(function (x) { return { it: x, tg: 0, tc: tc }; }))).forEach(function (p) { rows.push(p); });
    }
    return rows;
  }
  NFA.targets = targets;

  /* ===== Knowledge Runner ===== */
  K.runner = { name: 'Knowledge Runner', howto: function () { return ['Swipe left or right, or use the arrow keys / A and D, to change lane.', 'A banner tells you what to COLLECT. Run through items that belong to it and dodge everything else.', 'Collecting a wrong item costs a life. You have 3 lives and the banner changes each round.']; },
    run: function (ctx, spec) {
      var W = 420, H = 560, cv = NFA.canvas(ctx.root, W, H), g = cv.g, th = NFA.theme(spec), cats = NFA.cats(spec);
      var bn = NFA.bar(ctx.root), nt = NFA.note(ctx.root), rows = targets(spec, Math.min(3, cats.length) + 1);
      rows.forEach(function (r) { r.lane = Math.floor(Math.random() * 3); r.z = 0; });
      var lane = 1, tl = 1, lives = 3, i0 = 0, live = [], passed = 0, done = false, t = 0;
      function hud() { ctx.setHud({ Lives: '❤'.repeat(Math.max(0, lives)), Items: Math.min(passed, rows.length) + '/' + rows.length }); }
      function ban() { var f = live[0] || rows[Math.min(i0, rows.length - 1)]; bn.innerHTML = '🎯 COLLECT: <span style="color:' + th.acc + '">' + esc(cats[f.tc]) + '</span>'; }
      function mv(d) { lane = Math.max(0, Math.min(2, lane + d)); }
      NFA.keys(ctx, { ArrowLeft: function () { mv(-1); }, ArrowRight: function () { mv(1); }, a: function () { mv(-1); }, d: function () { mv(1); } });
      NFA.swipe(cv.c, function () { mv(-1); }, function () { mv(1); }, function (e) { mv(cv.pt(e).x < W / 2 ? -1 : 1); });
      hud(); ban();
      function step(dt) {
        if (done) return; t += dt; tl += (lane - tl) * Math.min(1, dt * 14);
        var sp = 0.36 + passed * 0.006; live.forEach(function (x) { x.z -= sp * dt; });
        var f = live[0];
        if (f && f.z <= 0) {
          var got = lane === f.lane, ok = got ? !!f.tg : !f.tg; ctx.record('sort', ok);
          NFA.say(nt, ok, (got ? (f.tg ? 'Collected! ' : 'Wrong item. ') : (f.tg ? 'You missed it. ' : 'Dodged. ')) + NFA.why(f.it));
          if (got && f.tg) ctx.addScore(100); else if (got) lives--;
          passed++; live.shift(); ban(); hud();
          if (lives <= 0) { done = true; ctx.finish(false); return; }
          if (i0 >= rows.length && !live.length) { done = true; ctx.finish(true); return; }
        }
        var l = live[live.length - 1]; if (i0 < rows.length && (!l || l.z < 0.62)) { var nx = rows[i0++]; nx.z = 1; live.push(nx); ban(); }
      }
      function X(l, p) { return W / 2 + (l - 1) * 150 * (0.2 + 0.8 * p); }
      function draw() {
        var gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, th.b); gr.addColorStop(1, th.a); g.fillStyle = gr; g.fillRect(0, 0, W, H);
        g.fillStyle = '#16153f'; g.beginPath(); g.moveTo(W / 2 - 40, 130); g.lineTo(W / 2 + 40, 130); g.lineTo(W / 2 + 230, H); g.lineTo(W / 2 - 230, H); g.fill();
        g.strokeStyle = '#ffffff55'; g.lineWidth = 2; g.setLineDash([16, 14]); g.lineDashOffset = -t * 160;
        [-0.5, 0.5].forEach(function (o) { g.beginPath(); g.moveTo(W / 2 + o * 26, 130); g.lineTo(W / 2 + o * 232, H); g.stroke(); }); g.setLineDash([]);
        live.slice().reverse().forEach(function (f) {
          var p = 1 - f.z, y = 130 + p * (H - 210), s = 0.3 + 0.7 * p, x = X(f.lane, p), w = 124 * s, h = 54 * s;
          g.fillStyle = f.tg ? th.acc : th.acc2; g.fillRect(x - w / 2, y - h / 2, w, h); g.strokeStyle = '#fff'; g.lineWidth = 2; g.strokeRect(x - w / 2, y - h / 2, w, h);
          NFA.wrap(g, f.it.t, x, y, w - 8, 14 * s + 2, Math.max(9, 13 * s), '#10102e');
        });
        g.font = '44px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('🏃', X(tl, 1), H - 60);
      }
      NFA.loop(ctx, step, draw);
      window.__auto = function () { var n = 0; while (!done && n++ < 40000) { var f = live[0]; if (f) { lane = f.tg ? f.lane : (f.lane + 1) % 3; tl = lane; } step(0.05); } };
    } };

  /* ===== Space Mission ===== */
  K.space = { name: 'Space Mission', howto: function () { return ['Move your ship with the mouse, finger or arrow keys. Tap, click or press Space to fire.', 'The mission banner names the category to DESTROY. Shoot only asteroids that belong to it.', 'Shooting a wrong asteroid, or letting a target through, costs shield. Shield 3, then the mission fails.']; },
    run: function (ctx, spec) {
      var W = 420, H = 560, cv = NFA.canvas(ctx.root, W, H), g = cv.g, th = NFA.theme(spec), cats = NFA.cats(spec);
      var bn = NFA.bar(ctx.root), nt = NFA.note(ctx.root), waves = targets(spec, Math.min(3, cats.length) + 1);
      var sx = W / 2, shield = 3, i0 = 0, rocks = [], bl = [], cool = 0, spawn = 0.6, done = false, t = 0, resolved = 0, stars = [];
      for (var s = 0; s < 40; s++) stars.push([Math.random() * W, Math.random() * H, Math.random() * 2 + 0.5]);
      function hud() { ctx.setHud({ Shield: '🛡'.repeat(Math.max(0, shield)), Rocks: resolved + '/' + waves.length }); }
      function ban() { var f = rocks[0] || waves[Math.min(i0, waves.length - 1)]; bn.innerHTML = '🎯 DESTROY: <span style="color:' + th.acc + '">' + esc(cats[f.tc]) + '</span>'; }
      function shoot() { if (cool <= 0 && !done) { bl.push({ x: sx, y: H - 70 }); cool = 0.22; } }
      cv.c.addEventListener('pointermove', function (e) { sx = cv.pt(e).x; }); cv.c.addEventListener('pointerdown', function (e) { sx = cv.pt(e).x; shoot(); });
      NFA.keys(ctx, { ArrowLeft: function () { sx = Math.max(24, sx - 30); }, ArrowRight: function () { sx = Math.min(W - 24, sx + 30); }, a: function () { sx = Math.max(24, sx - 30); }, d: function () { sx = Math.min(W - 24, sx + 30); }, ' ': shoot });
      hud(); ban();
      function out(r, ok) { ctx.record('sort', ok); NFA.say(nt, ok, NFA.why(r.it)); resolved++; r.dead = true; hud(); ban(); }
      function step(dt) {
        if (done) return; t += dt; cool -= dt; spawn -= dt;
        if (i0 < waves.length && spawn <= 0) { var w = waves[i0++]; rocks.push({ x: 50 + Math.random() * (W - 100), y: -40, vy: 70 + i0 * 1.6, it: w.it, tg: w.tg, tc: w.tc }); spawn = 1.35; ban(); }
        bl.forEach(function (b) { b.y -= 560 * dt; }); rocks.forEach(function (r) { r.y += r.vy * dt; });
        bl.forEach(function (b) { rocks.forEach(function (r) { if (!r.dead && !b.dead && Math.abs(b.x - r.x) < 46 && Math.abs(b.y - r.y) < 36) { b.dead = true; if (r.tg) { ctx.addScore(100); out(r, true); } else { shield--; out(r, false); } } }); });
        rocks.forEach(function (r) { if (!r.dead && r.y > H - 40) { if (r.tg) { shield--; out(r, false); } else out(r, true); } });
        bl = bl.filter(function (b) { return !b.dead && b.y > -10; }); rocks = rocks.filter(function (r) { return !r.dead; }); hud();
        if (shield <= 0) { done = true; ctx.finish(false); return; } if (i0 >= waves.length && !rocks.length) { done = true; ctx.finish(true); }
      }
      function draw() {
        var gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#05051a'); gr.addColorStop(1, th.a); g.fillStyle = gr; g.fillRect(0, 0, W, H);
        g.fillStyle = '#fff'; stars.forEach(function (s) { g.fillRect(s[0], (s[1] + t * 30 * s[2]) % H, s[2], s[2]); });
        rocks.forEach(function (r) { g.fillStyle = '#5d4f72'; g.beginPath(); g.arc(r.x, r.y, 38, 0, 7); g.fill(); g.strokeStyle = th.acc; g.lineWidth = 3; g.stroke(); NFA.wrap(g, r.it.t, r.x, r.y, 66, 13, 12, '#fff'); });
        g.fillStyle = '#ffd24d'; bl.forEach(function (b) { g.fillRect(b.x - 2, b.y, 4, 14); });
        g.font = '44px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('🚀', sx, H - 36);
      }
      NFA.loop(ctx, step, draw);
      window.__auto = function () {
        var k = 0; while (!done && k++ < 60000) {
          var tg = rocks.filter(function (r) { return r.tg; }).sort(function (a, b) { return b.y - a.y; })[0];
          if (tg) { sx = tg.x; var blocked = rocks.some(function (r) { return !r.tg && Math.abs(r.x - tg.x) < 44 && r.y > tg.y; }); if (!blocked && tg.y > 60) shoot(); }
          step(0.02);
        }
      };
    } };

  /* ===== Rhythm Master ===== */
  K.rhythm = { name: 'Rhythm Master', howto: function () { return ['Notes carrying an item fall down the track.', 'When a note touches the glowing line, tap the pad (or press 1, 2, 3) of the category it belongs to.', 'A wrong pad or a missed note breaks your combo and costs health.']; },
    run: function (ctx, spec) {
      var W = 420, H = 560, cv = NFA.canvas(ctx.root, W, H), g = cv.g, th = NFA.theme(spec), cats = NFA.cats(spec), n = cats.length, nt = NFA.note(ctx.root);
      var notes = NFA.batch(spec, 22).map(function (x) { return { it: x, y: -30, ans: false }; }), HY = H - 130, SP = 210, i0 = 0, live = [], hp = 4, combo = 0, spawn = 0.5, done = false, t = 0, flash = [], resolved = 0;
      function hud() { ctx.setHud({ Health: '♥'.repeat(Math.max(0, hp)), Combo: combo, Notes: resolved + '/' + notes.length }); }
      function judge(p) {
        var f = live.filter(function (x) { return !x.ans && Math.abs(x.y - HY) < 62; })[0]; if (!f) return; f.ans = true;
        var ok = p === f.it.c; flash[p] = 0.25; ctx.record('sort', ok); NFA.say(nt, ok, NFA.why(f.it)); resolved++;
        if (ok) { combo++; ctx.addScore(100 + combo * 10); } else { combo = 0; hp--; } hud();
      }
      var km = {}; for (var q = 0; q < n; q++) (function (q) { km[String(q + 1)] = function () { judge(q); }; })(q); NFA.keys(ctx, km);
      cv.c.addEventListener('pointerdown', function (e) { var p = cv.pt(e); if (p.y > H - 110) judge(Math.max(0, Math.min(n - 1, Math.floor(p.x / (W / n))))); });
      hud();
      function step(dt) {
        if (done) return; t += dt; spawn -= dt; flash = flash.map(function (f) { return f - dt; });
        if (i0 < notes.length && spawn <= 0) { live.push(notes[i0++]); spawn = 1.25; }
        live.forEach(function (x) { x.y += SP * dt; });
        live.forEach(function (x) { if (!x.ans && x.y > HY + 62) { x.ans = true; ctx.record('sort', false); NFA.say(nt, false, 'Missed it. ' + NFA.why(x.it)); combo = 0; hp--; resolved++; hud(); } });
        live = live.filter(function (x) { return x.y < H; });
        if (hp <= 0) { done = true; ctx.finish(false); return; } if (i0 >= notes.length && !live.length) { done = true; ctx.finish(true); }
      }
      function draw() {
        g.fillStyle = th.b; g.fillRect(0, 0, W, H); g.fillStyle = '#ffffff10'; g.fillRect(W / 2 - 90, 0, 180, H);
        g.fillStyle = th.acc; g.fillRect(0, HY - 3, W, 6);
        live.forEach(function (x) { g.fillStyle = x.ans ? '#ffffff44' : '#fff'; g.fillRect(W / 2 - 80, x.y - 22, 160, 44); NFA.wrap(g, x.it.t, W / 2, x.y, 150, 13, 13, '#10102e'); });
        cats.forEach(function (c, i) { var w = W / n; g.fillStyle = flash[i] > 0 ? th.acc : (i % 2 ? th.a : th.acc2); g.fillRect(i * w + 6, H - 100, w - 12, 86); NFA.wrap(g, (i + 1) + ' · ' + c, i * w + w / 2, H - 57, w - 20, 15, 14, '#10102e'); });
      }
      NFA.loop(ctx, step, draw);
      window.__auto = function () { var k = 0; while (!done && k++ < 60000) { step(0.02); live.forEach(function (x) { if (!x.ans && Math.abs(x.y - HY) < 6) judge(x.it.c); }); } };
    } };

  /* ===== Sports Champion ===== */
  K.sports = { name: 'Sports Champion', howto: function () { return ['The ball carries an item. Tap the target zone of the category it belongs to (or press 1, 2, 3).', 'Then tap or press Space to stop the power bar inside the green band.', 'Right zone with good power is a goal. A wrong zone is a miss. Take all the shots.']; },
    run: function (ctx, spec) {
      var W = 420, H = 440, cv = NFA.canvas(ctx.root, W, H), g = cv.g, th = NFA.theme(spec), cats = NFA.cats(spec), n = cats.length;
      var bn = NFA.bar(ctx.root), nt = NFA.note(ctx.root), shots = NFA.batch(spec, 12), emoji = spec.sport === 'cricket' ? '🏏' : '⚽';
      var idx = 0, cur = null, phase = 'aim', zone = -1, pw = 0, dir = 1, goals = 0, done = false, t = 0, shot = null, keeper = 1, zw = 360 / n;
      function next() { if (idx >= shots.length) { cur = null; return; } cur = shots[idx++]; bn.innerHTML = emoji + ' Where does <span style="color:' + th.acc + '">' + esc(cur.t) + '</span> go?'; phase = 'aim'; zone = -1; pw = 0; shot = null; }
      function hud() { ctx.setHud({ Goals: goals, Shot: Math.min(idx, shots.length) + '/' + shots.length }); }
      next(); hud();
      function pick(z) { if (phase !== 'aim' || !cur || z >= n) return; zone = z; phase = 'power'; pw = 0; dir = 1; }
      function stop() {
        if (phase !== 'power') return; var good = pw > 0.4 && pw < 0.75, ok = zone === cur.c; ctx.record('sort', ok); keeper = ok && good ? (zone + 1) % n : zone;
        if (ok && good) { goals++; ctx.addScore(100); NFA.say(nt, true, 'GOAL! ' + NFA.why(cur)); } else if (ok) NFA.say(nt, true, 'Right zone, weak shot. ' + NFA.why(cur)); else NFA.say(nt, false, NFA.why(cur));
        shot = { z: zone, t: 0 }; phase = 'fly';
      }
      cv.c.addEventListener('pointerdown', function (e) { var p = cv.pt(e); if (phase === 'aim' && p.y < 260) pick(Math.max(0, Math.min(n - 1, Math.floor((p.x - 30) / zw)))); else if (phase === 'power') stop(); });
      var km = { ' ': stop }; for (var q = 0; q < n; q++) (function (q) { km[String(q + 1)] = function () { pick(q); }; })(q); NFA.keys(ctx, km);
      function step(dt) {
        if (done) return; t += dt; if (!cur) { done = true; ctx.finish(true); return; }
        if (phase === 'power') { pw += dir * dt * 1.4; if (pw > 1) { pw = 1; dir = -1; } if (pw < 0) { pw = 0; dir = 1; } }
        if (phase === 'fly') { shot.t += dt; if (shot.t > 0.9) { next(); hud(); } }
      }
      function draw() {
        g.fillStyle = '#1c7a3e'; g.fillRect(0, 0, W, H); g.fillStyle = th.b; g.fillRect(0, 0, W, 40); g.strokeStyle = '#fff'; g.lineWidth = 4; g.strokeRect(30, 50, 360, 200);
        for (var i = 0; i < n; i++) { var x = 30 + i * zw; g.fillStyle = zone === i ? '#ffd24d55' : '#ffffff18'; g.fillRect(x, 50, zw, 200); g.strokeRect(x, 50, zw, 200); NFA.wrap(g, (i + 1) + ' · ' + cats[i], x + zw / 2, 150, zw - 14, 16, 15, '#fff'); }
        g.font = '36px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; var kx = phase === 'fly' && shot.t > 0.2 ? 30 + keeper * zw + zw / 2 : 210; g.fillText('🧤', kx, 215);
        var by = phase === 'fly' ? 360 - shot.t / 0.9 * 190 : 360, bx = phase === 'fly' ? 210 + (30 + shot.z * zw + zw / 2 - 210) * shot.t / 0.9 : 210; g.font = '34px system-ui'; g.fillText(emoji, bx, by);
        g.fillStyle = '#0006'; g.fillRect(40, 400, 340, 22); g.fillStyle = '#3df0a666'; g.fillRect(40 + 340 * 0.4, 400, 340 * 0.35, 22); g.fillStyle = '#fff'; g.fillRect(40 + 340 * pw - 3, 396, 6, 30);
        NFA.txt(g, phase === 'aim' ? 'Tap a zone' : phase === 'power' ? 'Tap to shoot!' : '', 210, 380, 14, '#fff');
      }
      NFA.loop(ctx, step, draw);
      window.__auto = function () { var k = 0; while (!done && k++ < 60000) { if (phase === 'aim' && cur) pick(cur.c); else if (phase === 'power') { pw = 0.55; stop(); } step(0.05); } };
    } };

  /* ===== Tower Defence Academy ===== */
  K.tower = { name: 'Tower Defence Academy', howto: function () { return ['Enemies march toward your base, each wearing an item name.', 'Tap the tower of the category the front enemy belongs to (or press 1, 2, 3).', 'A wrong tower wastes the shot and the enemy advances. Base 4: each enemy that arrives costs one point.']; },
    run: function (ctx, spec) {
      var W = 420, H = 210, cv = NFA.canvas(ctx.root, W, H), g = cv.g, th = NFA.theme(spec), cats = NFA.cats(spec), list = NFA.batch(spec, 16);
      var tw = el('div'); tw.style.cssText = 'display:grid;grid-template-columns:repeat(' + cats.length + ',1fr);gap:8px;max-width:420px;margin:8px auto'; ctx.root.appendChild(tw);
      var nt = NFA.note(ctx.root), base = 4, idx = 0, en = [], spawn = 0.3, done = false, t = 0, killed = 0, flash = 0;
      cats.forEach(function (c, i) { var b = el('button', 'nfa-btn', '🗼 ' + esc(c)); b.onclick = function () { fire(i); }; tw.appendChild(b); });
      function hud() { ctx.setHud({ Base: '🏰'.repeat(Math.max(0, base)), Cleared: killed + '/' + list.length }); }
      function fire(i) {
        var f = en[0]; if (!f || done) return; var ok = i === f.it.c; ctx.record('sort', ok); NFA.say(nt, ok, NFA.why(f.it));
        if (ok) { ctx.addScore(100); en.shift(); killed++; flash = 0.25; hud(); chk(); } else f.x += 24;
      }
      function chk() { if (!done && idx >= list.length && !en.length) { done = true; ctx.finish(true); } }
      var km = {}; for (var q = 0; q < cats.length; q++) (function (q) { km[String(q + 1)] = function () { fire(q); }; })(q); NFA.keys(ctx, km);
      hud();
      function step(dt) {
        if (done) return; t += dt; spawn -= dt; flash -= dt;
        if (idx < list.length && spawn <= 0 && en.length < 3) { en.push({ it: list[idx++], x: -30 }); spawn = 5; }
        var sp = 9 + killed * 0.5; en.forEach(function (e, i) { var lim = i === 0 ? 1e9 : en[i - 1].x - 86; e.x = Math.min(e.x + sp * dt, lim); });
        var f = en[0]; if (f && f.x >= W - 90) { base--; ctx.record('sort', false); NFA.say(nt, false, 'It reached the base. ' + NFA.why(f.it)); en.shift(); killed++; hud(); if (base <= 0) { done = true; ctx.finish(false); return; } chk(); }
      }
      function draw() {
        g.fillStyle = th.b; g.fillRect(0, 0, W, H); g.fillStyle = '#ffffff10'; g.fillRect(0, 70, W, 70); g.font = '44px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('🏰', W - 34, 105);
        for (var i = 0; i < 3; i++) { g.fillText('🗼', 70 + i * 110, 32); g.fillText('🗼', 70 + i * 110, 180); }
        if (flash > 0 && en[0]) { g.strokeStyle = th.acc; g.lineWidth = 5; g.beginPath(); g.moveTo(70, 40); g.lineTo(en[0].x, 105); g.stroke(); }
        en.forEach(function (e) { g.font = '34px system-ui'; g.fillText('👾', e.x + 4, 98); g.fillStyle = '#fff'; g.fillRect(e.x - 40, 118, 88, 22); NFA.txt(g, e.it.t.length > 13 ? e.it.t.slice(0, 12) + '…' : e.it.t, e.x + 4, 129, 12, '#10102e'); });
      }
      NFA.loop(ctx, step, draw);
      window.__auto = function () { var k = 0; while (!done && k++ < 60000) { if (en[0]) fire(en[0].it.c); step(0.5); } };
    } };

  /* ===== Concept Jumper ===== */
  K.jumper = { name: 'Concept Jumper', howto: function () { return ['Move with the arrow keys or A / D and jump with Space. On a phone use the buttons under the game.', 'Each platform carries one step of a process. Land on them in the correct order, starting with step 1.', 'Landing on the wrong platform makes it crumble and costs a life. You have 3 lives.']; },
    run: function (ctx, spec) {
      var W = 420, H = 400, cv = NFA.canvas(ctx.root, W, H), g = cv.g, th = NFA.theme(spec), seqs = shuffle(spec.seq.slice()), GY = H - 46;
      var bn = NFA.bar(ctx.root), nt = NFA.note(ctx.root), si = 0, plats = [], need = 0, lives = 3, done = false, t = 0, L = 0, R = 0, p = { x: 30, y: GY, vy: 0, on: true }, total = 0, solved = 0, wait = 0;
      seqs.forEach(function (s) { total += s[1].length; });
      function setup() {
        if (si >= seqs.length) { done = true; ctx.finish(true); return; }
        var s = seqs[si], n = s[1].length, slots = shuffle(s[1].map(function (x, i) { return i; })), hs = [58, 100, 140];
        plats = s[1].map(function (txt, i) { return { txt: txt, ord: i, x: 22 + slots[i] * (370 / n), w: Math.min(74, 360 / n - 8), y: GY - hs[(slots[i] * 2 + i) % 3], st: 0 }; });
        need = 0; bn.innerHTML = '🪜 ' + esc(s[0]) + ': hop the steps in order'; p.x = 20; p.y = GY; p.vy = 0;
      }
      function hud() { ctx.setHud({ Lives: '❤'.repeat(Math.max(0, lives)), Steps: solved + '/' + total }); }
      setup(); hud();
      function jump() { if (p.on) { p.vy = -640; p.on = false; } }
      NFA.keys(ctx, { ArrowLeft: function () { L = 0.12; }, ArrowRight: function () { R = 0.12; }, a: function () { L = 0.12; }, d: function () { R = 0.12; }, ArrowUp: jump, ' ': jump, w: jump });
      var pad = el('div'); pad.style.cssText = 'display:flex;justify-content:center;gap:8px;margin-top:8px';
      [['◀', function () { L = 0.2; }], ['⤒ Jump', jump], ['▶', function () { R = 0.2; }]].forEach(function (b) {
        var bt = el('button', 'nfa-btn', b[0]); bt.style.minWidth = '88px'; var hold;
        bt.addEventListener('pointerdown', function (e) { e.preventDefault(); b[1](); hold = setInterval(b[1], 60); });
        ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) { bt.addEventListener(ev, function () { clearInterval(hold); }); }); pad.appendChild(bt);
        ctx.cleanup(function () { clearInterval(hold); });
      });
      ctx.root.appendChild(pad);
      function nextTxt() { var q = plats.filter(function (x) { return x.ord === need; })[0]; return q ? q.txt : ''; }
      function step(dt) {
        if (done) return; t += dt; L -= dt; R -= dt; if (wait > 0) { wait -= dt; if (wait <= 0) setup(); return; }
        p.x = Math.max(14, Math.min(W - 14, p.x + ((R > 0 ? 190 : 0) - (L > 0 ? 190 : 0)) * dt)); var py = p.y; p.vy += 1500 * dt; p.y += p.vy * dt; p.on = false;
        if (p.y >= GY) { p.y = GY; p.vy = 0; p.on = true; }
        plats.forEach(function (pl) {
          if (pl.st === 0 && p.vy >= 0 && py <= pl.y && p.y >= pl.y && p.x > pl.x - 4 && p.x < pl.x + pl.w + 4) {
            p.y = pl.y; p.vy = 0; p.on = true;
            if (pl.ord === need) { pl.st = 2; need++; solved++; ctx.record('seq', true); ctx.addScore(100); NFA.say(nt, true, 'Step ' + (pl.ord + 1) + ': ' + pl.txt); if (need >= plats.length) { si++; wait = 0.5; } }
            else { pl.st = 1; pl.f = 0; lives--; ctx.record('seq', false); NFA.say(nt, false, 'Not yet. Step ' + (need + 1) + ' is: ' + nextTxt()); }
          } else if (pl.st === 2 && p.vy >= 0 && py <= pl.y && p.y >= pl.y && p.x > pl.x - 4 && p.x < pl.x + pl.w + 4) { p.y = pl.y; p.vy = 0; p.on = true; }
        });
        plats.forEach(function (pl) { if (pl.st === 1) { pl.f += dt; if (pl.f > 1.2) { pl.st = 0; } } });
        hud(); if (lives <= 0) { done = true; ctx.finish(false); }
      }
      function draw() {
        var gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, th.a); gr.addColorStop(1, th.b); g.fillStyle = gr; g.fillRect(0, 0, W, H);
        g.fillStyle = '#ff7a3d'; g.fillRect(0, GY + 22, W, 24);
        plats.forEach(function (pl) { g.globalAlpha = pl.st === 1 ? 0.4 : 1; g.fillStyle = pl.st === 2 ? '#3df0a6' : th.acc; g.fillRect(pl.x, pl.y, pl.w, 14); g.globalAlpha = 1; NFA.wrap(g, pl.st === 2 ? (pl.ord + 1) + '. ' + pl.txt : pl.txt, pl.x + pl.w / 2, pl.y - 22, pl.w + 16, 12, 11, '#fff'); });
        g.font = '34px system-ui'; g.textAlign = 'center'; g.textBaseline = 'alphabetic'; g.fillText('🧑‍🚀', p.x, p.y + 4);
      }
      NFA.loop(ctx, step, draw);
      window.__auto = function () { var k = 0; while (!done && k++ < 40000) { if (wait <= 0) { var tg = plats.filter(function (x) { return x.ord === need; })[0]; if (tg) { var cx = tg.x + tg.w / 2; if (Math.abs(p.x - cx) > 2 || p.y > tg.y + 1 || p.y < tg.y - 90) { p.x = cx; p.y = tg.y - 60; p.vy = 0; } } } step(0.05); } };
    } };
})();
