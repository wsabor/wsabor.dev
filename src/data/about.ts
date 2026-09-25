// Conteúdo da seção "Quem sou" da home (AboutIntro).
// Fonte: página Sobre e post "Do Pixel ao Código". Só fatos confirmados.

export type Stat = {
  /** Valor numérico animado pelo contador. */
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** false para valores que não fazem sentido contar (ex.: colocação). */
  animate?: boolean;
};

export type TimelineStep = {
  period: string;
  title: string;
  description: string;
};

export type AboutIntroContent = {
  eyebrow: string;
  title: string;
  bio: string;
  photo: { src: string; alt: string };
  badge: string;
  stats: Stat[];
  timeline: TimelineStep[];
};

export const aboutIntro: AboutIntroContent = {
  eyebrow: "Quem sou",
  title: "Do pixel ao código",
  bio: "Comecei no design gráfico e fiz a transição para o desenvolvimento web. Hoje uno as duas coisas: interfaces pensadas para quem usa e código sólido em Next.js e React, do Figma ao deploy. Em sala de aula, formo a próxima geração de desenvolvedores no SENAI-SP.",
  photo: {
    src: "/img/profile-hero.webp",
    alt: "Wagner Sabor, desenvolvedor e instrutor",
  },
  badge: "Instrutor no SENAI-SP",
  stats: [
    // "Por volta de 2015" (post Do Pixel ao Código) → 10+ anos em 2026.
    { value: 10, suffix: "+", label: "anos em tecnologia" },
    {
      value: 2,
      suffix: "º",
      label: "lugar no Hackathon Agrotech 2025",
      animate: false,
    },
  ],
  timeline: [
    {
      period: "Início",
      title: "Design gráfico",
      description:
        "Diagramação editorial de livros, revistas e jornais, com atendimento direto ao cliente.",
    },
    {
      period: "2015",
      title: "Transição para a tecnologia",
      description:
        "Informática para Negócios na FATEC de São Bernardo do Campo.",
    },
    {
      period: "Desenvolvimento",
      title: "Especialista em Next.js e React",
      description:
        "Aplicações web modernas, unindo UX/UI e código limpo em TypeScript.",
    },
    {
      period: "Hoje",
      title: "Instrutor no SENAI-SP",
      description:
        "Curso Técnico em Desenvolvimento de Sistemas: formando quem vai construir o que vem depois.",
    },
  ],
};
