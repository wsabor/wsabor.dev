import Image from "next/image";
import { getPostBySlug, getAllPostsMeta, getPostCover } from "@/lib/posts";
import { ImageGallery } from "@/components/ImageGallery";
import { BlogImage } from "@/components/BlogImage";
import { Comments } from "@/components/Comments";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

// Importar componente JsonLd e função de schema
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ArticleCard, { PostMeta } from "@/components/ArticleCard";
import ReadingProgress from "@/components/ReadingProgress";
import CallToAction from "@/components/CallToAction";
import { getBlogPostingSchema, getBreadcrumbListSchema } from "@/lib/schemas";
import { absoluteUrl, pageMetadata } from "@/lib/site";

// Tipo para os params no Next.js 15
type Props = {
  params: Promise<{ slug: string }>;
};

// Gera os parâmetros estáticos para cada post na hora do build
export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Slugs fora do generateStaticParams respondem 404 real (sem render dinâmico)
export const dynamicParams = false;

// Gera os metadados dinâmicos (título da aba) para cada post
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  try {
    const { meta } = getPostBySlug(slug);
    // A imagem OG vem do opengraph-image.tsx da rota
    return pageMetadata({
      path: `/blog/${slug}`,
      fileImage: true,
      title: meta.title,
      description: meta.summary,
      openGraph: {
        type: "article",
        publishedTime: meta.publishedAt,
        authors: ["Wagner Sabor"],
      },
    });
  } catch {
    return {
      title: "Post não encontrado",
    };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  // Só a leitura do conteúdo fica no try: erros de render não são capturados por try/catch
  let entry: ReturnType<typeof getPostBySlug>;
  try {
    entry = getPostBySlug(slug);
  } catch {
    notFound();
  }
  const { meta, content } = entry;

  // Construir a URL completa do post
  const postUrl = absoluteUrl(`/blog/${slug}`);

  // Capa do post (mesma dos cards): cover → 1ª imagem da galeria → imagem OG
  const cover = getPostCover(meta, slug);
  const featuredImage = absoluteUrl(cover);

  // Leia também: outros posts, mais recentes primeiro
  const relatedPosts = getAllPostsMeta()
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  // Gerar o schema do post
  const blogPostSchema = getBlogPostingSchema({
    title: meta.title,
    description: meta.summary,
    publishedAt: meta.publishedAt,
    updatedAt: meta.updatedAt, // ← Novo
    url: postUrl,
    image: featuredImage,
    keywords: meta.keywords, // ← Novo
    category: meta.category, // ← Novo
    author: meta.author, // ← Novo
    readingTime: meta.readingTime, // ← Novo
    wordCount: meta.wordCount, // ← Novo
  });

  // Gerar o breadcrumb do post
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Home", url: absoluteUrl() },
    { name: "Blog", url: absoluteUrl("/blog") },
    { name: meta.title, url: postUrl },
  ]);

  return (
    <>
      {/* Schema.org Structured Data para o post */}
      <JsonLd data={blogPostSchema} />
      <JsonLd data={breadcrumbSchema} />

      <ReadingProgress targetId="post-content" />

      <PageHeader
        eyebrow={meta.category ?? "Artigo"}
        title={meta.title}
        description={meta.summary}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { href: `/blog/${slug}`, label: meta.title },
        ]}
      >
        <PostMeta meta={meta} showCategory={false} />
      </PageHeader>

      <div className="container mx-auto px-8">
        <div className="card relative mx-auto aspect-video max-w-5xl overflow-hidden">
          <Image
            src={cover}
            alt=""
            fill
            sizes="(max-width: 1100px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>

        <article
          id="post-content"
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

        <div className="mx-auto max-w-3xl">
          <hr className="my-12 border-black/10 dark:border-white/10" />
          <Comments />
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <section className="py-20 md:py-28" aria-labelledby="leia-tambem">
          <Reveal className="container mx-auto px-8">
            <SectionHeading
              id="leia-tambem"
              eyebrow="Blog"
              title="Leia também"
              action={{ href: "/blog", label: "Ver todos os artigos" }}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <ArticleCard key={post.slug} {...post} />
              ))}
            </div>
          </Reveal>
        </section>
      )}

      <CallToAction />
    </>
  );
}
