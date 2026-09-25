"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Intervalo entre os itens [data-reveal] (s). */
  stagger?: number;
};

/**
 * Anima a entrada dos elementos marcados com `data-reveal` quando a seção
 * chega à viewport (sobe 32px e aparece). Sem itens marcados, anima o próprio
 * container. O HTML do servidor já vem visível: sem JS ou com reduced motion,
 * nada fica escondido.
 */
export default function Reveal({ children, className, stagger = 0.1 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = ref.current;
      if (!container) return;

      // Já visível ao carregar (ex.: grade logo abaixo do cabeçalho de uma
      // página interna): não esconde o que o servidor já mostrou. Evita o
      // "some e volta" e contraste medido no meio do fade (Lighthouse/axe).
      if (container.getBoundingClientRect().top < window.innerHeight * 0.85) {
        return;
      }

      const items = container.querySelectorAll<HTMLElement>("[data-reveal]");
      const targets = items.length > 0 ? Array.from(items) : [container];

      // gsap.matchMedia lê a media query real (sem o snapshot do servidor)
      // e desfaz a animação sozinho se a preferência mudar.
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(targets, {
          autoAlpha: 0,
          y: 32,
          duration: 0.8,
          ease: "power3.out",
          stagger,
          // O GSAP grava `translate: none` inline; limpar ao terminar devolve
          // o controle ao CSS (ex.: elevação do .card-interactive no hover).
          clearProps: "transform,translate,rotate,scale,opacity,visibility",
          scrollTrigger: { trigger: container, start: "top 85%", once: true },
        });
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
