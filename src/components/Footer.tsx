import Link from "next/link";
import { Rss, Heart, Coffee } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import CookiePreferencesButton from "./CookiePreferencesButton";

const socialLinks = [
  {
    href: "https://github.com/wsabor",
    label: "Link para o perfil de Wagner Sabor no GitHub",
    icon: <GithubIcon size={20} />,
  },
  {
    href: "https://linkedin.com/in/wsabor",
    label: "Link para o perfil de Wagner Sabor no LinkedIn",
    icon: <LinkedinIcon size={20} />,
  },
  {
    href: "https://twitter.com/wsabor",
    label: "Link para o perfil de Wagner Sabor no Twitter",
    icon: <XIcon size={20} />,
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
          <p className="text-text-muted text-sm">
            Desenvolvido com{" "}
            <Heart className="inline h-4 w-4 align-middle text-red-500" /> e{" "}
            <Coffee className="text-topcoat-cyan inline h-4 w-4 align-middle" />{" "}
            usando Next.js e Tailwind CSS.
          </p>
          <p className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm md:justify-start">
            <Link
              href="/privacidade"
              className="hover:text-primary underline-offset-2 transition-colors hover:underline"
            >
              Privacidade
            </Link>
            <CookiePreferencesButton />
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
