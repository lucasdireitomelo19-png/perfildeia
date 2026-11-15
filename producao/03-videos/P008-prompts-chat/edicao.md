---
id: P008
formato: reels
status: produzido
fonte: producao/02-roteiros/P008-prompts-chat.md
---
# P008: plano de edição no CapCut

**Duração final: cerca de 41 s** (teto de 45 s). Os tempos abaixo são o alvo. Na edição, o que manda é o áudio gerado: encaixe cada corte no trecho de fala correspondente.

## Configuração do projeto
- **Formato:** 9:16, 1080×1920, 30 fps. Exporte em 1080p.
- **Zonas seguras:** ~250 px livres em cima (y 0–250) e embaixo (y 1670–1920), sem nenhum texto. Evite também os ~140 px da direita na metade de baixo, onde ficam os botões do Instagram.
- **Camadas (de baixo para cima):**
  1. `fundo-janela.png` (nesta pasta) na faixa principal, durante todo o vídeo, exceto no CTA e no final. É o fundo off-white `#F7F6F2` com a janela branca de cantos arredondados (x 60–1020, y 470–1450; barra de pontinhos no topo da janela até y 540).
  2. A gravação, em sobreposição, recortada para caber **dentro da janela** (área útil x 60–1020, y 540–1450, ou seja, 960×910 px). Aplique uma máscara de retângulo com cantos arredondados (~28 px) nos cantos de baixo, para acompanhar a janela.
  3. O **texto na tela**, na faixa de cima, entre y 280 e y 450 (acima da janela).
  4. As **legendas automáticas**, entre y 1480 e y 1640 (abaixo da janela).
- **Zoom no clique:** em cada corte, keyframe de escala na própria gravação, centrado no ponto do clique ou da digitação (de 100% para 160–220%, em 0,3–0,4 s, com curva suave). A janela fica parada e só o conteúdo dentro dela dá zoom.

## Estilo
- **Texto na tela:** Space Grotesk Bold, grafite `#14161A`, 72–96 px (no gancho, 150–180 px). Para destacar uma palavra, use um retângulo verde-limão `#D4F542` **atrás** dela, como marca-texto (o texto continua grafite). Nunca use verde como cor de letra.
- **Prompts digitados na tela** (`Responda em português do Brasil.`): JetBrains Mono 52–60 px, grafite, sobre uma caixa `#EEF0F5` com cantos arredondados.
- **Legendas automáticas:** gere a partir do áudio e revise palavra por palavra. Fonte Inter Bold (ou Space Grotesk), 56–64 px, grafite `#14161A`, no máximo 2 linhas e 4 a 5 palavras por bloco. A **palavra-chave de cada frase vai em azul `#2F3BFF`** (lista abaixo). Se a legenda cair sobre algo escuro, use texto branco numa pílula azul `#2F3BFF`.
- **Revisão de grafia das legendas:** a fala usa grafia fonética, mas a legenda tem que sair com o nome certo: "GitHub", "prompts.chat", "Browse Prompts", "ChatGPT", "Claude", "Gemini", "PROMPT", "IA Works".
- **Palavras-chave em azul na legenda:** estrelas · de graça · Browse Prompts · aumento de preço · ChatGPT · colchetes · português do Brasil · português · PROMPT · IA que funciona.
- **Música:** sem música, ou uma faixa instrumental (sem letra) da biblioteca livre de direitos do CapCut, a **cerca de -20 dB** em relação à voz. A voz fica em 0 dB e é sempre a protagonista.
- **SFX (opcional):** um "clique" ou "whoosh" bem baixo nos zooms. No máximo 4 no vídeo todo.
- **Transições:** quase tudo em **corte seco**. Só onde a tabela indica, um zoom-in rápido de 0,2 s ou um deslize para cima.

## Corte a corte

