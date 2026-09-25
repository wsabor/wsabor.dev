import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

import { ContactForm } from "@/components/ContactForm";

import JsonLd from "@/components/JsonLd";
import { getBreadcrumbListSchema } from "@/lib/schemas";

export default function ContactPage() {
  // Gerar breadcrumb para a página de contato
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Home", url: "https://wsabor.dev" },
    { name: "Contato", url: "https://wsabor.dev/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-24">
        <h1 className="mb-4 text-4xl font-bold text-text-main md:text-5xl">
          Vamos Conectar?
        </h1>
        <p className="mb-8 max-w-xl text-lg text-text-muted">
          Estou sempre aberto a novas colaborações, conversas sobre tecnologia,
          educação ou para ajudar em projetos open source.
        </p>

        <div className="flex flex-col gap-6 sm:flex-row">
          <a
            href="https://github.com/wsabor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-lg bg-[#333] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-80"
          >
            <GithubIcon size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/wsabor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-lg bg-[#0077B5] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-80"
          >
            <LinkedinIcon size={20} />
            LinkedIn
          </a>

          <a
            href="mailto:wsabor.senai@gmail.com"
            className="flex items-center justify-center gap-3 rounded-lg bg-[#C5221F] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#A50E0E]"
          >
            <Mail size={20} />
            E-mail
          </a>
        </div>

        <div className="mt-16 w-full max-w-lg rounded-xl border border-black/10 bg-surface p-8 dark:border-white/10">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
