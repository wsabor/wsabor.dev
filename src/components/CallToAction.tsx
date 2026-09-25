import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { contactChannels, type ContactChannel } from "@/data/contact";

const channelIcons: Record<ContactChannel["id"], React.ReactNode> = {
  email: <Mail size={20} aria-hidden="true" />,
  linkedin: <LinkedinIcon size={20} />,
  github: <GithubIcon size={20} />,
};

export default function CallToAction() {
  return (
    <section
      className="section-dots py-24 md:py-36"
      aria-labelledby="contato-cta"
    >
      <Reveal className="container mx-auto px-8">
        <div
          data-reveal
          className="card relative mx-auto max-w-6xl overflow-hidden p-6 sm:p-8 md:p-14"
        >
          {/* Brilho da marca atrás do conteúdo */}
          <div
            aria-hidden="true"
            className="from-primary/20 via-primary-light/10 pointer-events-none absolute inset-0 bg-radial-[ellipse_at_top_left] to-transparent to-70%"
          />

          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Contato</p>
              <h2
                id="contato-cta"
                className="font-display text-text-main text-3xl font-bold tracking-tight text-balance md:text-5xl"
              >
                Vamos construir algo incrível juntos?
              </h2>
              <p className="text-text-muted mt-4 text-lg text-pretty">
                Se você tem uma ideia, um projeto ou apenas quer conversar
                sobre tecnologia, me chame.
              </p>
              <Link
                href="/contact"
                className="group bg-primary-strong hover:bg-primary-deep mt-8 inline-flex items-center gap-2 rounded-lg px-8 py-3 text-lg font-bold text-white transition-colors"
              >
                Enviar mensagem
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Atalhos diretos */}
            <ul className="flex flex-col gap-3">
              {contactChannels.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    {...(channel.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="card card-interactive group bg-background/60 flex items-center gap-4 p-4"
                  >
                    <span className="from-primary/20 to-primary-light/10 ring-primary/20 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ring-1">
                      {channelIcons[channel.id]}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="text-text-main block font-semibold">
                        {channel.label}
                      </span>
                      <span className="text-text-muted block truncate text-sm">
                        {channel.handle}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="text-text-muted group-hover:text-primary shrink-0 transition-colors"
                    />
                    {channel.external && (
                      <span className="sr-only">(abre em nova aba)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
