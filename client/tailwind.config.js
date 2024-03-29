/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      screens: {
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
        1100: "1100px",
        1200: "1200px",
        1280: "1280px",
      },

      backgroundImage: {
        homeHeroBg: "url(/src/assets/landing_header.jpg)",
        homeHeroGradient:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        homeCardGradient:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.2) 50%)",

        "404NotFound": "url(/src/assets/pageNotFound.png)",

        movie_library_header_gradient:
          "linear-gradient(to top, rgba(0, 0, 0, .65) 70%, rgba(0, 0, 0, 0) 100%);",
      },

      boxShadow: {
        navbarDropdown: "0px 0px 10px rgba(10, 233, 233, .3)",
      },

      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        "1xl": "20px",
      },
    },

    fontFamily: {
      inter: ["Inter", "sans-serif"],
      rubik: ["rubik", "sans-serif"],
    },
  },

  plugins: [require("preline/plugin")],
};

// linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.2) 50%)
