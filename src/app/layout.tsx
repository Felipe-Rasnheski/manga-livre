import React from 'react'
import { Aside } from '../components/Aside'
import { Header } from '../components/Header'
import ThemeProvider from '../styles/ThemeProvider'
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
        <ThemeProvider>
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
