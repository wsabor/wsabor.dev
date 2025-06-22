import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog | Wagner Sabor",
  description:
    "Artigos e tutoriais sobre desenvolvimento, design e tecnologia.",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Cabeçalho da página */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          Aqui compartilho conhecimentos, tutoriais e reflexões sobre o universo
          da tecnologia, do desenvolvimento ao design.
        </p>
      </div>

      {/* Lista de Posts */}
      <div className="max-w-4xl mx-auto space-y-12">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`} // Link dinâmico para cada post
            key={post.slug}
            className="group block"
          >
            <article>
              <div className="mb-2">
                <p className="text-sm text-neutral-400">
                  {new Date(post.meta.publishedAt).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {post.meta.title}
              </h2>
              <p className="text-lg text-neutral-300 mb-6">
                {post.meta.summary}
              </p>
              <span className="font-semibold text-primary inline-flex items-center gap-2">
                Ler artigo <ArrowRight size={16} />
              </span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
