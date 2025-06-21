import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-sora)"],
      },
      colors: {
        background: "#09090B",
        surface: "#18181B",
        primary: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
          dark: "#0891B2",
        },
        text: {
          main: "#FAFAFA",
          muted: "#A1A1AA",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
