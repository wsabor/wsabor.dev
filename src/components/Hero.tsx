import Link from "next/link";
import Image from "next/image";

const techStack = ["Next.js", "React", "TypeScript", "Node.js"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Background CSS puro */}
      <div className="hero-bg absolute inset-0 z-0" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-12 lg:px-24">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-12">
          {/* Coluna Esquerda - Texto */}
          <div className="order-2 flex-1 text-right md:order-1 md:max-w-2xl">
            {/* Intro */}
            <p className="text-primary-light mb-3 text-sm font-semibold tracking-widest uppercase">
              Olá, eu sou
            </p>

            {/* Nome com gradiente animado */}
            <h1 className="hero-name mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Wagner Sabor
            </h1>

            {/* Tagline */}
            <p className="text-text-main/80 mb-6 text-lg md:mb-8 lg:text-xl dark:text-neutral-300">
              Desenvolvedor Especialista em{" "}
              <strong className="text-primary-light">Next.js</strong> e{" "}
              <strong className="text-primary-light">React</strong>.
              Transformando ideias em aplicações web modernas e performáticas.
            </p>

            {/* Tech pills */}
            <div className="mb-8 flex flex-wrap justify-end gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="hero-pill">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-end gap-3">
              <Link
                href="/projects"
                className="bg-primary hover:bg-primary-light rounded-lg px-6 py-2.5 text-base font-bold text-white transition-colors md:px-8 md:py-3 md:text-lg"
              >
                Conheça meus Projetos
              </Link>
              <Link
                href="/contact"
                className="border-primary/30 text-primary hover:border-primary hover:bg-primary/5 dark:border-primary/40 dark:hover:bg-primary/10 rounded-lg border px-6 py-2.5 text-base font-bold transition-colors md:px-8 md:py-3 md:text-lg"
              >
                Falar comigo
              </Link>
            </div>
          </div>

          {/* Coluna Direita - Foto */}
          <div className="order-1 w-full max-w-56 shrink-0 md:order-2 md:max-w-52 lg:max-w-sm">
            <div className="relative">
              {/* Pontos decorativos */}
              <div
                className="hero-photo-dots absolute -right-4 -bottom-4 z-0 h-28 w-28 rounded-br-2xl"
                aria-hidden="true"
              />
              {/* Sombra colorida deslocada */}
              <div
                className="bg-primary/20 dark:bg-primary/15 absolute -right-2.5 -bottom-2.5 z-0 h-full w-full rounded-2xl"
                aria-hidden="true"
              />
              {/* Foto */}
              <div className="bg-surface relative z-10 overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10">
                <div className="relative aspect-3/4">
                  <Image
                    src="/img/profile-hero.webp"
                    alt="Wagner Sabor - Desenvolvedor Especialista em Next.js e React"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 224px, (max-width: 1200px) 208px, 384px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
