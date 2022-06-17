module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      one: ["Author", "sans-serif"],
      two: ["Cabinet Grotesk", "sans-serif"],
      three: ["Excon", "sans-serif"],
      four: ["Switzer", "sans-serif"],
      britney: ["Britney", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
