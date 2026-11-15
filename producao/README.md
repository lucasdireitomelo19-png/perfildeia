# Linha de produção da IA Works

4 agentes que trabalham em sequência. Cada um entrega um arquivo que o próximo lê, e todos
atualizam o quadro `PAUTA.md`.

```
 /pesquisar ──► /roteirizar ──┬──► /video      (Reels)
 pesquisador     roteirista   │    produtor-video
 -nicho                       └──► /carrossel  (Carrossel)
                                   designer-carrossel
```

## Como usar (uma conversa para cada etapa)
Abra o Claude Code neste repositório e digite um comando. O ideal é **uma conversa nova por
etapa**: cada agente lê do repositório o que precisa, então não depende do histórico.

| Comando | Agente | O que faz | Exemplo |
|---|---|---|---|
| `/pauta` | (nenhum) | Mostra o quadro e o próximo passo | `/pauta` |
| `/pesquisar` | pesquisador-nicho | Novas pautas, aprofundar ou checar fatos | `/pesquisar radar` · `/pesquisar P003` |
| `/roteirizar` | roteirista | Roteiro de Reels ou carrossel | `/roteirizar P001` |
| `/video` | produtor-video | Narração ElevenLabs + gravações + edição CapCut + capa | `/video P001` |
| `/carrossel` | designer-carrossel | Lâminas PNG prontas para postar | `/carrossel P002` |
| `/site` | criador-sites | Landing pages: link na bio, captura, vendas | `/site captura dos 50 prompts` |
| `/produzir` | todos, em sequência | Do tema ao conteúdo pronto | `/produzir como fazer logo com IA` |

Você também pode chamar um agente pelo nome, sem comando: *"use o roteirista na P004"*.

## Rotina semanal sugerida
- **Segunda:** `/pesquisar radar` → escolher 5 a 7 pautas da semana em `PAUTA.md`
- **Terça:** `/roteirizar` em cada pauta escolhida
- **Quarta:** `/video` e `/carrossel` → gravar telas, gerar a narração no ElevenLabs e editar no CapCut
- **Depois de postar:** mudar o status para `✅ publicado` em `PAUTA.md`

## Estrutura das pastas
```
producao/
├── PAUTA.md                 ← quadro de pautas (fonte da verdade)
├── 01-pesquisas/            ← AAAA-MM-DD-tema.md      (pesquisador-nicho)
├── 02-roteiros/             ← P001-slug.md            (roteirista)
├── 03-videos/P001-slug/     ← narracao.txt, gravacoes.md, edicao.md, capa, publicacao.md (produtor-video)
└── 04-carrosseis/P002-slug/ ← carrossel.html, 01.png…, legenda.txt (designer-carrossel)
```

## Onde estão os agentes e comandos
- Agentes (os prompts de cada um): `.claude/agents/`
- Comandos: `.claude/commands/`
- Regras compartilhadas que todos seguem: `CLAUDE.md` (raiz)
- Kit visual dos carrosséis: `marca/carrossel/` · Renderizador: `ferramentas/render-slides.js`
