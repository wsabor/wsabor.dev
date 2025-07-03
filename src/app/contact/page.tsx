// src/app/contact/page.tsx

import { Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-24">
      <h1 className="mb-4 text-4xl font-bold text-text-main md:text-5xl">
        Vamos Conectar?
      </h1>
      <p className="mb-8 max-w-xl text-lg text-text-muted">
        Estou sempre aberto a novas colaborações, conversas sobre tecnologia,
        educação ou para ajudar em projetos open source.
      </p>

      {/* Botões de Contato no layout e ordem original, mas com cores do tema */}
      <div className="flex flex-col gap-6 sm:flex-row">
        {/* Botão GitHub */}
        <a
          href="https://github.com/wsabor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-lg bg-[#333] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-80"
        >
          <Github size={20} />
          GitHub
        </a>

        {/* Botão LinkedIn */}
        <a
          href="https://www.linkedin.com/in/wsabor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-lg bg-[#0077B5] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-80"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>

        {/* Botão E-mail */}
        <a
          href="mailto:wsabor.senai@gmail.com"
          className="flex items-center justify-center gap-3 rounded-lg bg-[#EA4335] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-80"
        >
          <Mail size={20} />
          E-mail
        </a>
      </div>

      {/* Card do Formulário */}
      <div className="mt-16 w-full max-w-lg rounded-xl border border-black/10 bg-surface p-8 dark:border-white/10">
        <ContactForm />
      </div>
    </main>
  );
}
