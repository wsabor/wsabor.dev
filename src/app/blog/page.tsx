import { getAllPostsMeta } from "@/lib/posts";

import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ArticleCard from "@/components/ArticleCard";
import CallToAction from "@/components/CallToAction";
import { getBreadcrumbListSchema } from "@/lib/schemas";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/blog",
  title: "Blog",
  description:
    "Artigos e tutoriais sobre Next.js, React, TypeScript e desenvolvimento web moderno.",
});

export default function BlogPage() {
  const [featured, ...others] = getAllPostsMeta();

  // Gerar breadcrumb para a página de blog
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Home", url: absoluteUrl() },
    { name: "Blog", url: absoluteUrl("/blog") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Blog"
        title="Blog"
        description="Aqui compartilho conhecimentos, tutoriais e reflexões sobre o universo da tecnologia, do desenvolvimento ao design."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
        ]}
      />

      {featured && (
        <section className="pb-16 md:pb-24" aria-labelledby="lista-artigos">
          {/* Título só para leitores de tela: os cards usam h3 */}
          <h2 id="lista-artigos" className="sr-only">
            Artigos
          </h2>
          <Reveal className="container mx-auto px-8">
            {/* Mais recente em destaque (largura total), demais em grade */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ArticleCard
                {...featured}
                variant="featured-wide"
                className="md:col-span-2 lg:col-span-3"
              />
              {others.map((post) => (
                <ArticleCard key={post.slug} {...post} />
              ))}
            </div>
          </Reveal>
        </section>
      )}

      <CallToAction />
    </>
  );
}
