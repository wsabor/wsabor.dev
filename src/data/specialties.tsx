import type { ReactNode } from "react";
import {
  BrainCircuit,
  CodeXml,
  Globe,
  GraduationCap,
  PenTool,
  Workflow,
} from "lucide-react";

export type Specialty = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
};

export const specialties: Specialty[] = [
  {
    id: 1,
    icon: <CodeXml size={28} />,
    title: "Desenvolvimento Full Stack",
    description:
      "Construindo aplicações robustas e escaláveis com Next.js, React e as melhores práticas do mercado.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "APIs REST"],
  },
  {
    id: 2,
    icon: <PenTool size={28} />,
    title: "Design & UX",
    description:
      "Criando interfaces intuitivas e experiências de usuário que resolvem problemas reais e encantam.",
    tags: ["Figma", "UX/UI", "Design responsivo"],
  },
  {
    id: 3,
    icon: <BrainCircuit size={28} />,
    title: "Mentoria & Educação",
    description:
      "Capacitando novos talentos em tecnologia com uma abordagem prática e focada no mercado.",
    tags: ["SENAI-SP", "Hackathons", "Projetos reais"],
  },
];

// Bloco de serviços para pequenos negócios (leva à landing /seu-negocio).
export const businessServices = {
  title: "Inteligência artificial para negócios",
  description:
    "Ajudo pequenos negócios a entrar na era da inteligência artificial: automação de processos, treinamento da equipe e presença digital.",
  items: [
    { icon: <Workflow size={20} />, label: "Automação de processos" },
    { icon: <GraduationCap size={20} />, label: "Treinamento em IA" },
    { icon: <Globe size={20} />, label: "Sites e Google Meu Negócio" },
  ],
  cta: { href: "/seu-negocio", label: "Quero modernizar meu negócio" },
};

// Faixa de tecnologias (marquee) abaixo do bento.
export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Firebase",
  "APIs REST",
  "Figma",
  "GSAP",
  "Vercel",
  "CI/CD",
];
