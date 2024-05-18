import { lato } from './fonts';
import './lib/globals.css';
import { cn } from '@/app/lib/utils';
import { Footer } from '@/app/ui/Footer';
import { Header } from '@/app/ui/Header';
import { MyContextProvider } from '@/context/useContextMenu';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';

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
      <body id="__next" className={cn(`relative`, lato.variable)}>
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
