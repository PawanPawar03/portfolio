/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#6C5CE7',
          600: '#5b4bc4',
          700: '#4d3da8',
          800: '#3f328c',
          900: '#322770',
        },
        theme: {
          dark: '#0f172a',
          darkCard: '#1e293b',
          darkBorder: '#334155',
          light: '#f8fafc',
          lightCard: '#ffffff',
          lightBorder: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'geeky': '0 10px 30px -10px rgba(108, 92, 231, 0.2)',
        'geeky-card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'geeky-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
