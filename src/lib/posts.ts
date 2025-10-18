import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 1. DEFINA O TIPO AQUI, NO TOPO DO ARQUIVO
// Definimos o tipo GalleryImage para representar cada imagem da galeria com uma legenda.
// Isso nos permite ter uma estrutura mais rica para as imagens, incluindo a possibilidade de adicionar legendas.
type GalleryImage = {
  image: string;
  caption: string;
};

// Adicionamos 'galleryImages' como um array opcional de strings.
type PostMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  galleryImages?: GalleryImage[]; // Agora é um array de GalleryImage
  galleryBasePath?: string; // Novo campo para o caminho base das imagens
  slug: string;
};

const postsDirectory = path.join(process.cwd(), "content/posts");

// Função para pegar os dados de um post específico pelo slug
export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    // 2. USE O TIPO AQUI
    meta: data as PostMetadata,
    content,
  };
}

// Função para pegar todos os posts (apenas os metadados)
export function getAllPostsMeta() {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      // 3. E USE O TIPO AQUI TAMBÉM
      meta: data as PostMetadata,
      slug,
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.meta.publishedAt).getTime() -
      new Date(a.meta.publishedAt).getTime(),
  );
}
