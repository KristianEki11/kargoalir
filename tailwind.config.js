/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        carbon: '#090d16',
        surface: '#111827',
        surfaceHover: '#1f293d',
        borderSubtle: '#1e293b',
        brandBlue: '#2563eb',
        brandCyan: '#06b6d4',
        accentGreen: '#10b981',
        warningAmber: '#f59e0b'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace']
      }
    }
  },
  plugins: []
};
