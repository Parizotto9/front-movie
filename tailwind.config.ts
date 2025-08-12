import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "_"],
  content: [
    "./index.html",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {},
  },
} satisfies Config;
