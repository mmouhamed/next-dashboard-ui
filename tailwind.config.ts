import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blueSky: "#C3EBFA",
        blueSkyLight: "#E1F5FE",
        purple: "#CFC4FF",
        purpleLight: "#EAE2FF",
        yellow: "#FAE27C",
        yellowLight: "#FDF3BF",
      },
    },
  },
  plugins: [],
};
export default config;