| # | Tempo | Áudio (trecho) | Imagem | Zoom/efeito | Texto na tela | Transição |
|---|---|---|---|---|---|---|
| 1 | 0,0–2,0 | C1: "Esse repositório do GitHub..." | T1: cabeçalho do repositório `f/prompts.chat`, **já no frame 0** com zoom no contador de estrelas | Começa a 220%, centrado no contador de estrelas, com um *punch-in* leve até 240% nos 2 s. Opcional: um brilho ou contorno azul `#2F3BFF` em volta do contador | **"+170 mil estrelas"** em 160–180 px, centralizado sobre a janela, com "estrelas" em marca-texto verde. Aparece **no frame 0**, sem animação de entrada | corte seco |
| 2 | 2,0–4,5 | C1: "...com mais de cento e setenta mil estrelas..." | T1: zoom out até o cabeçalho completo (nome do repo + contador) | Escala de 240% até 130% em 0,5 s, depois parada | "+170 mil estrelas" encolhe para 80 px e sobe para a faixa de cima | zoom out (é o próprio keyframe) |
| 3 | 4,5–7,0 | C1: "...tem prompt pronto pra qualquer coisa!" | T1: rolagem até o começo do README | 130%, rolagem natural | "Prompt pronto pra qualquer coisa" (88 px), com "qualquer coisa" em marca-texto | corte seco |
| 4 | 7,0–9,0 | C2: "São quase três mil comandos prontos pra IA..." | T2: listagem prompts.chat/prompts rolando | Velocidade 2x na rolagem, escala 120% | "Quase 3 mil prompts · ==grátis==" (marca-texto em "grátis") | deslize para cima, 0,2 s |
| 5 | 9,0–11,0 | C2: "...de graça." | T2: frame do total de prompts ("2958 found" [VERIFICAR V2]) | Zoom de 120% a 200% no total, em 0,3 s | mantém "Quase 3 mil prompts · grátis" | corte seco |
| 6 | 11,0–13,5 | C3: "Abre o prompts ponto chat, e clica em Browse Prompts." | T3: home do prompts.chat → clique em "Browse Prompts" | Zoom de 110% a 180% no botão "Browse Prompts", um pouco antes do clique | **"1. Abre prompts.chat"** | corte seco |
| 7 | 13,5–15,5 | C3: (continuação, ou início de "Esse aqui ajuda...") | T4: campo Search com `price increase` sendo digitado (ou o painel Filters, conforme V5) | Zoom de 180% no campo Search | mantém "1. Abre prompts.chat" | corte seco |
| 8 | 15,5–18,0 | C3: "...ajuda a avisar o cliente do aumento de preço." | T4: página do prompt "Act as a Customer Price Increase Advisor for Small Businesses", com o título visível | Zoom de 150% no título | **"Aumento de preço sem perder cliente"** ("sem perder cliente" em marca-texto) | corte seco |
| 9 | 18,0–19,5 | C4: "Copia e cola..." | T5: clique no botão de copiar, se existir, ou a seleção do texto [VERIFICAR V3/V4] | Zoom de 200% no botão ou no começo da seleção | **"2. Copia e cola na sua IA"** | corte seco |
| 10 | 19,5–21,0 | C4: "...no ChatGPT, Claude, ou Gemini." | T6: Ctrl+V no ChatGPT, com o prompt aparecendo na caixa | Zoom de 150% na caixa de mensagem | mantém "2. Copia e cola na sua IA" | corte seco |
| 11 | 21,0–23,5 | C5: "Tá em inglês? Troca os colchetes..." | T7: primeiro campo entre colchetes [VERIFICAR V6] | Zoom de 220% no campo. Opcional: um retângulo verde-limão semitransparente piscando 1x sobre o campo | **"3. Troca os ==[colchetes]=="** | corte seco |
| 12 | 23,5–26,0 | C5: "...pelos dados do seu negócio..." | T7: campos sendo trocados pelos dados fictícios (2 primeiros em tempo real, o resto a 3x) | Zoom acompanhando o cursor, 200% | mantém "3. Troca os [colchetes]" | corte seco |
| 13 | 26,0–29,0 | C5: "...e escreve no fim: responda em português do Brasil." | T8: digitação de "Responda em português do Brasil." e o Enter | Zoom de 220% no fim da caixa de mensagem | Caixa mono: `Responda em português do Brasil.` (JetBrains Mono, fundo `#EEF0F5`) | corte seco |
| 14 | 29,0–32,0 | C6: "Pronto. O e-mail pro cliente sai em português." | T9: resposta gerada (acelerada 4–8x) e parada no e-mail em português | Escala 140%, rolagem até o e-mail e parada de 1 s | **"==Pronto==."** (com o ponto quadrado azul no lugar do ponto final) | corte seco |
| 15 | 32,0–35,0 | C7: "Comenta prompt, que eu te mando o link..." | `cta.png` (tela cheia, sem `fundo-janela.png`) | Pop-in de escala na palavra PROMPT (90% → 100%, 0,2 s) | Já está na imagem: "Comenta **PROMPT**" + "Fonte: prompts.chat" | zoom-in rápido, 0,2 s |
| 16 | 35,0–38,0 | C7: "...e o truque pra usar em português." | `cta.png` | Leve *push-in* contínuo (100% → 104%) | Legenda normal embaixo. A tela não muda | — |
| 17 | 38,0–40,5 | C8: "Testado e aprovado. IA Works: IA que funciona." | Fundo off-white `#F7F6F2` com `marca/logo/iaworks-principal.png` centralizado (largura ~760 px) | Fade-in do logo em 0,3 s | sem texto extra (o logo é o texto). Legenda: "IA que funciona" em azul | corte seco |
| 18 | 40,5–41,0 | (silêncio, ou o fim da fala) | Vinheta: `marca/logo/iaworks-icone-perfil.png` em **tela cheia** (o PNG é 1080×1080 com fundo azul `#2F3BFF`, "IA" em branco e o ponto quadrado verde-limão; escale para cobrir 1080×1920 ou ponha um sólido `#2F3BFF` atrás) | Por 0,25 s, o "IA" aparece sem o ponto: cubra o ponto com um quadrado sólido `#2F3BFF` (no PNG original, o ponto ocupa x 709–758 e y 641–690). Depois, retire o quadrado com um pop de escala (o ponto vai de 0% a 100% em 0,1 s) e segure 0,15 s. Total de 0,5 s | — | fim |

