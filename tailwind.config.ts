import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "576px",
        md: "832px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1700px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "#ffffff",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans"],
      },
      backgroundImage: {
        primary:
          "linear-gradient(135deg, #0a192f 0%, #10172a 50%, #0b1e3f 100%)",
      },
      screens: {
        xs: "100px", // => @media (min-width: 100px) { ... }
        vsm: "400px",
        sm: "576px",
        md: "832px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1700px",
      },
    },
  },
  plugins: [],
} satisfies Config;
