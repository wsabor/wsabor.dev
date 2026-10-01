# CLAUDE.md — wsabor.dev

Site pessoal/portfólio de Wagner Sabor, construído com Next.js App Router.

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Linguagem:** TypeScript 6
- **Estilos:** Tailwind CSS 4
- **Blog:** MDX via `next-mdx-remote` + `gray-matter`
- **Formulário de contato:** `react-hook-form`
- **Tema:** `next-themes` (dark/light)
- **Galeria:** `yet-another-react-lightbox`
- **Animação da home:** GSAP + ScrollTrigger (`@gsap/react`) e Lenis (smooth scroll, só na home)
- **Analytics:** `@vercel/analytics`
- **Deploy:** o mesmo site em dois domínios — `wsabor.com` (principal, Oracle Cloud, Ubuntu ARM + Nginx + PM2; infra no repo `wsabor/infra`) e `wsabor.dev` (espelho, Vercel)

## Estrutura

```
src/
  app/           # Rotas (App Router)
  components/    # Componentes React
  data/          # Dados estáticos (projects.ts, specialties.tsx, about.ts, scrollSequence.ts)
  hooks/         # Hooks client (useMediaQuery, useMounted)
  lib/           # Utilitários (posts.ts, schemas.ts)
content/
  posts/         # Posts do blog em MDX
  scratch/       # Rascunhos de posts
```

## Comandos

```bash
npm run dev    # Servidor de desenvolvimento
npm run build  # Build de produção
npm run lint   # ESLint (flat config; manter ESLint 9 — eslint-plugin-react não suporta o 10)
```

## Convenções

- Componentes em `PascalCase`, arquivos `.tsx`
- Dados estáticos ficam em `src/data/`, não embutidos nos componentes
- Posts do blog são arquivos `.mdx` em `content/posts/`
- Os cards de artigos da home leem o frontmatter dos posts (sem lista manual). Capa: campo opcional `cover`; sem ele, primeira imagem da galeria; sem galeria, a imagem OG do post
- Usar `lucide-react` para ícones (import otimizado via `optimizePackageImports`)
- Prettier com `prettier-plugin-tailwindcss` para ordenar classes Tailwind

## Scroll sequence (home)

- `ScrollSequence.tsx` desenha frames WebP num `<canvas>` conforme o scroll (pin + scrub do ScrollTrigger). O hero (`HeroIntro.tsx`) é passado como `children` e some ao rolar. `Hero.tsx` fica como alternativa para o layout "hero + sequência abaixo".
- Frames em `public/sequence/desktop` (120, 1280×720) e `public/sequence/mobile` (60, recorte 4:5); imagens de `prefers-reduced-motion` em `public/img/sequence/`. Configuração (caminhos, textos, timing) em `src/data/scrollSequence.ts`.
- O `<main>` é flex: manter `pinSpacing: true` explícito. Altura do header sticky em `--header-h` (globals.css).
- Cores de botão: `bg-primary-strong` / `hover:bg-primary-deep` para fundos com texto branco (contraste AA); `primary` é para texto/links.

## Linguagem visual (home e páginas internas)

- Classes em `globals.css` (`@layer components`): `.card`, `.card-interactive` (hover com borda ciano/brilho), `.section-dots` (textura), `.eyebrow` (rótulo acima de títulos), `.marquee*`.
- Componentes compartilhados: `PageHeader` (topo das páginas internas, com trilha), `SectionHeading`, `Reveal` (anima `[data-reveal]` ao entrar na tela; não anima o que já está visível no carregamento), `FeatureCard`, `Timeline`, `TechMarquee`, `ArticleCard` (variantes), `ProjectCard` (`featured`), `ContactChannels`, `CallToAction`, `StatusPage` (404/erro), `ReadingProgress` (posts).
- Estudos de caso: campo opcional `highlights` (valor + rótulo) no frontmatter vira cards de resultados.
- Imagens: `next.config.mjs` serve só WebP (o AVIF do sharp travava em imagens largas).

## SEO / Schema

- **Domínio principal:** `SITE_URL` em `src/lib/site.ts` (`https://wsabor.com`). Canonical, sitemap, robots, feed, Open Graph e schemas usam sempre esse domínio, nos dois deploys — o `wsabor.dev` é espelho. Nunca escrever o domínio fixo; usar `absoluteUrl()`.
- Toda página define `export const metadata = pageMetadata({ path, title, description })` (canonical + og:url). Rotas com `opengraph-image.tsx` passam `fileImage: true`.
- Vercel Analytics via `VercelAnalytics.tsx`: só carrega quando o hostname é `wsabor.dev` ou `*.vercel.app` (checado no navegador, sem depender de variáveis do painel da Vercel). O script vem de um caminho aleatório (`/<hash>/script.js`), não de `/_vercel/insights/script.js`; para testar, conferir `window.va`.

- Schemas JSON-LD gerados em `src/lib/schemas.ts` e injetados via `src/components/JsonLd.tsx`
- Sitemap em `src/app/sitemap.ts`, robots em `src/app/robots.ts`
- RSS feed em `src/app/feed.xml/route.ts`

## Indexação para LLMs

- `public/llms.txt` — índice resumido das páginas e posts (acessível em `/llms.txt`)
- `public/llms-full.txt` — conteúdo completo do site em Markdown para LLMs (acessível em `/llms-full.txt`)
- Ao adicionar novos posts ou projetos, atualizar ambos os arquivos.
