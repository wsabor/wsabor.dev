import { ProjectCard } from "./ProjectCard";
import { featuredProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section className="bg-surface py-16 md:py-44">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-text-main md:text-4xl">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-text-muted">
              Uma amostra do meu trabalho, da concepção à implementação.
            </p>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                link={project.link}
                basePath={project.basePath}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-light"
            >
              Ver todos os projetos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
