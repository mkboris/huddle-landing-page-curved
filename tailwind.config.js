/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      lg: "976px",
    },
    colors: {
      pink: "hsl(322, 100%, 66%)",
      "light-pink": "hsl(321, 100%, 78%)",
      "light-red": "hsl(0, 100%, 63%)",
      "very-dark-cyan": "hsl(192, 100%, 9%)",
      "very-pale-blue": "hsl(207, 100%, 98%)",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
