import type { Metadata } from 'next';
import HeaderLayout from '@/components/headerLayout';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import EmotionRegistry from '../emotion/registry';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Coffee Map',
  description: 'A map for coffee lovers, find your favorite coffee shops!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EmotionRegistry>
          <HeaderLayout />
          {children}
        </EmotionRegistry>
      </body>
    </html>
  );
}
