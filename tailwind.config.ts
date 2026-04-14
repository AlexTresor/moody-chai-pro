import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        foreground: "#18181b",
        primary: "#f43f5e",
        muted: "#71717a",
        glass: "rgba(255, 255, 255, 0.4)",
      },
      backdropBlur: { xs: "2px", sm: "4px", md: "8px", lg: "12px", xl: "20px" },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.05)',
        'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
    },
  },
  plugins: [],
};
export default config;
EOFgit add tailwind.config.ts
git commit -m "Fix darkMode type"
git push

cat > tailwind.config.ts << 'EOF'
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        foreground: "#18181b",
        primary: "#f43f5e",
        muted: "#71717a",
        glass: "rgba(255, 255, 255, 0.4)",
      },
      backdropBlur: { xs: "2px", sm: "4px", md: "8px", lg: "12px", xl: "20px" },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.05)',
        'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
    },
  },
  plugins: [],
};
export default config;
