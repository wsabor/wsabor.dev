import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Mail } from "lucide-react";

import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FeatureCard from "@/components/FeatureCard";
import { WhatsappIcon } from "@/components/BrandIcons";
import {
  businessPage,
  serviceArea,
  WHATSAPP_DISPLAY,
  whatsappHref,
} from "@/data/business";
import { trackAttrs } from "@/lib/analytics";
import {
  getBreadcrumbListSchema,
  getProfessionalServiceSchema,
} from "@/lib/schemas";
import { absoluteUrl, pageMetadata } from "@/lib/site";

const PATH = "/seu-negocio";

export const metadata = pageMetadata({
  path: PATH,
  title: `Sites e Google Meu Negócio em ${serviceArea.city} e ${serviceArea.region}`,
  description: `Site profissional, Perfil da Empresa no Google e anúncios para negócios de ${serviceArea.label}. Fale comigo no WhatsApp.`,
});

const { hero, pains, services, process, examples, faq, finalCta } =
  businessPage;

// Botão principal: WhatsApp com a mensagem pronta. `location` vai para o GA4.
function WhatsappButton({
  location,
  size = "md",
}: {
  location: string;
  size?: "md" | "lg";
}) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      {...trackAttrs("contact_click", { method: "whatsapp", location })}
      className={`group bg-primary-strong hover:bg-primary-deep inline-flex items-center justify-center gap-2 rounded-lg text-center font-bold text-white transition-colors ${
        size === "lg" ? "px-6 py-4 text-lg sm:px-8" : "px-6 py-3"
      }`}
    >
      <WhatsappIcon size={size === "lg" ? 22 : 20} />
      {/* Em telas bem estreitas (320px) o texto longo quebra em duas linhas */}
      <span className="min-[360px]:hidden">WhatsApp</span>
      <span className="hidden min-[360px]:inline">Chamar no WhatsApp</span>
      <span className="sr-only">(abre em nova aba)</span>
    </a>
  );
}

