import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f4f3ee",
        ink: "#1a1a1a",
        accent: {
          primary: "#8b2e28",
          secondary: "#2c4c3b",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Noto Serif KR"', 'serif'],
        sans: ['Pretendard', '"Noto Sans KR"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        widest: '0.15em',
      },
      lineHeight: {
        relaxed: '1.6',
        loose: '1.8',
      },
    },
  },
  plugins: [],
} satisfies Config;