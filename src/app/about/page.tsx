import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import FeatureCard from "@/components/FeatureCard";
import TechMarquee from "@/components/TechMarquee";
import CallToAction from "@/components/CallToAction";
import { aboutIntro, aboutPage } from "@/data/about";
import { getBreadcrumbListSchema } from "@/lib/schemas";

export default function AboutPage() {
  // Gerar breadcrumb para a página sobre
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Home", url: "https://wsabor.dev" },
    { name: "Sobre", url: "https://wsabor.dev/about" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Sobre"
        title="Do Pixel ao Código"
        description={aboutPage.intro}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "Sobre" },
        ]}
      >
        <Link
          href="/contact"
          className="bg-primary-strong hover:bg-primary-deep inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white transition-colors"
        >
          <Mail size={18} aria-hidden="true" />
          Falar comigo
        </Link>
      </PageHeader>

      {/* Trajetória: foto + linha do tempo */}
      <section className="py-16 md:py-24" aria-labelledby="trajetoria">
        <Reveal className="container mx-auto grid items-center gap-12 px-8 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <figure
            data-reveal
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="from-primary/40 to-primary-light/30 absolute -inset-4 rounded-4xl bg-linear-to-br opacity-60 blur-2xl"
            />
            <div className="from-primary to-primary-light relative rounded-[1.75rem] bg-linear-to-br p-0.5">
              <div className="bg-surface relative aspect-square overflow-hidden rounded-[1.65rem]">
                <Image
                  src={aboutPage.photo.src}
                  alt={aboutPage.photo.alt}
                  fill
                  sizes="(max-width: 1024px) 384px, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <figcaption className="text-text-muted relative mt-4 text-center text-sm">
              {aboutPage.photo.caption}
            </figcaption>
          </figure>

          <div>
            <SectionHeading
              id="trajetoria"
              eyebrow="Trajetória"
              title="Do design gráfico à sala de aula"
            />
            <Timeline steps={aboutIntro.timeline} />
          </div>
        </Reveal>
      </section>

      {/* Filosofia */}
      <section
        className="section-dots py-16 md:py-24"
        aria-labelledby="filosofia"
      >
        <Reveal className="container mx-auto px-8">
          <SectionHeading
            id="filosofia"
            eyebrow="Como eu trabalho"
            title="Minha filosofia"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aboutPage.philosophy.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Stack */}
      <section className="py-16 md:py-24" aria-labelledby="stack">
        <Reveal className="container mx-auto px-8">
          <SectionHeading
            id="stack"
            eyebrow="Ferramentas"
            title="Stack tecnológica"
            description={aboutPage.stack}
          />
          <TechMarquee />
        </Reveal>
      </section>

      {/* Além do código */}
      <section
        className="bg-surface/40 py-16 md:py-24"
        aria-labelledby="alem-do-codigo"
      >
        <Reveal className="container mx-auto px-8">
          <SectionHeading
            id="alem-do-codigo"
            eyebrow="Fora do editor"
            title="Além do código"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aboutPage.beyondCode.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Reveal>
      </section>

      <CallToAction />
    </>
  );
}
