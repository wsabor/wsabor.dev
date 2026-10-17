import { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import { getAllProjectsMeta } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";

// Data da última mudança de conteúdo de cada página fixa. Atualizar à mão quando
// o texto da página mudar (não a cada deploy): o Google só confia no lastmod se
// ele for fiel.
const STATIC_PAGES_UPDATED = {
  home: "2026-10-07",
  about: "2026-10-04",
  projects: "2026-10-01",
  seuNegocio: "2026-10-17",
  contact: "2026-10-04",
  privacidade: "2026-10-03",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostsMeta();

  const blogPosts = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.meta.updatedAt ?? post.meta.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // A listagem do blog muda quando um post entra ou é atualizado.
  const blogUpdated = blogPosts.reduce(
    (latest, post) => (post.lastModified > latest ? post.lastModified : latest),
    new Date(0),
  );

  const caseStudies = getAllProjectsMeta().map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: new Date(project.meta.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: absoluteUrl(),
      lastModified: new Date(STATIC_PAGES_UPDATED.home),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: new Date(STATIC_PAGES_UPDATED.about),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: new Date(STATIC_PAGES_UPDATED.projects),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: blogUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/seu-negocio"),
      lastModified: new Date(STATIC_PAGES_UPDATED.seuNegocio),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: new Date(STATIC_PAGES_UPDATED.contact),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/privacidade"),
      lastModified: new Date(STATIC_PAGES_UPDATED.privacidade),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...caseStudies,
    ...blogPosts,
  ];
}
