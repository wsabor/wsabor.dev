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
        {/* Primeiro projeto em destaque (largura total), demais em 2 colunas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              featured={index === 0}
              className={index === 0 ? "md:col-span-2" : ""}
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
