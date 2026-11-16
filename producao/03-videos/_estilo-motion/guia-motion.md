---
id: ESTILO-MOTION
formato: guia-de-estilo
status: proposta (aguardando aprovação do usuário)
fonte: Reels de referência enviado pelo usuário em 2026-11-16 (perfil @yannpratali.ai, gravação de tela de ~11 s úteis)
---

# Estilo "Motion Explicado": guia da IA Works

> Inspiração de **linguagem visual**, não cópia. Não reutilizar cenas, personagens, ilustrações,
> textos nem o roteiro do vídeo de referência. Tudo é redesenhado na identidade da IA Works.

## 1. Decupagem da referência (o que foi observado)

| Tempo | Narração (transcrita) | O que aparece | Técnica |
|---|---|---|---|
| 0,0–3,5 s | "Essa skill acha gente na internet implorando pelo que você vende." | 3 cartões de post (Instagram, X, LinkedIn) com dores reais de clientes ("Alguém tem solução??"); selos "POR FAVOR!", "URGENTE", "ALGUÉM??" entram em sequência; bonequinhos coloridos + mascote com lupa; linhas ligam os posts a uma etiqueta "O QUE VOCÊ VENDE: cobrança automática" | **Prova social fake/ilustrada** + metáfora (lupa = busca) |
| 3,9–6,4 s | "Ela é de graça e quase ninguém conhece." | Cartão do repositório (nome + "Public"); etiqueta de preço "R$ 0,00" + selo "GRÁTIS · MIT"; estrela + contador "Star 10" + "só 10 estrelas" em mono; plateia de cadeiras vazias com 1 boneco sentado | **Cada afirmação vira um objeto** (grátis = etiqueta, pouco conhecida = auditório vazio) |
| 6,8–11 s | "Você manda o link do seu negócio ou só fala o que vende…" | Mock de chat de IA no modo claro; texto do prompt sendo **digitado**, link destacado com marca-texto escuro; card do site fictício aparece; balão "OU"; mensagem alternativa "Vendo cobrança automática pra academia." | **Mock de interface animado** (não gravação real) |

**Padrões de edição**
- Fundo claro com **grade quadriculada** sutil; tudo plano (flat), sombras leves, cantos levemente arredondados.
- **Legenda palavra por palavra** (karaokê), em faixa branca inclinada na altura de ~60% da tela; a palavra-chave entra numa **caixa azul com texto branco** ("implorando", "ninguém", "vende.").
- Um elemento novo a cada **~0,5–1 s**; nada fica parado mais de 1,5 s. Entradas com *pop* (escala 90→100% + leve overshoot) e *slide* curto.
- Cartões "levemente tortos" (rotação ±2–4°) dão aspecto de colagem.
- Mascote ilustrado simples reaparece entre cenas (continuidade).
- Fonte mono para detalhes "técnicos" ("só 10 estrelas", nome do skill).
- Narração rápida, sem pausa entre frases (~3,3 palavras/s).
- CTA na legenda do post: "Comenta 'Cliente' que eu te envio o passo a passo".

## 2. Adaptação IA Works

| Elemento | Referência | IA Works |
|---|---|---|
| Fundo | branco com grade cinza | off-white `#F7F6F2` com grade 40 px em `#14161A` a 5% |
| Cartões | brancos e pretos | branco `#FFFFFF` com borda 1,5 px grafite **ou** grafite `#14161A` com texto branco |
| Destaque de palavra | caixa azul | caixa azul `#2F3BFF`, texto branco, Space Grotesk 700 |
| Marca-texto | preto | verde-limão `#D4F542` **atrás** de texto grafite (nunca como cor de texto) |
| Selos de alerta | preto | coral `#FF5A4E` para dor/"antes"; azul para solução/"depois" |
| Texto técnico | mono | JetBrains Mono, cinza `#6B7079` |
| Mascote | personagem próprio dele | **NÃO usar.** Proposta: o próprio **ponto quadrado azul** da marca como "personagem" (pula, aponta, vira cursor). Simples, original e reforça a assinatura |
| Bonecos | coloridos | silhuetas grafite/cinza; só o "cliente ideal" em azul |
| Final | — | vinheta "IA." com o ponto aparecendo (0,5 s) |

**Regras**
1. Interfaces de ferramentas reais (ChatGPT, Claude etc.) aparecem como **mock redesenhado no modo claro**, sem logos de terceiros como se fossem nossos. Quando o tutorial exigir clicar de verdade, usar **gravação de tela real** (estilo atual) na janela branca.
2. **Dados fictícios sempre** (nomes de pessoa, empresa, links). Ex.: "Studio Leve Pilates", `studioleve.com.br`.
3. Posts de "dor do cliente" são **ilustrativos**: escrever textos genéricos, sem @ de pessoas reais. Se o roteiro afirmar números (estrelas, preço), vêm do pesquisador com `[VERIFICAR]` se faltarem.
4. Densidade: 1 conceito por frase, 1 objeto visual por conceito.

## 3. Estrutura recomendada (30–45 s)

1. **Gancho (0–3 s):** a dor/resultado como colagem animada + palavra-chave em azul.
2. **Por que importa (3–8 s):** 2 objetos-metáfora (preço, popularidade, tempo economizado).
3. **Como funciona (8–30 s):** mock animado do prompt sendo digitado → resultado aparecendo. Opcional: 1 trecho de gravação real.
4. **Prova/resultado (30–38 s):** card do resultado final.
5. **CTA + bordão (38–45 s):** "Comenta PALAVRA…" + "Testado e aprovado. IA Works: IA que funciona." + vinheta "IA.".

## 4. Como produzir (pipeline proposto)

1. **Narração** no ElevenLabs via API (voz da marca, cena a cena) → também gera os **timestamps por palavra** (speech-to-text) para sincronizar a legenda karaokê.
2. **Cenas animadas** em HTML/CSS (kit `marca/carrossel/base.css` adaptado a 1080×1920), animadas com CSS/JS e **renderizadas em MP4 pelo Playwright** (captura frame a frame, 30 fps).
3. **Montagem**: ffmpeg junta cenas + narração + legenda já queimada → `rascunho.mp4`. CapCut só para ajuste fino e música (opcional, −20 dB).
4. Entregáveis de sempre (`narracao.txt`, `edicao.md`, `capa.png`, `publicacao.md`) + `cenas/` (HTML) + `render/`.

## Notas para roteirista
- No estilo motion, escreva a coluna "Tela" pensando em **objetos-metáfora** por frase (ex.: "grátis" → etiqueta R$ 0,00), não só em prints.
- Frases curtas (6–10 palavras) e uma palavra-chave por frase para o destaque azul.
