import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import * as typo from "@tailwindcss/typography";
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [typo.default],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.blue.600"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
            },
            h1: {
              fontSize: theme("fontSize.3xl"),
              fontWeight: theme("fontWeight.bold"),
              color: theme("colors.gray.900"),
            },
            h2: {
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.bold"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontSize: theme("fontSize.xl"),
              fontWeight: theme("fontWeight.semibold"),
              color: theme("colors.gray.900"),
            },
            ul: {
              listStyleType: "disc",
              paddingLeft: theme("spacing.5"),
            },
            ol: {
              listStyleType: "decimal",
              paddingLeft: theme("spacing.5"),
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
              color: theme("colors.gray.100"),
              padding: theme("spacing.4"),
              borderRadius: theme("borderRadius.lg"),
              overflowX: "auto",
              lineHeight: theme("lineHeight.relaxed"),
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "inherit",
              padding: 0,
              fontSize: theme("fontSize.sm"),
            },
            code: {
              backgroundColor: theme("colors.gray.200"),
              color: theme("colors.pink.600"),
              padding: "0.2rem 0.4rem",
              borderRadius: theme("borderRadius.sm"),
              fontSize: theme("fontSize.sm"),
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.500"),
              },
            },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            code: {
              backgroundColor: theme("colors.gray.700"),
              color: theme("colors.pink.400"),
            },
            pre: {
              backgroundColor: theme("colors.gray.900"),
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
};

export default config;