export default function BusinessPage() {
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Home", url: absoluteUrl() },
    { name: "Seu negócio", url: absoluteUrl(PATH) },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={getProfessionalServiceSchema()} />

      <PageHeader
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: PATH, label: "Seu negócio" },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <WhatsappButton location="business_hero" size="lg" />
          <a
            href="#como-funciona"
            className="group text-primary hover:text-primary-deep dark:hover:text-primary-light inline-flex items-center gap-2 font-semibold transition-colors"
          >
            Como funciona
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </PageHeader>

      {/* Dores do cliente */}
      <section className="py-16 md:py-24" aria-labelledby="dores">
        <Reveal className="container mx-auto px-8">
          <SectionHeading
            id="dores"
            eyebrow={pains.eyebrow}
            title={pains.title}
            description={pains.description}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pains.items.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Serviços */}
      <section
        className="section-dots py-16 md:py-24"
        aria-labelledby="servicos"
      >
        <Reveal className="container mx-auto px-8">
          <SectionHeading
            id="servicos"
            eyebrow={services.eyebrow}
            title={services.title}
            description={services.description}
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.items.map(
              ({ icon: Icon, title, description, includes }) => (
                <div
                  key={title}
                  data-reveal
                  className="card card-interactive flex flex-col p-8"
                >
                  <div className="from-primary/20 to-primary-light/10 ring-primary/20 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ring-1">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-text-main text-xl font-semibold">
                    {title}
                  </h3>
                  <p className="text-text-muted mt-2 leading-relaxed">
                    {description}
                  </p>
                  {includes.length > 0 && (
                    <ul className="text-text-muted mt-4 list-disc space-y-1 pl-5 text-sm">
                      {includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ),
            )}
          </div>
        </Reveal>
      </section>

      {/* Como funciona */}
      <section
        id="como-funciona"
        className="scroll-mt-28 py-16 md:py-24"
        aria-labelledby="processo"
      >
        <Reveal className="container mx-auto px-8">
          <SectionHeading
            id="processo"
            eyebrow={process.eyebrow}
            title={process.title}
          />
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map(({ icon: Icon, title, description }, index) => (
              <li
                key={title}
                data-reveal
                className="card relative flex flex-col p-8"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-primary/25 absolute top-6 right-6 text-4xl font-bold"
                >
                  {index + 1}
                </span>
                <div className="from-primary/20 to-primary-light/10 ring-primary/20 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ring-1">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display text-text-main text-lg font-semibold">
                  <span className="sr-only">Passo {index + 1}: </span>
                  {title}
                </h3>
                <p className="text-text-muted mt-2 leading-relaxed">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Exemplos */}
      <section
        className="section-dots py-16 md:py-24"
        aria-labelledby="exemplos"
      >
        <Reveal className="container mx-auto px-8">
          <SectionHeading
            id="exemplos"
            eyebrow={examples.eyebrow}
            title={examples.title}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {examples.items.map((item) => (
              <article
                key={item.title}
                data-reveal
                className="card card-interactive group flex flex-col overflow-hidden"
              >
                <div className="relative h-56 w-full overflow-hidden sm:h-72">
                  <Image
                    src={item.image}
                    alt={`Página inicial do site ${item.title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="eyebrow mb-2">{item.badge}</p>
                  <h3 className="font-display text-text-main text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-text-muted mt-2 flex-1 leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    {...trackAttrs("project_click", {
                      project: item.project,
                      action: item.external ? "live_site" : "case_study",
                      location: "business_page",
                    })}
                    {...(item.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="text-primary hover:text-primary-deep dark:hover:text-primary-light mt-6 inline-flex items-center gap-2 font-semibold transition-colors"
                  >
                    {item.linkLabel}
                    <ArrowUpRight size={16} aria-hidden="true" />
                    {item.external && (
                      <span className="sr-only">(abre em nova aba)</span>
                    )}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Perguntas frequentes */}
      <section className="py-16 md:py-24" aria-labelledby="perguntas">
        <Reveal className="container mx-auto max-w-3xl px-8">
          <SectionHeading
            id="perguntas"
            eyebrow={faq.eyebrow}
            title={faq.title}
            align="center"
          />
          <div className="flex flex-col gap-3">
            {faq.items.map((item) => (
              <details
                key={item.question}
                data-reveal
                className="card group p-0 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="text-text-main flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold md:p-6">
                  {item.question}
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className="text-text-muted shrink-0 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="text-text-muted px-5 pb-5 leading-relaxed md:px-6 md:pb-6">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Chamada final */}
      <section
        className="section-dots py-24 md:py-36"
        aria-labelledby="contato-negocio"
      >
        <Reveal className="container mx-auto px-8">
          <div
            data-reveal
            className="card relative mx-auto max-w-4xl overflow-hidden p-6 text-center sm:p-8 md:p-14"
          >
            <div
              aria-hidden="true"
              className="from-primary/20 via-primary-light/10 pointer-events-none absolute inset-0 bg-radial-[ellipse_at_top] to-transparent to-70%"
            />
            <div className="relative flex flex-col items-center">
              <p className="eyebrow mb-4">{finalCta.eyebrow}</p>
              <h2
                id="contato-negocio"
                className="font-display text-text-main text-3xl font-bold tracking-tight text-balance md:text-5xl"
              >
                {finalCta.title}
              </h2>
              <p className="text-text-muted mt-4 max-w-2xl text-lg text-pretty">
                {finalCta.description}
              </p>
              <div className="mt-8">
                <WhatsappButton location="business_cta" size="lg" />
              </div>
              <p className="text-text-muted mt-6 text-sm">
                WhatsApp {WHATSAPP_DISPLAY} ·{" "}
                <a
                  href="mailto:contato@wsabor.com"
                  {...trackAttrs("contact_click", {
                    method: "email",
                    location: "business_cta",
                  })}
                  className="text-primary hover:text-primary-deep dark:hover:text-primary-light inline-flex items-center gap-1 font-semibold"
                >
                  <Mail size={14} aria-hidden="true" />
                  contato@wsabor.com
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
