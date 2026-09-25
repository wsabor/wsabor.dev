"use client";

import { useEffect, useRef } from "react";

/**
 * Barra de progresso de leitura fixa logo abaixo do header.
 * Mede o avanço dentro do elemento `targetId` (o artigo), não da página toda.
 * Atualiza o estilo direto no DOM (sem re-render a cada scroll).
 */
export default function ReadingProgress({ targetId }: { targetId: string }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const target = document.getElementById(targetId);
    if (!bar || !target) return;

    let frame = 0;
    function update() {
      frame = 0;
      const headerHeight =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-h",
          ),
        ) || 0;
      const rect = target!.getBoundingClientRect();
      // 0 quando o topo do artigo encosta no header; 1 quando o fim do
      // artigo chega ao fim da tela.
      const total = rect.height - window.innerHeight + headerHeight;
      const progress =
        total > 0 ? Math.min(Math.max((headerHeight - rect.top) / total, 0), 1) : 1;
      bar!.style.transform = `scaleX(${progress})`;
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetId]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-(--header-h) z-40 h-1"
    >
      {/* transform inline (não a classe scale-x-*, que no Tailwind 4 usa a
          propriedade `scale` e somaria com o transform do script) */}
      <div
        ref={barRef}
        style={{ transform: "scaleX(0)" }}
        className="from-primary to-primary-light h-full origin-left bg-linear-to-r"
      />
    </div>
  );
}
