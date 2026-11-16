---
id: P020
formato: reels
status: produzido
fonte: producao/02-roteiros/P020-remotion-skills-video.md
---
# P020: vídeo final gerado automaticamente

**Arquivo:** `P020-remotion-skills-video-final.mp4` (1080×1920, 30 fps, 42,8 s, áudio AAC normalizado em -14 LUFS). Pronto para postar.
**Capa:** `capa.png` (gerada de `capa.html`, kit do carrossel adaptado para 9:16). Texto: selo "Funciona ou Não?" + "+7 mil · Claude faz vídeo?" e o comando `/remotion:remotion-create`, dentro da área central 4:5.

## Como foi feito (2026-11-16)
- **Narração:** ElevenLabs, voz **Mário** (`YU8EsJtXFMyKMxYtheDk`), `eleven_multilingual_v2`, stability 0,45, similarity 0,75, style 0,1, speed 1,08. Texto em `narracao.txt` (C1 a C9, sem mudança de conteúdo).
- **Pronúncia de "Claude":** nos blocos C3 e C7 o texto usa "Clôd" / "Clôd Côud". Na frase inteira o transcritor escreve "Cloud", mas é viés de contexto: a palavra recortada sozinha é transcrita como "Claude" (o "Claude" do C1, aprovado, recortado sozinho sai "Cloud"). Testei também "Claude" e "Claude Code" com grafia normal: mesma leitura. Mantida a grafia fonética.
- **Conferência do áudio final** (ElevenLabs scribe_v1, `language_code=por`, MP4 completo):
  > Esse repositório do GitHub, com mais de 7 mil estrelas, ensina o Claude a fazer vídeo. Você descreve, o Claude escreve o código no Remotion e renderiza. Passo um: no app Claude do computador, abre Code, Customize, Plugins. Passo dois: Discover, busca Remotion, clica em Add. Passo três: numa sessão nova, digita /remotioncreate e descreve o vídeo. Exemplo oficial: vídeo promocional pra uma loja de discos. Funciona? Funciona, mas exige o Claude Code, do plano Pro, e o Remotion só é grátis pra você ou empresa de até três pessoas. Comenta "vídeo" que eu te mando o link. Testado e aprovado. IA Works, IA que funciona.

  O transcritor acrescentou "[som de vento]" no fim; medido: o último segundo está em silêncio (-58 a -91 dB). Não há ruído.
- **Telas reais (Playwright, 2026-11-16, sem login, viewport 1280×1213, deviceScaleFactor 2, banner de cookies recusado):**
  - `github.com/remotion-dev/skills`: botão **"Star 7.3k"** e barra lateral **"7.3k stars"** (zoom no contador no frame 0, depois zoom out com destaque em `remotion-dev / skills`; a parte de baixo do README fica fora do quadro).
  - `remotion.dev/docs/ai/claude-code-plugin`: topo da página (C2) e o exemplo **`/remotion:remotion-create Make a promo video for a record store`** ("Suggested prompt"), com etiqueta "exemplo da documentação oficial do Remotion" (C6).
  - `remotion.dev/docs/license/pricing`: cartão **Free License**, destaque em **"For individuals and companies of up to 3 people"** (C7).
- **Cenas do app Claude (C3 a C5) e veredito (C7):** cartões de passo no visual IA Works (off-white, grafite, azul, verde só como marca-texto; Space Grotesk / Inter / JetBrains Mono). Campo de busca, linha do plugin e botão "Add" são desenhos próprios, **sem imitar a interface, o logo ou as cores do Claude/Anthropic**. Menus em inglês, como na documentação. O pedido do passo 3 aparece como modelo `[descreva o seu vídeo]`.
- **Selo fixo** "Funciona ou Não?" no topo durante o vídeo; legendas palavra a palavra com a palavra-chave em azul ("sete mil" aparece como "7 mil", "barra remotion create" como `/remotion:remotion-create`); CTA "Comenta VÍDEO" com a fonte; logo e vinheta "IA." com o ponto aparecendo. **Sem música.**

## Roteiro de cenas (tempos do MP4)
| Bloco | Tempo | Imagem |
|---|---|---|
| C1 | 0–6,0 s | Zoom no "Star 7.3k" + "+7 mil estrelas" grande já no frame 0 → zoom out com destaque em `remotion-dev / skills` · "Claude fazendo vídeo?" |
| C2 | 6,1–10,3 s | Página do plugin no remotion.dev rolando + esquema "Você descreve › Claude escreve o código › vídeo renderizado" · "Vídeo feito com código" |
| C3 | 10,4–15,9 s | Cartão 1: › Code › Customize › Plugins acendendo no ritmo da fala |
| C4 | 16,0–19,7 s | Cartão 2: › Discover, busca "remotion" digitada, linha Remotion, clique em Add → "Remotion is installed and ready to use." |
| C5 | 19,9–25,1 s | Cartão 3: "sessão nova, na pasta do vídeo" + `/remotion:remotion-create [descreva o seu vídeo]` digitado |
| C6 | 25,3–28,7 s | Documentação: zoom no exemplo "Make a promo video for a record store" + etiqueta "exemplo da documentação oficial" |
| C7 | 28,9–36,0 s | Veredito "Funciona ✓" → aviso coral "Exige Claude Code · plano Pro, US$ 20/mês" → página de licença com zoom em "up to 3 people" |
| C8 | 36,1–38,2 s | CTA "Comenta VÍDEO" + "Fonte: github.com/remotion-dev/skills" |
| C9 | 38,3–42,8 s | Logo IA Works + vinheta |

## O que falta para publicar
1. Assistir ao vídeo uma vez.
2. Subir com `capa.png` e a legenda do `publicacao.md`; configurar **VÍDEO** e **VIDEO** no ManyChat.
3. No dia da postagem, se quiser, confira se o preço do Pro em claude.com/pricing continua US$ 20/mês e se o contador segue acima de 7 mil (era 7,3 mil em 16/11/2026).
4. Marcar a P020 como `✅ publicado` na PAUTA.
