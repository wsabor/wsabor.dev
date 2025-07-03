export type Article = {
  id: number;
  title: string;
  summary: string;
  slug: string;
};

export const latestArticles: Article[] = [
  {
    id: 1,
    title: "Por que todo Dev Deveria Aprender Design",
    summary:
      "Uma reflexão sobre como os princípios de design podem transformar a maneira como escrevemos código e construímos produtos.",
    slug: "/blog/dev-e-design",
  },
  {
    id: 2,
    title: "Os 3 Maiores Desafios que Meus Alunos Enfrentam",
    summary:
      "Analisando os obstáculos mais comuns na jornada de um desenvolvedor júnior e como superá-los.",
    slug: "/blog/desafios-alunos",
  },
];
