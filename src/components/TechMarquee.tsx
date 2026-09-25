import { techStack } from "@/data/specialties";

/**
 * Faixa de tecnologias rolando. A lista vem duplicada (a cópia é aria-hidden)
 * para o loop não ter salto; estilos em .marquee* no globals.css.
 */
export default function TechMarquee({ className = "" }: { className?: string }) {
  return (
    <div data-reveal className={`marquee ${className}`}>
      <div className="marquee-track">
        {[false, true].map((duplicate) => (
          <ul
            key={String(duplicate)}
            aria-hidden={duplicate || undefined}
            aria-label={duplicate ? undefined : "Tecnologias"}
            className="marquee-group"
          >
            {techStack.map((tech) => (
              <li
                key={tech}
                className="card text-text-muted px-5 py-2.5 text-sm font-medium whitespace-nowrap"
              >
                {tech}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
