import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF9F6",
        mist: "#F0F5F4",
        heading: "#115E59",
        body: "#3D5654",
        muted: "#6B7C78",
        faint: "#9AABA7",
        teal: {
          DEFAULT: "#0D9488",
          dark: "#0F766E",
          light: "#14B8A6",
          lighter: "#5EEAD4",
          soft: "#99F6E4",
          mint: "#CCFBF1",
          pale: "#F0FDFA",
        },
        darkteal: {
          DEFAULT: "#0F2C2A",
          deep: "#0A1F1E",
          border: "#2D4A47",
        },
        ondark: {
          DEFAULT: "#D1E6E3",
          muted: "#7FA8A2",
        },
        line: {
          DEFAULT: "#E0E8E6",
          light: "#EDF2F0",
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 40, 38, 0.04)",
        hover: "0 8px 30px rgba(13, 148, 136, 0.08)",
        nav: "0 1px 24px rgba(15, 40, 38, 0.06)",
        lift: "0 12px 32px rgba(13, 148, 136, 0.08)",
      },
      fontFamily: {
        serif: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-24px) translateX(12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(20px) translateX(-16px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.15)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        "spin-slow": "spin 40s linear infinite",
        float: "float 8s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
