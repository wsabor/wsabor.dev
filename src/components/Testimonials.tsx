import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

type Props = {
  items: Testimonial[];
  title?: string;
  subtitle?: string;
};

export default function Testimonials({
  items,
  title = "O que dizem sobre o meu trabalho",
  subtitle = "Depoimentos de alunos, clientes e parceiros.",
}: Props) {
  if (items.length === 0) return null;

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-text-main md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-text-muted">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.id}
              className="flex h-full flex-col rounded-2xl border border-black/10 bg-surface p-6 transition-colors hover:border-primary/40 dark:border-white/10"
            >
              <Quote
                className="mb-4 text-primary/40"
                size={32}
                aria-hidden="true"
              />
              <blockquote className="flex-1 text-text-main">
                <p className="leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-black/10 pt-4 dark:border-white/10">
                {t.authorImage && (
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={t.authorImage}
                      alt={t.authorName}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <div className="truncate font-semibold text-text-main">
                    {t.authorName}
                  </div>
                  <div className="truncate text-sm text-text-muted">
                    {t.authorRole}
                    {t.authorCompany && (
                      <span className="text-text-muted/70">
                        {" "}
                        · {t.authorCompany}
                      </span>
                    )}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
