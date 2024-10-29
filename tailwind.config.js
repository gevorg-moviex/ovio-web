/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "product1770x": "1770px",
        "product1770x": "1455px",
        "product1520x": "1520px",
        "product1465x": "1465px",
        "product1360x": "1360px",
        "product1310x": "1310px",
        "product1260x": "1260px",
        "product1220x": "1220px",
        "product1070x": "1070px",
        "product1280x": "1280px",
        "product1000x": "1000px",
        "product970x": "970px",
        "product885x": "885px",
        "product805x": "805px",
        "product660x": "660px",
        "product640x": "640px",
        "product560x": "560px",
        "product460x": "460px",
        "product420x": "420px",
        "product380x": "380px",
        "product360x": "360px",
        "product340x": "340px",
        "product335x": "335px"
      },
      boxShadow: {
        "topSide": "0 9px 45px 0 rgba(0,0,0,.2)",
        "bottomContact": "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }
    },
  },
  plugins: [],
}