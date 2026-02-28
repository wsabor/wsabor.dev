import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { latestArticles } from "@/data/articles";

export default function RecentArticles() {
  return (
    <>
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-8">
          <div className="mb-12 text-center">
            <h2 className="text-text-main mb-4 text-3xl font-bold md:text-4xl">
              Artigos Recentes
            </h2>
            <p className="text-text-muted text-lg">
              Compartilhando conhecimento e insights sobre tecnologia e
              educação.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {latestArticles.map((article) => (
              <Link
                href={article.slug}
                key={article.id}
                className="bg-surface hover:border-primary flex grow flex-col rounded-xl border border-white/10 p-6 transition-colors"
              >
                <h3 className="text-text-main mb-2 text-xl font-semibold">
                  {article.title}
                </h3>
                <p className="text-text-muted mb-4">{article.summary}</p>
                <div className="grow"></div>
                <span className="text-primary hover:text-primary-light flex items-center gap-2 font-semibold transition-colors">
                  Ler Artigo <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
