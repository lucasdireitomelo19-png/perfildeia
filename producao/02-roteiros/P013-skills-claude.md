---
id: P013
formato: reels
serie: Works #NN   # [VERIFICAR] número da série com o dono
status: roteirizado
fonte: producao/01-pesquisas/2026-11-15-skills-claude.md
palavra_chave_cta: SKILL   # palavra para o ManyChat
---
# P013: O repositório oficial com mais de 190 mil estrelas que deixa o Claude mais inteligente (como instalar uma Skill)

> Fórmula do nicho: gancho literal com o número de estrelas como prova social, zoom no contador nos 0–2 s e cortes rápidos de uso (mesma lógica do P008).
> Duração estimada: **cerca de 43 s** (107 palavras a ~2,5 palavras/s). Dentro do limite de 45 s.

## Ganchos (3 opções, marque ✅ na escolhida)
1. ✅ "Esse repositório do GitHub com mais de cento e noventa mil estrelas deixa o Claude muito mais inteligente!" (pedido do dono; fórmula literal do nicho)
2. "Mais de cento e noventa mil estrelas: são as habilidades oficiais do Claude, e é de graça."
3. "Esse repositório com mais de cento e noventa mil estrelas ensina o Claude a fazer coisas que ele não sabia."

**Por que a 1:** é o formato que o público do nicho já reconhece, e o número de estrelas é o herói. A frase falada passa de 2 s (~7 s). Por isso o gancho **visual** (zoom no "195k" + texto grande já no primeiro frame) resolve os 0–2 s, e a narração completa a frase.

## Roteiro

**Regra de telas:**
- **GitHub (github.com/anthropics/skills):** captura real.
- **claude.ai:** exige login e não pode ser capturado automaticamente. Todas as cenas do claude.ai viram **cartões de passo** no visual da IA Works: fundo off-white `#F7F6F2`, caminho de menu escrito em Space Grotesk, setas `›`, destaque com marca-texto verde. **Não imitar a interface do Claude.** Não usar logo, cores ou layout do Claude ou da Anthropic.
- Se o dono gravar a própria tela do claude.ai, a gravação pode substituir o cartão. Grave sem histórico pessoal à mostra.

**Guia de pronúncia** (não entra no texto do ElevenLabs; use só se a voz errar a leitura):
GitHub (guít-râb) · Claude (clôd) · Skills/skill (skíls/skíl) · Anthropic (ân-trópic) · Customize (câs-to-máiz) · Create skill (cri-êit skíl) · Upload a skill (âp-lôud a skíl) · ZIP (zíp).

