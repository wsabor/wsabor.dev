import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { CodeXml, PenTool, BrainCircuit, ArrowRight } from "lucide-react";

// Dados mocados (depois, eles virão dos seus arquivos MDX)
const featuredProjects = [
  {
    id: 1,
    title: "Jogo Educacional (Quiz Preparaí 2025)",
    description:
      "Desenvolvimento de um quiz interativo para preparar estudantes, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
  {
    id: 2,
    title: "Plataforma de E-Commerce",
    description:
      "Criação de uma plataforma de vendas completa, aplicando conceitos de engenharia de software.",
    tags: ["Node.js", "MySQL", "Eng. de Software"],
  },
  {
    id: 3,
    title: "Soluções Web para Negócios Locais",
    description:
      "Orientação na criação de sites para diversos segmentos, utilizando a stack MERN.",
    tags: ["MERN", "MongoDB", "React", "SEO"],
  },
];

const latestArticles = [
  {
    id: 1,
    title: "Por que todo Dev Deveria Aprender Design",
    summary:
      "Uma reflexão sobre como os princípios de design podem transformar a maneira como escrevemos código e construímos produtos.",
    slug: "/blog/dev-e-design",
  },
  {
    id: 2,
    title: "Os 3 Maiores Desafios que Meus Alunos Enfrentam",
    summary:
      "Analisando os obstáculos mais comuns na jornada de um desenvolvedor júnior e como superá-los.",
    slug: "/blog/desafios-alunos",
  },
];

const specialties = [
  {
    icon: <CodeXml className="text-primary" size={32} />,
    title: "Desenvolvimento Full Stack",
    description:
      "Construindo aplicações robustas e escaláveis com React, Node.js e as melhores práticas do mercado.",
  },
  {
    icon: <PenTool className="text-primary" size={32} />,
    title: "Design & UX",
    description:
      "Criando interfaces intuitivas e experiências de usuário que resolvem problemas reais e encantam.",
  },
  {
    icon: <BrainCircuit className="text-primary" size={32} />,
    title: "Mentoria & Educação",
    description:
      "Capacitando novos talentos em tecnologia com uma abordagem prática e focada no mercado.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Seção Hero - COM ASPECT RATIO RESPONSIVO */}
      <section className="hero-aspect-ratio relative">
        <div className="hero-content-wrapper flex items-center justify-center text-center">
          {/* Contêiner da Imagem de Fundo e Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="hero-background h-full w-full bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 bg-background/20 bg-gradient-to-t from-background via-transparent to-background/40"></div>
          </div>

          {/* Conteúdo do Hero (acima do overlay) */}
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                Wagner Sabor
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-neutral-200 md:text-2xl">
                Do Pixel ao Código. Do Código à Educação. <br />
                Eu construo experiências digitais e capacito a próxima geração
                de desenvolvedores.
              </p>
              <Link
                href="/projects"
                className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-primary-light"
              >
                Conheça meus Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Especialidades */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">
            {specialties.map((specialty) => (
              <SpecialtyCard
                key={specialty.title}
                icon={specialty.icon}
                title={specialty.title}
                description={specialty.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Projetos em Destaque */}
      <section className="bg-neutral-900 py-16 md:py-44">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-neutral-400">
              Uma amostra do meu trabalho, da concepção à implementação.
            </p>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/projects" // <-- AJUSTADO
              className="inline-flex items-center gap-2 font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Ver todos os projetos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Artigos Recentes (Blog Teaser) */}
      <section className="py-16 md:py-44">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Artigos Recentes
            </h2>
            <p className="text-lg text-neutral-400">
              Compartilhando conhecimento e insights sobre tecnologia e
              educação.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {latestArticles.map((article) => (
              <Link
                href={article.slug}
                key={article.id}
                className="block rounded-xl border border-neutral-700 p-6 transition-colors hover:bg-neutral-800"
              >
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {article.title}
                </h3>
                <p className="mb-4 text-neutral-400">{article.summary}</p>
                <span className="flex items-center gap-2 font-semibold text-cyan-400">
                  Ler Artigo <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção CTA Final */}
      <section className="bg-gradient-to-t from-neutral-800 to-black py-16 py-24 md:py-44">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Vamos construir algo incrível juntos?
          </h2>
          <p className="mb-8 text-lg text-neutral-300">
            Se você tem uma ideia, um projeto ou apenas quer conversar sobre
            tecnologia, me chame.
          </p>
          <Link
            href="/contact" // <-- AJUSTADO
            className="inline-block rounded-lg bg-cyan-600 px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-cyan-500"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </>
  );
}
