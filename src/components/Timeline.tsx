import type { TimelineStep } from "@/data/about";

// Linha do tempo vertical (período, título, descrição). Usada em "Quem sou"
// (home) e na página /about.
export default function Timeline({
  steps,
  className = "",
}: {
  steps: TimelineStep[];
  className?: string;
}) {
  return (
    <ol
      data-reveal
      className={`border-primary/25 relative space-y-6 border-l pl-6 ${className}`}
    >
      {steps.map((step) => (
        <li key={step.title} className="relative">
          <span
            aria-hidden="true"
            className="bg-background ring-primary absolute top-1.5 -left-[1.9rem] h-3 w-3 rounded-full ring-2"
          />
          <p className="text-primary-deep dark:text-primary-light text-xs font-semibold tracking-widest uppercase">
            {step.period}
          </p>
          <p className="text-text-main mt-1 font-semibold">{step.title}</p>
          <p className="text-text-muted text-sm">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
