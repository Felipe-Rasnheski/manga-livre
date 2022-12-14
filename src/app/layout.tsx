'use client'

import React from 'react'
import { Aside } from '../components/Aside'
import { Header } from '../components/Header'
import StyledComponentsRegistry from './registry'

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
          <div className="container">
            <Aside />
            <main className="main">
              <Header />
              {children}
            </main>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
