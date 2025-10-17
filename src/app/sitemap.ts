import { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostsMeta();

  const blogPosts = posts.map((post) => ({
    url: `https://wsabor.dev/blog/${post.slug}`,
    lastModified: new Date(post.meta.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://wsabor.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://wsabor.dev/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://wsabor.dev/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://wsabor.dev/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://wsabor.dev/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...blogPosts,
  ];
}
