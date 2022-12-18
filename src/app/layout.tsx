'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Aside } from '../components/Aside'
import { Header } from '../components/Header'
import { GlobalStyles } from '../styles/globals'
import { defaultTheme } from '../styles/themes/default'
import { LayoutContainer } from './styles'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <LayoutContainer>
            <Aside />
            <div className="content" id="content">
              <Header />
              {children}
            </div>
          </LayoutContainer>
        </ThemeProvider>
      </body>
    </html>
  )
}
