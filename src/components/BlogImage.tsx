import Image from "next/image";

type BlogImageProps = {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: "video" | "square" | "portrait";
  size?: "small" | "medium" | "large" | "full";
};

export function BlogImage({
  src,
  alt,
  caption,
  aspectRatio = "video",
  size = "full",
}: BlogImageProps) {
  const aspectClasses = {
    video: "aspect-video", // 16:9
    square: "aspect-square", // 1:1
    portrait: "aspect-[3/4]", // 3:4
    wide: "aspect-[21/9]", // 21:9 - NOVO
    ultrawide: "aspect-[32/9]", // 32:9 - NOVO
  };

  const sizeClasses = {
    tiny: "max-w-xs mx-auto", // ~320px - NOVO
    small: "max-w-sm mx-auto", // ~384px
    medium: "max-w-2xl mx-auto", // ~672px
    large: "max-w-4xl mx-auto", // ~896px
    xlarge: "max-w-6xl mx-auto", // ~1152px - NOVO
    full: "w-full", // 100%F
  };

  return (
    <figure className={`not-prose my-8 ${sizeClasses[size]}`}>
      <div
        className={`relative ${aspectClasses[aspectRatio]} w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/10`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
