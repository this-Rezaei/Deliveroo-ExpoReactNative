/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      sans: ["IranSans"],
      "sans-light": ["IranSansLight"],
      "sans-semiBold": ["IranSansSemiBold"],
      "sans-bold": ["IranSansBold"],
    },
  },
  plugins: [],
};
