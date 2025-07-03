export type Project = {
  id: number;
  title: string;
  image: string;
  link: string;
  description: string;
  tags: string[];
};

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Quiz Prepara Aí 2025",
    image: "preparai2025.webp",
    link: "https://preparai2025.wsabor.dev",
    description:
      "Desenvolvimento de um quiz interativo para preparar estudantes para o ENEM, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
  {
    id: 2,
    title: "Next Level ENEM",
    image: "nextLevelEnem.webp",
    link: "https://next-level-enem.vercel.app",
    description:
      "Jogo em formato quiz desenvolvido por um dos grupos de alunos para preparar estudantes para o ENEM, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
  {
    id: 3,
    title: "Aprova Mais",
    image: "aprovaMais.webp",
    link: "https://aprova-mais.vercel.app",
    description:
      "Jogo em formato quiz desenvolvido por um dos grupos de alunos para preparar estudantes para o ENEM, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
  {
    id: 4,
    title: "Gabarita Mente",
    image: "gabaritaMente.webp",
    link: "https://gabarita-mente.vercel.app",
    description:
      "Jogo em formato quiz desenvolvido por um dos grupos de alunos para preparar estudantes para o ENEM, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
  {
    id: 5,
    title: "Desafio Nota 1000",
    image: "desafioNota1000.webp",
    link: "https://desafio-nota1000.vercel.app",
    description:
      "Jogo em formato quiz desenvolvido por um dos grupos de alunos para preparar estudantes para o ENEM, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
  // {
  //   id: 2,
  //   title: "Plataforma de E-Commerce",
  //   image: "",
  //   description:
  //     "Criação de uma plataforma de vendas completa, aplicando conceitos de engenharia de software.",
  //   tags: ["Node.js", "MySQL", "Eng. de Software"],
  // },
  // {
  //   id: 3,
  //   title: "Soluções Web para Negócios Locais",
  //   image: "",
  //   description:
  //     "Orientação na criação de sites para diversos segmentos, utilizando a stack MERN.",
  //   tags: ["MERN", "MongoDB", "React", "SEO"],
  // },
];
