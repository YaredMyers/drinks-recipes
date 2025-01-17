/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,js,tsx, jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url(/bg.jpg)",
      },
    },
  },
  plugins: [],
};
