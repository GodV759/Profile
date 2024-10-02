/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
require("tailwindcss-animate");
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      sm: "400px",
      md: "640px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "t-primary": "var(--text-t-primary)",
        "t-secondary": "var(--text-t-secondary)",
        "color-icon": "var(--color-icon)",
        "active-icon": "var(--active-icon)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-custom-2xs-regular": {
          fontFamily: "SF-Pro-Regular",
          fontSize: 10,
          lineHeight: "12px",
          fontWeight: 400,
        },
        ".text-custom-2xs-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 10,
          lineHeight: "12px",
          fontWeight: 500,
        },
        ".text-custom-2xs-semi-bold": {
          fontFamily: "SF-Pro-SemiBold",
          fontSize: 10,
          lineHeight: "12px",
          fontWeight: 600,
        },
        ".text-custom-2xs-bold": {
          fontFamily: "SF-Pro-Bold",
          fontSize: 10,
          lineHeight: "12px",
          fontWeight: 700,
        },
        ".text-custom-xs-regular": {
          fontFamily: "SF-Pro-Regular",
          fontSize: 12,
          lineHeight: "16px",
          fontWeight: 400,
        },
        ".text-custom-xs-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 12,
          lineHeight: "16px",
          fontWeight: 500,
        },
        ".text-custom-xs-semi-bold": {
          fontFamily: "SF-Pro-SemiBold",
          fontSize: 12,
          lineHeight: "16px",
          fontWeight: 600,
        },
        ".text-custom-xs-bold": {
          fontFamily: "SF-Pro-Bold",
          fontSize: 12,
          lineHeight: "16px",
          fontWeight: 700,
        },
        ".text-custom-sm-regular": {
          fontFamily: "SF-Pro-Regular",
          fontSize: 14,
          lineHeight: "25px",
          fontWeight: 400,
        },
        ".text-custom-sm-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 14,
          lineHeight: "20px",
          fontWeight: 500,
        },
        ".text-custom-sm-semi-bold": {
          fontFamily: "SF-Pro-SemiBold",
          fontSize: 14,
          lineHeight: "20px",
          fontWeight: 600,
        },
        ".text-custom-sm-bold": {
          fontFamily: "SF-Pro-Bold",
          fontSize: 14,
          lineHeight: "20px",
          fontWeight: 700,
        },
        ".text-custom-base-regular": {
          fontFamily: "SF-Pro-Regular",
          fontSize: 16,
          lineHeight: "24px",
          fontWeight: 400,
        },
        ".text-custom-base-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 16,
          lineHeight: "24px",
          fontWeight: 500,
        },
        ".text-custom-base-semi-bold": {
          fontFamily: "SF-Pro-SemiBold",
          fontSize: 16,
          lineHeight: "24px",
          fontWeight: 600,
        },
        ".text-custom-base-bold": {
          fontFamily: "SF-Pro-Bold",
          fontSize: 16,
          lineHeight: "24px",
          fontWeight: 700,
        },
        ".text-custom-lg-regular": {
          fontFamily: "SF-Pro-Regular",
          fontSize: 18,
          lineHeight: "28px",
          fontWeight: 400,
        },
        ".text-custom-lg-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 18,
          lineHeight: "28px",
          fontWeight: 500,
        },
        ".text-custom-lg-semi-bold": {
          fontFamily: "SF-Pro-SemiBold",
          fontSize: 18,
          lineHeight: "28px",
          fontWeight: 600,
        },
        ".text-custom-lg-bold": {
          fontFamily: "SF-Pro-Bold",
          fontSize: 18,
          lineHeight: "28px",
          fontWeight: 700,
        },
        ".text-custom-xl-regular": {
          fontFamily: "SF-Pro-Regular",
          fontSize: 20,
          lineHeight: "28px",
          fontWeight: 400,
        },
        ".text-custom-xl-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 20,
          lineHeight: "28px",
          fontWeight: 500,
        },
        ".text-custom-xl-semi-bold": {
          fontFamily: "SF-Pro-SemiBold",
          fontSize: 20,
          lineHeight: "28px",
          fontWeight: 600,
        },
        ".text-custom-xl-bold": {
          fontFamily: "SF-Pro-Bold",
          fontSize: 20,
          lineHeight: "28px",
          fontWeight: 700,
        },
        ".text-custom-2xl-regular": {
          fontFamily: "SF-Pro-Regular",
          fontSize: 24,
          lineHeight: "32px",
          fontWeight: 400,
        },
        ".text-custom-2xl-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 24,
          lineHeight: "32px",
          fontWeight: 500,
        },
        ".text-custom-2xl-semi-bold": {
          fontFamily: "SF-Pro-SemiBold",
          fontSize: 24,
          lineHeight: "32px",
          fontWeight: 600,
        },
        ".text-custom-2xl-bold": {
          fontFamily: "SF-Pro-Bold",
          fontSize: 24,
          lineHeight: "32px",
          fontWeight: 700,
        },
        ".text-custom-3xl-regular": {
          fontFamily: "SF-Pro-Regular",
          fontSize: 28,
          lineHeight: "36px",
          fontWeight: 400,
        },
        ".text-custom-3xl-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 28,
          lineHeight: "36px",
          fontWeight: 500,
        },
        ".text-custom-3xl-semi-bold": {
          fontFamily: "SF-Pro-SemiBold",
          fontSize: 28,
          lineHeight: "36px",
          fontWeight: 600,
        },
        ".text-custom-3xl-bold": {
          fontFamily: "SF-Pro-Bold",
          fontSize: 28,
          lineHeight: "36px",
          fontWeight: 700,
        },
        ".text-custom-4xl-regular": {
          fontFamily: "SF-Pro-Regular",
          fontSize: 32,
          lineHeight: "40px",
          fontWeight: 400,
        },
        ".text-custom-4xl-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 32,
          lineHeight: "40px",
          fontWeight: 500,
        },
        ".text-custom-4xl-semi-bold": {
          fontFamily: "SF-Pro-SemiBold",
          fontSize: 32,
          lineHeight: "40px",
          fontWeight: 600,
        },
        ".text-custom-4xl-bold": {
          fontFamily: "SF-Pro-Bold",
          fontSize: 32,
          lineHeight: "40px",
          fontWeight: 700,
        },
        ".text-custom-5xl-regular": {
          fontFamily: "SF-Pro-Regular",
          fontSize: 48,
          lineHeight: "56px",
          fontWeight: 400,
        },
        ".text-custom-5xl-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 48,
          lineHeight: "56px",
          fontWeight: 500,
        },
        ".text-custom-5xl-semi-bold": {
          fontFamily: "SF-Pro-SemiBold",
          fontSize: 48,
          lineHeight: "56px",
          fontWeight: 600,
        },
        ".text-custom-5xl-bold": {
          fontFamily: "SF-Pro-Bold",
          fontSize: 48,
          lineHeight: "56px",
          fontWeight: 700,
        },
        ".text-custom-40-regular": {
          fontFamily: "SF-Pro-Regular",
          fontSize: 40,
          lineHeight: "48px",
          fontWeight: 400,
        },
        ".text-custom-40-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 40,
          lineHeight: "48px",
          fontWeight: 500,
        },
        ".text-custom-40-semi-bold": {
          fontFamily: "SF-Pro-SemiBold",
          fontSize: 40,
          lineHeight: "48px",
          fontWeight: 600,
        },
        ".text-custom-40-bold": {
          fontFamily: "SF-Pro-Bold",
          fontSize: 40,
          lineHeight: "48px",
          fontWeight: 700,
        },
        ".text-custom-96-medium": {
          fontFamily: "SF-Pro-Medium",
          fontSize: 96,
          lineHeight: "96px",
          fontWeight: 500,
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
