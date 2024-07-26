/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
      },
      screens: {
        DEFAULT: '1140px',
      },
    },
    extend: {
      boxShadow: {
        custom1: '2px 5px 12px 0 rgba(0, 0, 0, 0.03)',
        custom2: '3px 3px 3px 0px rgba(47, 142, 221, 0.32)',
        custom3: '2px 2px 2px 0px rgba(47, 142, 221, 0.32)',
        custom4: '1px 1px 5px 0px rgba(40, 140, 204, 0.75)',
        custom5: '0px 0px 20px 5px rgba(47, 142, 221, 0.22)',
        custom6: '3px 3px 3px 0px rgba(0, 0, 0, 0.22)',
        customInner1: 'rgba(0, 0, 0, 0.22) 0px 1px 4px inset',
      },
      fontFamily: {
        sans: ['var(--urbanist)'],
        oswald: ['var(--oswald)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#d71635',
          50: '#fff1f1',
          100: '#ffe3e3',
          200: '#ffcccf',
          300: '#ffa2a8',
          400: '#ff6d79',
          500: '#f93a50',
          600: '#d71635',
          700: '#c30d2f',
          800: '#a30e2e',
          900: '#8b102f',
          950: '#4e0314',
        },
        secondary: {
          DEFAULT: '#005baa',
          50: '#f0f7ff',
          100: '#dfeeff',
          200: '#b9defe',
          300: '#7bc6fe',
          400: '#34a8fc',
          500: '#0a8eed',
          600: '#006fcb',
          700: '#005baa',
          800: '#054c87',
          900: '#0a3f70',
          950: '#07284a',
        },
      },
    },
  },
  plugins: [],
}
