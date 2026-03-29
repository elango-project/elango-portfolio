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
        primary: "#050505",
        secondary: "#0a0a0a",
        card: "#121212",
        neon: "#00F5FF",
        accent: "#7A5FFF",
        "neon-dim": "rgba(0,245,255,0.1)",
        "accent-dim": "rgba(122,95,255,0.1)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(0,245,255,0.4), 0 0 60px rgba(0,245,255,0.15)",
        "neon-sm": "0 0 8px rgba(0,245,255,0.5)",
        accent: "0 0 20px rgba(122,95,255,0.4), 0 0 60px rgba(122,95,255,0.15)",
        "accent-sm": "0 0 8px rgba(122,95,255,0.5)",
        card: "0 8px 32px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "neon-gradient": "linear-gradient(135deg, #00F5FF 0%, #7A5FFF 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(18,18,18,0.9) 0%, rgba(10,10,10,0.95) 100%)",
      },
      animation: {
        "pulse-neon": "pulseNeon 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        pulseNeon: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0,245,255,0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(0,245,255,0.8), 0 0 60px rgba(0,245,255,0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
