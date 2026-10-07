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

/** Twitter/X Card padrão (mesmos textos e imagem do Open Graph da home). */
export const defaultTwitter = {
  card: "summary_large_image",
  title: defaultOpenGraph.title,
  description: defaultOpenGraph.description,
  creator: "@wsabor",
  images: ["/og-image.png"],
} satisfies Metadata["twitter"];

/**
 * Metadados de uma página: canonical, og:url e (opcional) título/descrição.
 * O Next substitui `alternates`, `openGraph` e `twitter` inteiros quando a
 * página os define, por isso o RSS, o Open Graph e o card do X são repetidos
 * aqui (sem isso o X recebia título, descrição e imagem da home).
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { images: _twitterImages, ...twitterWithoutImage } = defaultTwitter;

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
    twitter: {
      ...(fileImage ? twitterWithoutImage : defaultTwitter),
      ...(title && { title: `${title} | Wagner Sabor` }),
      ...(description && { description }),
      // Imagem própria passada no openGraph (ex.: capa do estudo de caso)
      ...(openGraph?.images && { images: openGraph.images }),
    },
  };
}
