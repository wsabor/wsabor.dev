import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { aboutIntro } from "@/data/about";

// Seção "Quem sou" da home: foto, bio curta, números e linha do tempo.
export default function AboutIntro() {
  const { eyebrow, title, bio, photo, badge, stats, timeline } = aboutIntro;

  return (
    <section className="py-20 md:py-32" aria-labelledby="quem-sou">
      <Reveal className="container mx-auto grid items-center gap-12 px-8 lg:grid-cols-[5fr_7fr] lg:gap-20">
        {/* Foto com moldura em gradiente e selo */}
        <div data-reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="from-primary/40 to-primary-light/30 absolute -inset-4 rounded-[2rem] bg-linear-to-br opacity-60 blur-2xl"
          />
          <div className="from-primary to-primary-light relative rounded-[1.75rem] bg-linear-to-br p-[2px]">
            <div className="bg-surface relative aspect-4/5 overflow-hidden rounded-[1.65rem]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 384px, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="card absolute -bottom-5 left-6 flex items-center gap-3 px-4 py-3 shadow-xl backdrop-blur-md">
            <span className="bg-primary-strong flex h-9 w-9 items-center justify-center rounded-lg text-white">
              <GraduationCap size={18} aria-hidden="true" />
            </span>
            <span className="text-text-main text-sm font-semibold">{badge}</span>
          </div>
        </div>

        {/* Texto, números e linha do tempo */}
        <div>
          <div data-reveal>
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2
              id="quem-sou"
              className="font-display text-text-main text-3xl font-bold tracking-tight text-balance md:text-5xl"
            >
              {title}
            </h2>
            <p className="text-text-muted mt-6 text-lg leading-relaxed text-pretty">
              {bio}
            </p>
          </div>

          <dl data-reveal className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card flex flex-col px-5 py-4">
                <dt className="text-text-muted order-2 mt-1 text-sm">
                  {stat.label}
                </dt>
                <dd className="font-display from-primary to-primary-light bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    animate={stat.animate}
                  />
                </dd>
              </div>
            ))}
          </dl>

          <ol data-reveal className="border-primary/25 relative mt-10 space-y-6 border-l pl-6">
            {timeline.map((step) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden="true"
                  className="bg-background ring-primary absolute top-1.5 -left-[1.9rem] h-3 w-3 rounded-full ring-2"
                />
                <p className="text-primary-deep dark:text-primary-light text-xs font-semibold tracking-widest uppercase">
                  {step.period}
                </p>
                <p className="text-text-main mt-1 font-semibold">{step.title}</p>
                <p className="text-text-muted text-sm">{step.description}</p>
              </li>
            ))}
          </ol>

          <div data-reveal className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="group bg-primary-strong hover:bg-primary-deep inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white transition-colors"
            >
              Conheça minha trajetória
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
