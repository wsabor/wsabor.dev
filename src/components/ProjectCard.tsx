type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    // Usando bg-surface para o fundo do card e a borda com opacidade
    <div className="flex flex-col gap-4 rounded-xl border border-black/10 bg-surface p-6 transition-colors hover:border-primary dark:border-white/10 dark:hover:border-primary">
      {/* Usando text-main para o título */}
      <h3 className="text-xl font-semibold text-text-main">{title}</h3>
      {/* Usando text-muted para a descrição */}
      <p className="flex-1 text-text-muted">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          // Usando a cor primary para as tags, com opacidade
          <span
            key={tag}
            className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
