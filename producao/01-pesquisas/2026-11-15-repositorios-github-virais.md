---
tipo: pesquisa
data: 2026-11-15
modo: radar
pautas: [P004, P005, P006, P007, P008, P009, P010, P011, P012]
---
# Pesquisa: o formato viral "esse repositório do GitHub vai te ajudar a fazer X"

## Resumo em 3 linhas
O formato "repositório do GitHub" funciona por três motivos: parece um segredo, é grátis e é a alternativa a um app pago. O problema é que a maioria dos repositórios mostrados nesses vídeos exige terminal, Python ou Docker, coisa que a Camila nunca vai conseguir usar. Nosso diferencial: **só mostramos repositório que tem instalador de 1 clique** (aba *Releases*), com o resultado funcionando na tela, e ensinamos a checar se o repositório é confiável.

## Leitura do formato (para o roteirista)
- **Por que viraliza:** gatilho de segredo ("ninguém tá falando"), de economia ("grátis, substitui o app de R$ 50/mês") e de lista (salvamento). Encaixa no pilar *Descoberta* e no gancho nº 3 ("Essa IA é grátis e quase ninguém conhece").
- **O que os concorrentes erram:** mostram a página do GitHub e não o programa funcionando; recomendam repositórios para desenvolvedores (ex.: geradores de vídeo como MoneyPrinterTurbo e OpenReels são instalados por linha de comando, ver [gittrend.io](https://gittrend.io/trending/ai-video-generation) e [OpenReels](https://github.com/tsensei/OpenReels), acessados em 2026-11-15); não falam de segurança.
- **Nossa regra para esse formato (proposta):** o repositório precisa ter (1) instalador `.exe`/`.dmg` nos *Releases*, (2) uso sem conta nem terminal, (3) resultado visual em até 10 s de vídeo.
- **Limite desta pesquisa:** não encontrei dado público que meça a viralização desse formato no Brasil (busca feita em 2026-11-15). A leitura acima é qualitativa, com base no que aparece nas buscas e nas listas de tendência do GitHub. Vale validar com os números dos nossos próprios posts.
- **Estrelas são um bom gancho numérico** ("52 mil pessoas salvaram esse projeto"), mas mudam todo dia: use sempre "mais de X mil" e confira na hora de gravar.

## Pautas

### P004: Como baixar um programa do GitHub sem saber programar
- **Formato sugerido:** carrossel · **Pilar:** tutorial
- **Por que agora:** é a pauta que destrava a série inteira. Quem vê vídeo de repositório e cai na página do GitHub não sabe onde clicar.
- **Dor do público:** "entrei no link do GitHub e só vi um monte de código, não sei baixar".
- **Ferramenta(s):** GitHub (site) · grátis, não precisa de conta para baixar · interface em inglês · https://github.com
- **Passo a passo verificado:**
  1. No repositório, procure na coluna da direita a seção **Releases** e clique na versão marcada como **Latest**.
  2. Role até **Assets** (às vezes está recolhido: clique para abrir).
  3. Windows: baixe o `.exe` ou `.msi`. Mac: baixe o `.dmg` (Apple Silicon = `aarch64`/`arm64`; Intel = `x64`).
  4. **Não baixe** "Source code (zip)": é o código, não o programa.
  5. Se não houver Releases com instalador, o projeto é para desenvolvedores: pule.
- **Resultado "uau" para o gancho:** a página "assustadora" do GitHub virando um botão de download em 3 cliques.
- **3 ganchos possíveis:** "Viu um vídeo de repositório do GitHub e travou? Clica aqui." · "O botão de download do GitHub tá escondido. Olha onde." · "Você não precisa saber programar pra usar o GitHub."
- **Riscos/cuidados:** Windows e Mac podem avisar que o app "não é de desenvolvedor identificado". Explicar que isso é comum em open source, mas que só se instala app de projeto confiável (ver P012). Não ensinar comandos de terminal para contornar o bloqueio.
- **Fontes:** [How-To Geek: How to download files from GitHub](https://www.howtogeek.com/827348/how-to-download-files-from-github/) · [Zapier: How to download from GitHub](https://zapier.com/blog/how-to-download-from-github/) (acessados em 2026-11-15)

### P005: Upscayl, o programa grátis que deixa foto pixelada nítida
- **Formato sugerido:** reels · **Pilar:** tutorial (com cara de descoberta)
- **Por que agora:** projeto com cerca de 52,7 mil estrelas; o antes/depois é o melhor "uau" visual da lista.
- **Dor do público:** "a foto do meu produto ficou toda borrada" / "o logo que o cliente mandou é minúsculo".
- **Ferramenta(s):** Upscayl · grátis e open source (licença AGPL-3.0) · interface tem tradução para português (variante não especificada) · Windows 10+, macOS 12+, Linux · https://github.com/upscayl/upscayl
- **Passo a passo verificado:**
  1. Baixar o instalador na página de Releases (versão mais recente: v2.15.0, publicada em 25/12/2024).
  2. Abrir o app e selecionar a imagem.
  3. Escolher o modelo de ampliação e a pasta de saída.
  4. Clicar em *Upscayl* e comparar antes/depois. [VERIFICAR nomes exatos dos botões na gravação]
- **Resultado "uau" para o gancho:** foto 300 px virando foto nítida, com divisória arrastável de antes/depois.
- **3 ganchos possíveis:** "Essa foto tava assim. Agora tá assim. De graça." · "Pare de pagar app pra melhorar foto." · "Esse projeto do GitHub tem mais de 50 mil estrelas e faz isso aqui."
- **Riscos/cuidados:** **exige placa de vídeo compatível com Vulkan**; o README diz que muitas placas integradas (iGPU) não funcionam e que não roda só na CPU. Avisar na legenda. Última versão é de dez/2024: projeto estável, mas sem atualização recente. Não ampliar foto de terceiros para uso comercial.
- **Fontes:** [GitHub upscayl/upscayl](https://github.com/upscayl/upscayl) · [Releases v2.15.0](https://github.com/upscayl/upscayl/releases/tag/v2.15.0) (acessados em 2026-11-15)

### P006: Handy, digite falando em qualquer programa, sem internet
- **Formato sugerido:** reels · **Pilar:** tutorial
- **Por que agora:** cerca de 38,9 mil estrelas; resolve a dor nº 1 da persona (falta de tempo) e funciona em qualquer app (e-mail, WhatsApp Web, Word).
- **Dor do público:** "eu falo muito mais rápido do que digito".
- **Ferramenta(s):** Handy · grátis e open source (MIT), sem plano pago · Windows, macOS, Linux · português: **[NÃO CONFIRMADO]** no README (usa Whisper, que é multilíngue; o modelo Parakeet V3 tem detecção automática de idioma). Testar em PT antes de gravar · https://github.com/cjpais/Handy · site: handy.computer
- **Passo a passo verificado:**
  1. Baixar nos Releases ou em handy.computer.
  2. Dar permissão de microfone e de acessibilidade.
  3. Escolher o modelo (Whisper Small/Medium/Turbo/Large ou Parakeet V3).
  4. Clicar em qualquer campo de texto, segurar o atalho, falar e soltar: o texto é colado sozinho.
- **Resultado "uau" para o gancho:** um e-mail inteiro aparecendo no Gmail sem tocar no teclado.
- **3 ganchos possíveis:** "Eu não digito mais e-mail. Olha." · "Esse app grátis transforma sua voz em texto em qualquer lugar do computador." · "Sem internet, sem assinatura, sem enviar sua voz pra ninguém."
- **Riscos/cuidados:** processamento é local (ponto forte de privacidade). Modelos grandes podem ficar lentos em PC fraco. Há recurso experimental de pós-processamento que pode usar IA externa: não ativar no tutorial.
- **Fontes:** [GitHub cjpais/Handy](https://github.com/cjpais/Handy) (acessado em 2026-11-15)

### P007: Buzz, transcreva reunião, áudio ou vídeo do YouTube de graça e offline
- **Formato sugerido:** reels · **Pilar:** tutorial
- **Por que agora:** cerca de 22,8 mil estrelas; liga direto com a ideia nº 5 do banco ("reunião gravada em ata") e com legenda de vídeo (nº 24).
- **Dor do público:** "gravei a reunião e não tenho tempo de ouvir de novo".
- **Ferramenta(s):** Buzz · open source (MIT); preço não consta na página · macOS (só Apple Silicon; último com suporte a Intel é o 1.4.5), Windows, Linux · português: interface **[NÃO CONFIRMADO]**; transcrição usa Whisper (multilíngue), testar em PT · https://github.com/chidiwilliams/buzz
- **Passo a passo verificado:**
  1. Baixar o instalador (.dmg / Windows) pelo link do README.
  2. Importar arquivo de áudio/vídeo ou colar link do YouTube.
  3. Escolher o modelo e iniciar a transcrição.
  4. Exportar em TXT (para virar ata no ChatGPT) ou SRT/VTT (legenda).
- **Prompt base sugerido (etapa 2, no ChatGPT/Claude):** "Transforme a transcrição abaixo em uma ata com: decisões tomadas, tarefas (responsável e prazo) e pendências. Use tópicos curtos."
- **Resultado "uau" para o gancho:** 1 hora de reunião virando ata de meia página.
- **3 ganchos possíveis:** "Nunca mais faço ata de reunião." · "Esse programa grátis escreve tudo o que foi falado, sem internet." · "Cola o link do YouTube e ganha o texto do vídeo inteiro."
- **Riscos/cuidados:** instalador do Windows não é assinado (vai aparecer aviso). Gravar reunião exige consentimento dos participantes (LGPD). Transcrever vídeo de terceiros: uso pessoal/estudo.
- **Fontes:** [GitHub chidiwilliams/buzz](https://github.com/chidiwilliams/buzz) (acessado em 2026-11-15)

### P008: prompts.chat, a maior biblioteca de prompts grátis do mundo
- **Formato sugerido:** carrossel · **Pilar:** prompt
- **Por que agora:** cerca de 177 mil estrelas (o banner do README ainda diz "143k+"); é um dos repositórios mais famosos do GitHub e usa só o navegador.
- **Dor do público:** "nunca sei o que pedir pro ChatGPT".
- **Ferramenta(s):** prompts.chat (antigo Awesome ChatGPT Prompts) · grátis; prompts em domínio público (CC0) · prompts em português: **[NÃO CONFIRMADO]**, a maioria é em inglês · https://prompts.chat · https://github.com/f/prompts.chat
- **Passo a passo verificado:**
  1. Abrir prompts.chat no navegador.
  2. Buscar um papel (ex.: "Act as a Career Counselor").
  3. Copiar o prompt e colar no ChatGPT/Claude/Gemini.
  4. Acrescentar no fim: "Responda em português do Brasil." [VERIFICAR fluxo de busca/cópia no site na hora de gravar]
- **Prompt base sugerido:** escolher 3 prompts da biblioteca e traduzir/adaptar para a persona (currículo, atendimento, posts), sempre citando a fonte.
- **Resultado "uau" para o gancho:** "177 mil pessoas salvaram essa lista de prompts."
- **3 ganchos possíveis:** "A lista de prompts mais salva do GitHub é grátis." · "Copiei 3 prompts dessa biblioteca e minha IA ficou outra." · "Você tá escrevendo prompt do zero à toa."
- **Riscos/cuidados:** como é CC0, pode adaptar, mas cite a fonte por transparência. Prompts em inglês: mostrar o truque de pedir resposta em PT.
- **Fontes:** [GitHub f/prompts.chat](https://github.com/f/prompts.chat) (acessado em 2026-11-15)

### P009: Stirling-PDF, mais de 50 ferramentas de PDF no seu computador
- **Formato sugerido:** reels · **Pilar:** descoberta
- **Por que agora:** cerca de 96,7 mil estrelas; substitui sites de PDF onde a pessoa sobe documento sensível (contrato, RG) para servidor desconhecido.
- **Dor do público:** "toda vez que preciso juntar PDF caio num site cheio de anúncio e limite".
- **Ferramenta(s):** Stirling-PDF · open-core: versão aberta + planos pagos para servidor/empresa (preços não constam) · app desktop para Windows, macOS e Linux · interface em mais de 40 idiomas (português **[NÃO CONFIRMADO]**) · https://github.com/Stirling-Tools/Stirling-PDF · downloads: https://stirlingpdf.com/downloads
- **Passo a passo verificado:**
  1. Baixar o app desktop na página de downloads.
  2. Abrir e escolher a ferramenta (mesclar, dividir, comprimir, OCR, assinar, converter).
  3. Arrastar o PDF e salvar o resultado.
  4. No Windows, se abrir em branco, a documentação manda instalar o Microsoft Edge WebView2 Runtime.
- **Resultado "uau" para o gancho:** PDF escaneado virando PDF pesquisável (OCR) offline.
- **3 ganchos possíveis:** "Para de subir seu RG em site de PDF." · "Juntar, cortar, comprimir e assinar PDF: tudo grátis, no seu PC." · "Esse projeto tem quase 100 mil estrelas no GitHub e você não conhece."
- **Riscos/cuidados:** a página não deixa explícito se o desktop é 100% grátis: **[VERIFICAR]** ao instalar. A IA aqui é secundária (OCR); posicionar como "ferramenta que todo mundo precisa", não como "IA".
- **Fontes:** [GitHub Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) · [Stirling PDF: Downloads](https://stirlingpdf.com/downloads) · [Docs: Windows Installation](https://docs.stirlingpdf.com/Installation/Windows%20Installation) (acessados em 2026-11-15)

### P010: O curso grátis de IA da Microsoft que está no GitHub, em português
- **Formato sugerido:** carrossel · **Pilar:** descoberta
- **Por que agora:** cerca de 123,6 mil estrelas; 21 lições com tradução pt-BR.
- **Dor do público:** "queria aprender IA do zero mas curso é caro".
- **Ferramenta(s):** Generative AI for Beginners (Microsoft) · conteúdo aberto (licença MIT) · pt-BR: sim, tradução automática (o próprio arquivo avisa que pode ter erros) · https://github.com/microsoft/generative-ai-for-beginners/blob/main/translations/pt-BR/README.md
- **Passo a passo verificado:**
  1. Abrir o link da tradução pt-BR.
  2. Ler as lições direto no navegador (não precisa baixar nada para ler).
  3. As partes práticas usam código (Python/TypeScript) e acesso a Azure OpenAI, Microsoft Foundry ou OpenAI API.
- **Resultado "uau" para o gancho:** "A Microsoft deixou um curso inteiro de IA de graça no GitHub."
- **3 ganchos possíveis:** "Curso de IA da Microsoft, grátis e em português." · "21 aulas de IA que você pode ler hoje." · "Salva esse link antes de pagar curso de IA."
- **Riscos/cuidados:** **o curso é voltado para quem quer programar**; ser honesto: "a parte teórica serve pra todo mundo, a prática é pra quem quer ir além". Conflita parcialmente com o curso da IA Works: não posicionar como substituto. O README avisa que o GitHub Models será descontinuado no fim de jul/2026 (algumas lições podem estar desatualizadas).
- **Fontes:** [GitHub microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) · [README pt-BR](https://github.com/microsoft/generative-ai-for-beginners/blob/main/translations/pt-BR/README.md) (acessados em 2026-11-15)

### P011: Funciona ou Não? OpenClaw, o repositório mais famoso do ano
- **Formato sugerido:** reels · **Pilar:** bastidor (opinião)
- **Por que agora:** cerca de 394 mil estrelas, o projeto de IA mais comentado de 2026; muito vídeo mostra "seu assistente de IA no WhatsApp", sem falar de risco.
- **Dor do público:** "vi um vídeo de um assistente de IA que faz tudo no meu computador, vale instalar?"
- **Ferramenta(s):** OpenClaw · grátis e open source (MIT), sem plano pago · conecta com WhatsApp, Telegram, Discord e outros · **instalação por terminal** (comando `curl ... | bash` ou PowerShell, ou npm) · https://github.com/openclaw/openclaw
- **Passo a passo verificado:** não ensinar a instalar. Mostrar na tela: a página do projeto, o comando de terminal e os avisos de segurança do próprio README.
- **Resultado "uau" para o gancho:** contraste "395 mil estrelas" × "e eu não recomendo para iniciante".
- **3 ganchos possíveis:** "O repositório de IA mais famoso de 2026. Funciona ou não?" · "Todo mundo tá instalando isso. Eu não instalaria. Explico." · "Antes de dar acesso ao seu computador pra uma IA, veja isso."
- **Riscos/cuidados (fatos para o roteiro):**
  - O próprio README manda tratar mensagens recebidas como entrada não confiável e diz que as ferramentas rodam direto no computador, a menos que se configure isolamento (sandbox).
  - Kaspersky e TechRadar publicaram alertas sobre vulnerabilidades e "skills" maliciosas de terceiros.
  - Tom: informativo, sem alarmismo e sem atacar o projeto. Fecho sugerido: "Funciona, mas não é pra iniciante. Pra você, existe [alternativa mais segura]" [VERIFICAR com o roteirista qual alternativa a IA Works recomenda].
- **Fontes:** [GitHub openclaw/openclaw](https://github.com/openclaw/openclaw) · [Kaspersky: OpenClaw vulnerabilities](https://www.kaspersky.com/blog/openclaw-vulnerabilities-exposed/55263/) · [TechRadar: OpenClaw security risks](https://www.techradar.com/pro/here-are-the-openclaw-security-risks-you-should-know-about) (acessados em 2026-11-15)

### P012: 5 sinais de que um repositório do GitHub é confiável antes de baixar
- **Formato sugerido:** carrossel · **Pilar:** tutorial
- **Por que agora:** quanto mais o formato "repositório" cresce, mais aparece projeto falso ou abandonado. Gera autoridade e salvamento, e ninguém no nicho fala disso.
- **Dor do público:** "tenho medo de baixar vírus".
- **Ferramenta(s):** GitHub (só olhar a página) · grátis
- **Passo a passo verificado (checklist):**
  1. **Estrelas:** milhares de estrelas indicam muita gente usando (ex.: Upscayl ~52 mil).
  2. **Releases recentes:** a versão *Latest* tem data; projeto sem atualização há anos pede cuidado.
  3. **Instalador oficial:** baixe só pelos Releases ou pelo site citado no README, nunca de link de comentário.
  4. **Nome do dono:** confira se é o repositório original (há muitas cópias/forks com o mesmo nome; as buscas desta pesquisa trouxeram várias, ex.: espelhos do Upscayl e do Handy).
  5. **README e licença:** projeto sério explica o que faz, requisitos e licença (MIT, AGPL etc.).
- **Resultado "uau" para o gancho:** mostrar lado a lado o repositório original e uma cópia com o mesmo nome.
- **3 ganchos possíveis:** "Antes de baixar qualquer coisa do GitHub, olha esses 5 pontos." · "Esse repositório é falso. Como eu sei?" · "Estrela no GitHub é igual avaliação de loja: aprende a ler."
- **Riscos/cuidados:** não mostrar repositório malicioso real com link clicável; usar print com o link desfocado. Estrela não é garantia de segurança: deixar isso claro.
- **Fontes:** [How-To Geek](https://www.howtogeek.com/827348/how-to-download-files-from-github/) · [Upscayl](https://github.com/upscayl/upscayl) · [Handy](https://github.com/cjpais/Handy) (acessados em 2026-11-15)

## Descartadas (e por quê)
- **Pinokio** (instalador de 1 clique de apps de IA): os apps em destaque pedem GPU NVIDIA com 6 a 12 GB de VRAM e o README avisa que scripts podem executar qualquer comando. Falha o critério "iniciante". Pode virar um *Funciona ou Não?* no futuro. Fonte: [GitHub pinokiocomputer/pinokio](https://github.com/pinokiocomputer/pinokio), [pinokio.co](https://pinokio.co/) (2026-11-15).
- **Geradores automáticos de Reels (MoneyPrinterTurbo, OpenReels, ViralMint etc.):** instalação por linha de comando; além disso, ensinar "fábrica de vídeo automática" contradiz o "testado e aprovado" da marca.
- **Open WebUI / Dify:** famosos, mas exigem Docker ou servidor.

## Notas para roteirista
- Sugestão de embalagem: série **"Repositório que Funciona"** (spin-off de *Funciona ou Não?*), sempre com o selo "sem terminal" na tela.
- Ordem recomendada: P004 (destrava a série) → P005 (melhor "uau") → P006 → P012.
- CTA natural: "Comenta GITHUB que eu te mando o link no Direct" (link do GitHub não é clicável na legenda do Instagram).
- Números de estrelas: arredondar para baixo ("mais de 50 mil") e conferir na gravação.
