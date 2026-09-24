import type { ScrollSequenceContent } from "@/components/ScrollSequence";

// Fase 1: frames e imagens são placeholders do Brisa do Mar (fora do git).
// Serão trocados pelo vídeo editor → terminal → servidores → dashboard.
export const scrollSequence: ScrollSequenceContent = {
  framesPath: "/sequence/desktop",
  frameCount: 120,
  mobileFramesPath: "/sequence/mobile",
  mobileFrameCount: 60,
  scrollLength: "+=300%",
  introUntil: 0.06,
  reducedMotionImages: [
    { src: "/img/sequence/placeholder-fachada.jpg", alt: "Placeholder 1" },
    { src: "/img/sequence/placeholder-lobby.jpg", alt: "Placeholder 2" },
    { src: "/img/sequence/placeholder-suite.jpg", alt: "Placeholder 3" },
    { src: "/img/sequence/placeholder-varanda.jpg", alt: "Placeholder 4" },
  ],
  overlays: [
    { from: 0.2, to: 0.34, title: "Tudo começa com uma linha de código." },
    { from: 0.62, to: 0.76, title: "E termina em produção, medindo resultado." },
  ],
};
