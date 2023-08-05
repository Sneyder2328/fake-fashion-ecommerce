import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.74rem",
      sm: "0.85rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito-sans)"],
        serif: ["var(--font-gelasio)"],
      },
      colors: {
        primaryMain: "#fefefe",
        primaryContrast: "#f8f8f8",
        primaryMainText: "#252525",
        primaryLightText: "#9c9c9c",
        primaryContrastText: "#c2c2c2",
        secondaryMain: "#121212",
        secondaryContrast: "#d3d3d3",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".inner": {
          margin: "0 auto",
          width: "90%",
          maxWidth: theme("screens.sm"),
          "@screen lg": {
            maxWidth: theme("screens.md"),
          },
          "@screen xl": {
            maxWidth: theme("screens.lg"),
          },
          "@screen 2xl": {
            maxWidth: theme("screens.xl"),
          },
        },
      });
    }),
  ],
} satisfies Config;
