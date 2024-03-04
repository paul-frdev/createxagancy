import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MyContextProvider } from '@/context/useContextMenu';
import { cn } from '@/lib/utils';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

const lato = Lato({ weight: '400', subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'Createx',
  description: 'Createx agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="__next" className={cn(`relative`, lato.className)}>
        <AppRouterCacheProvider>
          <MyContextProvider>
            <CssBaseline />
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between">{children}</main>
            <Footer />
          </MyContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
