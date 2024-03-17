import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        notoSerifTibetan: ["NotoSerifTibetan", "sans-serif"],
        libreBaskerville: ["LibreBaskerville"],
      },
      screens: {
        desktop: { min: "1025px", max: "1920px" },
        laptop: { min: "721px", max: "1024px" },
        mobile: { min: "0px", max: "720px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
