// src/app/blog/[slug]/page.tsx

import { getPostBySlug, getAllPostsMeta } from "@/lib/posts";
import { ImageGallery } from "@/components/ImageGallery";
import { Comments } from "@/components/Comments";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

// Gera os parâmetros estáticos para cada post na hora do build
export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Gera os metadados dinâmicos (título da aba) para cada post
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { meta } = getPostBySlug(params.slug);
    return {
      title: meta.title,
      description: meta.summary,
    };
  } catch (e) {
    return {
      title: "Post não encontrado",
    };
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  try {
    const { meta, content } = getPostBySlug(params.slug);

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
              // A mágica acontece aqui! Passamos os dados do frontmatter
              // para o componente ImageGallery quando ele for encontrado no MDX.
              ImageGallery: () => (
                <ImageGallery
                  images={meta.galleryImages || []}
                  basePath={meta.galleryBasePath || ""}
                />
              ),
            }}
          />{" "}
        </article>
        <hr className="my-12 border-black/10 dark:border-white/10" />
        <Comments />
      </main>
    );
  } catch (e) {
    notFound();
  }
}