### Notas da edição
- **Gancho (0–1,5 s):** o contador de estrelas com zoom e o "+170 mil estrelas" grande têm que estar visíveis **no primeiro frame**, sem fade de entrada. Essa é a "prova" que segura o dedo, a pedido do dono e conforme o roteiro. O resultado prático (o e-mail em português) aparece no corte 14. Se quiser testar uma variação, ponha um flash de 0,4 s do e-mail pronto antes do contador, mas a versão principal é a do contador.
- **Ritmo:** nenhum plano passa de 3 s sem mudança de zoom ou de imagem. Se o áudio de uma cena ficar mais longo, divida o plano em dois (ex.: zoom em outro ponto da mesma gravação).
- **Logo e site de terceiros:** o GitHub e o prompts.chat aparecem só como gravação de tela, dentro da janela. Não use o logo deles no texto na tela nem na capa, e não misture com a identidade da IA Works.
- **Privacidade:** antes de exportar, confira frame a frame se não aparecem nome ou foto da conta do ChatGPT, histórico de conversas ou dados reais. Se aparecer, desfoque ou recorte.

### Se passar de 45 s
Se a soma dos áudios C1–C8 passar de 45 s, aplique o corte sugerido pelo roteirista:
1. Regrave o bloco 3 sem a frase "Esse aqui ajuda a avisar o cliente do aumento de preço." (ver `narracao.txt`).
2. Os cortes 7 e 8 passam a ocupar juntos ~2 s (Search com zoom de 1 s e título do prompt com zoom de 1 s), **sem fala**, e o texto na tela "Aumento de preço sem perder cliente" fica nos dois. Ele é a única fonte da informação, então deixe-o com pelo menos 1,5 s na tela.
3. Desloque todos os cortes seguintes ~4 s para trás. A duração final fica em ~37 s.

## Exportação
- 1080×1920, 30 fps, taxa de bits "recomendada" ou alta, sem marca d'água.
- Nome do arquivo: `P008-prompts-chat-final.mp4`.
- Assista uma vez no celular, com som e sem som, para conferir se as legendas e os textos estão fora das zonas de UI do Instagram.
