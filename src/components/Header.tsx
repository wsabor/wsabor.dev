"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },
  { href: "/projects", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Efeito para gerenciar o scroll da página quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="relative bg-background py-6 text-text-main">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="z-50 font-display text-xl font-bold transition-colors hover:text-primary"
        >
          wsabor.dev
        </Link>

        {/* Menu de Navegação para Desktop */}
        <nav className="hidden md:block" aria-label="Navegação principal">
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

        {/* Botão Hamburger para Mobile */}
        <div className="z-50 md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Painel do Menu Mobile */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 h-screen w-full transform bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav
          className="flex h-full flex-col items-center justify-center"
          aria-label="Navegação móvel"
        >
          <ul className="space-y-8 text-center">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-display text-3xl transition-colors hover:text-primary"
                  onClick={toggleMenu} // Fecha o menu ao clicar em um link
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
