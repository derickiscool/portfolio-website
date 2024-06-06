/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
        monsterrat: ["Monsterrat", "sans-serif"],
        jacquard: ["Jacquard", "sans-serif"],
        robotoMono: ["Roboto Mono", "sans-serif"],
        sen: ["Sen", "sans-serif"],
        mada: ["Mada", "sans-serif"],
        staatliches: ["Staatliches", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

