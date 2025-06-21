import { ProjectCard } from "@/components/ProjectCard";

// Dados mocados (substituiremos pelos arquivos MDX depois)
const mockProjects = [
  {
    id: 1,
    title: "Jogo Educacional (Quiz Preparaí 2025)",
    description:
      "Desenvolvimento ponta a ponta de um quiz interativo para preparar estudantes para avaliações, usando React e Node.js.",
    tags: ["React", "Node.js", "Express", "UX/UI", "Mentoria"],
  },
  {
    id: 2,
    title: "Plataforma de E-Commerce",
    description:
      "Criação de uma plataforma de vendas online completa, aplicando conceitos de engenharia de software e arquitetura clássica.",
    tags: ["Node.js", "MySQL", "Eng. de Software", "Arquitetura"],
  },
  {
    id: 3,
    title: "Soluções Web para Negócios Locais",
    description:
      "Orientação na criação de sites e aplicações para restaurantes, lojas, etc., utilizando a stack MERN.",
    tags: ["MERN", "MongoDB", "React", "SEO", "Design Responsivo"],
  },
];

export default function ProjetosPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Portfólio de Projetos
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          Aqui estão alguns dos projetos que desenvolvi ou orientei,
          transformando ideias em soluções digitais de valor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </main>
  );
}
