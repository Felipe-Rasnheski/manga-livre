'use client'

import * as Avatar from '@radix-ui/react-avatar'
import Link from 'next/link'
import logo from '../../../public/logo.webp'
import styles from '../../sass/css/layoutStyles.module.css'

import { BiMenuAltLeft, BiUser } from 'react-icons/bi'
import { Search } from './Search'

export function Header() {
  if (typeof window !== 'undefined') {
    const content = document.getElementById('content')

    if (content !== null) {
      content.onscroll = () => {
        const header = document.getElementById('header')

        if (content.scrollTop === 0) {
          header?.setAttribute('data-scrolly', '')
        }

        if (content.scrollTop > 0 && content.scrollTop < 55) {
          header?.setAttribute('data-scrolly', 'scrollDown')
        }

        if (content.scrollTop > 54) {
          header?.setAttribute('data-scrolly', 'scrollDownDown')
        }
      }
    }
  }

  function handleToggle() {
    const grid = document.querySelector('#grid')
    grid?.setAttribute('data-menu', '')

    const aside = document.querySelector('#aside')
    aside?.setAttribute('data-menu', 'open')

    const nav = document.querySelector('#nav')
    nav?.setAttribute('data-nav', 'navHidden')

    const header = document.getElementById('header')
    header?.setAttribute('data-width', 'shink')

    const banner = document.getElementById('banner')
    banner?.setAttribute('data-width', 'shink')
  }

  return (
    <header id="header" className={styles.header} data-width="shink">
      <nav data-nav="navHidden" id="nav" className={styles.header__nav}>
        <div className={styles.header__menuAndLogo}>
          <button className={styles.header__menu} onClick={handleToggle}>
            <BiMenuAltLeft size={32} />
          </button>
          <Link
            prefetch={false}
            href="/"
            className={styles.header__logo}
            style={{ backgroundImage: `url('${logo.src}')` }}
            title="Home"
          />
        </div>

        <div className={styles.header__searchAndAvatar}>
          <Link href="/" prefetch={false}>
            <Avatar.Root className={styles.header__avatarContainer}>
              <Avatar.Image
                src="https://github.com/Felipe-Rasnheski.png"
                className={styles.header__avatarContainer__avatar}
              />
              <Avatar.Fallback
                delayMs={600}
                className={styles.header__avatarContainer__avatarFallback}
              >
                <BiUser />
              </Avatar.Fallback>
            </Avatar.Root>
          </Link>
          <Search />
        </div>
      </nav>
    </header>
  )
}
