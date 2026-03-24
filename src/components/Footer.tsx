import Link from "next/link";
import { Rss, Heart, Coffee } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
    icon: <TwitterIcon size={20} />,
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
