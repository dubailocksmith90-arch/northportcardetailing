import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        surface: "#111114",
        surfaceAlt: "#16161A",
        border: "#1E1E24",
        accent: {
          DEFAULT: "#00C2FF",
          dim: "#0099CC",
          glow: "rgba(0,194,255,0.15)",
        },
        chrome: {
          DEFAULT: "#A8B5C8",
          dim: "#6B7A90",
        },
        foreground: {
          DEFAULT: "#F0F2F5",
          muted: "#8C95A6",
        },
        green: {
          open: "#22C55E",
        },
        red: {
          closed: "#EF4444",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glow-accent":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,194,255,0.15) 0%, transparent 70%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(0,194,255,0.05) 0%, rgba(10,10,11,0) 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(0,194,255,0.15)",
        "glow-md": "0 0 30px rgba(0,194,255,0.2)",
        "glow-lg": "0 0 60px rgba(0,194,255,0.25)",
        card: "0 1px 3px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
        "card-hover":
          "0 4px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,194,255,0.2), 0 0 20px rgba(0,194,255,0.08)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
