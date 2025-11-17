"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Efeito para gerenciar o scroll da página quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="relative z-50"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Painel do Menu Mobile */}
      <div
        id="mobile-menu"
        className={`fixed left-0 right-0 top-[88px] z-40 h-[calc(100vh-88px)] w-full transform bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
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
                  onClick={toggleMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
