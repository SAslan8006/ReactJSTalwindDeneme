/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#28338B",
        "primary-300": "#C74BD2",
        "primary-500": "#1F1F1F",
        "gradient-100": "#3C1DFF",
        "gradient-300": "#14C9C9"
      },
      content: {
        test100: "https://picsum.photos/200",
        test300: "https://picsum.photos/200",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}