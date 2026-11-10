/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      papel: "#f2eee5",
      "papel-fundo": "#e6e0d2",
      tinta: "#1c1b18",
      "tinta-suave": "#57534b",
      linha: "#cfc7b6",
      "petroleo-profundo": "#022f42",
      "texto-invertido-suave": "#a8bcc3",
      "acento-ponto": "#d9482a",
    },
    borderRadius: {
      none: "0",
      full: "9999px",
    },
    boxShadow: {
      none: "none",
    },
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
      },
    },
  },
  plugins: [],
};
