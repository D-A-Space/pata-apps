/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141933",
        blue1: "#05D3F6",
        blue2: "#2C8EEE",
        blue3: "#117EEB",
        candy: "#FD4E67",
        pinky: "#B46EF8",
        outer: "#4C536C",
        garden: "#0E925A",
        oily: "#77A728",
        foshi: "#942863",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
