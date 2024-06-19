import type { Config } from 'tailwindcss';

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xsm: '501px',
      sm: '640px',
      md: '768px',
      xmd: '968px',
      lg: '1031px',
      xl: '1250px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        info: "url('/assets/background.jpg')",
        leftStars: "url('/svg/left-stars.svg')",
        rightCircle: "url('/svg/right-circle.svg')",
        orange: '#feddd1',
        vector: "url('/svg/vector.svg')",
        shapes: "url('/svg/shapes.svg')",
        shapes2: "url('/svg/shapes2.svg')",
        circles: "url('/svg/circles.svg')",
        dots: "url('/svg/dots.svg')",
        illustration1: "url('/assets/illustration1.png')",
        illustration2: "url('/assets/illustration2.png')",
        lightOrange: 'linear-gradient(45.00deg, rgba(255, 63, 58, 0.2) 0%,rgb(247, 94, 5, 0.2) 0.2%)',
        hoverCard:
          ' linear-gradient(180.00deg, rgba(30, 33, 44, 0) 43.897%,rgba(30, 33, 44, 0.03) 55.206%,rgba(30, 33, 44, 0.33) 68.728%,rgba(30, 33, 44, 0.56) 76.168%,rgba(30, 33, 44, 0.77) 83.749%,rgba(30, 33, 44, 0.92) 91.493%,rgb(30, 33, 44) 100%);',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
      },
      backgroundColor: {
        orange: 'var(--btn-gradient, linear-gradient(56deg, #FF3F3A 0%, #F75E05 100%));',
        orange02: '#feddd1',
        gray: 'var(--gray-300, #E5E8ED);',
        redLight: '#feddd1',
        red: '#FF3F3A',
        gray200: 'var(--gray-200)',
        gray800: 'var(--gray-800)',
        gray900: 'var(--gray-900)',
        gray600: 'var(--gray-600)',
        secondary: 'var(--secondary)',
        primary: 'rgba(255, 63, 58, .12)',
        yellow:
          'linear-gradient(180deg, rgba(30, 33, 44, 0.00) 43.9%, rgba(30, 33, 44, 0.03) 55.21%, rgba(30, 33, 44, 0.33) 68.73%, rgba(30, 33, 44, 0.56) 76.17%, rgba(30, 33, 44, 0.77) 83.75%, rgba(30, 33, 44, 0.92) 91.49%, #1E212C 100%)',
        bgFooter: '#2a2c37',
        bgInput: 'rgba(255, 255, 255, 0.12)',
        gray300: 'var(--gray-300)',
      },
      borderColor: {
        orange: '#fc4b26',
        gray: 'var(--gray-300)',
        gray200: 'var(--gray-200)',
        gray300: 'var(--gray-300)',
        gray400: 'var(--gray-400)',
        gray600: 'var(--gray-600)',
        gray700: 'var(--gray-700)',
        primary: 'var(--primary)',
        light: 'var(--light)',
      },
      colors: {
        orange: '#fc4b26',
        gray: '#D7DADD',
        gray700: 'var(--gray-700)',
        frombg: 'var(--btn-gradient-start)',
        tobg: 'var(--btn-gradient-end)',
      },
      textColor: {
        orange: '#fc4b26',
        black: 'var(--gray-800);',
        danger: 'var(--danger)',
        gray: 'var(--gray-700)',
        primary: 'var(--primary)',
        gray400: 'var(--gray-400)',
        gray600: 'var(--gray-600)',
        gray700: 'var(--gray-700)',
        gray800: 'var(--gray-800)',
        gray900: 'var(--gray-900)',
        bgIcon: 'var(--bg-icon)',
        rgbGray: 'var(--rgbGray)',
        list: 'var(--list)',
      },
      boxShadow: {
        card: '0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 80px 80px -20px rgba(154, 156, 165, 0.08);',
        cardHover:
          '0px 4px 4px -4px rgba(30, 33, 44, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.10), 0px 80px 80px -20px rgba(154, 156, 165, 0.16);',
        workshopHover:
          '0px 4px 4px -4px rgba(30, 33, 44, 0.05), 0px 12px 10px -6px rgba(255, 63, 58, 0.08), 0px 30px 24px -10px rgba(255, 63, 58, 0.10), 0px 80px 80px -20px rgba(255, 63, 58, 0.16);',
        preview:
          '0px 4px 4px -4px rgba(30, 33, 44, 0.03),0px 12px 10px -6px rgba(154, 156, 165, 0.04),0px 30px 24px -10px rgba(154, 156, 165, 0.05),0px 80px 80px -20px rgba(154, 156, 165, 0.08)',
        eventShadow:
          '0px 4px 4px -4px rgba(30, 33, 44, 0.03),0px 12px 10px -6px rgba(154, 156, 165, 0.04),0px 30px 24px -10px rgba(154, 156, 165, 0.05),0px 80px 80px -20px rgba(154, 156, 165, 0.08);',
        shadowSmall:
          '0px 4px 4px -4px rgba(30, 33, 44, 0.03),0px 12px 10px -6px rgba(154, 156, 165, 0.04),0px 30px 24px -10px rgba(154, 156, 165, 0.05),0px 80px 80px -20px rgba(154, 156, 165, 0.08)',
      },
    },
  },
  plugins: [],
};
export default config;
