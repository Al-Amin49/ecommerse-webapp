/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./src/server/**/*"],
  theme: {
    extend: {
      colors: {
        secondary: "#202020",
      },
    },
  },
  plugins: [],
};
