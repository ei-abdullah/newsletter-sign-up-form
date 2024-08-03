/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tomato: "var(--tomato)",
        darkSlateGrey: "var(--darkSlateGrey)",
        charcoalGrey: "var(--charcoalGrey)",
        grey: "var(--grey)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
