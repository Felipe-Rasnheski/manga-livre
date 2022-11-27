'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Aside } from '../components/aside'
import { Header } from '../components/Header'
import { GlobalStyles } from '../styles/globals'
import { defaultTheme } from '../styles/themes/default'
import RootStyleRegistry from './RootStyleRegistry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <html lang="en">
        <body>
          <div className="container">
            <Aside />
            <main className="main">
              <Header />
              <RootStyleRegistry>{children}</RootStyleRegistry>
            </main>
          </div>
        </body>
      </html>
    </ThemeProvider>
  )
}
