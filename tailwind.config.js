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
      },
      padding: {
        4.5: "1.125rem",
      },
      borderRadius: {
        "2sm": "0.25rem",
      },
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        red: "var(--red)",
        error: "var(--error)",
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
