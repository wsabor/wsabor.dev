"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** false: mostra o valor final, sem contagem. */
  animate?: boolean;
};

/**
 * Número que conta de 0 até `value` quando entra na viewport.
 * O HTML do servidor já traz o valor final (SEO, sem JS, reduced motion).
 */
export default function Counter({
  value,
  prefix = "",
  suffix = "",
  animate = true,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !animate) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const state = { n: 0 };
        el.textContent = `${prefix}0${suffix}`;
        gsap.to(state, {
          n: value,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(state.n)}${suffix}`;
          },
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
        return () => {
          el.textContent = `${prefix}${value}${suffix}`;
        };
      });

      return () => mm.revert();
    },
    { dependencies: [value, prefix, suffix, animate] },
  );

  // Leitores de tela recebem só o valor final, não a contagem.
  return (
    <>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {prefix}
        {value}
        {suffix}
      </span>
      <span className="sr-only">{`${prefix}${value}${suffix}`}</span>
    </>
  );
}
