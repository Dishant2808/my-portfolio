/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: "#1fdf64",
        ElectricBlue: "#3b82f6",
        NeonPurple: "#8b5cf6",
        Black: "#000000",
        // Light theme remap
        DeepNightBlack: "#ffffff", // main surface
        MidNightBlack: "#f5f5f5",  // subtle section bg
        EveningBlack: "#fafafa",   // card bg
        DarkGray: "#e5e7eb",       // borders/dividers
        SlateGray: "#cbd5e1",      // muted borders
        LightGray: "#6b7280",      // secondary text
        SilverGray: "#374151",     // primary dark text on white
        Snow: "#111827",           // titles (previously white)
      },
      fontFamily: {
        'cascadia-normal': ['cascadia-normal'],
        'circular': ['circular-normal', 'sans-serif'],
        'circular-light': ['circular-light', 'sans-serif'],
        'circular-normal': ['circular-normal', 'sans-serif'],
        'circular-medium': ['circular-medium', 'sans-serif'],
        'circular-bold': ['circular-bold', 'sans-serif'],

      }
    },
  },
}