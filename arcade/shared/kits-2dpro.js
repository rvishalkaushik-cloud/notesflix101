/* NOTESFLIX ARCADE: hill-climb racer and cut-the-rope puzzle (polished canvas games). Needs kits-3d.js. */
(function () {
  'use strict';
  var NFA = window.NFA, el = NFA.el, esc = NFA.esc, shuffle = NFA.shuffle, K = NFA.kits;
  function rr(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
  function wrapLines(g, s, maxW) { var w = String(s).split(' '), lines = [], cur = ''; w.forEach(function (t) { var tt = cur ? cur + ' ' + t : t; if (g.measureText(tt).width > maxW && cur) { lines.push(cur); cur = t; } else cur = tt; }); lines.push(cur); return lines; }
  function fitText(g, s, x, y, maxW, maxH, col, max) { var size = max || 18, lines; for (; size >= 9; size--) { g.font = '800 ' + size + 'px system-ui,sans-serif'; lines = wrapLines(g, s, maxW); if (lines.length * size * 1.15 <= maxH) break; } g.fillStyle = col; g.textAlign = 'center'; g.textBaseline = 'middle'; var y0 = y - (lines.length - 1) * size * 0.575; lines.forEach(function (l, i) { g.fillText(l, x, y0 + i * size * 1.15); }); }

  /* ================= HILL CLIMB RACER ================= */
  K.hill = { name: 'Hill Racer', howto: function () { return ['Hold GAS (or →/D) to drive and BRAKE (or ←/A) to slow down. Tap JUMP (or Space/↑) to leap over things.', 'The banner tells you what to collect. Drive through the barrel with the right answer and JUMP over the wrong ones and over rocks.', 'A wrong barrel or a rock costs a heart. Some stages end at a pit stop where you type a number.']; },
    run: function (ctx, spec) {
      var W = 420, H = 440, cv = NFA.canvas(ctx.root, W, H), g = cv.g, skin = NFA.skin(spec), cs = NFA.challenges(spec, 'cat');
      function hex(n) { return '#' + ('000000' + n.toString(16)).slice(-6); }
      var bn = NFA.bar(ctx.root), nt = NFA.note(ctx.root), host = cv.c.parentNode; host.style.position = 'relative';
      function ground(x) { return 330 + 34 * Math.sin(x / 230) + 22 * Math.sin(x / 83 + 1.3) + 12 * Math.sin(x / 41); }
      var car = { x: 60, y: ground(60) - 16, vy: 0, v: 0, ang: 0, air: false, wr: 0 }, lives = 5, done = false, hold = false, t = 0, solved = 0, shake = 0, flash = 0, gas = false, brake = false, parts = [], objs = [], ci = 0, nextX = 560, fin = null;
      function hud() { ctx.setHud({ Lives: '❤'.repeat(Math.max(0, lives)), Barrels: solved + '/' + cs.length }); }
      function banner(s) { bn.innerHTML = '🎯 <span style="color:#ffd24d">' + esc(s) + '</span>'; }
      function hurt(msg) { lives--; shake = 0.4; flash = 0.35; car.v *= 0.35; NFA.sfx('hit'); if (msg) NFA.say(nt, false, msg); hud(); if (lives <= 0 && !done) { done = true; ctx.finish(false); } }
      function puff(x, y, col, n) { for (var i = 0; i < n; i++) parts.push({ x: x, y: y, vx: (Math.random() - 0.5) * 160 - 40, vy: -Math.random() * 140, life: 0.6, col: col }); }
      function spawn(c) {
        var x = nextX;
        if (c.k === 'calc') { objs.push({ k: 'calc', x: x + 120, c: c, hit: false }); nextX = x + 420; return; }
        c.opts.forEach(function (o, i) { objs.push({ k: 'can', x: x + i * 250, o: o, c: c, hit: false, lastOfRow: i === 2 }); });
        var rx = x + 3 * 250 + 20; objs.push({ k: 'rock', x: rx, hit: false }); nextX = rx + 330;
      }
      function curC() { var o = objs.filter(function (q) { return (q.k === 'can' || q.k === 'calc') && !q.hit; })[0]; return o ? o.c : null; }
      function setBanner() { var c = curC(); banner(c ? (c.k === 'calc' ? 'Pit stop ahead: work out the number' : c.prompt) : 'Reach the flag!'); }
      function jump() { if (!car.air && !hold && !done) { car.vy = -420; car.air = true; NFA.sfx('jump'); puff(car.x, car.y + 14, '#e8d8b0', 8); } }
      NFA.keys(ctx, { ArrowRight: function () { gas = true; }, d: function () { gas = true; }, ArrowLeft: function () { brake = true; }, a: function () { brake = true; }, ArrowUp: jump, w: jump, ' ': jump });
      var ku = function (e) { if (e.key === 'ArrowRight' || e.key === 'd') gas = false; if (e.key === 'ArrowLeft' || e.key === 'a') brake = false; }; window.addEventListener('keyup', ku); ctx.cleanup(function () { window.removeEventListener('keyup', ku); });
      var pad = el('div'); pad.style.cssText = 'display:flex;justify-content:center;gap:8px;margin-top:8px;max-width:420px;margin-left:auto;margin-right:auto';
      function hbtn(label, on, off, cls) { var b = el('button', 'nfa-btn' + (cls ? ' ' + cls : ''), label); b.style.cssText = 'flex:1;min-height:56px;font-size:16px;user-select:none;touch-action:none'; b.addEventListener('pointerdown', function (e) { e.preventDefault(); on(); }); ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) { b.addEventListener(ev, function () { off && off(); }); }); pad.appendChild(b); }
      hbtn('◀ BRAKE', function () { brake = true; }, function () { brake = false; }, 'alt'); hbtn('⤒ JUMP', jump, null); hbtn('GAS ▶', function () { gas = true; }, function () { gas = false; });
      ctx.root.appendChild(pad);
      hud(); for (var k = 0; k < 2 && ci < cs.length; k++) spawn(cs[ci++]); setBanner();
      function step(dt) {
        if (done) return; t += dt; if (hold) return;
        var gy = ground(car.x), gy2 = ground(car.x + 8), slope = (gy2 - gy) / 8, tang = Math.atan(slope);
        var acc = (gas ? 190 : 0) - (brake ? 260 : 0) - Math.sin(tang) * 220 - car.v * 0.45; car.v = Math.max(0, Math.min(260, car.v + acc * dt)); if (gas && car.v < 40) car.v = 40;
        car.x += car.v * Math.cos(tang) * dt; car.wr += car.v * dt / 14;
        if (car.air) { car.vy += 900 * dt; car.y += car.vy * dt; var g2 = ground(car.x) - 16; if (car.y >= g2 && car.vy > 0) { car.y = g2; car.vy = 0; car.air = false; puff(car.x, car.y + 14, '#e8d8b0', 10); } }
        else { var g3 = ground(car.x) - 16; if (car.y < g3 - 4 && false) car.air = true; car.y = g3; }
        car.ang += (Math.atan((ground(car.x + 14) - ground(car.x - 14)) / 28) * (car.air ? 0.5 : 1) - car.ang) * Math.min(1, dt * 9);
        if (!car.air && car.v > 60 && Math.random() < 0.5) puff(car.x - 26, car.y + 16, '#d8c9a0', 1);
        if (ci < cs.length && nextX - car.x < 900) spawn(cs[ci++]);
        objs.forEach(function (o) {
          if (o.hit) return; var dx = o.x - car.x, h = (ground(o.x) - 16) - car.y;
          if (o.k === 'can' && Math.abs(dx) < 26 && h < 34) { o.hit = true; if (o.o.ok) { ctx.record(o.c.k, true); ctx.addScore(100); solved++; NFA.sfx('coin'); puff(o.x, ground(o.x) - 30, '#ffd24d', 20); NFA.say(nt, true, o.c.why); } else { ctx.record(o.c.k, false); puff(o.x, ground(o.x) - 30, '#e0405a', 14); hurt('"' + o.o.t + '" is not right. ' + o.c.why); }
            if (o.lastOfRow) { /* row finished; count it solved if player missed correct (rare) */ } hud(); setBanner(); }
          else if (o.k === 'can' && dx < -40 && !o.hit) { o.hit = true; if (o.o.ok) { ctx.record(o.c.k, false); hurt('You drove past the right barrel. ' + o.c.why); solved++; } hud(); setBanner(); }
          else if (o.k === 'rock' && Math.abs(dx) < 24 && h < 30) { o.hit = true; puff(o.x, ground(o.x) - 20, '#9aa0b0', 14); hurt('Rock! Jump over the hurdles.'); }
          else if (o.k === 'calc' && dx < 10) { o.hit = true; hold = true; var cp = NFA.checkpoint(ctx, host, o.c.q, function (ok) { if (!ok) hurt(); solved++; hud(); hold = false; setBanner(); }); window.__cp = cp; }
        });
        objs = objs.filter(function (o) { return o.x > car.x - 200; });
        parts.forEach(function (p) { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 300 * dt; p.life -= dt; }); parts = parts.filter(function (p) { return p.life > 0; });
        shake = Math.max(0, shake - dt * 1.5); flash = Math.max(0, flash - dt);
        if (!done && ci >= cs.length && !objs.some(function (o) { return (o.k === 'can' || o.k === 'calc') && !o.hit; })) { done = true; NFA.sfx('win'); setTimeout(function () { ctx.finish(true); }, 700 / NFA.T); }
      }
      function draw() {
        var cx = car.x - 140, sy = shake > 0 ? (Math.random() - 0.5) * shake * 14 : 0;
        var gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, hex(skin.sky)); gr.addColorStop(1, hex(skin.fog)); g.fillStyle = gr; g.fillRect(0, 0, W, H);
        g.fillStyle = '#fff8c0'; g.beginPath(); g.arc(330, 70, 34, 0, 7); g.fill(); g.fillStyle = '#ffffff55'; g.beginPath(); g.arc(330, 70, 52, 0, 7); g.fill();
        for (var L = 0; L < 2; L++) { g.fillStyle = L ? hex(skin.ground) + 'aa' : '#ffffff40'; g.beginPath(); g.moveTo(0, H); for (var x = 0; x <= W; x += 10) { var wx = x + cx * (L ? 0.35 : 0.15); g.lineTo(x, 250 - L * 20 - 50 * Math.abs(Math.sin(wx / (L ? 120 : 190))) - 20 * Math.sin(wx / 47)); } g.lineTo(W, H); g.fill(); }
        for (var c = 0; c < 4; c++) { var cxx = ((c * 190 - cx * 0.08) % (W + 160) + W + 160) % (W + 160) - 80; g.fillStyle = '#ffffffaa'; g.beginPath(); g.ellipse(cxx, 60 + c * 22, 46, 15, 0, 0, 7); g.fill(); }
        g.save(); g.translate(0, sy);
        g.beginPath(); g.moveTo(0, H + 10); for (var x2 = 0; x2 <= W; x2 += 6) g.lineTo(x2, ground(x2 + cx)); g.lineTo(W, H + 10); g.closePath();
        var tg = g.createLinearGradient(0, 300, 0, H); tg.addColorStop(0, hex(skin.road)); tg.addColorStop(1, '#2a1a10'); g.fillStyle = tg; g.fill();
        g.lineWidth = 9; g.strokeStyle = hex(skin.ground); g.beginPath(); for (var x3 = 0; x3 <= W; x3 += 6) { var yy = ground(x3 + cx); x3 ? g.lineTo(x3, yy) : g.moveTo(x3, yy); } g.stroke();
        g.lineWidth = 3; g.strokeStyle = '#ffffff55'; g.beginPath(); for (var x4 = 0; x4 <= W; x4 += 6) { var y4 = ground(x4 + cx) - 4; x4 ? g.lineTo(x4, y4) : g.moveTo(x4, y4); } g.stroke();
        objs.forEach(function (o) {
          var sx = o.x - cx; if (sx < -80 || sx > W + 80) return; var gy = ground(o.x);
          if (o.k === 'can') { var bw = 50, bh = 58, by = gy - bh - 2; g.globalAlpha = o.hit ? 0.35 : 1; g.fillStyle = '#00000033'; g.beginPath(); g.ellipse(sx, gy, 30, 6, 0, 0, 7); g.fill();
            var cg = g.createLinearGradient(sx - bw / 2, 0, sx + bw / 2, 0); cg.addColorStop(0, '#c43a2a'); cg.addColorStop(0.5, '#ff6a4d'); cg.addColorStop(1, '#a82a1c'); g.fillStyle = cg; rr(g, sx - bw / 2, by, bw, bh, 8); g.fill(); g.fillStyle = '#ffd24d'; g.fillRect(sx - bw / 2, by + 8, bw, 5); g.fillRect(sx - bw / 2, by + bh - 13, bw, 5);
            g.fillStyle = '#fff'; rr(g, sx - 56, by - 48, 112, 42, 9); g.fill(); g.beginPath(); g.moveTo(sx - 8, by - 6); g.lineTo(sx + 8, by - 6); g.lineTo(sx, by + 2); g.fill(); fitText(g, o.o.t, sx, by - 27, 102, 36, '#10102e', 15); g.globalAlpha = 1; }
          else if (o.k === 'rock') { g.fillStyle = '#00000033'; g.beginPath(); g.ellipse(sx, gy, 30, 6, 0, 0, 7); g.fill(); g.fillStyle = '#8a90a2'; g.beginPath(); g.moveTo(sx - 28, gy); g.lineTo(sx - 16, gy - 28); g.lineTo(sx + 4, gy - 36); g.lineTo(sx + 24, gy - 18); g.lineTo(sx + 30, gy); g.closePath(); g.fill(); g.fillStyle = '#b6bccd'; g.beginPath(); g.moveTo(sx - 16, gy - 28); g.lineTo(sx + 4, gy - 36); g.lineTo(sx + 2, gy - 16); g.closePath(); g.fill(); g.strokeStyle = '#e0304a'; g.lineWidth = 3; g.strokeRect(sx - 32, gy - 40, 64, 40); }
          else if (o.k === 'calc') { g.fillStyle = '#ffd24d'; g.fillRect(sx - 40, gy - 110, 8, 110); g.fillRect(sx + 32, gy - 110, 8, 110); g.fillStyle = '#7a3df0'; rr(g, sx - 44, gy - 130, 88, 30, 8); g.fill(); g.fillStyle = '#fff'; g.font = '900 15px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('PIT STOP', sx, gy - 115); }
        });
        parts.forEach(function (p) { g.globalAlpha = Math.max(0, p.life / 0.6); g.fillStyle = p.col; g.beginPath(); g.arc(p.x - cx, p.y, 4, 0, 7); g.fill(); }); g.globalAlpha = 1;
        /* car */
        var sx0 = car.x - cx; g.save(); g.translate(sx0, car.y); g.rotate(car.ang);
        g.fillStyle = '#00000030'; g.beginPath(); g.ellipse(0, 24, 40, 5, 0, 0, 7); g.fill();
        var bg = g.createLinearGradient(0, -22, 0, 12); bg.addColorStop(0, hex(skin.acc)); bg.addColorStop(1, '#b02a40'); g.fillStyle = bg; rr(g, -36, -8, 72, 22, 9); g.fill();
        g.fillStyle = '#ffffff40'; rr(g, -30, -6, 58, 6, 3); g.fill();
        g.fillStyle = bg; rr(g, -18, -26, 36, 22, 9); g.fill(); g.fillStyle = '#bfe6ff'; rr(g, -13, -22, 26, 13, 5); g.fill();
        g.fillStyle = '#ffd0a8'; g.beginPath(); g.arc(2, -17, 6, 0, 7); g.fill(); g.fillStyle = '#2b2b6a'; g.beginPath(); g.arc(2, -19, 6.4, Math.PI, 0); g.fill();
        g.fillStyle = '#ffe98a'; g.fillRect(34, -2, 5, 6); if (gas) { g.fillStyle = '#ff7a1f'; g.beginPath(); g.moveTo(-36, 4); g.lineTo(-52 - Math.random() * 10, 8); g.lineTo(-36, 12); g.fill(); }
        [[-22, 14], [24, 14]].forEach(function (w) { g.save(); g.translate(w[0], w[1]); g.rotate(car.wr); g.fillStyle = '#1b1b24'; g.beginPath(); g.arc(0, 0, 13, 0, 7); g.fill(); g.fillStyle = '#c8cde0'; g.beginPath(); g.arc(0, 0, 6, 0, 7); g.fill(); g.strokeStyle = '#1b1b24'; g.lineWidth = 2; g.beginPath(); g.moveTo(-6, 0); g.lineTo(6, 0); g.moveTo(0, -6); g.lineTo(0, 6); g.stroke(); g.restore(); });
        g.restore(); g.restore();
        if (car.v > 200) { g.strokeStyle = '#ffffff55'; g.lineWidth = 2; for (var s = 0; s < 6; s++) { var ly = 100 + ((s * 53 + t * 400) % 200), lx = (s * 97 + t * 900) % W; g.beginPath(); g.moveTo(lx, ly); g.lineTo(lx - 40, ly); g.stroke(); } }
        if (flash > 0) { g.fillStyle = 'rgba(255,40,70,' + flash * 0.5 + ')'; g.fillRect(0, 0, W, H); }
        g.fillStyle = '#0006'; rr(g, 10, 10, 120, 12, 6); g.fill(); g.fillStyle = '#4dfff0'; rr(g, 10, 10, Math.max(8, 120 * Math.min(1, car.v / 260)), 12, 6); g.fill();
      }
      var last = performance.now(), run = true, rid;
      function frame(now) { if (!run) return; var dt = Math.min(0.033, (now - last) / 1000); last = now; if (!ctx.isPaused()) step(dt); draw(); rid = requestAnimationFrame(frame); }
      rid = requestAnimationFrame(frame); ctx.cleanup(function () { run = false; cancelAnimationFrame(rid); });
      window.__auto = function () {
        var n = 0; while (!done && n++ < 80000) {
          if (hold) { if (window.__cp) { var c = window.__cp; window.__cp = null; c.now(); } else hold = false; step(0.001); continue; }
          gas = true; brake = false;
          var near = objs.filter(function (o) { return !o.hit && (o.k === 'rock' || (o.k === 'can' && !o.o.ok)) && o.x - car.x > 0 && o.x - car.x < 240; })[0];
          if (near && !car.air) { var dx = near.x - car.x; if (dx <= car.v * 0.467) jump(); }
          step(0.016);
        }
      };
    } };

  /* ================= CUT THE ROPE ================= */
  K.rope = { name: 'Rope Drop Lab', howto: function () { return ['The gift hangs from a rope. Tap or swipe across a rope to cut it.', 'Time the cut so the gift falls into the right bucket. When it hangs from two ropes, cut one first, then the other.', 'The banner tells you where the gift must go. A wrong bucket costs a heart. Some stages end at a pit stop where you type a number.']; },
    run: function (ctx, spec) {
      var W = 420, H = 540, cv = NFA.canvas(ctx.root, W, H), g = cv.g, skin = NFA.skin(spec), hk = skin.acc;
      var cs = NFA.challenges(spec, 'item'), bn = NFA.bar(ctx.root), nt = NFA.note(ctx.root), host = cv.c.parentNode; host.style.position = 'relative';
      function hex(n) { return '#' + ('000000' + n.toString(16)).slice(-6); }
      var BINY = H - 120, G = 900, DT = 1 / 120, lives = 4, done = false, hold = false, ci = 0, solved = 0, t = 0, st = null, wait = 0, parts = [], flash = 0, shake = 0, lastBin = -1, lastOk = null, acc = 0;
      function hud() { ctx.setHud({ Lives: '❤'.repeat(Math.max(0, lives)), Gifts: solved + '/' + cs.length }); }
      function binOf(x) { return Math.max(0, Math.min(2, Math.floor(x / (W / 3)))); }
      /* deterministic physics: state s = {x,y,px,py, ropes:[{ax,ay,L,on}], landed:-1} */
      function phys(s) {
        var vx = (s.x - s.px) * 0.9993, vy = (s.y - s.py) * 0.9993; s.px = s.x; s.py = s.y; s.x += vx; s.y += vy + G * DT * DT;
        for (var it = 0; it < 4; it++) s.ropes.forEach(function (r) { if (!r.on) return; var dx = s.x - r.ax, dy = s.y - r.ay, d = Math.sqrt(dx * dx + dy * dy); if (d > r.L) { var k = r.L / d; s.x = r.ax + dx * k; s.y = r.ay + dy * k; } });
        if (s.x < 30) { var v1 = s.x - s.px; s.x = 30; s.px = 30 + v1 * 0.4; } if (s.x > W - 30) { var v2 = s.x - s.px; s.x = W - 30; s.px = W - 30 + v2 * 0.4; }
        if (s.y > BINY && s.landed < 0) s.landed = binOf(s.x);
      }
      function clone(s) { return { x: s.x, y: s.y, px: s.px, py: s.py, landed: s.landed, ropes: s.ropes.map(function (r) { return { ax: r.ax, ay: r.ay, L: r.L, on: r.on }; }) }; }
      /* find cut schedules that land in bin b; returns {first:[time list]} or null */
      function solve(s0, bin) {
        var best = null, n = s0.ropes.length, res = [];
        function run(cuts) { var s = clone(s0), tt = 0, ci2 = 0; for (var i = 0; i < 700 && s.landed < 0; i++) { while (ci2 < cuts.length && tt >= cuts[ci2][0]) { s.ropes[cuts[ci2][1]].on = false; ci2++; } phys(s); tt += DT; } return s.landed; }
        if (n === 1) { for (var c = 0.0; c <= 3.2; c += 0.04) { if (run([[c, 0]]) === bin) res.push([[c, 0]]); } }
        else { for (var a = 0; a <= 0.8; a += 0.4) for (var c2 = a + 0.2; c2 <= 3.2; c2 += 0.04) { if (run([[a, 0], [c2, 1]]) === bin) res.push([[a, 0], [c2, 1]]); } }
        return res;
      }
      function layout(c) {
        for (var tryN = 0; tryN < 40; tryN++) {
          var two = c.k !== 'calc' && Math.random() < 0.5, ay = 70, ropes, s;
          if (two) { var gap = 90 + Math.random() * 70, cx = W / 2 + (Math.random() - 0.5) * 80, L = 190 + Math.random() * 30; ropes = [{ ax: cx - gap, ay: ay, L: L, on: true }, { ax: cx + gap, ay: ay, L: L, on: true }];
            var side = Math.random() < 0.5 ? -1 : 1; s = { x: cx + side * 60, y: ay + Math.sqrt(L * L - Math.pow(gap - side * 60, 2)) * 0.98, landed: -1, ropes: ropes }; }
          else { var ax = 90 + Math.random() * 240, L1 = 200 + Math.random() * 40, ang = (Math.random() < 0.5 ? -1 : 1) * (0.7 + Math.random() * 0.5); ropes = [{ ax: ax, ay: ay, L: L1, on: true }]; s = { x: ax + Math.sin(ang) * L1, y: ay + Math.cos(ang) * L1, landed: -1, ropes: ropes }; }
          s.x = Math.max(40, Math.min(W - 40, s.x)); s.px = s.x; s.py = s.y;
          var bin = c.opts.findIndex(function (o) { return o.ok; }), sols = solve(s, bin);
          if (two ? sols.length >= 3 : sols.length >= 4) return { s: s, sols: sols, bin: bin };
        }
        /* fallback: simple single rope straight over the middle, always cuttable */
        var s2 = { x: W / 2 - 150, y: 70 + 170, px: W / 2 - 150, py: 70 + 170, landed: -1, ropes: [{ ax: W / 2, ay: 70, L: 190, on: true }] }; return { s: s2, sols: solve(s2, c.opts.findIndex(function (o) { return o.ok; })), bin: c.opts.findIndex(function (o) { return o.ok; }) };
      }
      function next() {
        if (ci >= cs.length) { done = true; NFA.sfx('win'); setTimeout(function () { ctx.finish(true); }, 600 / NFA.T); return; }
        var c = cs[ci++];
        if (c.k === 'calc') { hold = true; var cp = NFA.checkpoint(ctx, host, c.q, function (ok) { if (!ok) hurt(); solved++; hud(); hold = false; next(); }); window.__cp = cp; st = null; bn.innerHTML = '🎯 <span style="color:#ffd24d">Pit stop: work out the number</span>'; return; }
        var L = layout(c); st = { c: c, s: L.s, sols: L.sols, bin: L.bin, cut: 0, resolved: false }; bn.innerHTML = '🎯 <span style="color:#ffd24d">' + esc(c.k === 'sort' ? 'Where does "' + c.prompt + '" belong?' : c.prompt) + '</span>'; acc = 0;
      }
      function hurt() { lives--; shake = 0.4; flash = 0.35; NFA.sfx('hit'); hud(); if (lives <= 0 && !done) { done = true; ctx.finish(false); } }
      function sparkle(x, y, col, n) { for (var i = 0; i < n; i++) parts.push({ x: x, y: y, vx: (Math.random() - 0.5) * 240, vy: -Math.random() * 260, life: 0.8, col: col }); }
      function cutRope(i) { var r = st.s.ropes[i]; if (!r.on) return; r.on = false; st.cut++; NFA.sfx('tick'); sparkle((r.ax + st.s.x) / 2, (r.ay + st.s.y) / 2, '#fff', 8); }
      function segHit(ax, ay, bx, by, cx, cy, dx, dy) { function o(px, py, qx, qy, rx, ry) { return (qy - py) * (rx - qx) - (qx - px) * (ry - qy); } var o1 = o(ax, ay, bx, by, cx, cy), o2 = o(ax, ay, bx, by, dx, dy), o3 = o(cx, cy, dx, dy, ax, ay), o4 = o(cx, cy, dx, dy, bx, by); return o1 * o2 < 0 && o3 * o4 < 0; }
      function distSeg(px, py, ax, ay, bx, by) { var dx = bx - ax, dy = by - ay, tt = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy))); return Math.hypot(px - (ax + tt * dx), py - (ay + tt * dy)); }
      var last = null, down = false;
      cv.c.addEventListener('pointerdown', function (e) { var p = cv.pt(e); last = p; down = true; if (!st || hold || done) return; st.s.ropes.forEach(function (r, i) { if (r.on && distSeg(p.x, p.y, r.ax, r.ay, st.s.x, st.s.y) < 18) cutRope(i); }); });
      cv.c.addEventListener('pointermove', function (e) { if (!down || !st || hold || done) return; var p = cv.pt(e); st.s.ropes.forEach(function (r, i) { if (r.on && segHit(last.x, last.y, p.x, p.y, r.ax, r.ay, st.s.x, st.s.y)) cutRope(i); }); last = p; });
      ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) { cv.c.addEventListener(ev, function () { down = false; }); });
      function land() {
        var s = st.s, ok = s.landed === st.bin; st.resolved = true; lastBin = s.landed; lastOk = ok; ctx.record(st.c.k, ok);
        if (ok) { ctx.addScore(100); NFA.sfx('coin'); sparkle(s.x, BINY, '#ffd24d', 30); NFA.say(nt, true, st.c.why); } else { hurt(); sparkle(s.x, BINY, '#e0405a', 18); NFA.say(nt, false, st.c.why); }
        solved++; hud(); wait = 1.1;
      }
      function step(dt) {
        if (done || hold) return; t += dt;
        if (wait > 0) { wait -= dt; if (wait <= 0) { lastBin = -1; next(); } }
        else if (st && !st.resolved) { acc += dt; while (acc >= DT && !st.resolved) { acc -= DT; phys(st.s); if (st.s.landed >= 0) land(); } }
        parts.forEach(function (p) { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 500 * dt; p.life -= dt; }); parts = parts.filter(function (p) { return p.life > 0; });
        shake = Math.max(0, shake - dt * 1.5); flash = Math.max(0, flash - dt);
      }
      function draw() {
        var sy = shake > 0 ? (Math.random() - 0.5) * shake * 12 : 0;
        var gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, hex(skin.sky)); gr.addColorStop(1, hex(skin.fog)); g.fillStyle = gr; g.fillRect(0, 0, W, H);
        g.fillStyle = '#ffffff26'; for (var i = 0; i < 14; i++) { g.beginPath(); g.arc((i * 83 + t * 8 * (1 + i % 3)) % W, (i * 61) % (BINY - 20) + 10, 3 + i % 4, 0, 7); g.fill(); }
        g.fillStyle = '#00000018'; for (var j = 0; j < 6; j++) { g.fillRect(j * 70 + 10, 0, 28, 28); g.fillRect(j * 70 + 38, 28, 28, 28); }
        g.save(); g.translate(0, sy);
        /* buckets */
        var bw = W / 3, c = st && st.c;
        for (var b = 0; b < 3; b++) {
          var x0 = b * bw, hit = lastBin === b, col = hit ? (lastOk ? '#1fbf7a' : '#e0405a') : ['#2b6cff', '#ff7a1f', '#9a3dff'][b];
          var bg = g.createLinearGradient(0, BINY, 0, H); bg.addColorStop(0, col); bg.addColorStop(1, '#10102e'); g.fillStyle = bg; g.beginPath(); g.moveTo(x0 + 8, BINY); g.lineTo(x0 + bw - 8, BINY); g.lineTo(x0 + bw - 22, H - 20); g.lineTo(x0 + 22, H - 20); g.closePath(); g.fill();
          g.strokeStyle = '#fff'; g.lineWidth = 4; g.beginPath(); g.moveTo(x0 + 8, BINY); g.lineTo(x0 + 22, H - 20); g.lineTo(x0 + bw - 22, H - 20); g.lineTo(x0 + bw - 8, BINY); g.stroke();
          var lab = c && c.opts ? c.opts[b].t : (lastBin >= 0 ? '' : ''); if (lab) fitText(g, lab, x0 + bw / 2, BINY + 50, bw - 46, 70, '#fff', 16);
        }
        if (st && !hold) {
          var s = st.s;
          s.ropes.forEach(function (r) { g.fillStyle = '#888'; g.beginPath(); g.arc(r.ax, r.ay, 9, 0, 7); g.fill(); g.fillStyle = '#ddd'; g.beginPath(); g.arc(r.ax, r.ay, 4, 0, 7); g.fill();
            if (r.on) { var d = Math.hypot(s.x - r.ax, s.y - r.ay), sag = Math.max(0, r.L - d) * 0.5; g.strokeStyle = '#6b3f1d'; g.lineWidth = 6; g.lineCap = 'round'; g.beginPath(); g.moveTo(r.ax, r.ay); g.quadraticCurveTo((r.ax + s.x) / 2, (r.ay + s.y) / 2 + sag, s.x, s.y); g.stroke(); g.strokeStyle = '#c98a4a'; g.lineWidth = 2; g.setLineDash([5, 5]); g.stroke(); g.setLineDash([]); } });
          /* gift */
          var gx = s.x, gy = s.y, rot = Math.atan2(s.y - s.py, s.x - s.px) * 0.1;
          g.save(); g.translate(gx, gy); g.rotate(rot); g.fillStyle = '#00000030'; g.beginPath(); g.ellipse(0, 36, 34, 6, 0, 0, 7); g.fill();
          var gg = g.createLinearGradient(-34, -26, 34, 26); gg.addColorStop(0, '#ffe98a'); gg.addColorStop(1, hex(hk)); g.fillStyle = gg; rr(g, -36, -28, 72, 56, 10); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 3; g.stroke();
          g.fillStyle = '#e0405a'; g.fillRect(-5, -28, 10, 56); g.beginPath(); g.ellipse(-10, -32, 12, 7, -0.5, 0, 7); g.ellipse(10, -32, 12, 7, 0.5, 0, 7); g.fill();
          g.restore();
          var pt = st.c.k === 'sort' ? st.c.prompt : '';
          if (pt) { var lx = Math.max(64, Math.min(W - 64, gx)); g.fillStyle = '#fff'; rr(g, lx - 62, gy + 34, 124, 30, 8); g.fill(); fitText(g, pt, lx, gy + 49, 116, 26, '#10102e', 14); }
        }
        parts.forEach(function (p) { g.globalAlpha = Math.max(0, p.life / 0.8); g.fillStyle = p.col; g.beginPath(); g.arc(p.x, p.y, 4, 0, 7); g.fill(); }); g.globalAlpha = 1;
        g.restore();
        if (flash > 0) { g.fillStyle = 'rgba(255,40,70,' + flash * 0.5 + ')'; g.fillRect(0, 0, W, H); }
        if (st && !hold && st.cut === 0 && !st.resolved) { g.fillStyle = '#fff'; g.font = '800 14px system-ui'; g.textAlign = 'center'; g.fillText('✂ Tap or swipe the rope', W / 2, 30); }
      }
      hud(); next();
      var lastT = performance.now(), run = true, rid;
      function frame(now) { if (!run) return; var dt = Math.min(0.033, (now - lastT) / 1000); lastT = now; if (!ctx.isPaused()) step(dt); draw(); rid = requestAnimationFrame(frame); }
      rid = requestAnimationFrame(frame); ctx.cleanup(function () { run = false; cancelAnimationFrame(rid); });
      window.__auto = function () {
        var n = 0; while (!done && n++ < 200000) {
          if (hold) { if (window.__cp) { var c = window.__cp; window.__cp = null; c.now(); } else hold = false; continue; }
          if (wait > 0) { step(0.05); continue; }
          if (st && !st.resolved) {
            var sol = st.sols[Math.floor(st.sols.length / 2)] || [[0, 0]], tt = 0, ci2 = 0;
            while (!st.resolved && tt < 12) { while (ci2 < sol.length && tt >= sol[ci2][0]) { cutRope(sol[ci2][1]); ci2++; } phys(st.s); tt += DT; if (st.s.landed >= 0) land(); }
          } else step(0.05);
        }
      };
      window.__solvable = function () { return st && st.sols.length; };
    } };
})();
