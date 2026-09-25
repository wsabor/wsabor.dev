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
    <div
      data-reveal
      className="card card-interactive flex flex-col gap-4 p-8"
    >
      <div className="from-primary/20 to-primary-light/10 ring-primary/20 text-primary mb-2 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ring-1">
        {icon}
      </div>
      <h3 className="font-display text-text-main text-xl font-semibold">
        {title}
      </h3>
      <p className="text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
