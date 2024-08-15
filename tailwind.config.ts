import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customBlue: '#25324B',
        customGray: '#7C8493',
        purposeBg:"#56CDAD1A",
        "pupose":"#56CDAD",
        "education":"#FFB836",
        "IT":"#4640DE",
        "manga":"#25324B",
      },
      fontFamily:{
        'epilogue': ['Epilogue', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};


export default config;
