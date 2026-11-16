---
tipo: pesquisa
data: 2026-11-16
modo: radar
pautas: [P020, P021, P022, P023]
id: P020-P023
formato: reels | carrossel
status: 🔎 pesquisado
fonte: web (fontes listadas em cada pauta)
---
# Pesquisa: skills que ensinam o Claude a editar vídeo

## Resumo em 3 linhas
Existem skills populares que fazem o Claude criar e editar vídeo: as oficiais do **Remotion** (7,3 mil estrelas; criam vídeo do zero com código) e a **ffmpeg-skill** (6,1 mil estrelas; 42 ferramentas para cortar, legendar e exportar 9:16). **Todas rodam no Claude Code**, ou seja, não no chat comum do claude.ai, e pedem ferramentas instaladas no computador (Node, ffmpeg). Para o nosso público, o melhor ângulo é *Funciona ou Não?* + comparativo honesto, e um bastidor mostrando que os Reels da IA Works são editados assim.

## Comparativo verificado (acessado em 2026-11-16)
| Skill | Estrelas | O que faz | Onde roda | Precisa instalar | Licença / custo | Fonte |
|---|---|---|---|---|---|---|
| **remotion-dev/skills** (oficial Remotion) | 7,3 mil | Boas práticas para o Claude escrever vídeos em código (Remotion): criar, renderizar, legendar (`/remotion-create`, `/remotion-render`, `/remotion-captions`) | Claude Code, Codex, Cursor e outros. claude.ai: não consta | Node (comandos `npx`) | Licença da skill: não consta. **Remotion grátis para indivíduos e empresas de até 3 pessoas**; acima disso, Company License (ex.: Creators US$ 25/mês por assento) | [repo](https://github.com/remotion-dev/skills) · [licença](https://www.remotion.dev/docs/license/pricing.md) |
| **Plugin Remotion para Claude Code** | — | Inclui as skills acima; cria/edita projetos Remotion | Claude Code. **Instalação sem terminal no app Claude desktop:** Code → Customize → Plugins → Discover → buscar "remotion" → Add | Requisitos não constam na página | idem Remotion | [docs](https://www.remotion.dev/docs/ai/claude-code-plugin) |
| **kajisho5/ffmpeg-skill** | 6,1 mil | Editor de vídeo local: 42 ferramentas FFmpeg (corte, junção, legendas/karaokê, reenquadrar, volume, exportar por plataforma); também servidor MCP | Claude Code, Cursor, Codex; Claude Desktop como cliente MCP | Terminal, Node 16+, FFmpeg 6.1+, Python 3.10+ | MIT, grátis, "No cloud, no API keys" | [repo](https://github.com/kajisho5/ffmpeg-skill) |
| **louisedesadeleer/clipify** | 662 | Vídeo longo → 3–5 cortes 9:16 com reenquadramento e legendas palavra por palavra | Claude Code (`/clipify`) | macOS (ajustável), ffmpeg, Whisper, Python | MIT, sem API paga | [repo](https://github.com/louisedesadeleer/clipify) |
| **haidrrrry/claude-remotion-skill** | 1,0 mil | Motion graphics com Remotion + checagem de quadros | Diz funcionar até no claude.ai (upload do arquivo .skill), **mas não explica como renderiza lá**: [NÃO CONFIRMADO] | Remotion/Node, ffmpeg | MIT. O README diz que o Remotion é "free", mas isso contradiz a licença do Remotion para empresas com mais de 3 pessoas | [repo](https://github.com/haidrrrry/claude-remotion-skill) |
| social-media-skills/video-editing-skill | 4 | Corta silêncios e "éé", legenda, capítulos | Claude Code etc. **Não funciona no claude.ai** (dito na página) | Python, ffmpeg, Pillow | MIT | [repo](https://github.com/social-media-skills/video-editing-skill) |

> **Conclusão para a pauta:** nenhuma delas é "liga e usa" no chat do claude.ai. O caminho mais próximo de iniciante é o **plugin Remotion pelo app Claude desktop** (instalação por cliques). Ele exige Claude Code, que na página de preços aparece no plano **Pro** (US$ 20/mês; [claude.com/pricing](https://claude.com/pricing), acessado em 2026-11-15). Precisa de Node no computador: **[VERIFICAR]** num teste real.

## Pautas

### P020: Funciona ou Não? O repositório oficial que ensina o Claude a fazer vídeo (Remotion skills)
- **Formato sugerido:** reels · **Pilar:** descoberta · **Série:** Funciona ou Não?
- **Por que agora:** "Claude Code + Remotion" virou tendência de vídeos no nicho (vários tutoriais em 2026); existe skill oficial e plugin com instalação por cliques.
- **Dor do público:** "editar vídeo toma meu dia inteiro".
- **Passo a passo verificado:** app Claude desktop → Code → Customize → Plugins → Discover → "remotion" → Add → numa sessão nova, na pasta do vídeo: `/remotion:remotion-create` + o pedido (exemplo oficial: "Make a promo video for a record store").
- **3 ganchos (fórmula):** "Esse repositório com mais de 7 mil estrelas ensina o Claude a fazer vídeo. Funciona ou não?" · "O Claude agora faz vídeo. Testei." · "Pedi um vídeo pro Claude em uma frase. Olha o que saiu."
- **Riscos/cuidados:** exige Claude Code (plano pago) e provavelmente Node, então falha o critério "grátis/iniciante": por isso é *Funciona ou Não?* e não tutorial. Licença do Remotion: grátis só até 3 pessoas na empresa. **Precisa de teste real antes do roteiro** (o resultado "uau" depende disso).
- **Fontes:** [remotion-dev/skills](https://github.com/remotion-dev/skills) · [plugin](https://www.remotion.dev/docs/ai/claude-code-plugin) · [licença](https://www.remotion.dev/docs/license/pricing.md) (2026-11-16)

### P021: Esse repositório com 6 mil estrelas transforma o Claude num editor de vídeo (ffmpeg-skill)
- **Formato sugerido:** reels · **Pilar:** descoberta
- **Por que agora:** 42 ferramentas de edição, local, grátis e sem chave de API: é o "editor de vídeo" mais completo entre as skills.
- **3 ganchos:** "Esse repositório do GitHub com mais de 6 mil estrelas transforma o Claude num editor de vídeo!" · "Cortar, legendar e exportar pra Reels: só pedindo pro Claude." · "42 ferramentas de edição de vídeo, de graça, dentro do Claude."
- **Riscos/cuidados:** instalação por terminal (Node, FFmpeg 6.1+, Python): **avisar "nível intermediário"**. No Mac, o FFmpeg comum do Homebrew não tem todos os filtros (a página indica `ffmpeg-full`).
- **Fontes:** [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) (2026-11-16)

### P022: 3 skills que ensinam o Claude a editar vídeo (e qual serve pra você)
- **Formato sugerido:** carrossel · **Pilar:** descoberta
- **Estrutura:** capa → "criar do zero" = Remotion → "editar o que você gravou" = ffmpeg-skill → "vídeo longo em cortes" = clipify → tabela "precisa de quê" (plano, terminal, sistema) → CTA.
- **3 ganchos:** "3 skills que transformam o Claude em editor de vídeo." · "Qual skill de vídeo do Claude serve pra você?" · "Antes de instalar skill de vídeo no Claude, leia isso."
- **Riscos/cuidados:** deixar claro que todas são para Claude Code (não o chat comum). Estrelas mudam: usar "mais de".
- **Fontes:** tabela acima (2026-11-16)

### P023: Bastidor: os Reels deste perfil são editados pelo Claude
- **Formato sugerido:** reels · **Pilar:** bastidor
- **Por que agora:** é verdade e é prova: os Reels P008 e P013 foram gerados com narração ElevenLabs, capturas automáticas e montagem com ffmpeg, orquestrados pelo Claude (ver `ferramentas/reels/README.md`).
- **3 ganchos:** "Esse vídeo foi editado por uma IA. Inclusive esse aqui." · "Eu não abro editor de vídeo há semanas." · "Mostro o bastidor de como a IA monta meus Reels."
- **Riscos/cuidados:** não prometer que o seguidor reproduz em 1 clique (o fluxo usa Claude Code e ferramentas técnicas); usar como prova e ponte para o curso. Mostrar só telas sem dados sensíveis.
- **Fontes:** fluxo interno documentado em `ferramentas/reels/README.md` (2026-11-15)

## Ordem sugerida para o roteirista
P022 (carrossel, sem depender de teste) → P023 (bastidor, material já existe) → P020 e P021 só depois de um teste real de instalação.

## Atualização P020 (2026-11-16): teste e fatos finais
- **Teste real:** o dono do perfil instalou e usou o plugin/skill do Remotion antes desta data e confirmou que **funciona**. Isso valida o "Testado e aprovado".
- **Comando:** `/remotion:remotion-create` + pedido. Exemplo oficial, texto exato: `/remotion:remotion-create Make a promo video for a record store`. Fonte: [Remotion: Claude Code plugin](https://www.remotion.dev/docs/ai/claude-code-plugin).
- **Menus do app Claude desktop (texto oficial):** "Select Code, open Customize in the sidebar, then select Plugins → Discover" → buscar `remotion` → **"Add"** no plugin "Remotion" (remotion-dev/claude-code-plugin). Confirmação: "Remotion is installed and ready to use." Fonte: idem.
- **Estrelas:** 7,3 mil (16/11/2026). Fonte: [remotion-dev/skills](https://github.com/remotion-dev/skills).
- **Claude Code:** só a partir do Pro (Free = No); Pro custa US$ 20/mês, ou US$ 17/mês no anual. Fonte: [claude.com/pricing](https://claude.com/pricing).
- **Node:** a documentação do plugin não lista requisitos e as páginas de requisitos do Remotion deram 404. **Decisão:** o roteiro não menciona Node (nem que precisa, nem que não precisa).
