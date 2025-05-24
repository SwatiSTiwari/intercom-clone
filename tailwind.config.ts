import type { Config } from "tailwindcss";
import animate from 'tailwindcss-animate'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       borderColor: {
        DEFAULT: 'hsl(var(--border))',
        'border': 'hsl(var(--border))'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
