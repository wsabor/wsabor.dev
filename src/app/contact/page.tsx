import { ContactForm } from "@/components/ContactForm";
import ContactChannels from "@/components/ContactChannels";
import PageHeader from "@/components/PageHeader";

import JsonLd from "@/components/JsonLd";
import { getBreadcrumbListSchema } from "@/lib/schemas";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contato",
  description:
    "Fale comigo por e-mail, LinkedIn, GitHub ou pelo formulário de contato.",
});

export default function ContactPage() {
  // Gerar breadcrumb para a página de contato
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Home", url: absoluteUrl() },
    { name: "Contato", url: absoluteUrl("/contact") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Contato"
        title="Vamos Conectar?"
        description="Estou sempre aberto a novas colaborações, conversas sobre tecnologia, educação ou para ajudar em projetos open source."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contato" },
        ]}
      />

      <div className="container mx-auto grid grid-cols-1 items-start gap-10 px-8 pb-20 md:pb-28 lg:grid-cols-[5fr_7fr] lg:gap-16">
        {/* Canais diretos */}
        <section aria-labelledby="canais">
          <h2
            id="canais"
            className="font-display text-text-main mb-2 text-2xl font-bold"
          >
            Fale direto
          </h2>
          <p className="text-text-muted mb-6">
            Prefere seu canal? Escolha um dos atalhos abaixo.
          </p>
          <ContactChannels />
        </section>

        {/* Formulário */}
        <section
          aria-labelledby="formulario"
          className="card relative overflow-hidden p-6 sm:p-8 md:p-10"
        >
          <div
            aria-hidden="true"
            className="from-primary/15 via-primary-light/5 pointer-events-none absolute inset-0 bg-radial-[ellipse_at_top_right] to-transparent to-60%"
          />
          <div className="relative">
            <h2
              id="formulario"
              className="font-display text-text-main mb-2 text-2xl font-bold"
            >
              Envie uma mensagem
            </h2>
            <p className="text-text-muted mb-8">
              Conte um pouco sobre a sua ideia ou projeto.
            </p>
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
