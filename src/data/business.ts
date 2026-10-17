import {
  Bot,
  ClipboardList,
  Clock,
  Compass,
  Globe,
  GraduationCap,
  HelpCircle,
  MapPin,
  MessageCircle,
  Repeat,
  Rocket,
  SearchX,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

// Conteúdo da landing page /seu-negocio (serviços para pequenos negócios).
// Foco: automação de processos, inteligência artificial e treinamento.
// Site, Google Meu Negócio e anúncios seguem como serviços secundários.
// Linguagem de negócio, sem jargão técnico. Só fatos confirmados pelo Wagner.
// Não citar prazo em dias nem o provedor da hospedagem (decisão do Wagner).

/** Número do WhatsApp Business, só dígitos com DDI (55) e DDD. */
export const WHATSAPP_NUMBER = "5518981721905";
export const WHATSAPP_DISPLAY = "(18) 98172-1905";

const whatsappMessage =
  "Olá, Wagner! Vi seu site e quero conversar sobre o meu negócio.";

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

export const serviceArea = {
  city: "Osvaldo Cruz",
  region: "Oeste Paulista",
  /** Texto corrido usado no topo e nas perguntas frequentes. */
  label: "Osvaldo Cruz e toda a região do Oeste Paulista",
  /** Atendimento a distância. */
  remote: "Atendo também a distância, em todo o Brasil.",
};

export type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Service = IconCard & {
  /** O que está incluso no serviço. */
  includes: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const businessPage = {
  hero: {
    eyebrow: "Para o seu negócio",
    title: "Seu negócio pronto para a era da inteligência artificial",
    description: `Automação de processos, inteligência artificial e treinamento de equipe para negócios de ${serviceArea.label}, e a distância em todo o Brasil. Sou professor de tecnologia e explico tudo sem complicação.`,
  },

  pains: {
    eyebrow: "Isso acontece com você?",
    title: "Falta tempo, e a tecnologia parece complicada",
    description:
      "A inteligência artificial chegou também para os pequenos negócios. Quem aprende a usar agora sai na frente.",
    items: [
      {
        icon: Clock,
        title: "O WhatsApp toma o seu dia",
        description:
          "As mesmas perguntas, várias vezes por dia: horário, preço, endereço. E quem demora para responder perde o cliente.",
      },
      {
        icon: Repeat,
        title: "Tarefas repetitivas",
        description:
          "Agenda, orçamento, planilha e lembrete feitos à mão, um por um, todos os dias.",
      },
      {
        icon: Bot,
        title: "Não sabe por onde começar",
        description:
          "Todo mundo fala de inteligência artificial, mas ninguém mostra como ela ajuda no seu negócio, na prática.",
      },
      {
        icon: SearchX,
        title: "As IAs não conhecem você",
        description:
          "O cliente pergunta ao ChatGPT onde encontrar o que você vende na sua cidade, e o seu negócio não aparece na resposta.",
      },
    ] satisfies IconCard[],
  },

  services: {
    eyebrow: "O que eu faço",
    title: "Inteligência artificial a serviço do seu negócio",
    description:
      "Você pode começar pelo que mais pesa na sua rotina. Cada proposta é montada para o momento do seu negócio.",
    items: [
      {
        icon: Workflow,
        title: "Automação de processos",
        description:
          "As tarefas repetitivas ficam por conta do computador, e você e sua equipe cuidam do que importa.",
        includes: [
          "Atendimento automático no WhatsApp: dúvidas, horários e preços",
          "Agendamentos, lembretes e confirmações",
          "Orçamentos, planilhas e relatórios sem copiar e colar",
          "Quando o cliente precisa de uma pessoa, a conversa passa para você",
        ],
      },
      {
        icon: Compass,
        title: "Diagnóstico e consultoria",
        description:
          "Olho como o seu negócio funciona hoje e mostro onde a inteligência artificial ajuda de verdade, e onde não vale a pena.",
        includes: [
          "Conversa sobre a rotina do negócio",
          "Lista do que dá para automatizar",
          "Plano por etapas, começando pelo que traz mais resultado",
        ],
      },
      {
        icon: GraduationCap,
        title: "Treinamento da equipe",
        description:
          "Sou professor do curso técnico em Desenvolvimento de Sistemas. Ensino você e sua equipe a usar o ChatGPT, o Gemini e outras ferramentas de IA, em linguagem simples.",
        includes: [
          "Treinamento prático, com as tarefas do seu negócio",
          "Para o dono e para a equipe",
          "O que pode e o que não pode ser colocado numa IA",
        ],
      },
      {
        icon: Sparkles,
        title: "Encontrado pelas IAs",
        description:
          "Cada vez mais gente pergunta a uma IA onde comprar. Preparo o seu negócio para aparecer nessas respostas.",
        includes: [
          "Informações do negócio organizadas para as IAs lerem",
          "Site e Perfil da Empresa no Google completos e coerentes",
        ],
      },
    ] satisfies Service[],
  },

  process: {
    eyebrow: "Como funciona",
    title: "Do primeiro contato ao negócio funcionando",
    steps: [
      {
        icon: MessageCircle,
        title: "Conversa",
        description:
          "Você me conta sobre o seu negócio pelo WhatsApp: o que vende, como trabalha e o que mais toma o seu tempo.",
      },
      {
        icon: ClipboardList,
        title: "Diagnóstico",
        description:
          "Mostro onde a automação e a inteligência artificial fazem diferença, numa proposta clara.",
      },
      {
        icon: Rocket,
        title: "Implantação",
        description:
          "Coloco as automações e as ferramentas para funcionar, e você acompanha cada etapa.",
      },
      {
        icon: Users,
        title: "Treinamento e acompanhamento",
        description:
          "Ensino você e sua equipe a usar, meço o resultado e ajusto o que for preciso.",
      },
    ] satisfies IconCard[],
  },

  alsoServices: {
    eyebrow: "Também faço",
    title: "Presença digital, a base de tudo",
    description:
      "Para ser encontrado por pessoas e por IAs, o seu negócio precisa estar bem apresentado na internet.",
    items: [
      {
        icon: Globe,
        title: "Site profissional",
        description:
          "Um site rápido, bonito no celular e fácil de achar no Google, com o seu WhatsApp a um toque.",
        includes: [
          "Criação das páginas",
          "Registro do domínio para você, ou ajuda para registrar",
          "Hospedagem e manutenção com mensalidade",
          "Fotos e filmagem profissionais à parte, sob consulta",
        ],
      },
      {
        icon: MapPin,
        title: "Google Meu Negócio",
        description:
          "O Perfil da Empresa no Google completo e atualizado, para aparecer no Maps e nas buscas da sua região.",
        includes: [
          "Criação do perfil",
          "Otimização para aparecer nas buscas",
          "Fotos enviadas por você, ou produção de fotos sob consulta",
          "Respostas às avaliações",
        ],
      },
      {
        icon: TrendingUp,
        title: "Tráfego pago",
        description:
          "Anúncios no Google para quem já está procurando o que você vende, com o resultado medido.",
        includes: [
          "Criação e gestão das campanhas",
          "Acompanhamento e ajustes todo mês",
          "A verba dos anúncios é paga por você",
        ],
      },
    ] satisfies Service[],
  },

  examples: {
    eyebrow: "Trabalhos",
    title: "Sites que eu fiz",
    items: [
      {
        title: "Topcoat Vernizes",
        image: "/img/projects/topcoat-vernizes.webp",
        badge: "Cliente",
        description:
          "Site institucional em português e espanhol, que mostra a página no idioma de quem visita.",
        href: "/projects/topcoat-vernizes",
        linkLabel: "Ver o estudo de caso",
        external: false,
        project: "topcoat-vernizes",
      },
      {
        title: "DR Prev Serviços Previdenciários",
        image: "/img/projects/drprev.webp",
        badge: "Cliente",
        description:
          "Site institucional para uma empresa de serviços previdenciários.",
        href: "https://drprev.com.br",
        linkLabel: "Visitar o site",
        external: true,
        project: "DR Prev Serviços Previdenciários",
      },
      {
        title: "Hotel Brisa do Mar",
        image: "/img/projects/brisa-mar-hotel.webp",
        badge: "Modelo de demonstração",
        description:
          "Exemplo de site para hotel ou pousada, com uma apresentação animada que prende a atenção. O hotel é fictício.",
        href: "https://brisa-mar-hotel.wsabor.dev",
        linkLabel: "Abrir o modelo",
        external: true,
        project: "brisa-mar-hotel",
      },
    ],
  },

  faq: {
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    icon: HelpCircle,
    items: [
      {
        question: "Quanto custa?",
        answer:
          "Depende do que o seu negócio precisa. Me chame no WhatsApp, conte um pouco sobre ele e eu monto uma proposta.",
      },
      {
        question: "Preciso entender de tecnologia?",
        answer:
          "Não. Sou professor de tecnologia e explico tudo em linguagem simples. Eu cuido da parte técnica e ensino você e sua equipe a usar o que for implantado.",
      },
      {
        question: "Por onde eu começo?",
        answer:
          "Pela conversa e pelo diagnóstico. Juntos, vemos o que mais toma tempo no seu negócio e começamos por ali.",
      },
      {
        question: "O atendimento automático substitui as pessoas?",
        answer:
          "Não. Ele responde as perguntas que se repetem e, quando o cliente precisa de uma pessoa, passa a conversa para você ou para a sua equipe.",
      },
      {
        question: "O que é ser encontrado pelas IAs?",
        answer:
          "Muita gente já pergunta ao ChatGPT, ao Gemini ou ao Google onde comprar. Essas ferramentas leem o que está na internet sobre o seu negócio. Com o site e o Perfil da Empresa no Google completos e organizados, fica mais fácil elas indicarem você.",
      },
      {
        question: "Você ainda faz sites, Google Meu Negócio e anúncios?",
        answer:
          "Sim. Crio o site e cuido da hospedagem e da manutenção numa mensalidade, deixo o Perfil da Empresa no Google completo e faço a gestão dos anúncios no Google. A verba dos anúncios é paga por você.",
      },
      {
        question: "Quais cidades você atende?",
        answer: `${serviceArea.label}. ${serviceArea.remote}`,
      },
    ] satisfies FaqItem[],
  },

  finalCta: {
    eyebrow: "Vamos conversar?",
    title: "Conte sobre o seu negócio",
    description:
      "Mande uma mensagem no WhatsApp e me conte o que mais toma o seu tempo hoje. A gente vê junto onde a inteligência artificial pode ajudar.",
  },
};
