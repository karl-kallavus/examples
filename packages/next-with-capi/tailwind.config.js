/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/cirque/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  presets: [
    require('cirque/dist/themes/polkadot/tw-preset.cjs')
  ],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
