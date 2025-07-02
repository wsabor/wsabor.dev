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
    <div className="flex flex-col items-center gap-4 rounded-xl bg-neutral-800 px-8 py-10 transition-colors hover:bg-neutral-700">
      <div className="rounded-full bg-neutral-900 p-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}
