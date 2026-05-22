import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { getProjectBySlug, getAllProjectsMeta } from "@/lib/projects";
import { ImageGallery } from "@/components/ImageGallery";
import { BlogImage } from "@/components/BlogImage";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbListSchema } from "@/lib/schemas";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProjectsMeta().map((p) => ({ slug: p.slug }));
}

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

  try {
    const { meta, content } = getProjectBySlug(slug);

    const projectUrl = `https://wsabor.dev/projects/${slug}`;
    const breadcrumbSchema = getBreadcrumbListSchema([
      { name: "Home", url: "https://wsabor.dev" },
      { name: "Projetos", url: "https://wsabor.dev/projects" },
      { name: meta.title, url: projectUrl },
    ]);

    return (
      <>
        <JsonLd data={breadcrumbSchema} />

        <main className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
          <Link
            href="/projects"
            className="text-text-muted hover:text-primary mb-8 inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar para projetos
          </Link>

          <header className="mb-10">
            <h1 className="text-text-main mb-3 text-4xl font-bold md:text-5xl">
              {meta.title}
            </h1>
            <p className="text-text-muted text-lg">{meta.summary}</p>

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-4">
              {meta.client && (
                <div>
                  <dt className="text-text-muted">Cliente</dt>
                  <dd className="text-text-main font-medium">{meta.client}</dd>
                </div>
              )}
              {meta.year && (
                <div>
                  <dt className="text-text-muted">Ano</dt>
                  <dd className="text-text-main font-medium">{meta.year}</dd>
                </div>
              )}
              {meta.role && (
                <div>
                  <dt className="text-text-muted">Função</dt>
                  <dd className="text-text-main font-medium">{meta.role}</dd>
                </div>
              )}
              {meta.liveUrl && (
                <div>
                  <dt className="text-text-muted">Live</dt>
                  <dd>
                    <a
                      href={meta.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light inline-flex items-center gap-1 font-medium"
                    >
                      Acessar <ExternalLink size={14} />
                    </a>
                  </dd>
                </div>
              )}
            </dl>

            {meta.stack && meta.stack.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {meta.stack.map((s) => (
                  <span
                    key={s}
                    className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </header>

          {meta.coverImage && (
            <div className="hover:border-primary dark:hover:border-primary relative mb-10 aspect-video w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
              <Image
                src={meta.coverImage}
                alt={`Capa do projeto ${meta.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>
          )}

          <article className="prose prose-lg dark:prose-invert max-w-none">
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
                className="bg-primary hover:bg-primary-light inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white transition-colors"
              >
                Ver projeto ao vivo
                <ExternalLink size={18} />
              </a>
            </div>
          )}
        </main>
      </>
    );
  } catch {
    notFound();
  }
}
