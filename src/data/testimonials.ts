export type Testimonial = {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany?: string;
  authorImage?: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  // Exemplo (remova quando tiver depoimentos reais):
  // {
  //   id: 1,
  //   quote:
  //     "O Wagner foi essencial na minha formação no SENAI. Sua didática transforma código em algo natural.",
  //   authorName: "Nome do Aluno",
  //   authorRole: "Aluno do Curso Técnico em Desenvolvimento de Sistemas",
  //   authorCompany: "SENAI-SP",
  //   featured: true,
  // },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
