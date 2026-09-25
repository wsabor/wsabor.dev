import type { ReactNode } from "react";
import {
  BrainCircuit,
  CodeXml,
  Globe,
  MapPin,
  PenTool,
  TrendingUp,
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

// Bloco de serviços para pequenos negócios. Quando a landing /servicos
// existir, trocar cta.href para ela.
export const businessServices = {
  title: "Presença digital para negócios",
  description:
    "Ajudo pequenos negócios a serem encontrados e escolhidos: site profissional, perfil no Google e anúncios que trazem clientes.",
  items: [
    { icon: <Globe size={20} />, label: "Sites profissionais" },
    { icon: <MapPin size={20} />, label: "Google Meu Negócio" },
    { icon: <TrendingUp size={20} />, label: "Tráfego pago" },
  ],
  cta: { href: "/contact", label: "Quero divulgar meu negócio" },
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
