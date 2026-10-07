/** @type {import('next').NextConfig} */
const nextConfig = {
  // Não deixar o `next dev` injetar regras de agente no CLAUDE.md/AGENTS.md
  agentRules: false,

  images: {
    // Só WebP: o encoder AVIF do sharp trava em imagens largas (ex.: capa de
    // 1920px dos estudos de caso ficava pendente). As origens já são WebP.
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Otimizações de performance
  experimental: {
    optimizePackageImports: ["lucide-react"], // Otimiza imports de ícones
  },

  // /home nunca existiu neste site, mas o Google rastreou (Search Console, 404)
  async redirects() {
    return [{ source: "/home", destination: "/", permanent: true }];
  },

  // Headers de segurança
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },

  // Compressão
  compress: true,

  // Minificação de CSS
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;
