import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { getAllPostsMeta, getPostCover, type PostMetadata } from "@/lib/posts";

// timeZone UTC: publishedAt é só a data; sem isso, no fuso do Brasil
// "2025-09-03" viraria 2 de setembro.
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function PostMeta({ meta }: { meta: PostMetadata }) {
  return (
    <div className="text-text-muted flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      {meta.category && (
        <span className="bg-primary/10 text-primary-deep dark:text-primary-light rounded-full px-3 py-1 text-xs font-medium">
          {meta.category}
        </span>
      )}
      <time dateTime={meta.publishedAt}>{formatDate(meta.publishedAt)}</time>
      {meta.readingTime && (
        <span className="inline-flex items-center gap-1">
          <Clock size={14} aria-hidden="true" />
          {meta.readingTime} de leitura
        </span>
      )}
    </div>
  );
}

function ReadMore() {
  return (
    <span className="text-primary mt-auto inline-flex items-center gap-2 pt-4 font-semibold">
      Ler artigo
      <ArrowRight
        size={16}
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
      />
    </span>
  );
}

const zoom =
  "object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100";

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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Mais recente em destaque */}
          <Link
            href={`/blog/${featured.slug}`}
            data-reveal
            className="card card-interactive group flex flex-col overflow-hidden lg:row-span-2"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={getPostCover(featured.meta, featured.slug)}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={zoom}
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <PostMeta meta={featured.meta} />
              <h3 className="font-display text-text-main mt-4 text-2xl font-bold text-balance md:text-3xl">
                {featured.meta.title}
              </h3>
              <p className="text-text-muted mt-3 line-clamp-3 leading-relaxed">
                {featured.meta.summary}
              </p>
              <ReadMore />
            </div>
          </Link>

          {/* Demais: card horizontal (vertical no mobile) */}
          {others.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              data-reveal
              className="card card-interactive group flex flex-col overflow-hidden sm:flex-row"
            >
              <div className="relative aspect-video shrink-0 overflow-hidden sm:aspect-auto sm:w-2/5">
                <Image
                  src={getPostCover(post.meta, post.slug)}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 20vw"
                  className={zoom}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <PostMeta meta={post.meta} />
                <h3 className="font-display text-text-main mt-3 text-lg font-semibold text-balance">
                  {post.meta.title}
                </h3>
                <p className="text-text-muted mt-2 line-clamp-2 text-sm leading-relaxed">
                  {post.meta.summary}
                </p>
                <ReadMore />
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
