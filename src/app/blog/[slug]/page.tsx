import { getPostBySlug, getAllPostsMeta } from "@/lib/posts";
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
        {/* Usamos dark:prose-invert para que o plugin de tipografia use as cores do tema escuro */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          {/* Título e data agora usam as cores do tema, que são herdadas pelo .prose */}
          <h1>{meta.title}</h1>
          <p className="mb-8 mt-0 text-lg">
            Publicado em{" "}
            {new Date(meta.publishedAt).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <MDXRemote source={content} />
        </article>
      </main>
    );
  } catch (e) {
    notFound();
  }
}
