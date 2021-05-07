module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        nanumgothic: ["Nanum Gothic"],
        prompt: ["Prompt"],
        quicksand: ["Quicksand"],
        raleway: ["Raleway"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
