/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#f5fbff",
          100: "#e6f4ff",
          200: "#cceaff",
          300: "#99d6ff",
          400: "#66c2ff",
          500: "#339eff",
          600: "#0077e6",
          700: "#0059b4",
          800: "#003d82",
          900: "#00214f",
        },
        secondary: {
          50: "#fff8f5",
          100: "#ffefe6",
          200: "#ffdccf",
          300: "#ffbfa0",
          400: "#ff9b66",
          500: "#ff7a2b",
          600: "#e65f00",
          700: "#b34700",
          800: "#7f3200",
          900: "#4c1b00",
        },
        muted: {
          100: "#f5f7fb",
          200: "#e9edf6",
          300: "#cfd9ea",
          400: "#b6c5de",
          500: "#9bb0d0",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Apple System",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 18px rgba(20, 25, 40, 0.08)",
        "outline-soft": "0 0 0 6px rgba(51,158,255,0.08)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [forms],
};
