/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Accent – lime green (professional dark theme)
        Green: "#a3e635",
        Accent: "#a3e635",
        // Secondary accents
        ElectricBlue: "#38bdf8",
        NeonPurple: "#c084fc",
        Black: "#000000",
        // Dark theme
        DeepNightBlack: "#0a0a0a",   // main bg
        MidNightBlack: "#141414",     // section/card bg
        EveningBlack: "#1a1a1a",      // elevated surface
        DarkGray: "#262626",         // borders
        SlateGray: "#404040",        // muted borders
        LightGray: "#a1a1aa",        // secondary text
        SilverGray: "#d4d4d8",       // body text
        Snow: "#fafafa",             // headings
      },
      fontFamily: {
        'cascadia-normal': ['cascadia-normal'],
        'circular': ['circular-normal', 'sans-serif'],
        'circular-light': ['circular-light', 'sans-serif'],
        'circular-normal': ['circular-normal', 'sans-serif'],
        'circular-medium': ['circular-medium', 'sans-serif'],
        'circular-bold': ['circular-bold', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
}