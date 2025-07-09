"use client";

import Image from "next/image";

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
  if (!images || images.length === 0) {
    return null;
  }

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
          <figure key={index} className="flex flex-col gap-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-black/10 transition-colors hover:border-primary dark:border-white/10 dark:hover:border-primary">
              <Image
                src={`/img/projects/${item.image}`}
                alt={item.caption} // Usar a legenda como alt text é ótimo para acessibilidade
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            {/* 3. Renderiza a legenda abaixo da imagem */}
            <figcaption className="text-center text-sm text-text-muted">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
