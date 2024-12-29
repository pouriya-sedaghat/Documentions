/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "pages/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    // container: {
    //   center: true,
    //   padding: { DEFAULT: "1rem", sm: "2rem", xl: "3rem" },
    // },
    // screens: {
    //   sm: { min: "576px" },
    //   lg: { min: "992px" },
    //   "2xl": { min: "1400px" },
    // },
    // keyframes: {
    //   rotate: {
    //     from: { transform: "rotateZ(45deg)" },
    //     to: { transform: "rotateZ(360deg)" },
    //   },
    // },
    extend: {
      // fontFamily: {
      //   dana: "dana",
      // },
      // animation: {
      //   rotate: "rotate 3s linear 0s 1 normal backwards running",
      // },
    },
  },
  plugins: [],
};
