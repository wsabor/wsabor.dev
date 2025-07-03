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
    <main className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-text-main md:text-5xl">
          Blog
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-text-muted">
          Aqui compartilho conhecimentos, tutoriais e reflexões sobre o universo
          da tecnologia, do desenvolvimento ao design.
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-12">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="group block"
          >
            <article>
              <div className="mb-2">
                <p className="text-sm text-text-muted">
                  {new Date(post.meta.publishedAt).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-text-main transition-colors group-hover:text-primary md:text-3xl">
                {post.meta.title}
              </h2>
              <p className="mb-6 text-lg text-text-muted">
                {post.meta.summary}
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-primary">
                Ler artigo <ArrowRight size={16} />
              </span>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
