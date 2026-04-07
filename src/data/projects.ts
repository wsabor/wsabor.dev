export type Project = {
  id: number;
  title: string;
  image: string;
  basePath: string;
  link: string;
  description: string;
  tags: string[];
};

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Topcoat Vernizes",
    image: "topcoat-vernizes.webp",
    basePath: "/img/projects/",
    link: "https://topcoatvernizes.com.br",
    description:
      "Site institucional com detecção automática de idioma e alteração manual desenvolvido para a empresa Topcoat Vernizes utilizando Next.js e Tailwind CSS",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Institucional",
      "i18n",
      "Português / Espanhol",
      "UX/UI",
    ],
  },
  {
    id: 2,
    title: "Sistema de Simulados e Provas",
    image: "simulado.webp",
    basePath: "/img/projects/",
    link: "https://simulado.wsabor.dev",
    description:
      "Sistema de simulados e provas para aplicação em sala de aula desenvolvido utilizando Next.js e Tailwind CSS",
    tags: ["Next.js", "Tailwind CSS", "Educacional", "UX/UI"],
  },
  // {
  //   id: 1,
  //   title: "Cor e Processo",
  //   image: "coreprocesso.webp",
  //   basePath: "/img/projects/",
  //   link: "https://coreprocesso.com.br",
  //   description:
  //     "Site institucional desenvolvido para a empresa Cor e Processo utilizando Next.js e Tailwind CSS",
  //   tags: ["Next.js", "Tailwind CSS", "Institucional", "UX/UI"],
  // },
  {
    id: 3,
    title: "EPI System",
    image: "epi-system.webp",
    basePath: "/img/projects/",
    link: "https://epi-system.wsabor.dev",
    description:
      "Sistema completo de gestão de EPIs - Equipamentos de Proteção Individual desenvolvido com React, Firebase e Tailwind CSS",
    tags: ["React", "Tailwind CSS", "Firebase", "ERP", "UX/UI"],
  },
  {
    id: 4,
    title: "Agro Solutio",
    image: "agrosolutio.webp",
    basePath: "/img/hackaton/",
    link: "https://agrosolutio.vercel.app",
    description:
      "Landing Page desenvolvida pelos alunos durante o Hackathon Agrotech 2025, focada em soluções agrícolas inovadoras, utilizando HTML, CSS e JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "UX/UI", "Hackaton"],
  },
  {
    id: 5,
    title: "DR Prev Serviços Previdenciários",
    image: "drprev.webp",
    basePath: "/img/projects/",
    link: "https://drprev.com.br",
    description:
      "Site institucional desenvolvido para a DR Prev, empresa de serviços previdenciários, usando Wordpress.",
    tags: ["Wordpress", "UX/UI", "SEO", "Site Institucional"],
  },
  {
    id: 6,
    title: "Quiz Prepara Aí 2025",
    image: "preparai2025.webp",
    basePath: "/img/projects/quiz-preparai/",
    link: "https://preparai2025.wsabor.dev",
    description:
      "Desenvolvimento de um quiz interativo para preparar estudantes para o ENEM, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
];

export const featuredProjects = allProjects.slice(0, 3);
