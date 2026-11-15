// Renderiza cada elemento .slide de um HTML como PNG 1080×1350.
// Uso: node ferramentas/render-slides.js caminho/para/carrossel.html
// Saída: 01.png, 02.png, ... na mesma pasta do HTML.
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const arquivo = process.argv[2];
  if (!arquivo) { console.error('Uso: node ferramentas/render-slides.js <arquivo.html>'); process.exit(1); }
  const abs = path.resolve(arquivo);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  await page.goto('file://' + abs);
  await page.evaluate(() => document.fonts.ready);
  const slides = await page.$$('.slide');
  if (!slides.length) { console.error('Nenhum elemento .slide encontrado.'); process.exit(1); }
  for (let i = 0; i < slides.length; i++) {
    const out = path.join(path.dirname(abs), String(i + 1).padStart(2, '0') + '.png');
    await slides[i].screenshot({ path: out });
    console.log('ok', out);
  }
  await browser.close();
})();
