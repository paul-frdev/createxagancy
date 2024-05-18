import localFont from 'next/font/local';

export const lato = localFont({
  src: [
    {
      path: './Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Lato-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-lato',
});
