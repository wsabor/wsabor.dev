import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { getProjectBySlug, getAllProjectsMeta } from "@/lib/projects";
import { ImageGallery } from "@/components/ImageGallery";
import { BlogImage } from "@/components/BlogImage";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CallToAction from "@/components/CallToAction";
import { ProjectCard } from "@/components/ProjectCard";
import { allProjects } from "@/data/projects";
import { getBreadcrumbListSchema } from "@/lib/schemas";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProjectsMeta().map((p) => ({ slug: p.slug }));
}

// Slugs fora do generateStaticParams respondem 404 real (sem render dinâmico)
export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  try {
    const { meta } = getProjectBySlug(slug);
    return {
      title: meta.title,
      description: meta.summary,
      openGraph: {
        title: meta.title,
        description: meta.summary,
        type: "article",
      },
    };
  } catch {
    return { title: "Projeto não encontrado" };
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  // Só a leitura do conteúdo fica no try: erros de render não são capturados por try/catch
  let entry: ReturnType<typeof getProjectBySlug>;
  try {
    entry = getProjectBySlug(slug);
  } catch {
    notFound();
  }
  const { meta, content } = entry;

  const projectUrl = `https://wsabor.dev/projects/${slug}`;
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Home", url: "https://wsabor.dev" },
    { name: "Projetos", url: "https://wsabor.dev/projects" },
    { name: meta.title, url: projectUrl },
  ]);

  const facts = [
    { label: "Cliente", value: meta.client },
    { label: "Ano", value: meta.year },
    { label: "Função", value: meta.role },
  ].filter((fact): fact is { label: string; value: string } => !!fact.value);

  // Outros projetos: estudos de caso primeiro, depois os demais (até 3)
  const otherProjects = allProjects
    .filter((project) => project.slug !== slug)
    .sort((a, b) => Number(!!b.slug) - Number(!!a.slug))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Estudo de caso"
        title={meta.title}
        description={meta.summary}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projetos" },
          { href: `/projects/${slug}`, label: meta.title },
        ]}
      >
        {meta.stack && meta.stack.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Tecnologias">
            {meta.stack.map((s) => (
              <li
                key={s}
                className="bg-primary/10 text-primary-deep dark:text-primary-light rounded-full px-3 py-1 text-xs font-medium"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </PageHeader>

      <Reveal className="container mx-auto px-8">
        {/* Ficha do projeto */}
        <dl data-reveal className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="card flex flex-col px-5 py-4">
              <dt className="text-text-muted text-xs font-semibold tracking-widest uppercase">
                {fact.label}
              </dt>
              <dd className="text-text-main mt-1 font-semibold">
                {fact.value}
              </dd>
            </div>
          ))}
          {meta.liveUrl && (
            <div className="card flex flex-col px-5 py-4">
              <dt className="text-text-muted text-xs font-semibold tracking-widest uppercase">
                Online
              </dt>
              <dd className="mt-1">
                <a
                  href={meta.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-deep dark:hover:text-primary-light inline-flex items-center gap-1 font-semibold transition-colors"
                >
                  Acessar site
                  <ExternalLink size={14} aria-hidden="true" />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </dd>
            </div>
          )}
        </dl>

        {meta.coverImage && (
          <div
            data-reveal
            className="card relative mt-8 aspect-video w-full overflow-hidden"
          >
            <Image
              src={meta.coverImage}
              alt={`Capa do projeto ${meta.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1216px"
              priority
            />
          </div>
        )}

        {/* Resultados em destaque (frontmatter highlights) */}
        {meta.highlights && meta.highlights.length > 0 && (
          <section aria-labelledby="destaques" className="mt-16">
            <h2 id="destaques" className="eyebrow mb-6">
              Resultados em destaque
            </h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {meta.highlights.map((h) => (
                <li key={h.label} data-reveal className="card px-6 py-6">
                  <p className="font-display from-primary to-primary-light bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                    {h.value}
                  </p>
                  <p className="text-text-muted mt-2">{h.label}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <article
          data-reveal
          className="prose prose-lg dark:prose-invert mx-auto mt-16 max-w-3xl"
        >
          <MDXRemote
            source={content}
            components={{
              ImageGallery: () => (
                <ImageGallery
                  images={meta.galleryImages || []}
                  basePath={meta.galleryBasePath || ""}
                />
              ),
              BlogImage,
            }}
          />
        </article>

        {meta.liveUrl && (
          <div className="mt-12 flex justify-center">
            <a
              href={meta.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-strong hover:bg-primary-deep inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white transition-colors"
            >
              Ver projeto ao vivo
              <ExternalLink size={18} aria-hidden="true" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        )}
      </Reveal>

      {/* Outros projetos */}
      <section className="py-20 md:py-28" aria-labelledby="outros-projetos">
        <Reveal className="container mx-auto px-8">
          <SectionHeading
            id="outros-projetos"
            eyebrow="Portfólio"
            title="Outros projetos"
            action={{ href: "/projects", label: "Ver todos os projetos" }}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
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
