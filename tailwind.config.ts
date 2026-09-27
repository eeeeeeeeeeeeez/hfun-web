import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0F1B2D",
          800: "#1C3050",
          700: "#26406A",
        },
        paper: "#F0EEE6",
        gold: {
          DEFAULT: "#B8863B",
          light: "#D9B679",
          dark: "#8E6526",
        },
        ink: "#16202B",
        sage: "#3E6B52",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};
export default config;
