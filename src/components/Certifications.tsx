import Image from "next/image";

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certifications } from "@/data/certifications";

// Cada metade da faixa repete a lista para ficar mais larga que a tela;
// com só 5 cards o loop mostraria um vão à direita em telas largas.
const REPEAT = 2;

function formatIssued(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Faixa de selos de certificação rolando (mesma base do TechMarquee).
 * Selos em cinza até o hover/foco (só em dispositivos com hover, ver
 * .cert-card no globals.css); cada card abre a credencial no Microsoft Learn.
 */
export default function Certifications({
  className = "py-20 md:py-32",
}: {
  className?: string;
}) {
  const items = Array.from({ length: REPEAT }, () => certifications).flat();

  return (
    <section
      className={`bg-surface/40 ${className}`}
      aria-labelledby="certificacoes"
    >
      <Reveal className="container mx-auto px-8">
        <SectionHeading
          id="certificacoes"
          eyebrow="Certificações"
          title="Certificações Microsoft"
          description="Fundamentos de nuvem, dados, inteligência artificial, segurança e Power Platform. Clique em um selo para conferir a credencial no Microsoft Learn."
        />

        <div data-reveal className="marquee py-4">
          <div className="marquee-track">
            {[false, true].map((duplicate) => (
              <ul
                key={String(duplicate)}
                aria-hidden={duplicate || undefined}
                aria-label={duplicate ? undefined : "Certificações"}
                className="marquee-group"
              >
                {items.map((cert, i) => {
                  // Só a primeira cópia de cada selo é lida e focável
                  const copy = duplicate || i >= certifications.length;
                  return (
                    <li
                      key={`${cert.code}-${i}`}
                      aria-hidden={(!duplicate && copy) || undefined}
                    >
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={copy ? -1 : undefined}
                        aria-label={`${cert.code} ${cert.name}: ver credencial no Microsoft Learn (abre em nova aba)`}
                        className="card card-interactive cert-card flex w-44 flex-col items-center gap-3 p-5 text-center"
                      >
                        <Image
                          src={cert.badge}
                          alt=""
                          width={112}
                          height={112}
                          className="cert-badge size-28"
                        />
                        <span>
                          <span className="font-display text-text-main block font-bold">
                            {cert.code}
                          </span>
                          <span className="text-text-muted block text-xs">
                            {formatIssued(cert.issuedAt)}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
