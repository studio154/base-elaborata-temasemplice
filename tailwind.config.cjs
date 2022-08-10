/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        desktopGradient: "url('./images/desktopGradient.mp4')",
      }),
      boxShadow: {
        normal: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
      colors: {
        smoke: {
          50: "#ffffff",
          100: "#F9F9F9",
          200: "#C7C7C7",
          300: "#969696",
          400: "#636363",
          500: "#333333",
        },
        blue: {
          50: "#EBEBFF",
          100: "#D8D6FF",
          200: "#B0ADFF",
          300: "#8985FF",
          400: "#6661FF",
          500: "#3C37FF",
          600: "#0800FA",
          700: "#0600B8",
          800: "#04007A",
          900: "#02003D",
        },
      },
      fontFamily: {
        sans: ["Roboto Flex", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
