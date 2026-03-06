import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        whenua: '#0b0a07',
        kawakawa: '#1b2b26',
        clay: '#a85d2a',
        muka: '#f2e4cf',
      },
      fontFamily: {
        sans: ['Space Grotesk', ...fontFamily.sans],
      },
      backgroundImage: {
        'koru-grid': 'radial-gradient(circle at center, rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
      boxShadow: {
        koru: '0 25px 80px rgba(0, 0, 0, 0.65)',
      },
    },
  },
  plugins: [],
};
