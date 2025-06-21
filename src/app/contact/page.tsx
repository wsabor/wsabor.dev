import { Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function ContatoPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-12 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Vamos Conectar?
      </h1>
      <p className="text-lg text-neutral-400 max-w-xl mb-8">
        Estou sempre aberto a novas colaborações, conversas sobre tecnologia,
        educação ou para ajudar em projetos open source.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href="https://github.com/wsabor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <Github size={20} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/wsabor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
        <a
          href="mailto:wsabor.senai@gmail.com"
          className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <Mail size={20} />
          E-mail
        </a>
      </div>
      <div className="w-full max-w-lg border-neutral-700 p-8 mt-8 bg-neutral-800 rounded-xl">
        <ContactForm />
      </div>
    </div>
  );
}
