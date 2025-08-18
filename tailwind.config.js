const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        // Restore Syne to avoid pulling Rimba except on h1
        'syne': ['Syne', 'sans-serif'],
        // Only use Rimba (with fallbacks) via this heading alias
        'heading': ['"Rimba Andalas"', 'Marcellus', 'Syne', 'serif'],
        'marcellus': ['Marcellus', 'serif'],
      },
      colors: {
        // Premium Neutral Palette
        'charcoal': '#1c1c1c',      // Deep charcoal instead of pure black
        'pearl': '#faf9f7',         // Warm off-white instead of pure white
        'stone': '#8b8680',         // Warm medium gray
        'taupe': '#a0927d',         // Neutral brown-gray  
        'nude': '#c4b59a',          // Nude/beige tone
        'umber': '#6b5b47',         // Rich earthy brown
        'ash': '#5a5853',           // Medium gray-brown
        'mist': '#e8e6e3',          // Light warm gray
        
        // Accent Colors (keeping refined versions)
        'african-gold': '#D4AF37',
        'african-red': '#CC2936',
        'african-brown': '#8B4513',
        'african-orange': '#FF8C00',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}; 