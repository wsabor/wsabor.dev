"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type GalleryImage = {
  image: string;
  caption: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
  basePath: string;
};

export function ImageGallery({ images, basePath }: ImageGalleryProps) {
  const [index, setIndex] = useState(-1);

  if (!images || images.length === 0) {
    return null;
  }

  const slides = images.map((item) => ({
    src: `${basePath}${item.image}`,
    title: item.caption,
  }));

  return (
    <div className="not-prose my-12">
      <h3 className="mb-6 text-2xl font-bold text-text-main">Galeria</h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {images.map((item, idx) => (
          <figure
            key={idx}
            className="group flex cursor-pointer flex-col gap-2"
            onClick={() => setIndex(idx)}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-black/10 transition-colors hover:border-primary dark:border-white/10 dark:hover:border-primary">
              <Image
                src={`${basePath}${item.image}`}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <figcaption className="text-center text-sm text-text-muted transition-colors group-hover:text-primary">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Fullscreen, Zoom, Thumbnails, Captions]}
        captions={{ descriptionTextAlign: "center" }}
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
