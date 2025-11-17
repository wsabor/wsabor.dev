export default function HeroSkeleton() {
  return (
    <section className="hero-aspect-ratio relative">
      <div className="hero-content-wrapper flex items-center justify-center">
        {/* Background simplificado */}
        <div className="absolute inset-0 z-0 bg-surface"></div>

        {/* Container do conteúdo */}
        <div className="container relative z-10 px-4">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">
            {/* Skeleton do Texto */}
            <div className="order-2 flex-1 space-y-4 text-center md:order-1 md:max-w-2xl lg:max-w-3xl">
              {/* Skeleton do título */}
              <div className="mx-auto h-10 w-64 animate-pulse rounded-lg bg-surface/50 md:h-12 lg:h-16"></div>

              {/* Skeleton da descrição */}
              <div className="mx-auto space-y-2">
                <div className="mx-auto h-6 w-full max-w-xl animate-pulse rounded bg-surface/50"></div>
                <div className="mx-auto h-6 w-full max-w-lg animate-pulse rounded bg-surface/50"></div>
              </div>

              {/* Skeleton do botão */}
              <div className="mx-auto mt-6 h-12 w-48 animate-pulse rounded-lg bg-surface/50 md:mt-8"></div>
            </div>

            {/* Skeleton da Foto */}
            <div className="order-1 w-full max-w-[240px] flex-shrink-0 md:order-2 md:max-w-52 lg:max-w-md">
              <div className="overflow-hidden rounded-2xl bg-surface shadow-2xl">
                <div className="relative aspect-[3/4] animate-pulse bg-surface/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
