import Link from 'next/link'
import React from 'react'
import { BiBookmarkAlt, BiBookOpen, BiHome, BiPlus, BiX } from 'react-icons/bi'
import { FaArrowAltCircleUp, FaCat, FaUserFriends } from 'react-icons/fa'
import logo from '../../../public/logo.webp'
import { AsideContainer } from './styles'

export function Aside() {
  function addClassActive(element: React.MouseEvent<HTMLElement>) {
    const link = document.querySelector('a.active')
    link?.classList.remove('active')

    element.currentTarget.classList.add('active')
  }

  return (
    <AsideContainer data-menu="close" id="aside">
      <header>
        <Link
          href="/"
          className="logo"
          style={{ backgroundImage: `url('${logo.src}')` }}
          title="Home"
        />
        <button
          className="close"
          onClick={() => {
            const aside = document.querySelector('#aside')
            aside?.setAttribute('data-menu', '')

            const nav = document.querySelector('#nav')
            nav?.setAttribute('data-nav', 'navShow')
          }}
        >
          <BiX size={32} />
        </button>
      </header>
      <nav>
        <Link
          href="#home"
          className="home active"
          onClick={(e) => {
            addClassActive(e)

            const aside = document.querySelector('#aside')
            aside?.setAttribute('data-menu', '')

            const nav = document.querySelector('#nav')
            nav?.setAttribute('data-nav', 'navShow')
          }}
        >
          <BiHome size={24} />
          Home
        </Link>
        <div>
          <h3>
            <BiBookmarkAlt size={24} /> Follows
          </h3>
          <Link href="/" onClick={addClassActive}>
            updates
          </Link>
          <Link href="/" onClick={addClassActive}>
            Library
          </Link>
          <Link href="/" onClick={addClassActive}>
            MDLists
          </Link>
          <Link href="/" onClick={addClassActive}>
            Followed Groups
          </Link>
          <Link href="/" onClick={addClassActive}>
            Reading History
          </Link>
        </div>
        <div>
          <h3>
            <BiBookOpen size={24} /> Titles
            <span>
              <BiPlus size={24} />
            </span>
          </h3>
          <Link href="/" onClick={addClassActive}>
            Advanced Search
          </Link>
          <Link href="/" onClick={addClassActive}>
            Recently added
          </Link>
          <Link href="/" onClick={addClassActive}>
            Latest Updates
          </Link>
          <Link href="/" onClick={addClassActive}>
            Random
          </Link>
        </div>
        <div>
          <h3>
            <FaUserFriends size={24} />
            Community
          </h3>
          <Link href="/" onClick={addClassActive}>
            Groups
            <span>
              <BiPlus size={24} />
            </span>
          </Link>
          <Link href="/" onClick={addClassActive}>
            Users
          </Link>
        </div>
        <div>
          <h3>
            <FaCat size={24} />
            MangaDex
          </h3>
          <Link href="/" onClick={addClassActive}>
            About Us
          </Link>
          <Link href="/" onClick={addClassActive}>
            Site Rules
          </Link>
          <Link href="/" onClick={addClassActive}>
            Announcements
          </Link>
          <Link href="/" onClick={addClassActive}>
            Merch Store
            <span>
              <FaArrowAltCircleUp size={14} />
            </span>
          </Link>
        </div>
      </nav>
    </AsideContainer>
  )
}