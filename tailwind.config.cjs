module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // if you want dark mode support
  theme: {
    extend: {
      keyframes: {
        fadeSlide: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeSlide: "fadeSlide 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
