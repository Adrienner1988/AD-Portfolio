/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./src/Views/Home/Home.tsx",
    "./src/Views/Projects/Projects.tsx",
    "./src/Views/Contact/Contact.tsx",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      purple: "#700F6A",
      lavender: "#BF83D1",
      offWhite: "#F5F5F5",
      charcoal: "#555555",
      gold: "#FFD700",
    },
    extend: {},
  },
  plugins: [],
};
