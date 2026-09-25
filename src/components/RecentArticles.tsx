import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ArticleCard from "./ArticleCard";
import { getAllPostsMeta } from "@/lib/posts";

export default function RecentArticles() {
  const [featured, ...others] = getAllPostsMeta().slice(0, 3);
  if (!featured) return null;

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

        {/* Mais recente em destaque; demais como cards horizontais */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ArticleCard {...featured} variant="featured" />
          {others.map((post) => (
            <ArticleCard key={post.slug} {...post} variant="horizontal" />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
