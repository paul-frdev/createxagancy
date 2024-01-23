import type { Config } from 'tailwindcss';

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        info: "url('/assets/background.jpg')",
      },
      fontFamily: {
        latoBlack: 'LatoBlack',
        latoBold: 'LatoBold',
        latoRegular: 'LatoRegular',
      },
      backgroundColor: {
        orange: 'var(--btn-gradient, linear-gradient(56deg, #FF3F3A 0%, #F75E05 100%));',
        gray: 'var(--gray-300, #E5E8ED);',
        redLight: '#feddd1',
        red: '#FF3F3A'
      },
      borderColor: {
        orange: '#fc4b26',
      },
      colors: {
        orange: '#fc4b26',
        gray: '#D7DADD',
      },
      textColor: {
        orange: '#fc4b26',
        black: 'var(--gray-800, #424551);',
      },
    },
  },
  plugins: [],
};
export default config;
