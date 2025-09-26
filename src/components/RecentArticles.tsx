import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { latestArticles } from "@/data/articles";

export default function RecentArticles() {
  return (
    <>
      <section className="py-16 md:py-44">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-text-main md:text-4xl">
              Artigos Recentes
            </h2>
            <p className="text-lg text-text-muted">
              Compartilhando conhecimento e insights sobre tecnologia e
              educação.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {latestArticles.map((article) => (
              <Link
                href={article.slug}
                key={article.id}
                className="flex flex-grow flex-col rounded-xl border border-white/10 bg-surface p-6 transition-colors hover:border-primary"
              >
                <h3 className="mb-2 text-xl font-semibold text-text-main">
                  {article.title}
                </h3>
                <p className="mb-4 text-text-muted">{article.summary}</p>
                <div className="flex-grow"></div>
                <span className="flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-light">
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
