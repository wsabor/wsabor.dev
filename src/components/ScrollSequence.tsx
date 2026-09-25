"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { useMediaQuery, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

export interface ScrollSequenceImage {
  src: string;
  alt: string;
}

export interface ScrollSequenceOverlay {
  /** Progresso do scroll (0–1) em que o texto aparece e some. */
  from: number;
  to: number;
  title: string;
}

export interface ScrollSequenceContent {
  framesPath: string;
  frameCount: number;
  mobileFramesPath: string;
  mobileFrameCount: number;
  /** Distância do pin, ex.: "+=300%" (relativo à altura da viewport). */
  scrollLength: string;
  /** Até que ponto do progresso o conteúdo de abertura (children) fica visível. */
  introUntil: number;
  /** Imagens estáticas exibidas com prefers-reduced-motion, em ordem. */
  reducedMotionImages: ScrollSequenceImage[];
  overlays: ScrollSequenceOverlay[];
}

interface ScrollSequenceProps extends ScrollSequenceContent {
  /** Conteúdo de abertura exibido sobre o primeiro frame (ex.: o hero). */
  children?: ReactNode;
}

const MOBILE_QUERY = "(max-width: 767px)";
const LOAD_BATCH_SIZE = 8;

function frameSrc(path: string, index: number) {
  return `${path}/${String(index + 1).padStart(4, "0")}.webp`;
}

/** Altura do header sticky, definida em --header-h no globals.css. */
function headerHeight() {
  return (
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
    ) || 0
  );
}

/** Desenha `image` no `ctx` cobrindo `width`x`height`, centralizada. */
function drawCover(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  width: number,
  height: number,
) {
  const imageRatio = image.naturalWidth / image.naturalHeight;
  const boxRatio = width / height;
  let drawWidth: number;
  let drawHeight: number;

  if (imageRatio > boxRatio) {
    drawHeight = height;
    drawWidth = height * imageRatio;
  } else {
    drawWidth = width;
    drawHeight = width / imageRatio;
  }

  ctx.drawImage(
    image,
    (width - drawWidth) / 2,
    (height - drawHeight) / 2,
    drawWidth,
    drawHeight,
  );
}

