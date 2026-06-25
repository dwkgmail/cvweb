/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          900: '#172554'
        }
      },
      boxShadow: {
        soft: '0 18px 45px rgba(30, 64, 175, 0.10)'
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"Microsoft YaHei"', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
