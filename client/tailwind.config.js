/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#101624", // primary
        "white-primary": "#edf0f1", // font highlight
        "cyber-blue": "#0088a9", // font description
        "slate-gray": "#6D6D6D",
        "pale-blue": "#141b2d", // secondary
        "white-400": "rgba(255, 255, 255, 0.80)", // white optional
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
