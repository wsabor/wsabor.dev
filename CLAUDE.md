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
- **Analytics:** `@vercel/analytics`
- **Deploy:** Vercel

## Estrutura

```
src/
  app/           # Rotas (App Router)
  components/    # Componentes React
  data/          # Dados estáticos (projects.ts, articles.ts, specialties.tsx)
  lib/           # Utilitários (posts.ts, schemas.ts)
content/
  posts/         # Posts do blog em MDX
  scratch/       # Rascunhos de posts
```

## Comandos

```bash
npm run dev    # Servidor de desenvolvimento
npm run build  # Build de produção
npm run lint   # ESLint
```

## Convenções

- Componentes em `PascalCase`, arquivos `.tsx`
- Dados estáticos ficam em `src/data/`, não embutidos nos componentes
- Posts do blog são arquivos `.mdx` em `content/posts/`
- Usar `lucide-react` para ícones (import otimizado via `optimizePackageImports`)
- Prettier com `prettier-plugin-tailwindcss` para ordenar classes Tailwind

## SEO / Schema

- Schemas JSON-LD gerados em `src/lib/schemas.ts` e injetados via `src/components/JsonLd.tsx`
- Sitemap em `src/app/sitemap.ts`, robots em `src/app/robots.ts`
- RSS feed em `src/app/feed.xml/route.ts`

## Indexação para LLMs

- `public/llms.txt` — índice resumido das páginas e posts (acessível em `/llms.txt`)
- `public/llms-full.txt` — conteúdo completo do site em Markdown para LLMs (acessível em `/llms-full.txt`)
- Ao adicionar novos posts ou projetos, atualizar ambos os arquivos.
