/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        border: "#F3F4F6",
        "customize-gold": "#DAA520",
        "bg-gold": "#FFE1D1",
      },
    },
  },
  plugins: [],
};
