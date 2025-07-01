"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {/* Ocultei  o link "Home" para simplificar a navegação, mas você pode descomentar se desejar exibi-lo.
            Se quiser exibir o link "Home", descomente a linha abaixo */}
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition-colors hover:text-primary"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="transition-colors hover:text-primary"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="transition-colors hover:text-primary"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-primary"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão Hamburger para Mobile */}
        <div className="z-50 md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Painel do Menu Mobile */}
      {/* A mágica acontece com as classes de transição e transformação */}
      <div
        className={`fixed left-0 top-0 z-40 h-screen w-full transform bg-background bg-opacity-95 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} `}
      >
        <nav className="flex h-full flex-col items-center justify-center">
          <ul className="space-y-8 text-center">
            <li>
              <Link
                href="/"
                className="font-display text-3xl transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-display text-3xl transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="font-display text-3xl transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="font-display text-3xl transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-display text-3xl transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
