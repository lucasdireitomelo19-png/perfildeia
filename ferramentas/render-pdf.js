// Gera um PDF (páginas 1080×1350, formato de celular) a partir de um HTML com seções .pg
// Uso: node ferramentas/render-pdf.js entrada.html saida.pdf
// Também avisa se algum conteúdo estourou a página.
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const [entrada, saida] = process.argv.slice(2);
  if (!entrada || !saida) { console.error('Uso: node ferramentas/render-pdf.js entrada.html saida.pdf'); process.exit(1); }
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  await page.goto('file://' + path.resolve(entrada));
  await page.evaluate(() => document.fonts.ready);
  const estouros = await page.$$eval('.pg', pgs => pgs.map((pg, i) => {
    const limite = pg.getBoundingClientRect().bottom - 120; // área acima do rodapé
    const filhos = [...pg.querySelectorAll('*')].filter(el => !el.closest('footer') && !el.closest('.capa-logo'));
    const max = Math.max(...filhos.map(el => el.getBoundingClientRect().bottom));
    return max > limite ? `página ${i + 1}: estourou ${Math.round(max - limite)}px` : null;
  }).filter(Boolean));
  if (estouros.length) console.warn('⚠️ Conteúdo estourando:\n' + estouros.join('\n'));
  await page.pdf({ path: path.resolve(saida), width: '1080px', height: '1350px', printBackground: true, preferCSSPageSize: true });
  console.log('ok', saida);
  await browser.close();
})();
