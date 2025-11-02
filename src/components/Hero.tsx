import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="hero-aspect-ratio relative">
        {/* Mobile: items-start (topo) | Desktop: items-center (centro) */}
        <div className="hero-content-wrapper flex items-start justify-center text-center md:items-center">
          <div className="absolute inset-0 z-0">
            <div className="hero-background h-full w-full bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent dark:bg-background/10 dark:to-background/30"></div>
          </div>

          {/* Conteúdo do Hero (acima do overlay) */}
          {/* Mobile: text-left e padding top | Desktop: mx-auto e text-left */}
          <div className="container relative z-10 px-4 pt-8 text-center md:pt-0 md:text-left">
            <div className="md:max-w-md lg:max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold text-text-main drop-shadow-lg dark:bg-gradient-to-b dark:from-white dark:to-neutral-300 dark:bg-clip-text dark:text-transparent md:drop-shadow-none lg:text-6xl">
                Wagner Sabor
              </h1>

              <p className="mb-8 max-w-2xl px-4 text-xl font-medium text-text-main/80 dark:text-neutral-200 md:px-0 md:text-lg lg:px-0 lg:text-2xl">
                Desenvolvedor Especialista em <strong>Next.js</strong> e{" "}
                <strong>React</strong>. <br />
                Transformando ideias em aplicações web modernas e performáticas.
              </p>

              <Link
                href="/projects"
                className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-primary-light md:text-base"
              >
                Conheça meus Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
