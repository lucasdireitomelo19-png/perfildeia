---
pagina: links
objetivo: levar o seguidor do Instagram ao próximo passo (1º sempre a isca)
status: pronto para configurar
---

# Página "link na bio" (`sites/links/`)

Página única, leve (sem JavaScript) e mobile-first, no visual da marca.

## Ordem dos botões
1. 🎁 **50 Prompts que Funcionam (GRÁTIS)**: botão azul principal → `../50-prompts/` com UTM `utm_source=instagram&utm_medium=bio`
2. 💬 **Pack 500 Prompts**: já escrito, mas **comentado**. Descomente quando o produto estiver à venda
3. 🎓 **Lista de espera da IA Works Academy**
4. 🧰 **As IAs que eu uso**
5. ▶️ **Tutorial mais recente**
+ ícones de Instagram, TikTok e YouTube · rodapé com o bordão e o link da política de privacidade

## O que configurar (busque `CONFIGURAR` no `index.html`)
| Item | O que colar |
|---|---|
| Isca | A página `sites/50-prompts/` ainda **não existe**: até ela ficar pronta, troque o link pelo seu formulário do MailerLite/Brevo |
| Lista de espera | Link do formulário da lista de espera (depois, `../academy/`) |
| Ferramentas | Link da lista (Notion público, por exemplo). Se tiver link de afiliado, avise isso na página de destino |
| Tutorial recente | Link do Reels/post da semana. Troque a cada post importante |
| Redes | Links do Instagram, TikTok e YouTube. Apague o ícone da rede que você ainda não tem |
| Open Graph | Troque `https://iaworks.com.br/links/` pelo endereço final (a imagem `og-image.png` já está pronta, 1200×630) |
| Pixel / Analytics | Cole os códigos no `<head>`, onde está o comentário "RASTREAMENTO" |
| Privacidade | Em `sites/privacidade/index.html`, troque o e-mail de contato e liste as ferramentas que você usa |

## Como publicar (grátis)
- **Netlify Drop** (mais fácil): acesse app.netlify.com/drop e arraste a pasta `sites/` inteira. A página fica em `.../links/`.
- **GitHub Pages:** no repositório, abra Settings → Pages e publique a branch. O endereço fica `.../sites/links/`.
- **Domínio:** depois, conecte `iaworks.com.br`. No Instagram, use `iaworks.com.br/links` como link da bio.

## Prints de teste
`preview/celular-390.png` e `preview/desktop-1440.png`. Testado em 390 px e 1440 px, sem rolagem horizontal e com todos os botões a partir de 48 px de altura.

## Arquivos
`index.html` · `logo.svg` · `favicon.svg` · `og-image.png` · `fontes/` (Space Grotesk 500/700, Inter 400/500)
