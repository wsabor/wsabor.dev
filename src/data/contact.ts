// Canais de contato direto exibidos no CTA da home.
// WhatsApp entra aqui quando houver número público.

export type ContactChannel = {
  id: "email" | "linkedin" | "github";
  label: string;
  /** Texto exibido abaixo do rótulo (endereço/usuário). */
  handle: string;
  href: string;
  external: boolean;
};

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "E-mail",
    handle: "wsabor.senai@gmail.com",
    href: "mailto:wsabor.senai@gmail.com",
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "in/wsabor",
    href: "https://www.linkedin.com/in/wsabor",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@wsabor",
    href: "https://github.com/wsabor",
    external: true,
  },
];
