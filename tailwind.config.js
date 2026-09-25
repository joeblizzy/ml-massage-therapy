/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e5ebe5',
          200: '#cdd9cc',
          300: '#a7bfa6',
          400: '#7f9f7e',
          500: '#5f825e',
          600: '#4a6749',
          700: '#3c533c',
          800: '#324332',
          900: '#2b382b',
        },
        stone: {
          warm: '#FBF9F5',
          sand: '#F3EFE6',
          linen: '#EBE5D8',
          taupe: '#7D7565',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
