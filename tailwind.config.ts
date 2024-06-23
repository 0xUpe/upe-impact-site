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
        'upe-pink': '#EC3492',
        'upe-light-pink': 'rgba(236, 52, 146, 0.5)',
        'upe-grey': '#231F20',
        'upe-silver': '#C0C0C0',
        'upe-pale-grey': '#ECECEC',
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
