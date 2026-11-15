---
description: Linha completa. Pesquisa, roteiro e produção (vídeo ou carrossel) de um tema, de ponta a ponta
argument-hint: "[tema ou ID da pauta]"
---
Rode a linha de produção completa da IA Works para: $ARGUMENTS

1. **pesquisador-nicho**: se for um tema novo, pesquise e crie a pauta; se for um ID, aprofunde/cheque a pesquisa.
2. **roteirista**: roteirize a pauta.
3. Conforme o formato do roteiro: **produtor-video** (reels) ou **designer-carrossel** (carrossel).

Chame os agentes **em sequência**: cada etapa usa o arquivo entregue pela anterior, e `producao/PAUTA.md` é atualizado a cada etapa.
Se alguma etapa deixar itens `[VERIFICAR]` ou `[NÃO CONFIRMADO]`, devolva para o pesquisador-nicho antes de seguir.
No final, mostre um resumo: ID, gancho escolhido, arquivos gerados e o que falta o usuário fazer (gravar, gerar áudio, publicar).
