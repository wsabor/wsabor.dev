import { ImageResponse } from "next/og";
import { serviceArea, WHATSAPP_DISPLAY } from "@/data/business";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Site, Google e anúncios para o seu negócio — Wagner Sabor, Osvaldo Cruz e Oeste Paulista";

// Prévia do link /seu-negocio (WhatsApp, redes sociais). Mesmo visual da OG dos posts.
export default function OgImage() {
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

        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            color: "hsl(193, 100%, 50%)",
            letterSpacing: "-0.01em",
          }}
        >
          wsabor.com
        </div>

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
          Para o seu negócio
        </div>

        {/* Título grande, ocupa o centro */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "hsl(0, 0%, 96%)",
            }}
          >
            Site, Google e anúncios para o seu negócio
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 30,
              color: "hsl(0, 0%, 65%)",
            }}
          >
            {`${serviceArea.city} e ${serviceArea.region} · Atendo todo o Brasil`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 1,
            backgroundColor: "hsl(0, 0%, 20%)",
            marginBottom: 24,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "hsl(0, 0%, 65%)",
          }}
        >
          <span style={{ color: "hsl(0, 0%, 88%)", fontWeight: 600 }}>
            Wagner Sabor
          </span>
          <span>{`WhatsApp ${WHATSAPP_DISPLAY}`}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
