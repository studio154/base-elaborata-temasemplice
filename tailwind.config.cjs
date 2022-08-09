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
          50:  '#F5FCFF',
          100: '#D9EDFF',
          200: '#ACCFFC',
          300: '#85ACF4',
          400: '#758CEC',
          500: '#5C66D2',
          600: '#414AA6',
          700: '#313B84',
          800: '#262C62',
          900: '#152041',
        },
      },
      fontFamily: {
        sans: ["Roboto Flex", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
