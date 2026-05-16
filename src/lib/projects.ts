import fs from "fs";
import path from "path";
import matter from "gray-matter";

type ProjectMetadata = {
  title: string;
  summary: string;
  client?: string;
  year?: string;
  liveUrl?: string;
  coverImage?: string;
  stack?: string[];
  role?: string;
  galleryImages?: { image: string; caption: string }[];
  galleryBasePath?: string;
};

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    meta: data as ProjectMetadata,
    content,
  };
}

export function getAllProjectsMeta() {
  if (!fs.existsSync(projectsDirectory)) return [];

  const files = fs.readdirSync(projectsDirectory);

  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        meta: data as ProjectMetadata,
        slug,
      };
    });
}
