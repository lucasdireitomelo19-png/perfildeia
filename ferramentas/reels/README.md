# Gerador de Reels prontos (MP4)

Ferramentas usadas para entregar o **vídeo final** (não só o kit), testadas no P008.
Tudo roda neste ambiente: Playwright (navegador), ffmpeg e ElevenLabs (chave injetada pelo proxy).

## Fluxo (5 passos)
1. **Narração:** escreva `narracao.txt` (blocos C1, C2... separados por linha em branco) e rode
   `python3 ferramentas/reels/narrar.py narracao.txt <tmp>/audio`.
   O script mostra o que foi falado × o que foi ouvido (transcrição): regrave o bloco que sair errado.
2. **Linha do tempo + legendas:** `python3 ferramentas/reels/linha_do_tempo.py <tmp>/audio <tmp>/build/timeline.json "estrelas,grátis,..."`
3. **Capturas de tela reais** com Playwright (veja `exemplo-P008/captura.js`): viewport 1280×1213, `deviceScaleFactor: 2`,
   recusar cookies antes de capturar, anotar as coordenadas (boundingBox) dos pontos de zoom/clique.
   Sites com login (claude.ai, ChatGPT) **não** são capturáveis: use cartões no visual da marca, sem imitar a interface deles.
4. **Composição:** copie `exemplo-P008/comp.html` para `<tmp>/build/`, junto com as fontes de `marca/fontes/`, os logos de `marca/logo/` e a pasta `cap/`.
   Adapte a função `render(t)` cena a cena (câmera com zoom `camK`, cursor, textos do topo, chat). Sirva a pasta com
   `python3 -m http.server 8765` e renderize: `node ferramentas/reels/render.js test <pasta>` (quadros de teste) e
   `node ferramentas/reels/render.js full <tmp>/frames` (todos os quadros, 30 fps).
5. **Montagem:** `python3 ferramentas/reels/montar.py <tmp>/frames <tmp>/audio <tmp>/build/timeline.json producao/03-videos/<ID>-<slug>/<ID>-<slug>-final.mp4`

## Regras
- Arquivos temporários (capturas 2x, quadros) ficam fora do repositório: só o MP4 final e os textos entram no git.
- Voz fixa: **Mário** (`YU8EsJtXFMyKMxYtheDk`), pt-BR da Voice Library. Nunca clonar/imitar voz de pessoa real.
- Antes de entregar: confira uma prancha de quadros (gancho, passos, resultado, CTA) e a transcrição do áudio final.
