import Link from "next/link";

const techStack = ["Next.js", "React", "TypeScript", "Node.js"];

// Conteúdo do hero exibido sobre o primeiro frame do ScrollSequence.
// O Hero.tsx original continua disponível para o layout "hero + scroll abaixo".
export default function HeroIntro() {
  return (
    <div className="container mx-auto max-w-3xl px-6 text-center">
      <p className="text-primary-light mb-3 text-sm font-semibold tracking-widest uppercase">
        Olá, eu sou
      </p>

      <h1 className="hero-name mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
        Wagner Sabor
      </h1>

      <p className="mb-6 text-lg text-neutral-200 md:mb-8 lg:text-xl">
        Desenvolvedor Especialista em{" "}
        <strong className="text-primary-light">Next.js</strong> e{" "}
        <strong className="text-primary-light">React</strong>. Transformando
        ideias em aplicações web modernas e performáticas.
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="hero-pill hero-pill-on-media">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/projects"
          className="bg-primary-strong hover:bg-primary-deep rounded-lg px-6 py-2.5 text-base font-bold text-white transition-colors md:px-8 md:py-3 md:text-lg"
        >
          Conheça meus Projetos
        </Link>
        <Link
          href="/contact"
          className="border-primary/40 text-primary hover:border-primary hover:bg-primary/10 rounded-lg border bg-neutral-950/70 px-6 py-2.5 text-base font-bold backdrop-blur-sm transition-colors md:px-8 md:py-3 md:text-lg"
        >
          Falar comigo
        </Link>
      </div>
    </div>
  );
}
