import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";
import { trackAttrs } from "@/lib/analytics";

type ProjectCardProps = {
  title: string;
  image: string;
  basePath: string;
  link: string;
  description: string;
  tags: string[];
  slug?: string;
  /** Card largo e horizontal (imagem à esquerda no desktop). */
  featured?: boolean;
  className?: string;
};

export function ProjectCard({
  title,
  image,
  basePath,
  link,
  description,
  tags,
  slug,
  featured = false,
  className = "",
}: ProjectCardProps) {
  return (
    <div
      data-reveal
      className={`card card-interactive group flex flex-col overflow-hidden ${
        featured ? "lg:flex-row" : ""
      } ${className}`}
    >
      {image && (
        <div
          className={`relative w-full shrink-0 overflow-hidden ${
            featured ? "h-64 sm:h-80 lg:h-auto lg:min-h-96 lg:w-3/5" : "h-52"
          }`}
        >
          <Image
            src={`${basePath}${image}`}
            alt={`Imagem de capa do projeto ${title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 60vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
          />
        </div>
      )}

      {/* Conteúdo do Card */}
      <div className={`flex flex-1 flex-col ${featured ? "p-8 lg:p-10" : "p-6"}`}>
        {featured && <p className="eyebrow mb-4">Destaque</p>}
        <h3
          className={`font-display text-text-main font-semibold ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {title}
        </h3>
        <p className="text-text-muted mt-2 flex-1">{description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary-deep dark:text-primary-light rounded-full px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botões de ação */}
        <div className="mt-6 flex flex-col gap-2">
          {slug && (
            <Link
              href={`/projects/${slug}`}
              {...trackAttrs("project_click", {
                project: slug,
                action: "case_study",
                location: "card",
              })}
              className="bg-primary-strong hover:bg-primary-deep inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-semibold text-white transition-colors"
            >
              Ver Estudo de Caso
              <FileText size={16} />
            </Link>
          )}
          {link && link !== "#" && (
            <Link
              href={link}
              {...trackAttrs("project_click", {
                project: slug ?? title,
                action: "live_site",
                location: "card",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className={
                slug
                  ? "border-primary/30 text-primary hover:border-primary hover:bg-primary/5 dark:border-primary/40 dark:hover:bg-primary/10 inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 font-semibold transition-colors"
                  : "bg-primary-strong hover:bg-primary-deep inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-semibold text-white transition-colors"
              }
            >
              {slug ? "Visitar site" : "Ver Projeto"}
              <ExternalLink size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
