import Link from "next/link";
import Image from "next/image";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <>
      <section className="hero-aspect-ratio relative">
        {/* Mobile: items-start (topo) | Desktop: items-center (centro) */}
        <div className="hero-content-wrapper flex items-center justify-center">
          <HeroBackground />

          {/* Container do conteúdo */}
          <div className="relative z-10 container px-8 lg:px-12">
            {/* Flex container - Mobile: column | Desktop: row */}
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-8">
              {/* Coluna da Esquerda - Texto */}
              <div className="order-2 flex-1 text-center md:order-1 md:max-w-2xl">
                <h1 className="text-text-main mb-4 text-xl font-bold md:text-4xl lg:text-5xl dark:bg-linear-to-b dark:from-white dark:to-neutral-300 dark:bg-clip-text dark:text-transparent">
                  Wagner Sabor
                </h1>

                <p className="text-text-main/80 mb-6 text-lg font-medium md:mb-8 lg:text-xl dark:text-neutral-200">
                  Desenvolvedor Especialista em{" "}
                  <strong className="text-primary-light">Next.js</strong> e{" "}
                  <strong className="text-primary-light">React</strong>.
                  Transformando ideias em aplicações web modernas e
                  performáticas.
                </p>

                <Link
                  href="/projects"
                  className="bg-primary hover:bg-primary-light inline-block rounded-lg px-6 py-2.5 text-base font-bold text-white transition-colors md:px-8 md:py-3 md:text-lg"
                >
                  Conheça meus Projetos
                </Link>
              </div>

              {/* Coluna da Direita - Foto */}
              {/* Mobile: menor e no topo | Desktop: maior */}
              <div className="order-1 w-full max-w-60 shrink-0 md:order-2 md:max-w-52 lg:max-w-sm">
                <div className="bg-surface overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                  <div className="relative aspect-3/4">
                    <Image
                      src="/img/profile-hero.webp"
                      alt="Wagner Sabor - Desenvolvedor Especialista em Next.js e React"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 200px, (max-width: 1200px) 384px, 448px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
