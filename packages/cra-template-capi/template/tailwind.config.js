/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/cirque/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  presets: [require("cirque/dist/themes/polkadot/tw-preset.cjs")],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
