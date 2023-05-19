/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      screens: {
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1280px",
      },
      colors: {
         transparent: "transparent",
         current: "currentColor",
         black: "#000",
         white: "#fff",
      },
      fontFamily: {
         inter: ["Inter", "sans-serif"],
         poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
         sm: ["20px", "24px"],
         md: ["22px", "27px"],
         lg: ["24px", "29px"],
         xl: ["32px", "39px"],
      },
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
      },
   },
   plugins: [require("flowbite/plugin")],
};
