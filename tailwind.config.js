module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/styles/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tetiary: "var(--tetiary)",
        accent: {
          1: "var(--accent1)",
          11: "var(--accent11)",
        },
      },
    },
  },
  plugins: [],
};
