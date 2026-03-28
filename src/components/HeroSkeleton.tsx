export default function HeroSkeleton() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="hero-bg absolute inset-0 z-0" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-8 lg:px-12">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between md:gap-12">
          {/* Skeleton do Texto */}
          <div className="order-2 flex-1 space-y-5 text-center md:order-1 md:max-w-2xl md:text-left">
            <div className="bg-surface mx-auto h-4 w-28 animate-pulse rounded-full md:mx-0" />
            <div className="bg-surface mx-auto h-12 w-72 animate-pulse rounded-lg md:mx-0 md:h-14 lg:h-16" />
            <div className="mx-auto space-y-2 md:mx-0">
              <div className="bg-surface h-5 w-full max-w-lg animate-pulse rounded" />
              <div className="bg-surface h-5 w-full max-w-md animate-pulse rounded" />
            </div>
            <div className="flex justify-center gap-2 md:justify-start">
              {[76, 60, 90, 68].map((w, i) => (
                <div
                  key={i}
                  className="bg-surface h-7 animate-pulse rounded-full"
                  style={{ width: w }}
                />
              ))}
            </div>
            <div className="flex justify-center gap-3 md:justify-start">
              <div className="bg-surface h-11 w-48 animate-pulse rounded-lg" />
              <div className="bg-surface h-11 w-36 animate-pulse rounded-lg" />
            </div>
          </div>

          {/* Skeleton da Foto */}
          <div className="order-1 w-full max-w-56 shrink-0 md:order-2 md:max-w-52 lg:max-w-sm">
            <div className="bg-surface overflow-hidden rounded-2xl shadow-2xl">
              <div className="bg-surface/70 relative aspect-3/4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
