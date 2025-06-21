type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="border border-neutral-700 rounded-lg p-6 flex flex-col gap-4 hover:bg-neutral-800 transition-colors">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-neutral-400 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-cyan-900/50 text-cyan-300 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
