import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'upe-pink': '#EC3492 !important',
        'upe-grey': '#231F20 !important',
        'upe-silver': '#C0C0C0 !important',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "upe-gradient": "radial-gradient(circle at 0% 0%, #db1c84, #f58559, #ffdf84)",
      },
    },
  },
  plugins: [],
};

export default config;