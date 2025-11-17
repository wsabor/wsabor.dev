"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

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
  { href: "/contact", label: "Contato" },
];

export default function HeaderOptimized() {
  return (
    <header className="sticky top-0 z-50 bg-background py-6 text-text-main">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold transition-colors hover:text-primary"
        >
          wsabor.dev
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          {/* Menu de Navegação para Desktop */}
          <nav aria-label="Navegação principal">
            <ul className="flex space-x-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-primary"
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
