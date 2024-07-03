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
        custom1: '0 0 23px 0 rgba(49, 144, 221, 0.53)',
        custom2: '3px 3px 3px 0px rgba(47, 142, 221, 0.32)',
        custom3: '2px 2px 2px 0px rgba(47, 142, 221, 0.32)',
        custom4: '1px 1px 5px 0px rgba(40, 140, 204, 0.75)',
        custom5: '0px 0px 20px 5px rgba(47, 142, 221, 0.22)',
        custom6: '3px 3px 3px 0px rgba(0, 0, 0, 0.22)',
        customInner1: 'rgba(0, 0, 0, 0.22) 0px 1px 4px inset',
      },
      fontFamily: {
        // sans: ['var(--franklinGothicBook)'],
        // demiCond: ['var(--franklinGothicDemiCond)'],
        // mediumCond: ['var(--franklinGothicMediumCond)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#b00012',
          50: '#ffeff1',
          100: '#ffdce0',
          200: '#ffbfc6',
          300: '#ff929d',
          400: '#ff5465',
          500: '#ff1f36',
          600: '#ff001a',
          700: '#db0016',
          800: '#b00012',
          900: '#940816',
          950: '#520008',
        },
        secondary: {
          DEFAULT: '#282d26',
          50: '#f6f7f6',
          100: '#e4e7e0',
          200: '#c7cec1',
          300: '#a1ae9a',
          400: '#7d8c75',
          500: '#62715b',
          600: '#4d5a47',
          700: '#3f4a3b',
          800: '#353d32',
          900: '#282d26',
          950: '#181c17',
        },
      },
    },
  },
  plugins: [],
}
