import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Rojo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
