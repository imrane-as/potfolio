/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 1px rgba(56, 189, 248, .18), 0 12px 40px rgba(15, 23, 42, .35)",
      },
    },
  },
  plugins: [],
};