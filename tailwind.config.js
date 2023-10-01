/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 👇 Add CSS variables
        sans: ["var(--font-roboto)"],
        montserrat: ["var(--font-montserrat)"],
        "istok-web": ["var(--font-istok-web)"],
      },
      fontSize: {
        sm: "0.813rem",
        md: "0.875rem",
        "3xl": "2rem",
        "2xl": "1.625rem",
      },
      padding: {
        4.5: "1.125rem",
      },
      borderRadius: {
        "2sm": "0.25rem",
      },
      textColor: {
        secondary: "rgb(var(--gray-500) / <alpha-value>)",
      },
      colors: {
        white: "rgb(var(--white) / <alpha-value>)",
        black: "rgb(var(--black) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        "gray-100": "rgb(var(--gray-100) / <alpha-value>)",
        "gray-200": "rgb(var(--gray-200) / <alpha-value>)",
        "gray-300": "rgb(var(--gray-300) / <alpha-value>)",
        "gray-400": "rgb(var(--gray-400) / <alpha-value>)",
        red: "rgb(var(--red) / <alpha-value>)",
        error: "rgb(var(--red) / <alpha-value>)",
        blue: "rgb(var(--blue) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      height: {
        "input-base": "46px",
      },
      width: {
        "input-base": "46px",
      },
    },
  },
  plugins: [],
};
