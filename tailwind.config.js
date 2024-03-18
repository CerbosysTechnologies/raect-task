/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        blue: "#00BAF2",
        darkblue: "#073B74",
        grey: "#858C8E",
        lightw: "#D9D9D9",
        white: "#fff",
        green: "#3BB77E",
        yellow: "#FFE144",
        primary: "#0089B3",
        textcol: "#253D4E",
        darkblak: "#3C3C3C",
        lightgreen: "#BCEFD8",
        secondary: "#ebeaf2",
        light_gray: '#f0f0f1',
        gray_light: '#d3d3d3',
      },
    },
  },
  plugins: [],
}