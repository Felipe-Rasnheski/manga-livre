'use client'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
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
            <Header />
            {children}
          </main>
        </body>
      </html>
    </ThemeProvider>
  )
}
