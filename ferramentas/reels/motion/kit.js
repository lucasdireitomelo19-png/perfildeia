/* IA Works · kit de motion para Reels.
   Tudo é função do tempo t (segundos): render(t) desenha um quadro, sem estado. Assim o Playwright
   renderiza quadro a quadro a 30 fps e o resultado é sempre igual.
   Uso: a composição define K.SCENES, K.CAM, K.CUES e chama K.boot({stt, kw, troca, pula}). */
const K = (() => {
  const $ = (s, r = document) => r.querySelector(s);
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const lerp = (a, b, x) => a + (b - a) * x;
  const ease = {
    lin: x => x,
    out: x => 1 - Math.pow(1 - x, 3),
    inOut: x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
    back: x => { const c1 = 2.2, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); },
    elastic: x => x <= 0 ? 0 : x >= 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - .75) * (2 * Math.PI / 3)) + 1,
  };
  const prog = (t, t0, d, e = 'out') => ease[e](clamp((t - t0) / d));

  function css(el, { x = 0, y = 0, s = 1, sx = 1, sy = 1, r = 0, o = 1 } = {}) {
    el.style.transform = `translate(${x}px,${y}px) rotate(${r}deg) scale(${s * sx},${s * sy})`;
    el.style.opacity = o; el.style.visibility = o <= 0.001 ? 'hidden' : 'visible';
  }

  /* show(el, t, {at, kind, d, x, y, r, s, float, out, outKind})
     kind: pop | up | down | left | right | stamp | fade | drop
     float: amplitude (px) de uma flutuação leve depois de entrar (o quadro nunca fica parado) */
  function show(el, t, o) {
    const { at = 0, kind = 'pop', d = .38, x = 0, y = 0, r = 0, s = 1, float = 0, out = null, outKind = 'fade', outD = .22 } = o;
    if (t < at) return css(el, { o: 0 });
    let st = { x, y, r, s, o: 1, sx: 1, sy: 1 };
    const p = clamp((t - at) / d);
    if (kind === 'pop') { st.s = s * lerp(.3, 1, ease.back(p)); st.o = clamp(p * 4); }
    else if (kind === 'stamp') { const q = clamp((t - at) / .2); st.s = s * lerp(2.4, 1, ease.out(q)); st.o = clamp(q * 3); if (q >= 1) { const w = t - at - .2; st.sx = 1 + .08 * Math.exp(-w * 14) * Math.cos(w * 40); st.sy = 2 - st.sx; } }
    else if (kind === 'drop') { st.y = y + lerp(-260, 0, ease.back(p)); st.o = clamp(p * 4); }
    else if (kind === 'up') { st.y = y + lerp(160, 0, ease.out(p)); st.o = clamp(p * 3); }
    else if (kind === 'down') { st.y = y + lerp(-160, 0, ease.out(p)); st.o = clamp(p * 3); }
    else if (kind === 'left') { st.x = x + lerp(-700, 0, ease.out(p)); st.r = r + lerp(-8, 0, ease.out(p)); }
    else if (kind === 'right') { st.x = x + lerp(700, 0, ease.out(p)); st.r = r + lerp(8, 0, ease.out(p)); }
    else if (kind === 'fade') { st.o = p; }
    if (float) { const w = t - at; st.y += Math.sin(w * 2.1 + at) * float; st.r += Math.sin(w * 1.3 + at * 2) * float * .08; }
    if (out !== null && t >= out) {
      const q = ease.inOut(clamp((t - out) / outD));
      if (outKind === 'fade') st.o *= 1 - q;
      if (outKind === 'pop') { st.s *= 1 - q; st.o *= 1 - q; }
      if (outKind === 'up') { st.y -= 220 * q; st.o *= 1 - q; }
      if (outKind === 'left') { st.x -= 1300 * q; }
    }
    css(el, st);
  }

  /* recorte animado de um print: keys [{t, x, y, w}] em px CSS da página capturada (1280 de largura) */
  function shot(box, t, keys, pageW = 1280) {
    const img = box.querySelector('img'), bar = box.querySelector('.bar');
    const top = bar ? 58 : 0, W = box.clientWidth, H = box.clientHeight - top;
    let a = keys[0], b = keys[keys.length - 1];
    for (let i = 0; i < keys.length - 1; i++) if (t >= keys[i].t && t <= keys[i + 1].t) { a = keys[i]; b = keys[i + 1]; break; }
    if (t < keys[0].t) b = a; if (t > keys[keys.length - 1].t) a = b;
    const q = a === b ? 0 : ease.inOut((t - a.t) / (b.t - a.t));
    const cw = lerp(a.w, b.w, q), cx = lerp(a.x, b.x, q), cy = lerp(a.y, b.y, q), sc = W / cw;
    img.style.width = (pageW * sc) + 'px';
    img.style.transform = `translate(${-cx * sc}px,${top - cy * sc}px)`;
    return (px, py) => [px * sc - cx * sc, py * sc - cy * sc + top]; // página → coordenadas dentro do box
  }

  const typed = (str, t, t0, t1) => str.slice(0, Math.floor(str.length * clamp((t - t0) / (t1 - t0))));
  const caret = (t, t0, t1) => (t > t0 && t < t1 + .4 && Math.floor(t * 3) % 2 === 0) ? '<span style="display:inline-block;width:.08em;height:1em;background:currentColor;vertical-align:-.12em;margin-left:.04em"></span>' : '';

  /* legendas: palavras do speech-to-text (ElevenLabs, timestamps por palavra) */
  let CHUNKS = [];
  function buildCaptions(words, { kw = [], troca = {}, pula = [] } = {}) {
    const ws = [];
    for (const x of words) {
      if (x.type !== 'word') continue;
      let w = x.text; if (pula.includes(w)) continue;
      for (const [a, b] of Object.entries(troca)) if (w === a) w = b;
      const n = w.toLowerCase().replace(/[^\p{L}\p{N}/:-]/gu, '');
      ws.push({ w, s: x.start, e: x.end, k: kw.includes(n) });
    }
    let c = [];
    for (const x of ws) { c.push(x); if (c.length >= 3 || /[.,!?:]$/.test(x.w)) { CHUNKS.push(c); c = []; } }
    if (c.length) CHUNKS.push(c);
  }
  function renderCap(t, hide) {
    const cap = $('#cap');
    if (hide) { cap.innerHTML = ''; return; }
    let cur = null;
    for (let i = 0; i < CHUNKS.length; i++) {
      const st = CHUNKS[i][0].s - .06, nx = i + 1 < CHUNKS.length ? CHUNKS[i + 1][0].s - .06 : CHUNKS[i][CHUNKS[i].length - 1].e + .4;
      if (t >= st && t < Math.min(nx, CHUNKS[i][CHUNKS[i].length - 1].e + .7)) cur = CHUNKS[i];
    }
    if (!cur) { cap.innerHTML = ''; return; }
    const st0 = cur[0].s;
    const inn = cur.map(x => {
      if (t < x.s - .04) return '';
      const p = clamp((t - x.s + .04) / .16), s = lerp(.6, 1, ease.back(p));
      return `<span class="w${x.k ? ' k' : ''}" style="transform:scale(${s})">${x.w.replace(/[.,]$/, '')}</span>`;
    }).join('');
    const bp = clamp((t - st0 + .06) / .14);
    cap.innerHTML = `<div class="band" style="transform:rotate(-2deg) scale(${lerp(.85, 1, ease.back(bp))})">${inn}</div>`;
  }

  /* câmera do quadro inteiro: deriva suave + “punch-ins” + tremida */
  function camera(t) {
    let s = 1, x = 0, y = 0, r = 0;
    for (const sc of K.SCENES) if (t >= sc.a && t < sc.b) { const u = (t - sc.a) / (sc.b - sc.a); s = 1 + .035 * u; r = (sc.tilt || 0) * u; }
    for (const p of K.CAM.punch || []) { const w = t - p.t; if (w >= 0 && w < 1.2) s += (p.a || .07) * (w < .08 ? w / .08 : Math.exp(-(w - .08) * 5)); }
    for (const p of K.CAM.shake || []) { const w = t - p.t; if (w >= 0 && w < .45) { const k = Math.exp(-w * 9) * (p.a || 14); x += Math.sin(w * 70) * k; y += Math.cos(w * 55) * k; } }
    $('#cam').style.transform = `translate(${x}px,${y}px) scale(${s}) rotate(${r}deg)`;
    $('#grid').style.transform = `translate(${(t * 14) % 60}px,${(t * 9) % 60}px)`;
  }

  const TR = .3; // duração da transição entre cenas
  function frame(t) {
    camera(t);
    for (let i = 0; i < K.SCENES.length; i++) {
      const sc = K.SCENES[i], el = sc.el, nxt = K.SCENES[i + 1];
      const start = sc.a, end = nxt ? nxt.a + (nxt.tr === 'cut' ? 0 : TR) : 1e9;
      if (t < start || t >= end) { el.style.display = 'none'; continue; }
      el.style.display = 'block';
      let x = 0, y = 0, s = 1, o = 1;
      // entrada (tr: slide | zoom | up | cut)
      if (i > 0 && sc.tr !== 'cut' && t < start + TR) {
        const q = ease.out((t - start) / TR);
        if (sc.tr === 'zoom') { s = lerp(1.35, 1, q); o = q; } else if (sc.tr === 'up') { y = lerp(1920, 0, q); } else { x = lerp(1080, 0, q); }
      }
      // saída
      if (nxt && t >= nxt.a && nxt.tr !== 'cut') {
        const q = ease.out((t - nxt.a) / TR);
        if (nxt.tr === 'zoom') { s = lerp(1, .8, q); o = 1 - q; } else if (nxt.tr === 'up') { s = lerp(1, .9, q); o = 1 - q * .6; } else { x = lerp(0, -1080, q); }
      }
      el.style.transform = `translate(${x}px,${y}px) scale(${s})`;
      el.style.opacity = o; el.style.zIndex = (nxt && t >= nxt.a) ? 1 : 2;
      sc.render(t - sc.a, t, el);
    }
    renderCap(t, K.HIDECAP && K.HIDECAP(t));
  }

  function cues() { // efeitos sonoros: os da composição + um whoosh por transição
    const c = [...(K.CUES || [])];
    K.SCENES.forEach((sc, i) => { if (i > 0 && sc.tr !== 'cut') c.push({ t: sc.a - .08, n: 'whoosh', v: .5 }); });
    return c.sort((a, b) => a.t - b.t);
  }

  async function boot({ stt, kw, troca, pula, images = [] }) {
    const d = await (await fetch(stt)).json();
    buildCaptions(d.words, { kw, troca, pula });
    await Promise.all(images.map(src => new Promise(r => { const im = new Image(); im.onload = r; im.onerror = r; im.src = src; })));
    await document.fonts.ready;
    K.SCENES.forEach(sc => sc.el = document.getElementById(sc.id));
    window.render = frame; window.CUES = cues(); window.READY = true;
  }
  return { $, clamp, lerp, ease, prog, css, show, shot, typed, caret, frame, boot, SCENES: [], CAM: {}, CUES: [] };
})();
