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
    title: "Agro Solutio",
    image: "agrosolutio.webp",
    basePath: "/img/hackaton/",
    link: "https://agrosolutio.vercel.app",
    description:
      "Landing Page desenvolvida pelos alunos durante o Hackathon Agrotech 2025, focada em soluções agrícolas inovadoras, utilizando HTML, CSS e JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "UX/UI", "Hackaton"],
  },
  {
    id: 2,
    title: "Quiz Prepara Aí 2025",
    image: "preparai2025.webp",
    basePath: "/img/projects/quiz-preparai/",
    link: "https://preparai2025.wsabor.dev",
    description:
      "Desenvolvimento de um quiz interativo para preparar estudantes para o ENEM, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
  {
    id: 3,
    title: "Next Level ENEM",
    image: "nextLevelEnem.webp",
    basePath: "/img/projects/quiz-preparai/",
    link: "https://next-level-enem.vercel.app",
    description:
      "Jogo em formato quiz desenvolvido por um dos grupos de alunos para preparar estudantes para o ENEM, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
  {
    id: 4,
    title: "Aprova Mais",
    image: "aprovaMais.webp",
    basePath: "/img/projects/quiz-preparai/",
    link: "https://aprova-mais.vercel.app",
    description:
      "Jogo em formato quiz desenvolvido por um dos grupos de alunos para preparar estudantes para o ENEM, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
  {
    id: 5,
    title: "Gabarita Mente",
    image: "gabaritaMente.webp",
    basePath: "/img/projects/quiz-preparai/",
    link: "https://gabarita-mente.vercel.app",
    description:
      "Jogo em formato quiz desenvolvido por um dos grupos de alunos para preparar estudantes para o ENEM, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
  {
    id: 6,
    title: "Desafio Nota 1000",
    image: "desafioNota1000.webp",
    basePath: "/img/projects/quiz-preparai/",
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

export const featuredProjects = allProjects.slice(0, 3);
