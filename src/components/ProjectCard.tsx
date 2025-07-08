import Image from "next/image";
import Link from "next/link"; // 1. Importe o Link
import { ExternalLink } from "lucide-react"; // Um ícone para links externos

type ProjectCardProps = {
  title: string;
  image: string;
  link: string; // 2. Adicione a nova prop
  description: string;
  tags: string[];
};

export function ProjectCard({
  title,
  image,
  link,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-surface transition-colors dark:border-white/10 dark:hover:border-primary">
      {/* Imagem */}
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={`/img/projects/${image}`}
            alt={`Imagem de capa do projeto ${title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Conteúdo do Card */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-text-main">{title}</h3>
        <p className="mt-2 flex-1 text-text-muted">{description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 3. Botão do Link */}
        {link && link !== "#" && (
          <Link
            href={link}
            target="_blank" // Abre em nova aba
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Ver Projeto
            <ExternalLink size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
