'use client'

import Link from 'next/link'
import { BiMenuAltLeft, BiSearch, BiUser } from 'react-icons/bi'
import logo from '../../../public/logo.webp'
import {
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
  // eslint-disable-next-line prettier/prettier
  HeaderContainer
} from './styles'

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

  return (
    <HeaderContainer data-scrolly="" id="header">
      <nav data-nav id="nav">
        <div className="menuAndLogo">
          <button
            className="menu"
            onClick={() => {
              const aside = document.querySelector('#aside')
              aside?.setAttribute('data-menu', 'menuShow')

              const nav = document.querySelector('#nav')
              nav?.setAttribute('data-nav', 'navHidden')

              const header = document.getElementById('header')
              header?.setAttribute('data-width', 'shink')

              const content = document.getElementById('content')
              content?.setAttribute('data-width', 'shink')

              const carousel = document.getElementById('carouselContainer')
              carousel?.setAttribute('data-width', 'shink')
            }}
          >
            <BiMenuAltLeft size={32} />
          </button>
          <Link
            prefetch={false}
            href="/"
            className="logo"
            style={{ backgroundImage: `url('${logo.src}')` }}
            title="Home"
          />
        </div>

        <div className="formAndAvatar">
          <Link prefetch={false} href="/">
            <AvatarContainer>
              <AvatarImage src="https://github.com/Felipe-Rasnheski.png" />

              <AvatarFallback delayMs={600}>
                <BiUser />
              </AvatarFallback>
            </AvatarContainer>
          </Link>
          <form action="">
            <div>
              <input type="text" placeholder="Search" title="Search" />
              <BiSearch size={28} />
            </div>
          </form>
        </div>
      </nav>
    </HeaderContainer>
  )
}
