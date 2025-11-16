import { getPostBySlug, getAllPostsMeta } from "@/lib/posts";
import { ImageGallery } from "@/components/ImageGallery";
import { BlogImage } from "@/components/BlogImage";
import { Comments } from "@/components/Comments";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

// Importar componente JsonLd e função de schema
import JsonLd from "@/components/JsonLd";
import { getBlogPostingSchema, getBreadcrumbListSchema } from "@/lib/schemas";

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

// Gera os metadados dinâmicos (título da aba) para cada post
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: meta.title,
      description: meta.summary,
      // Adicionar Open Graph para posts
      openGraph: {
        title: meta.title,
        description: meta.summary,
        type: "article",
        publishedTime: meta.publishedAt,
        authors: ["Wagner Sabor"],
      },
    };
  } catch {
    return {
      title: "Post não encontrado",
    };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  try {
    const { meta, content } = getPostBySlug(slug);

    // Construir a URL completa do post
    const postUrl = `https://wsabor.dev/blog/${slug}`;

    // Pegar a primeira imagem da galeria como imagem de destaque (se existir)
    const featuredImage = meta.galleryImages?.[0]
      ? `https://wsabor.dev${meta.galleryBasePath}${meta.galleryImages[0].image}`
      : undefined;

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
      { name: "Home", url: "https://wsabor.dev" },
      { name: "Blog", url: "https://wsabor.dev/blog" },
      { name: meta.title, url: postUrl },
    ]);

    return (
      <>
        {/* Schema.org Structured Data para o post */}
        <JsonLd data={blogPostSchema} />
        <JsonLd data={breadcrumbSchema} />

        <main className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
          <article className="prose prose-lg max-w-none dark:prose-invert">
            <h1>{meta.title}</h1>
            <p className="mb-8 mt-0 text-lg">
              Publicado em{" "}
              {new Date(meta.publishedAt).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
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
          <hr className="my-12 border-black/10 dark:border-white/10" />
          <Comments />
        </main>
      </>
    );
  } catch {
    notFound();
  }
}
