import type { Metadata } from "next";

/**
 * Domínio principal do site. O mesmo build roda em wsabor.com (Oracle) e
 * wsabor.dev (Vercel); os dois apontam canonical, sitemap, Open Graph e
 * schemas para este endereço, para o Google tratar o .dev como espelho.
 */
export const SITE_URL = "https://wsabor.com";

/** URL absoluta no domínio principal ("/" vira a raiz, sem barra final). */
export function absoluteUrl(path = "/") {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

const rssAlternate = {
  "application/rss+xml": [
    { url: "/feed.xml", title: "Wagner Sabor - Blog RSS Feed" },
  ],
};

/** Open Graph padrão (imagem e textos da home). */
export const defaultOpenGraph = {
  type: "website",
  locale: "pt_BR",
  title: "Wagner Sabor | Desenvolvedor Especialista em Next.js e React",
  description:
    "Transformando ideias em aplicações web modernas e performáticas.",
  siteName: "Wagner Sabor",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Wagner Sabor - Desenvolvedor Especialista em Next.js e React",
    },
  ],
} satisfies Metadata["openGraph"];

/**
 * Metadados de uma página: canonical, og:url e (opcional) título/descrição.
 * O Next substitui `alternates` e `openGraph` inteiros quando a página os
 * define, por isso o RSS e o Open Graph padrão são repetidos aqui.
 * Rotas com opengraph-image.tsx passam `fileImage: true`: uma imagem no
 * objeto teria prioridade sobre a gerada pelo arquivo.
 */
export function pageMetadata({
  path,
  title,
  description,
  openGraph,
  fileImage = false,
}: {
  path: string;
  title?: string;
  description?: string;
  openGraph?: Metadata["openGraph"];
  fileImage?: boolean;
}): Metadata {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { images, ...withoutImage } = defaultOpenGraph;

  return {
    ...(title && { title }),
    ...(description && { description }),
    alternates: { canonical: path, types: rssAlternate },
    openGraph: {
      ...(fileImage ? withoutImage : defaultOpenGraph),
      ...(title && { title: `${title} | Wagner Sabor` }),
      ...(description && { description }),
      ...openGraph,
      url: path,
    },
  };
}
