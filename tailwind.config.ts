import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#f7f9fc",
          soft: "#eef2f9",
          card: "#ffffff",
          border: "#e4e8f0",
          hover: "#f1f4fb",
        },
        ink: {
          DEFAULT: "#0f172a",
          soft: "#334155",
          muted: "#64748b",
          faint: "#94a3b8",
        },
        pastel: {
          blue: "#93c5fd",
          "blue-dark": "#60a5fa",
          sky: "#bae6fd",
          lavender: "#c4b5fd",
          pink: "#fbcfe8",
          mint: "#a7f3d0",
          peach: "#fed7aa",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.05)",
        lift: "0 4px 20px rgba(59,130,246,0.10), 0 2px 6px rgba(15,23,42,0.06)",
        glow: "0 8px 40px rgba(147,197,253,0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fadeIn 0.9s ease-out both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "spin-slow": "spin 22s linear infinite",
        morph: "morph 12s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        morph: {
          "0%, 100%": {
            borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
          },
          "33%": {
            borderRadius: "42% 58% 38% 62% / 62% 45% 55% 38%",
          },
          "66%": {
            borderRadius: "58% 42% 65% 35% / 40% 60% 40% 60%",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
