import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="hero-aspect-ratio relative">
        {/* Mobile: items-start (topo) | Desktop: items-center (centro) */}
        <div className="hero-content-wrapper flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div className="hero-background h-full w-full bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent dark:bg-background/5 dark:to-background/15"></div>
          </div>

          {/* Container do conteúdo */}
          <div className="container relative z-10 px-4">
            {/* Flex container - Mobile: column | Desktop: row */}
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">
              {/* Coluna da Esquerda - Texto */}
              <div className="order-2 flex-1 text-center md:order-1 md:max-w-2xl lg:max-w-3xl">
                <h1 className="mb-4 text-4xl font-bold text-text-main dark:bg-gradient-to-b dark:from-white dark:to-neutral-300 dark:bg-clip-text dark:text-transparent md:text-4xl lg:text-6xl">
                  Wagner Sabor
                </h1>

                <p className="mb-6 text-lg font-medium text-text-main/80 dark:text-neutral-200 md:mb-8 lg:text-2xl">
                  Desenvolvedor Especialista em{" "}
                  <strong className="text-primary-light">Next.js</strong> e{" "}
                  <strong className="text-primary-light">React</strong>.
                  Transformando ideias em aplicações web modernas e
                  performáticas.
                </p>

                <Link
                  href="/projects"
                  className="inline-block rounded-lg bg-primary px-6 py-2.5 text-base font-bold text-white transition-colors hover:bg-primary-light md:px-8 md:py-3 md:text-lg"
                >
                  Conheça meus Projetos
                </Link>
              </div>

              {/* Coluna da Direita - Foto */}
              {/* Mobile: menor e no topo | Desktop: maior */}
              <div className="order-1 w-full max-w-[240px] flex-shrink-0 md:order-2 md:max-w-52 lg:max-w-md">
                <div className="overflow-hidden rounded-2xl bg-surface shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                  <div className="relative aspect-[3/4]">
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
