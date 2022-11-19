'use client'
import Link from 'next/link'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/globals'
import { defaultTheme } from '../styles/themes/default'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <html>
        <body>
          <main>
            <nav>
              <Link href="/">Home</Link>
            </nav>
            {children}
          </main>
        </body>
      </html>
    </ThemeProvider>
  )
}
