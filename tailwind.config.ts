import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: "#6e3726",
          cream: "#f8edca",
          accent: "#c4956a",
          dark: "#2c1810",
        },
      },
      fontFamily: {
        sans: ["Redressed", "cursive"],
        brand: ["Redressed", "cursive"],
        redressed: ["Redressed", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
