/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "proxima-extra-bold": ["ProximaExtraBold"],
        "proxima-regular": ["ProximaRegular"],
      },
      height: {
        banner: "45.9375rem",
        slider: "30rem",
        grape: "21.87rem",
        citro: "25rem",
      },
      width: {
        grape: "21.87rem",
        citro: "25rem",
      },
      backgroundImage: {
        "banner-image": "url('/images/banner.jpg')",
        "about-background": "url('/images/about-background.png')",
      },
      colors: {
        main: "#c8344d",
        "footer-start": "#79c676",
        "footer-end": "#75c471",
      },
      gridTemplateRows: {
        "about-rows": "auto auto",
        "immunity-rows": "auto auto auto",
      },
      gridTemplateColumns: {
        "about-cols": "1.3fr 0.8fr 1.3fr",
        "immunity-cols": "auto auto auto",
      },
    },
  },
  plugins: [],
};
