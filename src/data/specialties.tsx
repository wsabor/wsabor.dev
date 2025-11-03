import type { ReactNode } from "react";
import { BrainCircuit, CodeXml, PenTool } from "lucide-react";

export type Specialty = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
};

export const specialties: Specialty[] = [
  {
    id: 1,
    icon: <CodeXml className="text-primary" size={32} />,
    title: "Desenvolvimento Full Stack",
    description:
      "Construindo aplicações robustas e escaláveis com Next.js, React e as melhores práticas do mercado.",
  },
  {
    id: 2,
    icon: <PenTool className="text-primary" size={32} />,
    title: "Design & UX",
    description:
      "Criando interfaces intuitivas e experiências de usuário que resolvem problemas reais e encantam.",
  },
  {
    id: 3,
    icon: <BrainCircuit className="text-primary" size={32} />,
    title: "Mentoria & Educação",
    description:
      "Capacitando novos talentos em tecnologia com uma abordagem prática e focada no mercado.",
  },
];
