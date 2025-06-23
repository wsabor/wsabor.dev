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
        background: "#121212",
        surface: "#1E1E1E",
        primary: {
          DEFAULT: "#3399FF",
          light: "#00C4FF",
          dark: "#0891B2",
        },
        text: {
          main: "#F7FAFC",
          muted: "#A1A1AA",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
