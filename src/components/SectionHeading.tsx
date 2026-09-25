import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeadingProps = {
  /** Rótulo curto acima do título (ex.: "Portfólio"). */
  eyebrow: string;
  title: string;
  description?: string;
  /** id do h2, para aria-labelledby da seção. */
  id?: string;
  align?: "left" | "center";
  /** Link opcional à direita do título (ex.: "Ver todos"). */
  action?: { href: string; label: string };
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  action,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      data-reveal
      className={`mb-12 flex flex-col gap-6 md:mb-16 ${
        centered
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={centered ? "max-w-2xl" : "max-w-3xl"}>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2
          id={id}
          className="font-display text-text-main text-3xl font-bold tracking-tight text-balance md:text-5xl"
        >
          {title}
        </h2>
        {description && (
          <p className="text-text-muted mt-4 text-lg text-pretty">
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className="group text-primary hover:text-primary-deep dark:hover:text-primary-light inline-flex shrink-0 items-center gap-2 font-semibold transition-colors"
        >
          {action.label}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}
