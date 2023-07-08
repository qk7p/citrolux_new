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
      },
      backgroundImage: {
        "banner-image": "url('/images/banner.jpg')",
        "about-background": "url('/images/about-background.png')",
      },
      colors: {
        main: "#c8344d",
      },
    },
  },
  plugins: [],
};
