import {
  BarChart3,
  ClipboardList,
  Globe,
  HelpCircle,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Rocket,
  SearchX,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

// Conteúdo da landing page /seu-negocio (serviços para pequenos negócios).
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
    title: "Seu negócio encontrado no Google e escolhido pelos clientes",
    description: `Site profissional, perfil no Google e anúncios para negócios de ${serviceArea.label}. ${serviceArea.remote} Você cuida do seu negócio; eu cuido de quem procura por ele na internet.`,
  },

  pains: {
    eyebrow: "Isso acontece com você?",
    title: "Quem procura não encontra o seu negócio",
    description:
      "Hoje o cliente pesquisa no celular antes de sair de casa. Se ele não acha você, acha o concorrente.",
    items: [
      {
        icon: SearchX,
        title: "Não aparece no Google",
        description:
          "Alguém procura pelo que você vende na sua cidade, e o seu negócio não está na lista.",
      },
      {
        icon: MapPin,
        title: "Perfil no Google incompleto",
        description:
          "Horário errado, sem fotos, sem telefone ou sem avaliações: o cliente desiste antes de ligar.",
      },
      {
        icon: Smartphone,
        title: "Só nas redes sociais",
        description:
          "Endereço, serviços e contato espalhados em posts. Falta um lugar que mostre tudo de forma clara.",
      },
      {
        icon: BarChart3,
        title: "Anúncio sem saber o resultado",
        description:
          "Dinheiro investido em impulsionamento sem saber quantos clientes vieram dele.",
      },
    ] satisfies IconCard[],
  },

  services: {
    eyebrow: "O que eu faço",
    title: "Três frentes para trazer clientes",
    description:
      "Você pode começar por uma delas ou combinar as três. Cada proposta é montada para o momento do seu negócio.",
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

  process: {
    eyebrow: "Como funciona",
    title: "Do primeiro contato ao cliente chegando",
    steps: [
      {
        icon: MessageCircle,
        title: "Conversa",
        description:
          "Você me conta sobre o seu negócio pelo WhatsApp: o que vende, para quem e onde quer chegar.",
      },
      {
        icon: ClipboardList,
        title: "Proposta",
        description:
          "Monto uma proposta com o que faz sentido para o seu momento.",
      },
      {
        icon: Rocket,
        title: "Entrega",
        description:
          "Coloco o site, o perfil ou os anúncios no ar, e você acompanha cada etapa.",
      },
      {
        icon: MousePointerClick,
        title: "Acompanhamento",
        description:
          "Meço de onde vêm os contatos e ajusto o que for preciso para trazer mais clientes.",
      },
    ] satisfies IconCard[],
  },

  examples: {
    eyebrow: "Trabalhos",
    title: "Exemplos do que eu faço",
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
        question: "Quais cidades você atende?",
        answer: `${serviceArea.label}. ${serviceArea.remote}`,
      },
      {
        question: "Quanto tempo leva para o site ficar pronto?",
        answer:
          "Pouquíssimo tempo. Depois que a proposta é aprovada e você me envia as informações do seu negócio, você acompanha cada etapa até o site entrar no ar.",
      },
      {
        question: "Os anúncios são pagos à parte?",
        answer:
          "Sim. A verba dos anúncios é paga por você. Eu cuido da criação e da gestão das campanhas, com acompanhamento todo mês.",
      },
      {
        question: "Você cuida da hospedagem e da manutenção do site?",
        answer:
          "Sim. O site fica num servidor que eu administro, e a hospedagem e a manutenção são cobradas numa mensalidade. Você não precisa se preocupar com a parte técnica.",
      },
    ] satisfies FaqItem[],
  },

  finalCta: {
    eyebrow: "Vamos conversar?",
    title: "Conte sobre o seu negócio",
    description:
      "Mande uma mensagem no WhatsApp e me conte o que você vende, para quem e onde quer chegar.",
  },
};
