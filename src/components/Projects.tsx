import { ProjectCard } from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { featuredProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="bg-surface/40 py-20 md:py-32" aria-labelledby="projetos">
      <Reveal className="container mx-auto px-8">
        <SectionHeading
          id="projetos"
          eyebrow="Portfólio"
          title="Projetos em destaque"
          description="Uma amostra do meu trabalho, da concepção à implementação."
          action={{ href: "/projects", label: "Ver todos os projetos" }}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              link={project.link}
              basePath={project.basePath}
              title={project.title}
              description={project.description}
              tags={project.tags}
              slug={project.slug}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
