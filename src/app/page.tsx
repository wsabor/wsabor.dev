import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard"; // Reutilizando nosso componente
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
    slug: "/blog/dev-e-design", // Mantemos /blog como futura pasta de artigos
  },
  {
    id: 2,
    title: "Os 3 Maiores Desafios que Meus Alunos Enfrentam",
    summary:
      "Analisando os obstáculos mais comuns na jornada de um desenvolvedor júnior e como superá-los.",
    slug: "/blog/desafios-alunos",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Seção Hero */}
      <section className="bg-neutral-900 py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6">
            Wagner Sabor
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-8">
            Do Pixel ao Código. Do Código à Educação. <br />
            Eu construo experiências digitais e capacito a próxima geração de
            desenvolvedores.
          </p>
          <Link
            href="/projects" // <-- AJUSTADO
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg rounded-lg px-8 py-3 transition-colors"
          >
            Conheça meus Projetos
          </Link>
        </div>
      </section>

      {/* Seção Especialidades */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-neutral-800 p-4 rounded-full">
                <CodeXml className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Desenvolvimento Full Stack
              </h3>
              <p className="text-neutral-400">
                Construindo aplicações robustas e escaláveis com React, Node.js
                e as melhores práticas do mercado.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-neutral-800 p-4 rounded-full">
                <PenTool className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white">Design & UX</h3>
              <p className="text-neutral-400">
                Criando interfaces intuitivas e experiências de usuário que
                resolvem problemas reais e encantam.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-neutral-800 p-4 rounded-full">
                <BrainCircuit className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Mentoria & Educação
              </h3>
              <p className="text-neutral-400">
                Capacitando novos talentos em tecnologia no SENAI-SP com uma
                abordagem prática e focada no mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Projetos em Destaque */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-neutral-400">
              Uma amostra do meu trabalho, da concepção à implementação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Ver todos os projetos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Artigos Recentes (Blog Teaser) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Artigos Recentes
            </h2>
            <p className="text-lg text-neutral-400">
              Compartilhando conhecimento e insights sobre tecnologia e
              educação.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestArticles.map((article) => (
              <Link
                href={article.slug}
                key={article.id}
                className="block border border-neutral-700 rounded-lg p-6 hover:bg-neutral-800 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-neutral-400 mb-4">{article.summary}</p>
                <span className="font-semibold text-cyan-400 flex items-center gap-2">
                  Ler Artigo <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção CTA Final */}
      <section className="py-24 bg-gradient-to-t from-neutral-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos construir algo incrível juntos?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Se você tem uma ideia, um projeto ou apenas quer conversar sobre
            tecnologia, me chame.
          </p>
          <Link
            href="/contact" // <-- AJUSTADO
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg rounded-lg px-8 py-3 transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </main>
  );
}
