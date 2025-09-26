import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="hero-aspect-ratio relative">
        <div className="hero-content-wrapper flex items-center justify-center text-center">
          <div className="absolute inset-0 z-0">
            <div className="hero-background h-full w-full bg-cover bg-center bg-no-repeat"></div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent dark:bg-background/10 dark:to-background/30"></div>
          </div>

          {/* Conteúdo do Hero (acima do overlay) */}
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold text-text-main dark:bg-gradient-to-b dark:from-white dark:to-neutral-300 dark:bg-clip-text dark:text-transparent md:text-6xl">
                Wagner Sabor
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-xl font-medium text-text-main/80 dark:text-neutral-200 md:text-2xl">
                Do Pixel ao Código. Do Código à Educação. <br />
                Eu construo experiências digitais e capacito a próxima geração
                de desenvolvedores.
              </p>

              <Link
                href="/projects"
                className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-primary-light"
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
