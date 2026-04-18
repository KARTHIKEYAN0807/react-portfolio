/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#060816",
        card: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.12)",
        primary: "#7c3aed",
        secondary: "#06b6d4",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,58,237,0.25)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top left, rgba(124,58,237,0.22), transparent 35%), radial-gradient(circle at top right, rgba(6,182,212,0.18), transparent 30%), linear-gradient(180deg, #060816 0%, #0b1022 100%)",
      },
    },
  },
  plugins: [],
};
