import {
  Bot,
  Box,
  Code2,
  Cpu,
  Gauge,
  Gem,
  GraduationCap,
  Palette,
  Rocket,
  type LucideIcon,
} from "lucide-react";

// Conteúdo da seção "Quem sou" da home (AboutIntro) e da página /about.
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
    { value: 15, suffix: "+", label: "anos em tecnologia" },
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

// ---------------------------------------------------------------------------
// Página /about (textos originais da página, divididos em título + descrição)

export type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const aboutPage = {
  intro:
    "Minha jornada começou no design gráfico e me levou ao desenvolvimento web. Hoje, sou especialista em Next.js e React, criando aplicações modernas que combinam código robusto com design intuitivo, para criar produtos que as pessoas amam usar.",
  photo: {
    src: "/img/profile_working.webp",
    alt: "Wagner trabalhando em um notebook",
    caption: "Trabalhando em um projeto desafiador.",
  },
  philosophy: [
    {
      icon: Gauge,
      title: "Performance em primeiro lugar",
      description:
        "Aplicações rápidas, otimizadas e escaláveis usando as melhores práticas do Next.js.",
    },
    {
      icon: Palette,
      title: "Design que funciona",
      description:
        "A experiência do usuário não é uma etapa final, é o ponto de partida. Penso em UX/UI antes mesmo da primeira linha de código.",
    },
    {
      icon: Code2,
      title: "Código limpo e manutenível",
      description:
        "TypeScript, componentização inteligente e arquitetura escalável para projetos que crescem.",
    },
    {
      icon: Rocket,
      title: "Do design ao deploy",
      description:
        "Experiência completa no ciclo de desenvolvimento, desde o Figma até a implantação do sistema.",
    },
    {
      icon: Gem,
      title: "Valor acima de tudo",
      description:
        "Meu objetivo é entregar soluções eficientes e duradouras que resolvam problemas reais, seja para um cliente ou para um aluno.",
    },
    {
      icon: GraduationCap,
      title: "Aprender ensinando",
      description:
        "Como instrutor no SENAI-SP, capacito a próxima geração de desenvolvedores e, nesse processo, me mantenho em constante evolução.",
    },
  ] satisfies IconItem[],
  stack:
    "Trabalho principalmente com Next.js, React, TypeScript, Tailwind CSS e todo o ecossistema moderno de desenvolvimento web. Também tenho experiência com Node.js, APIs RESTful, bancos de dados e ferramentas de CI/CD.",
  beyondCode: [
    {
      icon: GraduationCap,
      title: "Formação de desenvolvedores",
      description:
        "Atuo compartilhando conhecimento e contribuindo na formação de uma nova geração de desenvolvedores como instrutor no SENAI-SP.",
    },
    {
      icon: Bot,
      title: "Inteligência Artificial",
      description:
        "Estou sempre explorando o potencial da IA, descobrindo novas ferramentas e métodos para realizar tarefas de forma mais rápida e eficiente.",
    },
    {
      icon: Box,
      title: "Modelagem e impressão 3D",
      description:
        "Um hobby que me ajuda a manter a criatividade afiada e a pensar fora da caixa.",
    },
    {
      icon: Cpu,
      title: "Eletrônica",
      description:
        "Uma área que sempre me fascinou e que agora estou tendo a oportunidade de explorar e entender mais.",
    },
  ] satisfies IconItem[],
};
