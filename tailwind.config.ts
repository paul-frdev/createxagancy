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
        leftStars: "url('/svg/left-stars.svg')",
        rightCircle: "url('/svg/right-circle.svg')",
        orange: '#feddd1',
      },
      fontFamily: {
        latoBlack: 'LatoBlack',
        latoBold: 'LatoBold',
        latoRegular: 'LatoRegular',
      },
      backgroundColor: {
        orange: 'var(--btn-gradient, linear-gradient(56deg, #FF3F3A 0%, #F75E05 100%));',
        orange02: '#feddd1',
        gray: 'var(--gray-300, #E5E8ED);',
        redLight: '#feddd1',
        red: '#FF3F3A',
      },
      borderColor: {
        orange: '#fc4b26',
        gray: 'var(--gray-300)',
        gray600: 'var(--gray-600)',
      },
      colors: {
        orange: '#fc4b26',
        gray: '#D7DADD',
      },
      textColor: {
        orange: '#fc4b26',
        black: 'var(--gray-800, #424551);',
        danger: 'var(--danger)',
        gray: 'var(--gray-700)',
        primary: 'var(--primary)',
        gray600: 'var(--gray-600)',
        gray900: 'var(--gray-900)',
      },
      boxShadow: {
        card: '0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 80px 80px -20px rgba(154, 156, 165, 0.08);',
        cardHover:
          '0px 4px 4px -4px rgba(30, 33, 44, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.10), 0px 80px 80px -20px rgba(154, 156, 165, 0.16);',
        workshopHover:
          '0px 4px 4px -4px rgba(30, 33, 44, 0.05), 0px 12px 10px -6px rgba(255, 63, 58, 0.08), 0px 30px 24px -10px rgba(255, 63, 58, 0.10), 0px 80px 80px -20px rgba(255, 63, 58, 0.16);',
      },
    },
  },
  plugins: [],
};
export default config;
