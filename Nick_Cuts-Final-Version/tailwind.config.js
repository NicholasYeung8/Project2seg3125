/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#040815",
        primaryGray: "#707070",
        theme: "#6539d5",
        theme2: "#f5e6fa",
        accent: "#b339d5",
        cardBG: "#F7F5FD",
      },
    },
  },
  plugins: [],
};
