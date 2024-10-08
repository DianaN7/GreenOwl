import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme/provider'
import { sharedMetadata } from '@/config/metadata'

import { fonts } from '@/styles/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  ...sharedMetadata,
  title: {
    template: '%s | Green Owl App',
    default: 'Green Owl App - Unlock a new language.',
  },
  description:
    'Master a new language with the Green Owl app - the fun and easy way to speak like a local!',
  keywords: ['Duolingo', 'Language', 'Learn Languages'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
      <html lang="ru" suppressHydrationWarning>
        <body className={`${fonts} flex flex-col font-sans`}>
          <ThemeProvider attribute='class' enableSystem disableTransitionOnChange>
          {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
