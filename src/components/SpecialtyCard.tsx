// src/components/SpecialtyCard.tsx

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
    // O card agora usa a cor 'surface' para o fundo e a borda com opacidade.
    // O hover agora destaca a borda com a cor primária, uma interação mais elegante.
    <div className="bg-surface flex flex-col items-center gap-4 rounded-xl border border-white/10 px-8 py-10 transition-colors hover:border-primary">
      {/* O círculo do ícone usa a cor de fundo principal para criar um efeito de "recorte". */}
      {/* O ícone em si recebe a cor primária. */}
      <div className="mb-2 rounded-full bg-background p-4 text-primary">
        {icon}
      </div>

      {/* O título usa a cor de texto principal. */}
      <h3 className="text-xl font-semibold text-text-main">{title}</h3>

      {/* A descrição usa a cor de texto secundária (muted). */}
      <p className="text-text-muted">{description}</p>
    </div>
  );
}
