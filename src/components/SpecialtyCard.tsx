import type { ReactNode } from "react";

type SpecialtyCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function SpecialtyCard({
  icon,
  title,
  description,
}: SpecialtyCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-surface px-8 py-10 transition-colors hover:border-primary">
      <div className="mb-2 rounded-full bg-background p-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-text-main">{title}</h3>
      <p className="text-text-muted">{description}</p>
    </div>
  );
}
