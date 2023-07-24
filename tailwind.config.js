/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans-regular": ["OpenSansRegular"],
        "open-sans-semibold": ["OpenSansSemiBold"],
        "open-sans-bold": ["OpenSansBold"],
        "open-sans-light-italic": ["OpenSansLightItalic"],
        "open-sans-light": ["OpenSansLight"],
      },
      height: {
        banner: "45.9375rem",
        slider: "36rem",
        grape: "21.87rem",
        citro: "25rem",
      },
      minHeight: {
        slider: "36rem",
      },
      width: {
        grape: "21.87rem",
        citro: "25rem",
      },
      backgroundImage: {
        "banner-image": "url('/images/banner.jpg')",
        "about-background": "url('/images/about-background-v2.png')",
        "banner-background": "url('/images/banner-background.jpg')",
        "footer-background": "url('/images/footer-background.gif')",
        "immunity-background": "url('/images/green.jpg')",
        "slide-1": "url('/images/slide-1.jpeg')",
        wave: "url('/images/wave.svg')",
        "wave-bold": "url('/images/wave-bold.svg')",
      },
      colors: {
        main: "#ef462c",
        "footer-start": "#97d794",
        "footer-end": "#7ec87b",
        "text-semi-transparent": "rgba(255, 255, 255, 0.27)",
        alert: "#d5d5d6",
      },
      gridTemplateRows: {
        "about-rows": "auto auto auto",
        "immunity-rows": "auto auto auto",
        "expand-hack": "0fr",
      },
      gridTemplateColumns: {
        "about-cols": "1.3fr 0.8fr 1.3fr",
        "immunity-cols": "auto auto auto",
      },
      textShadow: {
        sm: "2px 2px 15px var(--tw-shadow-color)",
        default: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
