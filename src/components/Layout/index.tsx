'use client'

import React from 'react'
import { Aside } from '../Aside'
import { Header } from '../Header'
import { LayoutContainer } from './styles'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <Aside />
      <div className="contant" id="content">
        <Header />
        {children}
      </div>
    </LayoutContainer>
  )
}
