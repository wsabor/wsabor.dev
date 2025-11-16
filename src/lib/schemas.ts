// Schemas estruturados para SEO (Schema.org)

// Informações base do site (centralizadas)
const SITE_CONFIG = {
  name: "Wagner Sabor",
  url: "https://wsabor.dev",
  description:
    "Desenvolvedor Especialista em Next.js e React. Transformando ideias em aplicações web modernas e performáticas.",
  logo: "https://wsabor.dev/img/profile-hero.webp",
  author: {
    name: "Wagner Sabor",
    email: "wsabor.senai@gmail.com",
    jobTitle: "Desenvolvedor Full Stack",
    image: "https://wsabor.dev/img/profile-hero.webp",
    location: "Presidente Prudente, São Paulo, Brasil",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/wsabor/",
    github: "https://github.com/wsabor",
    twitter: "https://twitter.com/wsabor",
    // Adicione outras redes se tiver
  },
};

// Schema: WebSite (Informações gerais do site)
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author.name,
    },
    publisher: {
      "@type": "Person",
      name: SITE_CONFIG.author.name,
    },
  };
}

// Schema: Person (Sobre você - versão completa)
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.author.name,
    url: SITE_CONFIG.url,
    image: SITE_CONFIG.author.image,
    email: SITE_CONFIG.author.email,
    jobTitle: SITE_CONFIG.author.jobTitle,
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Presidente Prudente",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.twitter,
      // Adicione outras redes aqui
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Web Development",
      "Front-end Development",
      "Full Stack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "SENAI-SP", // Ajuste conforme sua formação
    },
    worksFor: {
      "@type": "Organization",
      name: "SENAI-SP",
    },
  };
}

// Schema: Organization (Alternativa se você quiser se posicionar como marca)
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    description: SITE_CONFIG.description,
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.author.name,
    },
    sameAs: [SITE_CONFIG.social.linkedin, SITE_CONFIG.social.github],
  };
}

// Schema: BlogPosting (Para posts individuais do blog)
export function getBlogPostingSchema({
  title,
  description,
  publishedAt,
  updatedAt,
  url,
  image,
  keywords,
  category,
  author,
  readingTime,
  wordCount,
}: {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  url: string;
  image?: string;
  keywords?: string[];
  category?: string;
  author?: string;
  readingTime?: string;
  wordCount?: number;
}) {
  const timeRequiredISO = readingTime
    ? `PT${readingTime.replace(/\D/g, "")}M`
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image || SITE_CONFIG.author.image,
    datePublished: new Date(publishedAt).toISOString(),
    dateModified: updatedAt
      ? new Date(updatedAt).toISOString()
      : new Date(publishedAt).toISOString(),
    author: {
      "@type": "Person",
      name: author || SITE_CONFIG.author.name, // Usa autor customizado ou padrão
      url: SITE_CONFIG.url,
      image: SITE_CONFIG.author.image,
    },
    publisher: {
      "@type": "Person",
      name: SITE_CONFIG.author.name,
      image: SITE_CONFIG.author.image,
      logo: {
        "@type": "ImageObject",
        url: SITE_CONFIG.logo,
      },
    },
    url: url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    // ⬇️ PROPRIEDADES OPCIONAIS ⬇️
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(", ") }),
    ...(category && { articleSection: category }),
    ...(timeRequiredISO && { timeRequired: timeRequiredISO }),
    ...(wordCount && { wordCount: wordCount }),
    // ⬆️ ATÉ AQUI ⬆️
  };
}

// Schema: BreadcrumbList (Navegação estruturada)
export function getBreadcrumbListSchema(
  items: {
    name: string;
    url: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
