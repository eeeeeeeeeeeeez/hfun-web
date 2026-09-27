import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#13337B",
          800: "#1B408F",
          700: "#234DA3",
        },
        paper: "#F4F6F8",
        steel: {
          DEFAULT: "#2F7098",
          light: "#6FA8C7",
          dark: "#1F4F6E",
        },
        gold: {
          DEFAULT: "#F0B93D",
          light: "#FBD158",
          dark: "#C9932A",
        },
        silver: "#C9CFD6",
        ink: "#1A2233",
      },
      fontFamily: {
        serif: [
          "Microsoft JhengHei",
          "微軟正黑體",
          "PingFang TC",
          "var(--font-serif)",
          "sans-serif",
        ],
        sans: [
          "Microsoft JhengHei",
          "微軟正黑體",
          "PingFang TC",
          "var(--font-sans)",
          "sans-serif",
        ],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};
export default config;