| Bloco · Tempo | Narração (ElevenLabs) | Tela | Texto na tela |
|---|---|---|---|
| **C1** · 0–7 s (gancho) | Esse repositório do GitHub... com mais de cento e noventa mil estrelas... deixa o Claude muito mais inteligente! | **0–2 s:** captura real de github.com/anthropics/skills, com zoom rápido no contador de estrelas (pesquisa: 195,2 mil, botão "195k"; [VERIFICAR na gravação]). **2–7 s:** zoom out para a página do repositório, mostrando a descrição "Public repository for Agent Skills". | 0–2 s: "+190 mil ==estrelas==" (grande). 2–7 s: "Claude mais inteligente" |
| **C2** · 7–13 s (contexto) | São Skills: pastas de instruções que o Claude usa quando precisa. Funciona no plano grátis. | Captura real da pasta `skills/` do repositório rolando devagar, com os nomes das skills (xlsx, pptx, docx, pdf...). | "Skill = pasta de instruções" · depois: "Plano ==grátis== ✓" |
| **C3** · 13–18 s (passo 1) | Passo um: nas configurações, liga a execução de código e criação de arquivos. | **Cartão de passo IA Works** (sem imitar o Claude): número "1" grande em azul + caminho escrito: `Settings › Capabilities › Code execution and file creation`. Abaixo, em cinza pequeno: "No layout novo: Create and edit files". Animação: interruptor genérico (desenho próprio da IA Works) virando para "ligado". | "1. ==Liga== a execução de código" |
| **C4** · 18–24 s (passo 2) | Passo dois: em Customize, Skills, as da Anthropic já tão lá. É só ligar. | **Cartão de passo IA Works:** número "2" + caminho `Customize › Skills`. Embaixo, lista simples desenhada pela IA Works com os rótulos "Excel · Word · PowerPoint · PDF", cada um com um interruptor genérico ligando. [VERIFICAR na conta Free quais skills aparecem prontas e com que nome] | "2. Customize › ==Skills==" |
| **C5** · 24–32 s (passo 3) | Passo três: pra uma do repositório, compacta a pasta em ZIP. Clica no mais, Create skill, Upload a skill. | **24–27 s:** captura real do GitHub: uma pasta de skill aberta, com o arquivo `SKILL.md` em destaque (zoom). Como baixar a pasta: [VERIFICAR]. **27–32 s:** **cartão de passo IA Works:** número "3" + ícone de arquivo `.zip` + caminho `Customize › Skills › + › + Create skill › Upload a skill`, cada etapa acendendo em sequência. | "3. Pasta com SKILL.md → ==ZIP==" · depois: "+ › Create skill › Upload a skill" · rodapé pequeno, cinza: "Só instale skill de fonte confiável" |
| **C6** · 32–37 s (resultado) | Pronto. Num chat novo, pede uma planilha... e o Claude usa a skill sozinho. | **Cartão de resultado IA Works:** o pedido digitado em JetBrains Mono (`Cria uma planilha de controle de gastos do mês...`) e, ao lado, uma planilha simples desenhada pela IA Works (colunas data, descrição, categoria, valor, linha de total) com selo "arquivo .xlsx". Se o dono gravar a tela, usar a resposta real. [VERIFICAR: testar o pedido antes e confirmar que sai um arquivo de planilha] | "==Pronto==." · "O Claude usa a skill sozinho" |
| **C7** · 37–40 s (CTA) | Comenta SKILL que eu te mando o link. | Tela limpa off-white, palavra SKILL grande em azul. | "Comenta ==SKILL==" · "Fonte: github.com/anthropics/skills" (pequeno, cinza) |
| **C8** · 40–43 s (bordão) | Testado e aprovado. IA Works: IA que funciona. | Logo IA Works com ponto quadrado azul. | "IAworks." |

**Contagem de palavras da narração:** C1 18 · C2 14 · C3 13 · C4 14 · C5 19 · C6 13 · C7 8 · C8 8 = **107 palavras ≈ 43 s**.

## Prompt(s) do post (texto exato para copiar)

**Pedido da demo (cena C6; usa a skill de planilha que já vem com o Claude):**

```
Cria uma planilha de Excel pra [controlar os gastos do mês do meu negócio], com as colunas [data, descrição, categoria e valor] e uma linha de total no fim. Me devolve o arquivo pra baixar.
```

## Legenda do post
Como deixar o Claude mais inteligente com Skills (funciona no plano grátis) 👇

Esse repositório oficial da Anthropic no GitHub tem mais de 190 mil estrelas.
Skills são pastas de instruções que o Claude carrega só quando precisa.
1. Liga a execução de código em Settings › Capabilities.
2. Vai em Customize › Skills e liga as que já vêm prontas.
3. Pra uma skill do repositório: ZIP da pasta › "+" › "Create skill" › "Upload a skill".
⚠️ Só instale skill de fonte confiável: ela pode trazer scripts.

Comenta SKILL que eu te mando o link.

#inteligenciaartificial #claude #dicasdeia #iaparanegocios #github

## Mensagem do ManyChat
Oi! Aqui tá o que você pediu 👇

📂 Repositório oficial de Skills da Anthropic:
https://github.com/anthropics/skills

📘 Guia oficial (em inglês) de como usar Skills no Claude:
https://support.claude.com/en/articles/12512180-using-skills-in-claude

✅ Passo a passo:
1. No claude.ai: Settings › Capabilities › liga "Code execution and file creation" (no layout novo: "Create and edit files").
2. Customize › Skills: as skills da Anthropic (Excel, Word, PowerPoint e PDF) já estão lá, é só ligar.
3. Pra enviar outra skill: compacta a pasta (com o arquivo SKILL.md) em ZIP › "+" › "+ Create skill" › "Upload a skill".
4. Abre um chat novo e pede a tarefa. Exemplo:

Cria uma planilha de Excel pra [controlar os gastos do mês do meu negócio], com as colunas [data, descrição, categoria e valor] e uma linha de total no fim. Me devolve o arquivo pra baixar.

⚠️ Só instale skill de fonte confiável (como a oficial da Anthropic): skills podem trazer scripts.

Testado e aprovado. IA Works: IA que funciona.

