import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#1D2647",
          800: "#2A3660",
          700: "#34406E",
        },
        paper: "#F4F6F8",
        steel: {
          DEFAULT: "#2F7098",
          light: "#6FA8C7",
          dark: "#1F4F6E",
        },
        leaf: {
          DEFAULT: "#5EA24B",
          light: "#8CC97E",
          dark: "#3D7A34",
        },
        silver: "#C9CFD6",
        ink: "#1A2233",
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
