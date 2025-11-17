"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function HeroBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Não renderiza nada até que o componente esteja montado (evita flash)
  if (!mounted) {
    return (
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-surface"></div>
      </div>
    );
  }

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const isDark = resolvedTheme === "dark";

  // Determina qual imagem carregar baseado no tema e tamanho da tela
  const backgroundImage = isMobile
    ? isDark
      ? "/img/hero-mobile-dark.webp"
      : "/img/hero-mobile-light.webp"
    : isDark
      ? "/img/hero-desktop-dark.webp"
      : "/img/hero-desktop-light.webp";

  return (
    <div className="absolute inset-0 z-0">
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat transition-opacity duration-300"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent dark:bg-background/5 dark:to-background/15"></div>
    </div>
  );
}
