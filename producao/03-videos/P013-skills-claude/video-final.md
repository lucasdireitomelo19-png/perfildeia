---
id: P013
formato: reels
status: produzido
fonte: producao/02-roteiros/P013-skills-claude.md
---
# P013: vídeo final gerado automaticamente

**Arquivo:** `P013-skills-claude-final.mp4` (1080×1920, 30 fps, 43,3 s, áudio AAC normalizado em -14 LUFS). Pronto para postar.
**Capa:** `capa.png` (gerada de `capa.html`, kit do carrossel adaptado para 9:16). Texto: "+190 mil · Claude mais inteligente." (5 palavras), dentro da área central 4:5.

## Como foi feito (2026-11-15)
- **Narração:** ElevenLabs, voz **Mário** (`YU8EsJtXFMyKMxYtheDk`), `eleven_multilingual_v2`, stability 0,45, similarity 0,75, style 0,1, speed 1,08. Texto em `narracao.txt` (C1 a C8, sem mudança de conteúdo; "skill" e "zip" em minúsculas para a voz não soletrar). O C7 foi regravado uma vez porque a transcrição ouviu "os link".
- **Conferência de pronúncia:** transcrição do áudio final (ElevenLabs scribe_v1):
  > Esse repositório do GitHub, com mais de 190 mil estrelas, deixa o Claude muito mais inteligente. São skills, pastas de instruções que o Claude usa quando precisa. Funciona no plano grátis. Passo um: nas configurações, liga a execução de código e criação de arquivos. Passo dois: em Customize, Skills. As da Anthropic já tão lá, é só ligar. Passo três: pra uma do repositório, compacta a pasta em zip. Clica no mais, Create Skill, Upload a Skill. Pronto. Num chat novo, pede uma planilha e o Claude usa a skill sozinho. Comenta "skill" que eu te mando o link. Testado e aprovado. Yeah works! Yeah que funciona.

  O "Yeah works" do fim é erro do transcritor no áudio longo: o trecho do C8 transcrito sozinho (do bloco e do MP4 final) dá "IA works, IA que funciona", igual ao P008. Vale ouvir o final uma vez antes de postar.
- **Telas reais (Playwright, 2026-11-15, sem login):** `github.com/anthropics/skills` (botão **"Star 195k"**, barra lateral **"195.3k stars"**, descrição "Public repository for Agent Skills"), o menu **Code › Download ZIP** aberto, a pasta `skills/` (19 pastas) e `skills/theme-factory` com o `SKILL.md` destacado.
- **Cenas do claude.ai (C3 a C6):** cartões de passo desenhados no visual IA Works (off-white, grafite, azul, verde só como marca-texto; Space Grotesk / Inter / JetBrains Mono). Interruptores, lista de skills e planilha são desenhos próprios, **sem imitar a interface, o logo ou as cores do Claude/Anthropic**. Nomes de menu em inglês.
- **Planilha do C6:** ilustrativa, com dados fictícios (embalagens, farinha, anúncio, luz, frete; total R$ 875,50). Não é uma resposta real do Claude.
- **Sem música.** Legendas palavra a palavra com palavra-chave em azul ("cento e noventa mil" aparece como "190 mil"), CTA "Comenta SKILL" com a fonte, logo e vinheta "IA." com o ponto aparecendo.

## Roteiro de cenas (tempos do MP4)
| Bloco | Tempo | Imagem |
|---|---|---|
| C1 | 0–7,5 s | Zoom no "Star 195k" + "+190 mil estrelas" grande já no frame 0 → zoom out com destaque em "Public repository for Agent Skills" |
| C2 | 7,6–13,2 s | Pasta `skills/` rolando · "Skill = pasta de instruções" → "Plano grátis ✓" |
| C3 | 13,4–18,8 s | Cartão 1: Settings › Capabilities › interruptor "Code execution and file creation" ligando |
| C4 | 19,0–24,3 s | Cartão 2: Customize › Skills, Excel/Word/PowerPoint/PDF ligando em "É só ligar" |
| C5 | 24,5–31,1 s | GitHub: Code › Download ZIP → pasta theme-factory com SKILL.md → `theme-factory.zip` → Cartão 3: Customize › Skills › + › + Create skill › Upload a skill + "Só instale skill de fonte confiável" |
| C6 | 31,3–36,2 s | Cartão: pedido digitado em JetBrains Mono + planilha `.xlsx` ilustrativa |
| C7 | 36,3–38,8 s | CTA "Comenta SKILL" + "Fonte: github.com/anthropics/skills" |
| C8 | 39,0–43,3 s | Logo IA Works + vinheta |

## Pendências [VERIFICAR] (antes de postar)
1. **Plano grátis:** central de ajuda e preços dizem que sim (inclusive upload); o README do GitHub ainda fala em "paid plans". O vídeo afirma "Funciona no plano grátis": conferir numa conta Free.
2. **Nomes de menu no dia da postagem:** "Code execution and file creation" / "Create and edit files", "Customize › Skills", "+ › + Create skill › Upload a skill". Interface em português não confirmada (menus mantidos em inglês).
3. **Quais skills aparecem prontas** em Customize › Skills na conta Free e com que nome (o cartão usa Excel · Word · PowerPoint · PDF).
4. **Teste do pedido da planilha:** confirmar que o Claude devolve um arquivo .xlsx (a planilha do vídeo é ilustrativa).
5. **Número da série** `Works #NN`.
6. Estrelas: 195k no dia da captura → "mais de cento e noventa mil" ✅.

## Notas para roteirista
- Por causa da resposta da pesquisa ("Respostas às notas do roteirista"), o C5 ganhou na **tela** (não na fala) o passo "Code › Download ZIP" e o exemplo `theme-factory.zip`. A fala não mudou. Se quiser, inclua no Direct do ManyChat: "baixa o ZIP do repositório (Code › Download ZIP), descompacta, entra em skills/ e compacta só a pasta da skill".

## O que falta para publicar
1. Assistir ao vídeo e conferir o final ("IA Works").
2. Resolver os itens [VERIFICAR] 1 a 4.
3. Subir com `capa.png` e a legenda do `publicacao.md`; configurar a palavra **SKILL** no ManyChat.
4. Marcar a P013 como `✅ publicado` na PAUTA.
