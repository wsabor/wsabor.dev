export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
};

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Jogo Educacional (Quiz Preparaí 2025)",
    description:
      "Desenvolvimento de um quiz interativo para preparar estudantes, usando React e Node.js.",
    tags: ["React", "Node.js", "UX/UI", "Mentoria"],
  },
  {
    id: 2,
    title: "Plataforma de E-Commerce",
    description:
      "Criação de uma plataforma de vendas completa, aplicando conceitos de engenharia de software.",
    tags: ["Node.js", "MySQL", "Eng. de Software"],
  },
  {
    id: 3,
    title: "Soluções Web para Negócios Locais",
    description:
      "Orientação na criação de sites para diversos segmentos, utilizando a stack MERN.",
    tags: ["MERN", "MongoDB", "React", "SEO"],
  },
];
