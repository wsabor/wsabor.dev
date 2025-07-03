// tailwind.config.ts - VERSÃO REFATORADA

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Perfeito, já estava certo
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-sora)"],
      },
      colors: {
        // Mapeando nossas variáveis CSS para classes do Tailwind
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))", // Nova cor para cards
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
        },
        text: {
          main: "hsl(var(--text-main))",
          muted: "hsl(var(--text-muted))", // Nova cor para textos secundários
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
