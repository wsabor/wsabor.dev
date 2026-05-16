# Roadmap — wsabor.dev

Plano de evolução do site pessoal/portfólio. Foco: **profundidade** (mostrar _como_ trabalho, não só _o que_ entregou) e **canais de captura** (transformar visitas em conexões).

> Status atual: portfólio cobre o básico (projetos, blog, SEO sólido, dark mode, llms.txt) com qualidade. As lacunas reais não são "o que falta" e sim aprofundamento e canais de relacionamento.

---

## Fase 1 — Quick wins (1–2 semanas)

Alto impacto, baixo esforço, encaixam na arquitetura atual.

- [x] **OG image dinâmica por post** (`next/og`) — concluído no Sprint 1
      `src/app/blog/[slug]/opengraph-image.tsx`, com SSG pré-gerado para os 3 posts.

- [ ] **Table of Contents auto-gerado** em posts longos
      Posts MDX já têm `readingTime`/`wordCount`. TOC com scroll-spy melhora UX em peças como "Minha Trajetória".

- [ ] **"Posts relacionados"** ao final do MDX
      Usa `category`/`keywords` que já existem em `src/lib/posts.ts`. Aumenta tempo de sessão.

- [ ] **Reading progress bar** no topo do post
      ~30 linhas, alto valor percebido.

- [x] **Limpeza de repositório** — concluído no Sprint 1
      Removidos `Header.backup.tsx`, blocos comentados em `articles.ts` e `projects.ts`.

- [x] **Botão "Baixar CV em PDF"** na página `/about` — concluído no Sprint 1
      Botão pronto em `src/app/about/page.tsx`. Pendente: subir o PDF em `public/cv-wagner-sabor.pdf`.

---

## Fase 2 — Profundidade de portfólio (3–4 semanas)

O núcleo do "demonstrar habilidades". Hoje os projetos são cards de 1 parágrafo — esse é o teto da prova técnica que o site oferece.

- [ ] **Páginas dedicadas por projeto** (`/projects/[slug]`)
      Estrutura sugerida para cada case study:
  - Contexto e problema
  - Decisões técnicas (com trade-offs)
  - Resultado / métricas / aprendizados
  - Galeria + link para o live
  - Stack detalhado

  Reaproveita o pipeline MDX que já existe. Migrar `src/data/projects.ts` (array estático) para arquivos `content/projects/*.mdx`.

- [ ] **Página `/uses`**
      Convenção popular entre devs (uses.tech). Hardware, editor, extensões, terminal, dotfiles. Aparece no Google quando alguém pesquisa "Wagner Sabor setup".

