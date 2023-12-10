const { createThemes } = require("tw-colors");
const { tailwindAntdColors } = require("./tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
    },
    extend: {},
  },
  darkMode: "class",
  corePlugins: {
    preflight: false, // for antd compatibility
  },
  plugins: [createThemes(tailwindAntdColors)],
};
