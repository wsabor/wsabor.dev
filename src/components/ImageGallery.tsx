"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// (Opcional, mas recomendado) Importe plugins para funcionalidades extras
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions"; // Importe o plugin de Captions
import "yet-another-react-lightbox/plugins/captions.css"; // E seus estilos
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// 1. Defina o tipo para uma única imagem da galeria
type GalleryImage = {
  image: string;
  caption: string;
};

// 2. As props agora esperam um array desse tipo
type ImageGalleryProps = {
  images: GalleryImage[];
};

export function ImageGallery({ images }: ImageGalleryProps) {
  const [index, setIndex] = useState(-1);

  if (!images || images.length === 0) {
    return null;
  }

  // 3. Prepara a lista de slides para o lightbox
  const slides = images.map((item) => ({
    src: `/img/${item.image}`,
    title: item.caption,
  }));

  return (
    <div className="not-prose my-12">
      <h3 className="mb-6 text-2xl font-bold text-text-main">
        Galeria do Projeto
      </h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {" "}
        {/* Aumentado o gap */}
        {images.map((item, index) => (
          // Cada item da galeria agora é uma <figure> para semântica correta
          <figure
            key={index}
            className="group flex cursor-pointer flex-col gap-2"
            onClick={() => setIndex(index)}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-black/10 transition-colors hover:border-primary dark:border-white/10 dark:hover:border-primary">
              <Image
                src={`/img/projects/${item.image}`}
                alt={item.caption} // Usar a legenda como alt text é ótimo para acessibilidade
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            {/* 3. Renderiza a legenda abaixo da imagem */}
            <figcaption className="text-center text-sm text-text-muted transition-colors group-hover:text-primary">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      {/* 5. Renderiza o componente Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Fullscreen, Zoom, Thumbnails, Captions]} // Ativa os plugins
        captions={{ descriptionTextAlign: "center" }} // Configura a posição das legendas
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, .9)" },
        }}
        thumbnails={{
          position: "bottom",
          border: 0,
          borderRadius: 4,
          padding: 8,
          gap: 16,
        }}
      />
    </div>
  );
}
