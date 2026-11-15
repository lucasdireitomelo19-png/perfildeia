"""Gera o HTML do PDF "50 Prompts que Funcionam" a partir de prompts.json.
Uso (na raiz do repositório):
  python3 curso/isca-50-prompts/build.py
  node ferramentas/render-pdf.js curso/isca-50-prompts/isca.html curso/isca-50-prompts/50-prompts-que-funcionam.pdf
"""
import html, json, re
from pathlib import Path

AQUI = Path(__file__).parent
dados = json.loads((AQUI / "prompts.json").read_text(encoding="utf-8"))

def fmt_prompt(t):
    t = html.escape(t)
    return re.sub(r"\[([^\]]+)\]", r'<span class="var">[\1]</span>', t)

LOGO = '<span class="logo"><span class="ia">IA</span>works<span class="pt"></span></span>'
paginas = []
n_pag = [0]

def pagina(conteudo, classe=""):
    n_pag[0] += 1
    rodape = f'<footer>{LOGO}<span class="pag">{n_pag[0]:02d}</span></footer>' if "sem-rodape" not in classe else ""
    paginas.append(f'<section class="pg {classe}">{conteudo}{rodape}</section>')

# Capa
pagina(f'''
<div class="capa-topo"><span class="tag">GUIA GRÁTIS</span></div>
<h1 class="capa-titulo">50 prompts que <span class="mt">funcionam</span><span class="pt"></span></h1>
<p class="capa-sub">Copie, troque o que está entre [colchetes] e use hoje no ChatGPT, Claude ou Gemini.</p>
<ul class="capa-lista">{"".join(f"<li>{c['emoji']} {c['nome']}</li>" for c in dados["categorias"])}</ul>
<div class="capa-logo">{LOGO}</div>
''', "capa sem-rodape")

# Como usar
pagina('''
<span class="tag">ANTES DE COMEÇAR</span>
<h2 class="h2">Como usar este guia<span class="pt"></span></h2>
<ol class="passos">
  <li><b>Copie o prompt</b> e cole no ChatGPT, no Claude ou no Gemini. Todos funcionam no plano gratuito.</li>
  <li><b>Troque tudo o que está entre <span class="var">[COLCHETES]</span></b> pelas informações do seu caso. Quanto mais detalhe, melhor a resposta.</li>
  <li><b>Não aceite a primeira resposta.</b> Peça ajustes: "mais curto", "mais informal", "me dê outras 3 opções".</li>
  <li><b>Confira o que é importante.</b> A IA pode errar dados, valores e datas. Revise antes de enviar ou decidir.</li>
</ol>
<div class="ptcf">
  <p class="ptcf-titulo">A fórmula por trás de todos eles: <b>P.T.C.F.</b></p>
  <div class="ptcf-grid">
    <div><b>P</b>apel<br><span>quem a IA deve ser</span></div>
    <div><b>T</b>arefa<br><span>o que ela deve fazer</span></div>
    <div><b>C</b>ontexto<br><span>os detalhes do seu caso</span></div>
    <div><b>F</b>ormato<br><span>como você quer a resposta</span></div>
  </div>
</div>
''')

# Categorias: abertura com 2 prompts, depois páginas de 3, 3 e 2
num = 0
for c in dados["categorias"]:
    ps = c["prompts"]
    grupos = [ps[0:2], ps[2:5], ps[5:8], ps[8:10]]
    for gi, grupo in enumerate(grupos):
        cards = []
        for p in grupo:
            num += 1
            cards.append(f'''<article class="card"><p class="card-titulo"><span class="num">{num:02d}</span>{html.escape(p["titulo"])}</p>
<div class="prompt">{fmt_prompt(p["texto"])}</div></article>''')
        cab = (f'<header class="cat"><span class="cat-emoji">{c["emoji"]}</span><div><h2 class="h2">{c["nome"]}<span class="pt"></span></h2><p class="cat-intro">{c["intro"]}</p></div></header>'
               if gi == 0 else f'<p class="cat-mini">{c["emoji"]} {c["nome"]}</p>')
        pagina(cab + '<div class="cards">' + "".join(cards) + "</div>")

# Página final
pagina(f'''
<div class="fim">
  <h2 class="fim-titulo">Funcionou pra você?</h2>
  <p class="fim-texto">Me conta qual prompt você usou primeiro. Eu leio todas as mensagens no Direct.</p>
  <ul class="fim-lista">
    <li>Todo dia tem tutorial novo de IA no perfil</li>
    <li>Salve este PDF para consultar sempre que precisar</li>
    <li>Mande para alguém que ainda sofre com o ChatGPT</li>
  </ul>
  <p class="fim-assinatura">Siga a <b>IA Works</b> no Instagram</p>
  <div class="fim-logo">{LOGO}</div>
  <p class="fim-slogan">IA que funciona.</p>
</div>
''', "final sem-rodape")

CSS = (AQUI / "estilo.css").read_text(encoding="utf-8")
doc = f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>50 prompts que funcionam · IA Works</title>
<style>{CSS}</style></head><body>{"".join(paginas)}</body></html>'''
(AQUI / "isca.html").write_text(doc, encoding="utf-8")
print(f"ok: {len(paginas)} páginas, {num} prompts")
