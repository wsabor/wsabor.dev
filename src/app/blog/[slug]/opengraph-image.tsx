import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPostsMeta } from "@/lib/posts";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Wagner Sabor — Blog";

export function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function OgImage({ params }: Props) {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);

  const publishedAt = new Date(meta.publishedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "hsl(0, 0%, 7%)",
          color: "hsl(0, 0%, 88%)",
          fontFamily: "system-ui, sans-serif",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        {/* Stripe de cor no topo (gradiente da marca) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background:
              "linear-gradient(90deg, hsl(214, 100%, 60%) 0%, hsl(193, 100%, 50%) 100%)",
          }}
        />

        {/* Brand no topo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 700,
            color: "hsl(193, 100%, 50%)",
            letterSpacing: "-0.01em",
          }}
        >
          wsabor.dev
        </div>

        {/* Categoria (se houver) */}
        {meta.category && (
          <div
            style={{
              display: "flex",
              marginTop: 48,
              fontSize: 22,
              fontWeight: 600,
              color: "hsl(214, 100%, 70%)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            {meta.category}
          </div>
        )}

        {/* Título grande, ocupa o centro */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            fontSize: meta.title.length > 60 ? 60 : 72,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "hsl(0, 0%, 96%)",
            marginTop: meta.category ? 16 : 0,
          }}
        >
          {meta.title}
        </div>

        {/* Linha divisória */}
        <div
          style={{
            display: "flex",
            height: 1,
            backgroundColor: "hsl(0, 0%, 20%)",
            marginBottom: 24,
          }}
        />

        {/* Footer: autor + data + tempo de leitura */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "hsl(0, 0%, 65%)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ color: "hsl(0, 0%, 88%)", fontWeight: 600 }}>
              Wagner Sabor
            </span>
            <span style={{ color: "hsl(0, 0%, 30%)" }}>·</span>
            <span>{publishedAt}</span>
            {meta.readingTime && (
              <>
                <span style={{ color: "hsl(0, 0%, 30%)" }}>·</span>
                <span>{meta.readingTime}</span>
              </>
            )}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "hsl(0, 0%, 45%)",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            Blog
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
