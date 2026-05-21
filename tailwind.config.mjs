/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        kite: {
          bg: "#FEF8F0",
          fg: "#1F1A14",
          primary: "#9B8564",
          accent: "#485C11",
          border: "#E3D7C2",
          muted: "#F1EBE0",
          destructive: "#A23A1A",
          card: "#FAF2E6",
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
