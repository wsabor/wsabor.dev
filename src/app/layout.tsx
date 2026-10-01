import type { Metadata } from "next";
import { Inter, Sora, Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

import { SITE_URL, defaultOpenGraph } from "@/lib/site";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VercelAnalytics from "@/components/VercelAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wagner Sabor | Desenvolvedor Especialista em Next.js e React",
    template: "%s | Wagner Sabor",
  },
  description:
    "Desenvolvedor Especialista em Next.js e React. Transformando ideias em aplicações web modernas e performáticas.",
  keywords: [
    "next.js",
    "react",
    "typescript",
    "tailwind css",
    "desenvolvedor next.js",
    "desenvolvedor react",
    "full stack",
    "front-end",
    "web development",
    "javascript",
  ],
  authors: [{ name: "Wagner Sabor", url: SITE_URL }],
  creator: "Wagner Sabor",

  // Open Graph (as páginas definem og:url e canonical via pageMetadata)
  openGraph: defaultOpenGraph,

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Wagner Sabor | Desenvolvedor Especialista em Next.js e React",
    description:
      "Transformando ideias em aplicações web modernas e performáticas.",
    creator: "@wsabor",
    images: ["/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "Wagner Sabor - Blog RSS Feed" },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sora.variable} ${bricolage.variable}`}
      suppressHydrationWarning={true}
    >
      <body
        className="flex min-h-screen flex-col bg-background text-text-main"
        suppressHydrationWarning={true}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-primary-strong focus:p-4 focus:text-white"
        >
          Pular para o conteúdo principal
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main id="main-content" className="flex flex-1 flex-col">
            {children}
          </main>
          <Footer />
          <VercelAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
