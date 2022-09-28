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
        black:"#1b1d20",
        blue: {
          50: "#E5E5FF",
          100: "#CCCCFF",
          200: "#9999FF",
          300: "#6666FF",
          400: "#3333FF",
          500: "#0000FF",
          600: "#0000CC",
          700: "#000099",
          800: "#000066",
          900: "#000033",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
