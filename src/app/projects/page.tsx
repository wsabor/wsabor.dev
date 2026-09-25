import { ProjectCard } from "@/components/ProjectCard";
import { allProjects } from "@/data/projects";

import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CallToAction from "@/components/CallToAction";
import { getBreadcrumbListSchema } from "@/lib/schemas";

export default function ProjectsPage() {
  // Gerar breadcrumb para a página de projetos
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Home", url: "https://wsabor.dev" },
    { name: "Projetos", url: "https://wsabor.dev/projects" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Portfólio"
        title="Portfólio de Projetos"
        description="Aqui estão alguns dos projetos que desenvolvi ou orientei, transformando ideias em soluções digitais de valor."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projetos" },
        ]}
      />

      <section className="pb-16 md:pb-24" aria-labelledby="lista-projetos">
        {/* Título só para leitores de tela: os cards usam h3 */}
        <h2 id="lista-projetos" className="sr-only">
          Lista de projetos
        </h2>
        <Reveal className="container mx-auto px-8">
          {/* Primeiro projeto em destaque (largura total), demais em grade */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                featured={index === 0}
                className={index === 0 ? "md:col-span-2 lg:col-span-3" : ""}
                title={project.title}
                image={project.image}
                basePath={project.basePath}
                link={project.link}
                description={project.description}
                tags={project.tags}
                slug={project.slug}
              />
            ))}
          </div>
        </Reveal>
      </section>

      <CallToAction />
    </>
  );
}
