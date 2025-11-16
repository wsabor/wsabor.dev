import { getAllPostsMeta } from "@/lib/posts";

// Configurações do site (você pode mover isso para um arquivo de config depois)
const SITE_URL = "https://wsabor.dev";
const SITE_TITLE = "Wagner Sabor - Blog";
const SITE_DESCRIPTION =
  "Artigos e tutoriais sobre Next.js, React, TypeScript e desenvolvimento web moderno.";
const SITE_LANGUAGE = "pt-BR";
const SITE_AUTHOR_EMAIL = "wsabor.senai@gmail.com (Wagner Sabor)";

export async function GET() {
  const posts = getAllPostsMeta();

  // Gerar o XML do RSS
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>${SITE_LANGUAGE}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.meta.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <description><![CDATA[${post.meta.summary}]]></description>
      <pubDate>${new Date(post.meta.publishedAt).toUTCString()}</pubDate>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <author>${SITE_AUTHOR_EMAIL}</author>
    </item>
    `,
      )
      .join("")}
  </channel>
</rss>`;

  // Retornar a resposta com headers corretos
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600", // Cache de 1 hora
    },
  });
}
