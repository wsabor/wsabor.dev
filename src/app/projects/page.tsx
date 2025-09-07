import { ProjectCard } from "@/components/ProjectCard";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        {/* Usando as cores de texto do tema */}
        <h1 className="mb-4 text-4xl font-bold text-text-main md:text-5xl">
          Portfólio de Projetos
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-text-muted">
          Aqui estão alguns dos projetos que desenvolvi ou orientei,
          transformando ideias em soluções digitais de valor.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Mapeando sobre os dados importados */}
        {allProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            basePath={project.basePath}
            link={project.link}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </main>
  );
}
