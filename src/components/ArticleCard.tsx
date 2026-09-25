import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getPostCover, type PostMetadata } from "@/lib/posts";

// timeZone UTC: publishedAt é só a data; sem isso, no fuso do Brasil
// "2025-09-03" viraria 2 de setembro.
export function formatPostDate(
  date: string,
  month: "short" | "long" = "short",
) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month,
    year: "numeric",
    timeZone: "UTC",
  });
}

export function PostMeta({
  meta,
  showCategory = true,
}: {
  meta: PostMetadata;
  showCategory?: boolean;
}) {
  return (
    <div className="text-text-muted flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      {showCategory && meta.category && (
        <span className="bg-primary/10 text-primary-deep dark:text-primary-light rounded-full px-3 py-1 text-xs font-medium">
          {meta.category}
        </span>
      )}
      <time dateTime={meta.publishedAt}>{formatPostDate(meta.publishedAt)}</time>
      {meta.readingTime && (
        <span className="inline-flex items-center gap-1">
          <Clock size={14} aria-hidden="true" />
          {meta.readingTime} de leitura
        </span>
      )}
    </div>
  );
}

const zoom =
  "object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100";

type Variant =
  /** Vertical grande (destaque da home, ocupa 2 linhas). */
  | "featured"
  /** Horizontal largo (destaque da lista do blog). */
  | "featured-wide"
  /** Horizontal compacto (coluna lateral da home). */
  | "horizontal"
  /** Vertical padrão (grades). */
  | "default";

const layout: Record<
  Variant,
  { card: string; media: string; body: string; title: string; clamp: string; sizes: string }
> = {
  featured: {
    card: "flex-col lg:row-span-2",
    media: "aspect-video",
    body: "p-8",
    title: "mt-4 text-2xl font-bold md:text-3xl",
    clamp: "mt-3 line-clamp-3",
    sizes: "(max-width: 1024px) 100vw, 50vw",
  },
  "featured-wide": {
    card: "flex-col lg:flex-row",
    media: "aspect-video lg:aspect-auto lg:min-h-96 lg:w-3/5",
    body: "p-8 lg:p-10",
    title: "mt-4 text-2xl font-bold md:text-3xl",
    clamp: "mt-3 line-clamp-4",
    sizes: "(max-width: 1024px) 100vw, 60vw",
  },
  horizontal: {
    card: "flex-col sm:flex-row",
    media: "aspect-video sm:aspect-auto sm:w-2/5",
    body: "p-6",
    title: "mt-3 text-lg font-semibold",
    clamp: "mt-2 line-clamp-2 text-sm",
    sizes: "(max-width: 640px) 100vw, 20vw",
  },
  default: {
    card: "flex-col",
    media: "aspect-video",
    body: "p-6",
    title: "mt-3 text-xl font-semibold",
    clamp: "mt-2 line-clamp-3",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  },
};

export default function ArticleCard({
  slug,
  meta,
  variant = "default",
  className = "",
}: {
  slug: string;
  meta: PostMetadata;
  variant?: Variant;
  className?: string;
}) {
  const l = layout[variant];

  return (
    <Link
      href={`/blog/${slug}`}
      data-reveal
      className={`card card-interactive group flex overflow-hidden ${l.card} ${className}`}
    >
      <div className={`relative shrink-0 overflow-hidden ${l.media}`}>
        {/* Decorativa: o título do link já descreve o destino */}
        <Image
          src={getPostCover(meta, slug)}
          alt=""
          fill
          sizes={l.sizes}
          className={zoom}
        />
      </div>
      <div className={`flex flex-1 flex-col ${l.body}`}>
        <PostMeta meta={meta} />
        <h3 className={`font-display text-text-main text-balance ${l.title}`}>
          {meta.title}
        </h3>
        <p className={`text-text-muted leading-relaxed ${l.clamp}`}>
          {meta.summary}
        </p>
        <span className="text-primary mt-auto inline-flex items-center gap-2 pt-4 font-semibold">
          Ler artigo
          <ArrowRight
            size={16}
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
