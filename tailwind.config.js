/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2b3945",
        "very-dark-blue": "#202c37",
        peru: "#cd853f",
      },
    },
  },
  plugins: [],
};
