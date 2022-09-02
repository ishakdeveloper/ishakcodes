const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'media' or 'class', or remove if unused
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    gradientColorStops: {
      ...colors,
    },

    extend: {
      colors: {
        ...colors,
        transparent: "transparent",
        current: "currentColor",
        //custom colours go here
        "primary-black": "#1E1E1E",
        "primary-blue": "#1E39A4",
        "primary-blue-2": "#183090",
        "light-blue-1": "#F9FAFF",
        "primary-gray-1": "#9D9D9D",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
