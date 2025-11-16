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
      addressLocality: "Dracena",
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
