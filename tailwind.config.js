/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        paper: "#F7F6F2",
        accent: {
          DEFAULT: "#6D5DF6",
          soft: "#A78BFA",
          deep: "#4C3FD7",
        },
        amber: {
          DEFAULT: "#F5A524",
          deep: "#D6820F",
        },
        teal: {
          DEFAULT: "#14B8A6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "radial-gradient(circle at 1px 1px, rgba(11,18,32,0.08) 1px, transparent 0)",
        "grid-dark":
          "radial-gradient(circle at 1px 1px, rgba(247,246,242,0.08) 1px, transparent 0)",
      },
      animation: {
        blob: "blob 16s infinite",
        "blob-slow": "blob 22s infinite",
        caret: "caret 1s steps(1) infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        caret: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
