"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/navigation";
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Trava o scroll da página enquanto o menu está aberto; Esc fecha e
  // devolve o foco ao botão.
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="relative z-50 -m-2 rounded-full p-2 transition-colors hover:bg-primary/10"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Painel do Menu Mobile */}
      <div
        id="mobile-menu"
        // Fechado, o painel só sai da tela: inert tira os links do Tab e
        // dos leitores de tela.
        inert={!isOpen}
        className={`fixed left-0 right-0 top-(--header-h) z-40 h-[calc(100dvh-var(--header-h))] w-full transform bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
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
                  aria-current={isActivePath(pathname, href) ? "page" : undefined}
                  className="font-display text-3xl transition-colors hover:text-primary aria-[current=page]:text-primary"
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
