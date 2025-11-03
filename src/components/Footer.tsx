import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/wsabor",
    label: "Link para o perfil de Wagner Sabor no GitHub",
    icon: <Github size={20} />,
  },
  {
    href: "https://linkedin.com/in/wsabor",
    label: "Link para o perfil de Wagner Sabor no LinkedIn",
    icon: <Linkedin size={20} />,
  },
  {
    href: "https://twitter.com/wsabor",
    label: "Link para o perfil de Wagner Sabor no Twitter",
    icon: <Twitter size={20} />,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-background py-8 text-text-muted dark:border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-8 md:flex-row">
        <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Wagner Sabor. Todos os direitos
            reservados.
          </p>
          <p className="text-sm">
            Desenvolvido com ❤️ usando Next.js e Tailwind CSS.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-primary"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
