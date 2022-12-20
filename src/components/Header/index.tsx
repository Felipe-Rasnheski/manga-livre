'use client'

import Link from 'next/link'
import { BiMenuAltLeft } from 'react-icons/bi'
import logo from '../../../public/logo.webp'
import { Avatar } from '../Avatar'
import { Search } from '../Search'
import {
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

  function handleToggle() {
    const aside = document.querySelector('#aside')
    aside?.setAttribute('data-menu', 'menuShow')

    const nav = document.querySelector('#nav')
    nav?.setAttribute('data-nav', 'navHidden')

    const header = document.getElementById('header')
    header?.setAttribute('data-width', 'shink')

    const page = document.getElementById('pageContainer')
    page?.setAttribute('data-width', 'shink')

    const recommendations = document.getElementById('recommendations')
    recommendations?.setAttribute('data-width', 'shink')
  }

  return (
    <HeaderContainer data-scrolly data-width="shink" id="header">
      <nav data-nav="navHidden" id="nav">
        <div className="menuAndLogo">
          <button className="menu" onClick={handleToggle}>
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

        <div className="searchAndAvatar">
          <Link href="/" prefetch={false}>
            <Avatar />
          </Link>
          <Search />
        </div>
      </nav>
    </HeaderContainer>
  )
}
