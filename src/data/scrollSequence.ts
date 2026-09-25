import type { ScrollSequenceContent } from "@/components/ScrollSequence";

// Frames extraídos do vídeo editor → terminal → datacenter → dashboard
// (clipes gerados no Gemini, montados com ffmpeg). Imagens estáticas = frames do mesmo vídeo.
export const scrollSequence: ScrollSequenceContent = {
  framesPath: "/sequence/desktop",
  frameCount: 120,
  mobileFramesPath: "/sequence/mobile",
  mobileFrameCount: 60,
  scrollLength: "+=300%",
  introUntil: 0.06,
  reducedMotionImages: [
    {
      src: "/img/sequence/sequence-editor.jpg",
      alt: "Monitor em uma mesa escura exibindo um editor de código",
    },
    {
      src: "/img/sequence/sequence-terminal.jpg",
      alt: "Janela de terminal com linhas de código em verde",
    },
    {
      src: "/img/sequence/sequence-datacenter.jpg",
      alt: "Corredor de datacenter com racks de servidores iluminados em azul",
    },
    {
      src: "/img/sequence/sequence-dashboard.jpg",
      alt: "Painel na parede exibindo um dashboard com gráficos de métricas",
    },
  ],
  overlays: [
    { from: 0.3, to: 0.46, title: "Tudo começa com uma linha de código" },
    { from: 0.84, to: 1.01, title: "E termina em produção, medindo resultado" },
  ],
};