## Checklist para a próxima etapa
- [ ] Prints/gravações necessários:
  - **Captura real:** github.com/anthropics/skills com zoom no contador de estrelas (C1, 0–2 s) e zoom out na página (C1, 2–7 s).
  - **Captura real:** pasta `skills/` rolando com os nomes das skills (C2).
  - **Captura real:** uma pasta de skill aberta com o `SKILL.md` em destaque (C5).
  - **Cartões de passo IA Works** (sem imitar o Claude): C3 (`Settings › Capabilities › Code execution and file creation`), C4 (`Customize › Skills`), C5 (`Customize › Skills › + › + Create skill › Upload a skill`), C6 (pedido + planilha ilustrativa).
  - Tela de CTA (SKILL) e logo IA Works.
- [ ] Itens [VERIFICAR]:
  1. Número de estrelas no dia da gravação (pesquisa: 195,2 mil, botão "195k"). A narração diz "mais de cento e noventa mil": só muda se cair abaixo disso.
  2. **Plano grátis:** a central de ajuda e a página de preços dizem que o Free tem Skills, mas o README do GitHub ainda fala em "paid plans". Confirmar numa conta Free antes de publicar, porque a narração afirma "funciona no plano grátis".
  3. Nomes de menu no dia da gravação: "Code execution and file creation" ou "Create and edit files"; "Customize › Skills"; "+" › "+ Create skill" › "Upload a skill". Os menus mudaram em 2026.
  4. Interface do claude.ai em português: [VERIFICAR] (pesquisa não confirma). Se estiver em português, os nomes falados em C4 e C5 e os cartões precisam ser trocados.
  5. Quais skills aparecem prontas em Customize › Skills na conta Free, e com que nome (o cartão C4 usa "Excel · Word · PowerPoint · PDF").
  6. **Como baixar uma pasta de skill do GitHub** pra compactar em ZIP: a pesquisa não traz esse passo. A narração diz só "compacta a pasta em ZIP".
  7. Qual skill do repositório usar de exemplo no C5 (não usar xlsx/docx/pptx/pdf, que já vêm prontas).
  8. Testar o pedido da demo e confirmar que o Claude devolve um arquivo de planilha (C6). A narração não promete tempo ("em segundos").
  9. Número da série `Works #NN`.
- [ ] Mostrar o GitHub da Anthropic só como referência (fonte), sem misturar com a identidade da IA Works.

## Autocrítica
- **Gancho para o dedo em 2 s?** Sim, pelo visual: zoom no "195k" + "+190 mil estrelas" em texto grande no primeiro frame. A frase falada é longa (18 palavras, ~7 s), mas é o formato pedido e reconhecido no nicho.
- **Iniciante consegue repetir?** Passos 1, 2 e o resultado, sim: são só cliques em menus. O ponto frágil é o passo 3 (baixar e zipar a pasta do GitHub), que não tem detalhe na pesquisa (item 6). Mesmo sem o passo 3, a pessoa já sai com o resultado, porque a skill de planilha vem pronta.
- **Cabe no tempo?** 107 palavras ≈ 43 s, dentro dos 45 s. Se precisar cortar, a primeira candidata é "as da Anthropic já tão lá" no C4 (−6 palavras, ~−2 s); a informação passa só pro cartão.
- **Uma ação no CTA?** Sim: comentar SKILL.

## Notas para pesquisador-nicho
- Como baixar uma única pasta de skill do repositório anthropics/skills (ou o repositório inteiro) e compactar em ZIP, do jeito mais simples para iniciante.
- Confirmar se o envio de skill própria ("Upload a skill") também está liberado no plano Free, ou só o uso das skills prontas.
- Confirmar se a interface do claude.ai tem versão em português e, se tiver, os nomes dos menus.
- Sugerir uma skill do repositório que faça sentido para o público como exemplo de upload (ex.: brand-guidelines ou internal-comms), com descrição tirada do SKILL.md.

## Notas para produtor-video
- O gancho visual (zoom no contador + texto grande) tem que estar na tela já no primeiro frame; a narração completa a frase até ~7 s.
- Cartões de passo do claude.ai: só visual IA Works (off-white, grafite, azul `#2F3BFF`, marca-texto verde). Interruptores e planilha são desenhos próprios, sem copiar a interface do Claude.
- Caminhos de menu em fonte legível e grande o bastante para ler no celular; os nomes de menu ficam em inglês, como na pesquisa.
- Verde-limão só como marca-texto (`==palavra==`), nunca como cor de texto.
