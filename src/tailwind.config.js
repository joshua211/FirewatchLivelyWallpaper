module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: {
        standard: [/(bottom-)[0-9]*$/, /(top-)[0-9]*$/],
      },
    },
  },
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
