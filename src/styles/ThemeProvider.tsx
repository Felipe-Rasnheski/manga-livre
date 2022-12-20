'use client'

import React from 'react'
import { ThemeProvider as Theme } from 'styled-components'
import { GlobalStyles } from './globals'
import { defaultTheme } from './themes/default'

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Theme theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </Theme>
  )
}
