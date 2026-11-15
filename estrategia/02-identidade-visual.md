# 02 — Identidade Visual (perfil dark, visual claro)

> "Dark" aqui significa **sem rosto**, não fundo preto. O visual é claro e leve.

## Conceito: "Caderno de tecnologia"
Fundo claro, muito respiro, prints de tela organizados como num caderno bem feito e
**duas cores de destaque**. Passa a ideia de que "IA é fácil e organizada". Isso se
destaca num nicho em que quase todo mundo usa preto e roxo neon.

## Paleta de cores

| Papel | Cor | HEX | Uso |
|---|---|---|---|
| Fundo principal | Off-white | `#F7F6F2` | Fundo de quase tudo |
| Cards / janelas | Branco | `#FFFFFF` | Prints, caixas de prompt (com sombra suave) |
| Texto | Grafite | `#14161A` | Títulos e textos |
| Destaque 1 (ação) | Azul elétrico | `#2F3BFF` | Setas, palavras-chave, botões, logo, cursor `▌` |
| Destaque 2 (marca-texto) | Verde-limão | `#D4F542` | Faixa atrás de palavras do título, como marca-texto |
| Apoio | Cinza | `#6B7079` | Textos secundários |
| Alerta (raro) | Coral | `#FF5A4E` | "Erro", "antes", "não faça" |

**Regra:** cerca de 70% off-white/branco, 20% texto grafite, 7% azul e 3% verde.
⚠️ **Nunca escreva texto em verde-limão sobre fundo claro**, porque não dá para ler.
O verde serve só como marca-texto, atrás de texto grafite.

> Variações possíveis (escolha UMA e mantenha por pelo menos 6 meses):
> azul `#2F3BFF` + verde `#D4F542` (recomendada) · laranja `#FF6B2C` + pêssego `#FFE1CC` ·
> violeta `#6C4DFF` + lilás `#E6E0FF`

## Tipografia (grátis no Google Fonts / Canva)
- **Títulos:** `Space Grotesk` Bold
- **Textos:** `Inter` Regular/Medium
- **Prompts:** `JetBrains Mono` (assinatura dos prompts)
- **Anotações à mão (opcional):** `Caveat` em azul, para setas e "clica aqui"

Tamanho mínimo no carrossel: 36 px (em 1080×1350).

## Elementos gráficos
- **Janela de app:** card branco, cantos arredondados (24 px), sombra suave e 3 bolinhas no topo. Usar para todo print.
- **Caixa de prompt:** card cinza bem claro `#EEF0F5` com fonte mono e um ícone de "copiar" em azul.
- **Marca-texto verde** atrás de 1–2 palavras do título.
- **Cursor `▌` azul** depois dos títulos, a assinatura visual da marca.
- **Setas e círculos desenhados à mão** em azul.
- **Etiquetas** `GRÁTIS` · `INICIANTE` · `2 MIN`: pílulas com contorno azul.

## Logo e foto de perfil
- **Wordmark:** `IA works▌`, com "IA" em azul `#2F3BFF` (Space Grotesk Bold), "works" em grafite e cursor azul piscando.
- **Ícone alternativo:** uma engrenagem ou um ✓ minimalista dentro do "o" de works, que reforça o "funciona".
- **Foto de perfil:** fundo azul `#2F3BFF` com "IA▌" em branco, grande e centralizado.
  Num feed claro, a foto em azul sólido é o que chama atenção.

Prompt para gerar variações (Ideogram / ChatGPT / Midjourney):
```
Minimal wordmark logo "IA works" on off-white background, geometric
sans-serif, "IA" bold in electric blue #2F3BFF, "works" lowercase in dark graphite #14161A
followed by a blue terminal cursor block, flat vector, clean, no gradients, no robots
```

## Padrões de formato

| Formato | Tamanho | Observações |
|---|---|---|
| Carrossel / post | 1080×1350 (4:5) | Ocupa mais tela |
| Reels / Stories | 1080×1920 (9:16) | Deixe ~250 px livres em cima e embaixo |
| Capa do Reels | 1080×1920, mas o essencial no centro 4:5 | O grid corta para 4:5 |

## Templates (crie no Canva e reutilize)
1. **Capa Tutorial:** "Como fazer ___ com IA▌", com marca-texto verde, print inclinado em janela branca e etiqueta `GRÁTIS`.
2. **Capa Prompt:** caixa de prompt grande + "Copie esse prompt".
3. **Capa Antes/Depois:** tela dividida, `SEM IA: 2h` em coral e `COM IA: 5 min` em azul.
4. **Capa Lista:** "5 IAs que ___" com números grandes em azul.
5. **Capa Destaque:** fundo azul sólido com texto branco, para usar 1 a cada 6 posts e quebrar o ritmo do feed.

## Grid do feed
O feed fica quase todo claro e, a cada ~6 posts, entra uma **capa azul sólida**, que dá
ritmo e reconhecimento. Os 3 posts fixados:
1. "O que você vai aprender aqui"
2. Seu melhor tutorial
3. Material grátis / curso

## Estilo de vídeo (sem rosto)
- **Base:** gravação de tela com zoom nos cliques (CapCut, Screen Studio, ScreenPal).
  Use o **modo claro** nas ferramentas gravadas para combinar com a marca.
- **Moldura:** a gravação vai dentro da janela branca, sobre fundo off-white.
- **Legendas:** grafite com palavra-chave em azul, ou texto branco numa pílula azul.
- **B-roll:** mãos no teclado/celular em ambiente claro e imagens geradas por IA na paleta da marca.
- **Vinheta final de 0,5 s:** o `IA▌` com o cursor piscando.

## Voz: ElevenLabs
A voz é a "cara" do perfil dark, então ela precisa ser **sempre a mesma**.

**Como escolher:**
1. Na Voice Library, filtre por **Portuguese (Brazilian)**.
2. Teste 3–5 vozes lendo o mesmo texto de 20 s (um gancho + um passo a passo).
3. Prefira uma voz **natural e próxima, com ritmo um pouco acelerado**. Evite voz de "locutor de rádio" ou robótica demais.
4. Escolha uma, anote o nome/ID da voz e **não troque mais**.

**Configurações iniciais (ajuste no ouvido):**
- Modelo multilíngue mais recente disponível no seu plano
- Stability ~40–50% (mais natural, com variação de entonação)
- Similarity ~75%
- Style baixo (0–20%), para não exagerar
- Speed um pouco acima do normal, já que Reels pede ritmo

**Fluxo de produção:**
1. Escreva o texto da narração (pode ser com ChatGPT/Claude e revisão sua).
2. Escreva para o ouvido: frases curtas, vírgulas onde quer pausa e números por extenso quando a leitura sair errada ("cinco minutos").
3. Gere no ElevenLabs e baixe em MP3/WAV.
4. No CapCut: grave a tela, solte o áudio e sincronize os cliques com a fala.
5. Ative as legendas automáticas sobre o áudio da IA.
6. Salve um **dicionário de pronúncia** com termos que a voz erra (ex.: "ChatGPT", "prompt", nomes de ferramentas).

**Plano:** o gratuito serve para testar, mas exige atribuição e não permite uso
comercial. Para monetizar (curso, publis), use **um plano pago com licença comercial**.
Confira os termos atuais no site, porque eles mudam.

> ⚠️ Use só vozes da biblioteca ou um clone **da sua própria voz**. Nunca clone ou
> imite a voz de outra pessoa ou de famosos.
