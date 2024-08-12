import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import { fonts } from '@/app/fonts';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          fontSize: '0.875rem',
          borderRadius: '0.5rem',
          colorPrimary: 'hsl(142, 71%, 45%)',
        },
      }}
    >
      <html lang="ru">
        <body className={`${fonts} flex flex-col font-sans`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
