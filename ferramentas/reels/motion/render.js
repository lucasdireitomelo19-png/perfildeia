/* Renderiza uma composição do kit de motion em quadros JPG (30 fps), em paralelo, e salva cues.json (efeitos sonoros).
   Uso: node render.js <url_da_comp> <pasta_saida> [test|full] [paralelos=4]
   Sirva a pasta da composição antes: python3 -m http.server 8765 */
const { chromium } = require('playwright');
const fs = require('fs');
const [, , url, out, mode = 'full', par = '4'] = process.argv;
(async () => {
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const open = async () => {
    const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
    p.on('pageerror', e => console.log('ERR', e.message));
    await p.goto(url); await p.waitForFunction(() => window.READY, { timeout: 60000 }); return p;
  };
  const p0 = await open();
  const total = await p0.evaluate(() => window.TOTAL);
  fs.writeFileSync(`${out}/cues.json`, JSON.stringify(await p0.evaluate(() => window.CUES)));
  let jobs;
  if (mode === 'test') jobs = (await p0.evaluate(() => window.TEST_TIMES || [0, 1, 2, 3, 5, 8, 12, 16, 20, 25, 30, 35, 40])).map((t, i) => ({ t, f: `${out}/t${String(t).replace('.', '_')}.png` }));
  else jobs = Array.from({ length: Math.round(total * 30) }, (_, k) => ({ t: k / 30, f: `${out}/${String(k).padStart(5, '0')}.jpg` }));
  const pages = [p0]; for (let i = 1; i < +par; i++) pages.push(await open());
  let next = 0;
  await Promise.all(pages.map(async p => {
    while (next < jobs.length) {
      const j = jobs[next++];
      await p.evaluate(t => window.render(t), j.t);
      await p.screenshot(j.f.endsWith('.png') ? { path: j.f } : { path: j.f, type: 'jpeg', quality: 93 });
    }
  }));
  console.log('quadros', jobs.length, 'duração', total);
  await b.close();
})();
