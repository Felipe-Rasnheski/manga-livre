'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Aside } from '../components/Aside'
import { Header } from '../components/Header'
import '../styles/global.css'
import { defaultTheme } from '../styles/themes/default'
import StyledComponentsRegistry from './registry'
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
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <LayoutContainer>
              <Aside />
              <div className="content" id="content">
                <Header />
                {children}
              </div>
            </LayoutContainer>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
