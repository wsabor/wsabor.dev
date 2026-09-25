import type { LucideIcon } from "lucide-react";

// Card com ícone em caixa de gradiente, título e descrição.
export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div data-reveal className="card card-interactive flex flex-col p-8">
      <div className="from-primary/20 to-primary-light/10 ring-primary/20 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ring-1">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="font-display text-text-main text-lg font-semibold">
        {title}
      </h3>
      <p className="text-text-muted mt-2 leading-relaxed">{description}</p>
    </div>
  );
}
