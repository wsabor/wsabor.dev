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
    <header className="bg-surface text-text-main py-6 relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold font-display z-50">
          wsabor.dev
        </Link>

        {/* Menu de Navegação para Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-primary transition-colors"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão Hamburger para Mobile */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} aria-label="Abrir menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Painel do Menu Mobile */}
      {/* A mágica acontece com as classes de transição e transformação */}
      <div
        className={`
          md:hidden fixed top-0 left-0 w-full h-screen bg-background bg-opacity-95 backdrop-blur-sm z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="h-full flex flex-col items-center justify-center">
          <ul className="text-center space-y-8">
            <li>
              <Link
                href="/"
                className="text-3xl font-display hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-3xl font-display hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-3xl font-display hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-3xl font-display hover:text-primary transition-colors"
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
