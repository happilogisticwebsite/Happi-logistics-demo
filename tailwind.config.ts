import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F58220",
          charcoal: "#2C2C2C",
          fog: "#F5F6F8",
          ink: "#171717"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem"
      }
    }
  },
  plugins: []
};

export default config;
