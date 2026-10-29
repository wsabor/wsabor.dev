"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

// Carrega o menu mobile e theme switcher dinamicamente (lazy loading)
const MobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false,
  loading: () => null,
});

const ThemeSwitcher = dynamic(
  () => import("./ThemeSwitcher").then((mod) => ({ default: mod.ThemeSwitcher })),
  {
    ssr: false,
    loading: () => <div className="h-9 w-9" />, // Placeholder
  }
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },
  { href: "/projects", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/seu-negocio", label: "Seu negócio" },
  { href: "/contact", label: "Contato" },
];

/** Link ativo: a home só casa com "/", as demais também com subpáginas. */
function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function HeaderOptimized() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 py-6 text-text-main">
      {/* Fundo translúcido numa camada à parte: backdrop-filter no próprio
          header viraria o containing block do painel fixed do menu mobile. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-background/80 shadow-[inset_0_-1px_0_var(--color-border)] backdrop-blur-md"
      />
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold transition-colors hover:text-primary"
        >
          wsabor.com
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          {/* Menu de Navegação para Desktop */}
          <nav aria-label="Navegação principal">
            <ul className="flex space-x-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive(pathname, href) ? "page" : undefined}
                    className="rounded-full px-3 py-1.5 text-sm font-medium text-text-muted transition-colors hover:text-text-main aria-[current=page]:bg-primary/10 aria-[current=page]:text-primary-deep dark:aria-[current=page]:text-primary-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeSwitcher />
        </div>

        {/* Menu Mobile - Carregado dinamicamente */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeSwitcher />
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
