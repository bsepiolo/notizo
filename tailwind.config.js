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
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        blue: "var(--blue)",
        accent: "var(--accent)",
      },
      height: {
        "input-lg": "46px",
      },
    },
  },
  plugins: [],
};
