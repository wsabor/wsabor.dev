export type Certification = {
  /** Código do exame (ex.: "AZ-900"). */
  code: string;
  /** Nome oficial, como aparece no selo. */
  name: string;
  issuer: string;
  /** Data de emissão (AAAA-MM-DD). */
  issuedAt: string;
  /** Página pública da credencial (Microsoft Learn). */
  url: string;
  /** Selo em /public (256×256, WebP). */
  badge: string;
};

// Selos: catálogo oficial da Microsoft na Credly (o Microsoft Learn usa um selo
// genérico "Fundamentals" igual para todas).
export const certifications: Certification[] = [
  {
    code: "AZ-900",
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    issuedAt: "2023-05-17",
    url: "https://learn.microsoft.com/api/credentials/share/pt-br/wsabor/A4C55A2EFC3591EE?sharingId=5DA16412146FA582",
    badge: "/img/certifications/az-900.webp",
  },
  {
    code: "DP-900",
    name: "Azure Data Fundamentals",
    issuer: "Microsoft",
    issuedAt: "2023-08-12",
    url: "https://learn.microsoft.com/api/credentials/share/pt-br/wsabor/9798822A9473D122?sharingId=5DA16412146FA582",
    badge: "/img/certifications/dp-900.webp",
  },
  {
    code: "SC-900",
    name: "Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    issuedAt: "2023-05-11",
    url: "https://learn.microsoft.com/api/credentials/share/pt-br/wsabor/43D5E805885D08A8?sharingId=5DA16412146FA582",
    badge: "/img/certifications/sc-900.webp",
  },
  {
    code: "AI-900",
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    issuedAt: "2023-10-09",
    url: "https://learn.microsoft.com/api/credentials/share/pt-br/wsabor/FCC33C698B951C19?sharingId=5DA16412146FA582",
    badge: "/img/certifications/ai-900.webp",
  },
  {
    code: "PL-900",
    name: "Power Platform Fundamentals",
    issuer: "Microsoft",
    issuedAt: "2023-09-02",
    url: "https://learn.microsoft.com/api/credentials/share/pt-br/wsabor/9985A891EB1C14F5?sharingId=5DA16412146FA582",
    badge: "/img/certifications/pl-900.webp",
  },
];
