const { chromium } = require('playwright');
(async () => {
  const ids = process.argv.slice(2), b = await chromium.launch(); let fail = 0;
  for (const id of ids) {
    const p = await b.newPage({ viewport: { width: 1280, height: 900 } }), errs = [];
    p.on('pageerror', e => errs.push(e.message)); await p.route(/googletagmanager|gstatic|firebase|googleapis/, r => r.abort());
    const out = [];
    for (const m of ['hub','quick','cases','flash','practice','find','battle']) {
      await p.goto(`http://localhost:8820/arena/?ch=${id}#${m}`); await p.waitForTimeout(500);
      const txt = (await p.textContent('#app, main, body')).length; out.push(m + ':' + txt);
      if (m === 'practice') { const b1 = await p.$('button'); }
    }
    // try a battle start and practice answer if buttons exist
    await p.goto(`http://localhost:8820/arena/?ch=${id}#battle`); await p.waitForTimeout(300);
    const start = await p.$('button:has-text("Start")'); if (start) { await start.click(); await p.waitForTimeout(400); const opt = await p.$('.opt, .opts button'); if (opt) await opt.click(); }
    await p.goto(`http://localhost:8820/arena/?ch=${id}#find`); await p.waitForTimeout(300);
    const g = await p.$('.mode, .game, button:has-text("Spot")'); if (g) { await g.click(); await p.waitForTimeout(300); }
    const title = await p.title();
    console.log((errs.length ? '✗ ' : '✓ ') + id + ' | ' + title + ' | ' + out.join(' ') + (errs.length ? ' | ERRORS ' + errs.join(' ; ') : ''));
    if (errs.length) fail++; await p.close();
  }
  await b.close(); process.exit(fail ? 1 : 0);
})();
