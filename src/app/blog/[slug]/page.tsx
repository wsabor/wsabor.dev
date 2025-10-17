// src/app/blog/[slug]/page.tsx

import { getPostBySlug, getAllPostsMeta } from "@/lib/posts";
import { ImageGallery } from "@/components/ImageGallery";
import { Comments } from "@/components/Comments";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

// Tipo para os params no Next.js 15
type Props = {
  params: Promise<{ slug: string }>;
};

// Gera os parâmetros estáticos para cada post na hora do build
export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Gera os metadados dinâmicos (título da aba) para cada post
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: meta.title,
      description: meta.summary,
    };
  } catch {
    return {
      title: "Post não encontrado",
    };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  try {
    const { meta, content } = getPostBySlug(slug);

    return (
      <main className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <h1>{meta.title}</h1>
          <p className="mb-8 mt-0 text-lg">
            Publicado em{" "}
            {new Date(meta.publishedAt).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <MDXRemote
            source={content}
            components={{
              ImageGallery: () => (
                <ImageGallery
                  images={meta.galleryImages || []}
                  basePath={meta.galleryBasePath || ""}
                />
              ),
            }}
          />
        </article>
        <hr className="my-12 border-black/10 dark:border-white/10" />
        <Comments />
      </main>
    );
  } catch {
    notFound();
  }
}