export default function ScrollSequence({
  framesPath,
  frameCount,
  mobileFramesPath,
  mobileFrameCount,
  scrollLength,
  introUntil,
  reducedMotionImages,
  overlays,
  children,
}: ScrollSequenceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [introVisible, setIntroVisible] = useState(true);
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const isMobile = useMediaQuery(MOBILE_QUERY);
  const reducedMotion = usePrefersReducedMotion();

  const path = isMobile ? mobileFramesPath : framesPath;
  const count = isMobile ? mobileFrameCount : frameCount;

  useGSAP(
    () => {
      if (reducedMotion) return;

      const section = sectionRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!section || !canvas || !ctx) return;

      let cancelled = false;
      const images: HTMLImageElement[] = [];
      const state = { frame: 0 };

      function sizeCanvas() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = section!.getBoundingClientRect();
        canvas!.width = Math.round(rect.width * dpr);
        canvas!.height = Math.round(rect.height * dpr);
        canvas!.style.width = `${rect.width}px`;
        canvas!.style.height = `${rect.height}px`;
        ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
        return { width: rect.width, height: rect.height };
      }

      let canvasSize = sizeCanvas();

      function draw(index: number) {
        // Enquanto o frame exato não carregou, usa o mais próximo já carregado.
        let drawIndex = index;
        while (drawIndex >= 0 && !images[drawIndex]?.complete) drawIndex--;
        if (drawIndex < 0) {
          drawIndex = index;
          while (drawIndex < count && !images[drawIndex]?.complete) drawIndex++;
        }
        const image = images[drawIndex];
        if (!image || !image.complete) return;

        ctx!.clearRect(0, 0, canvasSize.width, canvasSize.height);
        drawCover(ctx!, image, canvasSize.width, canvasSize.height);
      }

      const first = new window.Image();
      first.src = frameSrc(path, 0);
      first.setAttribute("fetchpriority", "high");
      images[0] = first;
      first.onload = () => !cancelled && draw(0);

      function loadRemaining() {
        let next = 1;
        function loadBatch() {
          if (cancelled) return;
          const end = Math.min(next + LOAD_BATCH_SIZE, count);
          for (; next < end; next++) {
            const image = new window.Image();
            image.src = frameSrc(path, next);
            image.onload = () => !cancelled && draw(Math.round(state.frame));
            images[next] = image;
          }
          if (next < count) requestAnimationFrame(loadBatch);
        }
        loadBatch();
      }

      if (document.readyState === "complete") {
        loadRemaining();
      } else {
        window.addEventListener("load", loadRemaining, { once: true });
      }

      const tween = gsap.to(state, {
        frame: count - 1,
        ease: "none",
        snap: "frame",
        onUpdate: () => draw(Math.round(state.frame)),
        scrollTrigger: {
          trigger: section,
          // Pina logo abaixo do header sticky
          start: () => `top top+=${headerHeight()}`,
          end: scrollLength,
          pin: true,
          // O <main> é flex; nesse caso o padrão do ScrollTrigger é
          // pinSpacing: false e o conteúdo seguinte não seria empurrado.
          pinSpacing: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setIntroVisible(self.progress < introUntil);
            const index = overlays.findIndex(
              (overlay) =>
                self.progress >= overlay.from && self.progress < overlay.to,
            );
            setActiveOverlay(index === -1 ? null : index);
          },
        },
      });

      let resizeTimeout: ReturnType<typeof setTimeout>;
      function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          canvasSize = sizeCanvas();
          draw(Math.round(state.frame));
          ScrollTrigger.refresh();
        }, 150);
      }
      window.addEventListener("resize", handleResize);

      return () => {
        cancelled = true;
        clearTimeout(resizeTimeout);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("load", loadRemaining);
        tween.scrollTrigger?.kill(true);
        tween.kill();
      };
    },
    {
      scope: sectionRef,
      dependencies: [path, count, reducedMotion, scrollLength, introUntil],
      // Sem isso, cada troca mobile/desktop deixa um pin-spacer antigo vivo
      revertOnUpdate: true,
    },
  );

  // Classe "dark" força os tokens escuros: o vídeo é sempre escuro,
  // independente do tema escolhido no site.
  if (reducedMotion) {
    const [cover, ...rest] = reducedMotionImages;
    return (
      <section className="dark bg-neutral-950 text-text-main">
        <div className="relative flex h-[calc(100svh-var(--header-h))] items-center justify-center">
          {cover && (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-neutral-950/70" />
          <div className="relative z-10">{children}</div>
        </div>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
          {rest.map((image) => (
            <div key={image.src} className="relative aspect-video">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="dark relative h-[calc(100svh-var(--header-h))] overflow-hidden bg-neutral-950 text-text-main"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />

      {/* Abertura (hero): visível no carregamento, some ao rolar */}
      <div
        inert={!introVisible}
        className={`absolute inset-0 z-10 flex items-center justify-center bg-neutral-950/70 transition-opacity duration-500 ${
          introVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {children}
      </div>

      {/* Textos de overlay com scrim radial: escurece o centro e preserva as bordas do frame */}
      {overlays.map((overlay, index) => (
        <div
          key={overlay.title}
          aria-hidden={activeOverlay !== index}
          className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgb(10_10_10/0.75)_0%,rgb(10_10_10/0.45)_45%,transparent_75%)] px-6 transition-opacity duration-500 ${
            activeOverlay === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-display max-w-4xl text-center text-balance text-3xl font-bold text-white drop-shadow-lg md:text-5xl">
            {overlay.title}
          </p>
        </div>
      ))}
    </section>
  );
}
