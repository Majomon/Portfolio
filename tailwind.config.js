/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        tambaleo: {
          "0%": { transform: "translateX(0) rotate(-2deg)" },
          "50%": { transform: "translateX(10px) rotate(2deg)" },
          "100%": { transform: "translateX(0) rotate(-2deg)" },
        },
        colorAnimation: {
          "0%": { color: "black" },
          "50%": { color: "white" },
          "100%": { color: "black" },
        },
        cardMovieAnimateHover: {
          "0%": {
            transform: "translateY(100%) scaleY(0)",
            transformOrigin: "top",
          },
          "50%": {
            transform: "translateY(50%) scaleY(0.5)",
            transformOrigin: "top",
          },
          "100%": {
            transform: "translateY(0%) scaleY(1)",
            transformOrigin: "top",
          },
        },
        cardMovieAnimateNoHover: {
          "0%": {
            transform: "translateY(0%) scaleY(1)",
            transformOrigin: "top",
          },
          "50%": {
            transform: "translateY(50%) scaleY(0.5)",
            transformOrigin: "top",
          },
          "100%": {
            transform: "translateY(100%) scaleY(0)",
            transformOrigin: "top",
          },
        },
      },
      animation: {
        tambaleo: "tambaleo 1.5s infinite",
        colorAnimation: "colorAnimation 1s infinite",
        cardMovieAnimateHover: "cardMovieAnimateHover .5s linear",
        cardMovieAnimateNoHover: "cardMovieAnimateNoHover 1s linear",
      },
    },
  },
  plugins: [],
};
