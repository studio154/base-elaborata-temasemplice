/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
     fontSize: {
      xs: [
        '0.75rem',
        {
          lineHeight: '1rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '2rem',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '2rem',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
        },
      ],
      '3xl': [
        '2rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '4xl': [
        '2.5rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '5xl': [
        '3rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '6xl': [
        '3.75rem',
        {
          lineHeight: '1',
        },
      ],
      '7xl': [
        '4.5rem',
        {
          lineHeight: '1.1',
        },
      ],
      '8xl': [
        '6rem',
        {
          lineHeight: '1',
        },
      ],
      '9xl': [
        '8rem',
        {
          lineHeight: '1',
        },
      ],
    },
    extend: {
        animation: {
          marquee: 'marquee 25s linear infinite',
          marquee2: 'marquee2 25s linear infinite',
          scroller3: 'scroller3 25s linear infinite',
          'spin-slow': 'spin 4s linear infinite',
          'spin-slower': 'spin 6s linear infinite',
          'spin-reverse': 'spin-reverse 1s linear infinite',
          'spin-reverse-slow': 'spin-reverse 4s linear infinite',
          'spin-reverse-slower': 'spin-reverse 6s linear infinite',
          scroller: 'scroller 15s linear infinite',
          scroller2: 'scroller2 20s linear infinite',
          'fade-in': 'fade-in 0.5s linear forwards',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          marquee2: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0%)' },
          },
          scroller: {
            '0%': { transform: 'translateY(10em)' },
            '100%': { transform: 'translateY(-14em)' },
          },
          scroller2: {
            '0%': { transform: 'translateY(10em)' },
            '100%': { transform: 'translateY(-14em)' },
          },
          'fade-in': {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
          },
          scroller3: {
            '100%': {
              transform: 'translateY(-50%)',
            },
          },
          'spin-reverse': {
            to: {
              transform: 'rotate(-360deg)',
            },
          },
        },
      backgroundImage: (theme) => ({
        desktopGradient: "url('./images/desktopGradient.mp4')",
      }),
      boxShadow: {
        normal: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
      colors: {
        black:"#1b1d20",
        accent: {
         50: "#EEE8FD",
      100: "#E1D5FB",
      200: "#C3ABF7",
      300: "#A581F3",
      400: "#8757EF",
      500: "#672CEB",
      600: "#4E13CD",
      700: "#3B0F9A",
      800: "#270A66",
      900: "#140533"
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Neue Power", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [ require('@tailwindcss/typography'),require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
