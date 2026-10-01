# Roadmap — wsabor.dev

Plano de evolução do site pessoal/portfólio. Dois objetivos:

1. **Portfólio** (recrutadores, área de tecnologia, educação) — mostrar _como_ trabalho, não só _o que_ entreguei.
2. **Captação de clientes locais** — vender sites, Google Meu Negócio (Perfil da Empresa no Google) e tráfego pago para pequenos negócios, e **medir** de onde vêm os contatos.

> Última revisão: 2026-09-26, depois do redesign completo (PRs #3 e #4).

---

## Concluído

- [x] **Scroll sequence no hero da home** — canvas com frames WebP guiados pelo scroll (PR #3).
- [x] **Redesign da home** — "Quem sou", bento de especialidades com o card "Presença digital para negócios", marquee de tecnologias, projetos e artigos, CTA com canais diretos (PR #4).
- [x] **Redesign das páginas internas** — /about, /projects, /blog, /contact, 404 e erro (PR #4).
- [x] **OG dinâmica por post** (`next/og`) e OG/banner da home.
- [x] **Reading progress bar** nos posts.
- [x] **Limpeza de repositório** (backups, blocos comentados, componentes mortos).
- [x] **Comentários com Giscus** — ativos nos posts.
- [x] **Estrutura de estudos de caso** (`/projects/[slug]` em MDX, com `highlights`) — o conteúdo está parcial, veja "Agora".

---

## Agora (P1)

### 1. Medição com GA4

Vercel Analytics é raso (sem funil, eventos limitados no plano gratuito). GA4 passa a ser a fonte principal, no site e na LP de serviços.

- [ ] Criar propriedade GA4 (e vincular ao Google Search Console).
- [ ] Integrar via `@next/third-parties/google` (`GoogleAnalytics` + `sendGAEvent`).
- [ ] **Banner de consentimento (LGPD) + Consent Mode v2** — GA4 grava cookies; sem consentimento só envia sinais anônimos.
- [ ] Eventos-chave: clique no WhatsApp, clique em e-mail/LinkedIn, envio do formulário de contato, clique em "ver projeto ao vivo".
- [ ] Marcar como _key events_ (conversões) os que indicam contato.
- [ ] Atualizar a política de privacidade (`public/privacy_policy`) mencionando GA4 e cookies.
- [ ] Depois, quando houver anúncios: vincular GA4 ao Google Ads e/ou instalar o Pixel da Meta (mesmo banner de consentimento).

**Decisões em aberto**

- Manter o Vercel Analytics em paralelo ou removê-lo? (Ele não usa cookies; pode ficar como métrica "sem consentimento".)
- LP em `/servicos` ou em subdomínio: com subdomínio de `wsabor.dev`, a **mesma propriedade/ID** do GA4 funciona sem configuração extra (o cookie fica no domínio raiz). Domínio próprio diferente exigiria configurar _cross-domain_.

### 2. Landing page de serviços

Página de conversão separada da home (a home continua sendo portfólio pessoal), em linguagem de negócio, sem jargão técnico, com CTA de WhatsApp.

- [ ] Estrutura: hero com proposta de valor + WhatsApp → dores do cliente → 3 serviços → processo (conversa → proposta → entrega → acompanhamento) → portfólio de clientes → pacotes/"a partir de" → FAQ → formulário + WhatsApp.
- [ ] Reaproveitar a linguagem visual (`PageHeader`, `FeatureCard`, `ContactChannels`, `CallToAction`).
- [ ] SEO local: schema `ProfessionalService`, metadata, sitemap, `llms.txt`.
- [ ] Eventos do GA4 (item 1) desde o lançamento.
- [ ] Apontar o CTA do card "Presença digital para negócios" (`businessServices.cta.href` em `src/data/specialties.tsx`, hoje `/contact`) para a LP.

**Decisões em aberto**

- Endereço: `/servicos` ou subdomínio (ex.: `servicos.wsabor.dev`)?
- Nome/marca: "Wagner Sabor" ou uma marca separada?
- Região/cidade atendida.
- Mostrar preços ("a partir de") ou "sob consulta"?
- Tráfego pago: Google Ads, Meta ou os dois?
- Número público de WhatsApp.
- Brisa do Mar (template de hotel) pode entrar no portfólio? Precisa de URL ou prints.

### 3. Completar os estudos de caso

Existem 2 de 6: Topcoat Vernizes e Sistema de Simulados.

- [ ] DR Prev Serviços Previdenciários _(cliente — também serve de prova para a LP)_
- [ ] Quiz Prepara Aí 2025
- [ ] EPI System
- [ ] Agro Solutio

Esforço real é o **texto** (contexto, decisões, resultados); o código já existe.

### 4. Depoimentos

O componente e o schema já existem; `src/data/testimonials.ts` está vazio, então a seção fica oculta.

- [ ] Coletar: clientes (Topcoat, DR Prev) e alunos/ex-alunos do SENAI.
- [ ] Possível primeiro depoimento: comentário da Cris D'Avilla no post do hackathon (só com autorização dela).
- [ ] Depoimentos de clientes também entram na LP de serviços.

---

## Próximo (P2)

- [ ] **Cadência de blog** — último post em 2025-09-03. Há dois rascunhos em `content/scratch/` ("Por que todo Dev Deveria Aprender Design" e "Os 3 Maiores Desafios que Meus Alunos Enfrentam"). Meta: 1 post/mês.
- [ ] **/labs** — vitrine para `public/snakeGame/` e `public/pixelart/`, que hoje não têm nenhum link no site.
- [ ] **Posts relacionados** ao final do post (usa `category`/`keywords`). Barato; valor cresce com o volume de posts.
- [ ] **Table of Contents** — só para posts longos (hoje apenas o do hackathon: ~1650 palavras, 5 seções). Fazer junto com "posts relacionados".
- [ ] **/uses** — setup (hardware, editor, extensões, terminal). SEO long-tail entre devs.
- [ ] **Vertente educador (`/recursos`)** — materiais, links e snippets usados em aula; schema `Course`. Exige curadoria de conteúdo.
- [ ] **Newsletter** — só depois que o blog tiver cadência.

---

## Adiado — revisitar quando…

| Item                        | Revisitar quando                                            |
| --------------------------- | ----------------------------------------------------------- |
| Filtro por tag em /projects | Houver mais de 10 projetos                                  |
| Busca/filtros no blog       | Houver ~15 posts                                            |
| /now                        | Houver disposição para atualizar todo mês                   |
| Integração GitHub           | Houver motivo além de cosmético (o perfil do GitHub já mostra) |
| /stats público              | Houver números reais e verificáveis para mostrar            |
| i18n PT/EN                  | Houver foco ativo em mercado internacional                  |

## Descartado

- ~~Botão "Baixar CV"~~ — decisão: não haverá CV no site.
- ~~Analytics próprio (Plausible/PostHog)~~ — substituído por GA4 (Agora, item 1).

---

## Fora do repositório (infra de clientes)

- [ ] **Separar projetos de clientes da conta pessoal na Vercel** — a Topcoat (com Speed Insights ativo) está na mesma conta do wsabor.dev. Criar uma conta/time por cliente, de preferência em nome do cliente, antes de novos projetos para ele. Atenção: o plano Hobby da Vercel é para uso pessoal e não comercial; site de cliente pago normalmente exige plano Pro (confirmar nos termos atuais).

---

## Contínuo

- [ ] **Manutenção dos `llms.txt`** ao adicionar posts, projetos ou a LP (documentado no CLAUDE.md).
- [ ] **Lighthouse / Core Web Vitals** — auditoria trimestral e após adicionar GA4 (script de terceiros).
- [ ] **Testes em dispositivos reais** — iPhone Safari (`100svh`, pin, toque) e Android de entrada.

---

## Ordem sugerida

1. **GA4 + consentimento** no site atual → a LP já nasce medida.
2. **LP de serviços**, em fases (depois de responder as decisões em aberto).
3. Em paralelo e fora do código: **coletar depoimentos** e **escrever os estudos de caso** restantes.
4. Depois: blog (rascunhos), /labs, posts relacionados + TOC.
