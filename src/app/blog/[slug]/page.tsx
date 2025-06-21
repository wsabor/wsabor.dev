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
      <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {meta.title}
          </h1>
          <p className="text-lg text-neutral-400 mt-0 mb-8">
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
    // Se o arquivo do post não for encontrado, mostra a página 404
    notFound();
  }
}
