const { createThemes } = require("tw-colors");
const { tailwindAntdColors } = require("./tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  corePlugins: {
    preflight: false, // for antd compatibility
  },
  plugins: [createThemes(tailwindAntdColors)],
};
