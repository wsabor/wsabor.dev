import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { latestArticles } from "@/data/articles";

export default function RecentArticles() {
  return (
    <section className="py-20 md:py-32" aria-labelledby="artigos">
      <Reveal className="container mx-auto px-8">
        <SectionHeading
          id="artigos"
          eyebrow="Blog"
          title="Artigos recentes"
          description="Compartilhando conhecimento e insights sobre tecnologia e educação."
          action={{ href: "/blog", label: "Ver todos os artigos" }}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {latestArticles.map((article) => (
            <Link
              href={article.slug}
              key={article.id}
              data-reveal
              className="card card-interactive group flex flex-col p-8"
            >
              <h3 className="font-display text-text-main mb-3 text-xl font-semibold">
                {article.title}
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                {article.summary}
              </p>
              <span className="text-primary mt-auto inline-flex items-center gap-2 font-semibold">
                Ler artigo
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
