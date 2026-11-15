# IA Works: contexto do projeto

Perfil de Instagram **IA Works** (slogan: *"IA que funciona."*). Perfil **dark**, ou seja,
**sem rosto**: gravação de tela + narração com voz do ElevenLabs. Visual **claro e minimalista**.
Tudo em **português do Brasil**.

## Documentos de referência (leia antes de produzir)
- Posicionamento, persona, bio: `estrategia/01-posicionamento-e-nome.md`
- Identidade visual (cores, fontes, regras): `estrategia/02-identidade-visual.md`
- Estratégia de conteúdo (pilares, ganchos, estruturas, métricas): `estrategia/03-estrategia-de-conteudo.md`
- Lançamento e curso: `estrategia/04-lancamento.md`, `curso/`
- Logo: `marca/logo/` · Fontes: `marca/fontes/`

## Marca em 10 linhas
- **Público:** profissionais e pequenos empreendedores iniciantes em IA ("Camila, 32 anos": sem tempo, com medo de ficar para trás).
- **Promessa:** tutoriais rápidos para fazer coisas reais com IA, sem saber programar.
- **Tom:** claro, prático, próximo, com humor leve. Frases curtas, sem jargão nem promessa milagrosa.
- **Cores:** off-white `#F7F6F2`, branco `#FFFFFF`, grafite `#14161A`, azul `#2F3BFF` (ação), verde-limão `#D4F542` (só como marca-texto, nunca como texto), cinza `#6B7079`, coral `#FF5A4E` (erro/antes).
- **Fontes:** Space Grotesk (títulos), Inter (texto), JetBrains Mono (prompts).
- **Assinatura:** ponto final quadrado azul, como em `IAworks.`
- **Bordão de fechamento:** "Testado e aprovado. IA Works: IA que funciona."
- **Séries:** `Works #NN` (tutorial), `Prompt que Funciona`, `Funciona ou Não?` (teste de ferramenta).
- **CTA padrão:** "Comenta [PALAVRA] que eu te mando no Direct" (ManyChat) ou "Salva pra não esquecer".

## Linha de produção (agentes em `.claude/agents/`)

```
pesquisador-nicho → roteirista → produtor-video     (Reels)
                               ↘ designer-carrossel (Carrossel)
```

| Etapa | Agente | Lê | Escreve |
|---|---|---|---|
| 1 | `pesquisador-nicho` | web + `producao/PAUTA.md` | `producao/01-pesquisas/AAAA-MM-DD-*.md` + novas linhas na PAUTA |
| 2 | `roteirista` | pesquisa da pauta | `producao/02-roteiros/<ID>-<slug>.md` |
| 3a | `produtor-video` | roteiro de Reels | `producao/03-videos/<ID>-<slug>/` |
| 3b | `designer-carrossel` | roteiro de carrossel | `producao/04-carrosseis/<ID>-<slug>/` |

### Regras de integração (valem para TODOS os agentes)
1. **`producao/PAUTA.md` é a fonte da verdade.** Cada pauta tem um **ID** (`P001`, `P002`...) que acompanha todos os arquivos dela.
2. **Status, em ordem:** `💡 ideia` → `🔎 pesquisado` → `✍️ roteirizado` → `🎬 produzido` → `✅ publicado`. Cada agente só pega pautas no status anterior ao seu e, ao terminar, **atualiza o status e a coluna "Arquivo"**.
3. Cada arquivo começa com um **cabeçalho YAML** contendo `id`, `formato`, `status` e `fonte` (o arquivo de origem).
4. Nunca apague trabalho de outro agente. Se discordar de algo, escreva em `## Notas para <agente>` no próprio arquivo.
5. **Factualidade:** nomes, preços e planos grátis de ferramentas mudam. Só o pesquisador afirma fatos, sempre com link e data. Os outros agentes não inventam fatos; se faltar informação, marcam `[VERIFICAR]`.
6. Nunca usar logo, nome ou marca de terceiros como se fossem da IA Works. Nunca clonar/imitar voz de pessoas reais.
