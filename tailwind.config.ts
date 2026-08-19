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
        paperHover: "#e2e0d8",
        ink: "#1a1a1a",
        accent: {
          primary: "#8b2e28",
          secondary: "#2c4c3b",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Pretendard Variable"', 'Pretendard', 'sans-serif'],
        sans: ['"Pretendard Variable"', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', '"Helvetica Neue"', '"Segoe UI"', '"Apple SD Gothic Neo"', 'sans-serif'],
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