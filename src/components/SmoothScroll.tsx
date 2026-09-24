"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";

// Smooth scroll (Lenis) sincronizado com o ticker do GSAP.
// Renderizado apenas na home: ao sair da página o Lenis é destruído.
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ syncTouch: false });

    function raf(time: number) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
