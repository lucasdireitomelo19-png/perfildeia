---
tipo: pesquisa
data: 2026-11-15
modo: radar
pautas: [P013, P014, P015, P016, P017, P018, P019]
id: P013-P019
formato: reels | carrossel
status: 🔎 pesquisado
fonte: web (fontes oficiais listadas em cada pauta)
---
# Pesquisa: "deixar o Claude mais inteligente" (Skills, conectores e projetos)

## Resumo em 3 linhas
Skills são pastas de instruções que o Claude carrega quando precisa. O repositório oficial da Anthropic tem cerca de 195 mil estrelas, e as Skills estão disponíveis **inclusive no plano grátis**. Isso cabe perfeitamente na fórmula viral do nicho ("Esse repositório do GitHub com mais de X mil estrelas...") e vira uma série: Skills → conectores → projetos.

## Fatos verificados (acessados em 2026-11-15)
| Fato | Valor | Fonte |
|---|---|---|
| O que são Skills | Pastas com instruções, scripts e recursos que o Claude carrega só quando são relevantes para a tarefa. Anunciadas em 16/10/2025 | [claude.com/blog/skills](https://claude.com/blog/skills) |
| Repositório oficial | `anthropics/skills`: **195,2 mil estrelas**, 23 mil forks. Descrição: "Public repository for Agent Skills" | [github.com/anthropics/skills](https://github.com/anthropics/skills) |
| Skills prontas no repositório (19) | academy-guide, algorithmic-art, brand-guidelines, canvas-design, claude-api, discernment-nudge, doc-coauthoring, docx, frontend-design, internal-comms, mcp-builder, pdf, pptx, skill-creator, slack-gif-creator, theme-factory, web-artifacts-builder, webapp-testing, xlsx | [pasta skills/](https://github.com/anthropics/skills/tree/main/skills) |
| Planos com Skills | "Free, Pro, Max, Ultra, Team, and Enterprise". A tabela de preços marca Skills = Yes no Free | [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) · [claude.com/pricing](https://claude.com/pricing) |
| Pré-requisito | Execução de código ligada: Settings > Capabilities > **"Code execution and file creation"** (no layout novo: "Create and edit files") | [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) |
| Onde ficam | **Customize > Skills** (claude.ai/customize/skills); cada skill tem um interruptor | idem |
| Enviar skill própria | Compactar a pasta em ZIP → Customize > Skills → **"+"** → **"+ Create skill"** → **"Upload a skill"** | idem |
| Formato | Pasta com o arquivo `SKILL.md` (frontmatter com `name`, até 64 caracteres, e `description`, até 200 caracteres). O artigo de ajuda escreve "skill.md" e o GitHub, "SKILL.md" | [Creating custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills) · [README](https://github.com/anthropics/skills) |
| Skills da Anthropic já embutidas | Excel, Word, PowerPoint e PDF: o Claude usa sozinho quando a execução de código está ligada | [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) |
| skill-creator | Skill que cria, melhora e testa outras skills. O blog diz que o Claude pergunta sobre o seu fluxo de trabalho, monta a pasta, formata o SKILL.md e empacota | [SKILL.md do skill-creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md) · [blog](https://claude.com/blog/skills) |
| Skills não sincronizam | Uma skill enviada no claude.ai não aparece no Claude Code nem na API | [AgentsCamp](https://agentscamp.com/guides/skills/claude-skills-on-claude-ai-and-api) (fonte secundária) |
| Preços | Free US$ 0 · Pro US$ 20/mês (US$ 17/mês no anual) · Max US$ 100 · Ultra US$ 200. Preço em R$: não consta | [claude.com/pricing](https://claude.com/pricing) |
| Conectores | Customize > Connectors; no chat: "+" > "Connectors". Conector personalizado (MCP) em todos os planos, **limite de 1 no Free**. O diretório mostra 1.128 conectores (Google Drive, Gmail, Google Calendar, Canva, Notion etc.) | [Custom connectors](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp) · [claude.com/connectors](https://claude.com/connectors) |
| Projetos | "+ New Project" → botão **"Set project instructions"** → "Save instructions"; arquivos na base de conhecimento com "+". **Free: até 5 projetos** | [Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) · [pricing](https://claude.com/pricing) |
| Memória | Disponível em todos os planos ("Memory across conversations" no Free) | [claude.com/pricing](https://claude.com/pricing) |

> **Contradição registrada:** o README do GitHub ainda diz que as skills de exemplo estão disponíveis "to paid plans"; a central de ajuda e a página de preços (mais recentes) dizem que o Free também tem. Vale o que diz a central de ajuda, mas confira na conta na hora de gravar.

## Pautas

### P013: O repositório oficial com 195 mil estrelas que deixa o Claude mais inteligente (como instalar uma Skill)
- **Formato sugerido:** reels · **Pilar:** tutorial · **Série:** Works #NN
- **Por que agora:** é o repositório mais estrelado da Anthropic, e Skills chegaram ao plano grátis. Encaixa na fórmula viral.
- **Dor do público:** "o Claude responde genérico, queria que ele soubesse fazer as coisas do meu jeito".
- **Ferramenta(s):** Claude (claude.ai) · Skills no plano Free: **sim** · interface em português: [VERIFICAR] · repositório: github.com/anthropics/skills
- **Passo a passo verificado:**
  1. claude.ai → Settings > Capabilities → ligar **"Code execution and file creation"** (ou "Create and edit files").
  2. Ir em **Customize > Skills** e ver as skills da Anthropic, com interruptores.
  3. Para uma skill do repositório ou sua: compactar a pasta (com o `SKILL.md`) em ZIP → **"+"** → **"+ Create skill"** → **"Upload a skill"**.
  4. Abrir um chat novo e pedir a tarefa: o Claude usa a skill sozinho quando ela é relevante.
- **Resultado "uau" para o gancho:** o contador "195k" + o Claude gerando uma planilha/apresentação de verdade a partir de um pedido simples.
- **3 ganchos possíveis (fórmula oficial):**
  1. "Esse repositório do GitHub com mais de 190 mil estrelas deixa o Claude muito mais inteligente!"
  2. "Mais de 190 mil estrelas: são as habilidades oficiais do Claude, e é de graça."
  3. "Esse repositório com mais de 190 mil estrelas ensina o Claude a fazer coisas que ele não sabia."
- **Riscos/cuidados:** nomes de menu mudaram em 2026 (Settings → Customize) e podem mudar de novo, então conferir na gravação. A tela do claude.ai exige login: gravar com conta própria, sem histórico pessoal à mostra. Skill de terceiros pode trazer scripts: só instalar de fonte confiável (oficial da Anthropic ou revisada).
- **Fontes:** ver tabela acima (acessado em 2026-11-15).

### P014: Crie sua própria Skill só conversando com o Claude (skill-creator)
- **Formato sugerido:** reels · **Pilar:** tutorial
- **Por que agora:** é o passo seguinte da P013; transforma "o Claude do meu jeito" em algo concreto (ex.: skill com o tom de voz da sua empresa para responder clientes).
- **Dor do público:** "toda vez preciso explicar tudo de novo pro Claude".
- **Ferramenta(s):** Claude + skill `skill-creator` (oficial) · plano: [VERIFICAR] se o skill-creator aparece ativo no Free
- **Passo a passo verificado:** o blog oficial descreve o fluxo (o Claude pergunta sobre o seu processo, monta a pasta e o SKILL.md e empacota). **Os cliques exatos não estão documentados na central de ajuda:** [VERIFICAR] gravando o fluxo real antes do roteiro final.
- **Prompt base sugerido:** `Quero criar uma skill que responda clientes da minha [tipo de negócio] no meu tom: [3 adjetivos]. Me faça as perguntas que precisar.`
- **Resultado "uau":** o Claude devolvendo um arquivo ZIP de skill pronto para enviar.
- **3 ganchos:** "Ensinei o Claude a responder meus clientes do meu jeito, sem programar." · "Você pode criar uma habilidade nova pro Claude só conversando." · "O Claude cria as próprias habilidades. Olha."
- **Riscos/cuidados:** não colocar dados sensíveis de clientes na skill. Fluxo ainda não testado: pauta depende de verificação prática.
- **Fontes:** [skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) · [claude.com/blog/skills](https://claude.com/blog/skills) (2026-11-15)

### P015: 5 Skills oficiais que todo iniciante deveria ligar no Claude
- **Formato sugerido:** carrossel · **Pilar:** descoberta
- **Por que agora:** lista salvável; usa os nomes reais do repositório.
- **Dor do público:** "não sei o que dá pra fazer com isso".
- **Ferramenta(s):** skills oficiais: **xlsx** (planilhas), **pptx** (apresentações), **docx** (Word), **pdf**, **doc-coauthoring** (escrever documentos junto), com **canvas-design** (artes em PNG/PDF) como bônus.
- **Passo a passo verificado:** 1 lâmina por skill + 1 lâmina "como ligar" (Customize > Skills).
- **3 ganchos:** "5 habilidades do Claude que quase ninguém liga." · "Seu Claude faz planilha, slide e PDF. Você só precisa ligar isso." · "Esse repositório com mais de 190 mil estrelas tem 19 habilidades. Essas 5 são pra você."
- **Riscos/cuidados:** descrever cada skill só com o que está no repositório; [VERIFICAR] quais aparecem prontas em Customize > Skills na conta Free.
- **Fontes:** [pasta skills/](https://github.com/anthropics/skills/tree/main/skills) · [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) (2026-11-15)

### P016: A lista com quase 80 mil estrelas de Skills para o Claude (awesome-claude-skills)
- **Formato sugerido:** reels · **Pilar:** descoberta
- **Por que agora:** 79,6 mil estrelas; lista curada da comunidade com skills práticas (ex.: Domain Name Brainstormer, Lead Research Assistant, Internal Comms).
- **Dor do público:** "quero mais skills prontas".
- **Ferramenta(s):** github.com/ComposioHQ/awesome-claude-skills (lista de terceiros; a Composio promove o próprio plugin na página)
- **3 ganchos:** "Esse repositório com quase 80 mil estrelas tem habilidade pronta pro Claude fazer de tudo." · "A lista de skills do Claude mais salva do GitHub." · "Pare de ensinar o Claude do zero."
- **Riscos/cuidados:** **skills de terceiros podem conter scripts: mostrar como ler o SKILL.md antes de instalar.** Parte das descrições veio de leitura parcial da página: [VERIFICAR] cada skill citada no vídeo.
- **Fontes:** [awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) (2026-11-15)

### P017: Conecte o Claude ao seu Google Drive e Gmail (Conectores)
- **Formato sugerido:** reels · **Pilar:** tutorial
- **Por que agora:** o diretório tem mais de 1.100 conectores; "Connectors = Yes" no Free (tabela de preços).
- **Dor do público:** "fico copiando e colando arquivo no chat".
- **Passo a passo verificado:** Customize > Connectors → escolher (ex.: Google Drive) → conectar a conta; no chat: "+" > "Connectors" para ligar/desligar por conversa.
- **3 ganchos:** "O Claude agora lê seu Google Drive. Olha como ligar." · "Pare de copiar e colar arquivo no Claude." · "Mais de mil apps conectam no Claude, inclusive de graça."
- **Riscos/cuidados:** se os conectores do diretório (Drive, Gmail) entram no Free: **[NÃO CONFIRMADO]**, já que a central fala só de conector personalizado (limite de 1 no Free). Privacidade: dar acesso só ao necessário.
- **Fontes:** [claude.com/connectors](https://claude.com/connectors) · [Custom connectors](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp) · [pricing](https://claude.com/pricing) (2026-11-15)

### P018: Projetos com instruções: o Claude que já sabe tudo do seu negócio
- **Formato sugerido:** carrossel · **Pilar:** prompt
- **Por que agora:** grátis até 5 projetos; o "Set project instructions" resolve o "explicar tudo de novo".
- **Passo a passo verificado:** claude.ai/projects → "+ New Project" → "Set project instructions" → colar instruções → "Save instructions" → adicionar arquivos com "+".
- **Prompt base sugerido (instruções do projeto):** `Você é o assistente da [empresa]. Público: [quem]. Tom: [3 adjetivos]. Sempre responda em português do Brasil, em frases curtas. Nunca invente preço ou prazo; se faltar informação, pergunte.`
- **3 ganchos:** "Configure isso uma vez e o Claude nunca mais esquece do seu negócio." · "Você explica tudo pro Claude toda vez? Faz assim." · "5 projetos grátis no Claude, e quase ninguém usa."
- **Fontes:** [Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) · [pricing](https://claude.com/pricing) (2026-11-15)

### P019: Funciona ou Não? Superpowers, o repositório de skills com 318 mil estrelas
- **Formato sugerido:** reels · **Pilar:** bastidor (opinião)
- **Por que agora:** 318 mil estrelas, muito citado nos vídeos do nicho.
- **Fato-chave:** é um framework de skills para **agentes de programação** (instalação pelo Claude Code); o README não menciona o claude.ai. Ou seja: **não é para o nosso público**.
- **3 ganchos:** "Esse repositório tem 318 mil estrelas. Serve pra você?" · "Todo mundo tá postando esse repositório do Claude. Só que tem um detalhe." · "318 mil estrelas e você não vai conseguir usar. Explico."
- **Riscos/cuidados:** tom informativo, sem desmerecer o projeto; terminar apontando a alternativa certa para iniciante (P013).
- **Fontes:** [obra/superpowers](https://github.com/obra/superpowers) (2026-11-15)

## Ordem sugerida para o roteirista
1. **P013** (gancho mais forte, base de toda a série) → 2. P018 (fácil, grátis) → 3. P015 (carrossel salvável) → 4. P017 → 5. P014 (depende de teste prático) → P016 e P019.

## Notas para produtor-video
- Telas do claude.ai exigem login: a captura automática não consegue abrir. Opções: (a) o dono grava a própria tela e o kit monta o resto; (b) cartões de passo no visual da IA Works com o caminho de menu exato ("Customize › Skills › + › Upload a skill"), **sem imitar a interface do Claude**. O GitHub (anthropics/skills) pode ser capturado normalmente.
