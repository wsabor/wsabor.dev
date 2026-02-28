import Link from "next/link";
import { Github, Linkedin, Twitter, Rss, Heart, Coffee } from "lucide-react";

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
  {
    href: "/feed.xml",
    label: "Link para o feed RSS do blog",
    icon: <Rss size={20} />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background text-text-muted border-t border-black/10 py-8 dark:border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-8 md:flex-row">
        <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Wagner Sabor. Todos os direitos
            reservados.
          </p>
          <p className="flex items-center gap-1 text-sm text-gray-400">
            Desenvolvido com <Heart className="h-4 w-4 text-red-500" />
            e <Coffee className="text-topcoat-cyan h-4 w-4" /> usando Next.js e
            Tailwind CSS.
            {/* <a
              href="https://wsabor.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-topcoat-cyan hover:text-topcoat-green transition-colors"
            >
              wsabor.dev
            </a> */}
          </p>
          {/* <p className="text-sm">
            Desenvolvido com ❤️ usando Next.js e Tailwind CSS.
          </p> */}
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-colors"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
