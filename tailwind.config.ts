import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lufga: ["var(--font-lufga)"],
      },
      screens: {
        "max-md": { max: "767px" },
      },
      colors: {
        primary: "#110229", // navy blue
        secondary: "#1DAEFF", // light blue
        tertiary: "#8F90A6", // grey
        sky: "#ECF1F8",
      },
    },
  },
  plugins: [],
} satisfies Config;
