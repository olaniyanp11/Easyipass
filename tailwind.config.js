/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A47FF",
        secondary: "#04050E",
        background: "#4A47FF",
        text: "#080B1F",
      },
    },
  },
  plugins: [],
};

export default config;
