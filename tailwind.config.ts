import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': "400px",
      // => @media (min-width: 400px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/banner.png')",
        "watermelon-pattern": "url('/images/watermelon-bg.png')"
      },
      colors: {
        "red-status": "#E93F40",
        "error": "#F55151",
        "success": "#24AB80",
        "warning": "#C68331",
        "brand-200": "#BE8D2A",
        "brand-Sec": "#CCA14A",
        "brand-Saturated": "#DE9D18",
        "deactive": "#CDD0DB"
      },
      textColor: {
        "strong": "#14171C",
        "normal": "#434557",
        "soft": "#64677A",
        "weak": "#9297A8",
        "deactive": "#CDD0DB",
        "primary": "#1A2C5E",
        "icon-primary": "#5080F9"
      },
      borderColor: {
        "normal": "#E6E8EE"
      },
      backgroundColor: {
        "main": "#26325012",
        "0": "#FFFFFF",
        "1": "#FAFBFD",
        "2": "#F7F8FB",
        "3": "#EDEFF5",
        "4": "#E3E5EB",
        "5": "#E4E7F0",
        "primary-btn": "#3158BD"
      },
      fontSize: {
        "xxs": "10px",
        "xs": "12px",
        "sm": "14px",
        "base": "16px",
        "lg": "18px",
        "xl": "20px",
        "2xl": "24px",
        "3xl": "30px"
      }
    },
  },
  plugins: [],
} satisfies Config;
