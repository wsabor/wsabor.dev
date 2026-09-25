import Link from "next/link";
import Reveal from "./Reveal";

export default function CallToAction() {
  return (
    <section className="section-dots py-24 md:py-36" aria-labelledby="contato-cta">
      <Reveal className="container mx-auto px-8">
        <div
          data-reveal
          className="card relative mx-auto max-w-4xl overflow-hidden px-8 py-16 text-center md:px-16"
        >
          {/* Brilho da marca atrás do conteúdo */}
          <div
            aria-hidden="true"
            className="from-primary/20 via-primary-light/10 pointer-events-none absolute inset-0 bg-radial-[ellipse_at_top] to-transparent to-70%"
          />
          <div className="relative">
            <p className="eyebrow mb-4 justify-center">Contato</p>
            <h2
              id="contato-cta"
              className="font-display text-text-main mb-4 text-3xl font-bold tracking-tight text-balance md:text-5xl"
            >
              Vamos construir algo incrível juntos?
            </h2>
            <p className="text-text-muted mx-auto mb-10 max-w-xl text-lg text-pretty">
              Se você tem uma ideia, um projeto ou apenas quer conversar sobre
              tecnologia, me chame.
            </p>
            <Link
              href="/contact"
              className="bg-primary-strong hover:bg-primary-deep inline-block rounded-lg px-8 py-3 text-lg font-bold text-white transition-colors"
            >
              Entre em contato
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
