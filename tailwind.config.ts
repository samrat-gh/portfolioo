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
        background: "#020617", // slate-950
        surface: "#0f172a", // slate-900
        primary: "#38bdf8", // sky-400
        secondary: "#818cf8", // indigo-400
        foreground: "#f8fafc", // slate-50
        muted: "#94a3b8", // slate-400
        border: "#1e293b", // slate-800
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
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
