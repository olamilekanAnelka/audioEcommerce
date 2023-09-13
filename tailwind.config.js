/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
      },
      colors: {
        appbrown: '#d77c47',
        appgray: '#bababa',
      },
    },
  },
  plugins: [],
};