- [ ] **Página `/now`**
      Convenção do [nownownow.com](https://nownownow.com). O que você está fazendo _agora_ (curso, leitura, projeto pessoal). Sinaliza atividade.

- [ ] **Seção `/labs` ou `/experiments`**
      Você já tem `snakeGame/` e `pixelart/` em `/public`. Crie uma vitrine. Mini-projetos são ótimos para demonstrar curiosidade técnica.

---

## Fase 3 — Prova social e captação (1–2 meses)

- [ ] **Depoimentos**
      De alunos do SENAI, clientes (Topcoat, DR Prev). Schema.org `Review` melhora SEO. Você é instrutor: depoimentos de alunos formados são _o_ diferencial.

- [ ] **Newsletter** (Resend / Buttondown / Beehiiv)
      Captura assíncrona, retenção > formulário de contato. Combine com banner discreto após o post.

- [ ] **Blog: search + filtros por tag/categoria**
      `keywords` já existem no frontmatter — basta indexar. Use `fuse.js` ou build-time index.

- [ ] **Comentários ativos**
      Você tem `src/components/Comments.tsx`, confirmar se está em uso. Giscus (issues do GitHub) é zero-config e combina com sua audiência dev.

- [ ] **Página `/servicos` ou `/contrate`**
      Se aceita freelance/consultoria, separar isso do `/contact` genérico. Pacotes, processo, faixas de preço (mesmo que "sob consulta").

---

## Fase 4 — Diferenciação e alcance (2–3 meses)

Investimento maior; só perseguir se Fase 1–3 estiverem maduras.

- [ ] **i18n (PT/EN)**
      Next.js App Router suporta nativamente. Abre mercado para recrutadores internacionais e remote.

- [ ] **Vertente "educador"**
      Você é instrutor, mas o site não comunica isso fortemente.
  - `/recursos` — listas de links, materiais, snippets que usa em aula
  - `/cursos` — se planeja vender cursos próprios no futuro
  - Schema.org `Course` em conteúdos pedagógicos

- [ ] **Integração GitHub**
      Últimos commits/repos via API. Mostra atividade. Cache via ISR pra não estourar rate limit.

- [ ] **Analytics próprio** (Plausible / PostHog)
      Vercel Analytics é raso. Saber _quais_ posts retêm leitura informa o que escrever.

- [ ] **Dashboard `/stats` público**
      Alunos formados, posts publicados, projetos entregues, anos no SENAI. Números concretos > adjetivos.

---

## Contínuo

- [ ] **Cadência de blog** — 1 post/mês é o mínimo para SEO compostar. Hoje são 3 posts.
- [ ] **Manutenção dos `llms.txt`** — já documentado no CLAUDE.md.
- [ ] **Lighthouse / Core Web Vitals** — auditoria trimestral.

---

## Top 3 sugeridos para começar

1. **OG dinâmica + TOC + reading progress** (Fase 1) — uma tarde de trabalho, ganho enorme em percepção de qualidade.
2. **Case studies em MDX** (Fase 2) — sem isso, o portfólio fica raso para quem vai contratar.
3. **Depoimentos de alunos** (Fase 3) — é o ativo único; ninguém mais tem.

---

## Matriz Esforço × Impacto

**Legenda**

- **Esforço:** P (~2-4h) · M (~1-2 dias) · G (~3+ dias)
- **Impacto:** 🟢 alto · 🟡 médio · 🔴 baixo
- **Prioridade:** P1 (fazer agora) · P2 (próximo trimestre) · P3 (adiar / condicional)

| #   | Tarefa                                  | Esforço | Impacto | Prioridade | Racional                                                                              |
| --- | --------------------------------------- | ------- | ------- | ---------- | ------------------------------------------------------------------------------------- |
| 1   | OG dinâmica por post                    | P       | 🟢      | **P1**     | Cada share no LinkedIn/Twitter passa a vender o post. `next/og` é nativo.             |
| 2   | Botão "Baixar CV" em /about             | P       | 🟢      | **P1**     | Recrutador chega no /about e quer levar embora. Hoje não tem como.                    |
| 3   | Páginas por projeto (MDX)               | G       | 🟢      | **P1**     | Núcleo do portfólio. Sem isso, "demonstrar habilidades" fica em cards de 1 parágrafo. |
| 4   | Depoimentos de alunos/clientes          | M       | 🟢      | **P1**     | Ativo único de quem é instrutor. Esforço real é _coletar_, não codar.                 |
| 5   | Limpeza repo (backup/comentados)        | P       | 🔴      | **P1**     | Impacto baixo mas esforço quase zero — tirar antes que vire dívida.                   |
| 6   | Table of Contents nos posts longos      | P       | 🟡      | **P2**     | Posts curtos não precisam; só rende em peças tipo "Minha Trajetória".                 |
| 7   | Posts relacionados                      | P       | 🟡      | **P2**     | Valor cresce com volume — com 3 posts hoje, retorno é limitado.                       |
| 8   | Reading progress bar                    | P       | 🟡      | **P2**     | Ganho perceptual ("vibe de qualidade"), não conversão.                                |
| 9   | /uses                                   | P       | 🟡      | **P2**     | SEO long-tail entre devs, baixo custo de manutenção.                                  |
| 10  | /labs (snake, pixelart, futuros)        | M       | 🟡      | **P2**     | Vitrine de curiosidade técnica; reaproveita o que já está em /public.                 |
| 11  | Comentários ativos (Giscus)             | P       | 🟡      | **P2**     | Componente já existe, só ativar. Tração depende de tráfego.                           |
| 12  | Analytics próprio (Plausible/PostHog)   | P       | 🟡      | **P2**     | Informa _o que_ escrever a seguir. Vercel Analytics não dá funil.                     |
| 13  | Newsletter                              | M       | 🟡      | **P2**     | Alto a longo prazo; só faz sentido com cadência editorial firme.                      |
| 14  | Vertente educador (/recursos, Course)   | G       | 🟢      | **P2**     | Diferenciação real, mas exige curadoria de conteúdo — não é só código.                |
| 15  | /servicos ou /contrate                  | M       | 🟡      | **P2**     | Condicional: P1 se você aceita freelance hoje, P3 se não.                             |
| 16  | /now                                    | P       | 🔴      | **P3**     | Convenção legal, mas exige manutenção contínua e público é nicho.                     |
| 17  | Search/filtros no blog                  | M       | 🔴      | **P3**     | Com 3 posts não há demanda. Revisitar com ~15 posts.                                  |
| 18  | Integração GitHub (atividade)           | M       | 🟡      | **P3**     | Cosmético; github.io/perfil já faz isso.                                              |
| 19  | /stats público                          | M       | 🟡      | **P3**     | Bom storytelling, mas requer dashboard e dados curados.                               |
| 20  | i18n PT/EN                              | G       | 🟡      | **P3**     | Dobra a manutenção do conteúdo. Só vale se mirar mercado internacional ativamente.    |

---

## Sprint 1 sugerido (P1, ordem de execução)

Sequência otimizada para entregar valor crescente:

1. **Limpeza repo** (~30 min) — começar pelo mais barato, repo limpo de saída.
2. **OG dinâmica + Botão CV** (~1 dia) — quick wins visíveis, dão tração imediata.
3. **Depoimentos** — iniciar **coleta em paralelo hoje** (mensagens a alunos/clientes); o componente em si é simples.
4. **Páginas por projeto (MDX)** — maior bloco; começar pelos 2-3 projetos mais fortes (Topcoat, EPI System, Quiz Prepara Aí). Os demais entram gradualmente.

Estimativa total Sprint 1: **~1-2 semanas** de trabalho efetivo (descontando coleta de depoimentos, que é assíncrona).
