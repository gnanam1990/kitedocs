/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        kite: {
          bg: "#061917",
          fg: "#F5FFF8",
          primary: "#36F2B5",
          accent: "#FFD166",
          violet: "#8B7CFF",
          coral: "#FF766C",
          border: "#264D47",
          muted: "#0E2B28",
          destructive: "#FF766C",
          card: "#102724",
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
