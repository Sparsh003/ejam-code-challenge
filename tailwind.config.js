/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        royalblue: "#2c7ef8",
        darkslategray: {
          "100": "#37465a",
          "200": "#333",
          "300": "#252f3d",
        },
        gray: "#fafafa",
        dimgray: "#4d5254",
        mediumaquamarine: "#5bb59a",
        red: "#f82c2c",
        lightgray: "#cfcfcf",
        forestgreen: "#59ae43",
        aliceblue: "#edf3fd",
        darkgray: "#969696",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
