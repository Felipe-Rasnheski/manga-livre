import React from 'react'
import styles from '../../sass/css/layoutStyles.module.css'
import '../../sass/css/styles.css'

import { Poppins } from '@next/font/google'
import { Aside } from './Aside'
import { Header } from './Header'

const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>
        <div className={styles.grid}>
          <Aside />
          <div className={styles.grid__content}>
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
