import React from 'react'
import styles from '../../sass/css/layoutStyles.module.css'
import '../../sass/css/styles.css'

import { Poppins } from '@next/font/google'
import { Aside } from './Aside'
import { Header } from './Header'

const poppins = Poppins({ weight: ['500', '700'], subsets: ['devanagari'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>
        <div id="grid" className={styles.grid}>
          <Aside />
          <div id="content" className={styles.grid__content}>
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
