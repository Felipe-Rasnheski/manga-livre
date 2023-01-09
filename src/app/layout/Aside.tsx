'use client'

import Link from 'next/link'
import React from 'react'
import logo from '../../../public/logo.webp'
import styles from '../../sass/css/layoutStyles.module.css'

import { BiBookmarkAlt, BiBookOpen, BiHome, BiPlus, BiX } from 'react-icons/bi'
import { FaArrowAltCircleUp, FaCat, FaUserFriends } from 'react-icons/fa'

export function Aside() {
  function addClassActive(element: React.MouseEvent<HTMLElement>) {
    const link = document.querySelector('a.active')
    link?.classList.remove('active')

    element.currentTarget.classList.add('active')
  }

  function handleToggle() {
    const grid = document.querySelector('#grid')
    grid?.setAttribute('data-menu', 'close')

    const aside = document.querySelector('#aside')
    aside?.setAttribute('data-menu', '')

    const nav = document.querySelector('#nav')
    nav?.setAttribute('data-nav', 'navShow')

    const header = document.getElementById('header')
    header?.removeAttribute('data-width')

    const banner = document.getElementById('banner')
    banner?.removeAttribute('data-width')
  }

  return (
    <aside className={styles.aside} data-menu="open" id="aside">
      <header>
        <Link
          href="/"
          className={styles.aside__logo}
          style={{ backgroundImage: `url(${logo.src})` }}
          title="Home"
          prefetch={false}
        />
        <button className={styles.aside__close} onClick={handleToggle}>
          <BiX size={32} />
        </button>
      </header>
      <nav className={styles.nav}>
        <Link
          prefetch={false}
          href="/"
          className={`${styles.nav__home} ${styles.nav__active}`}
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
          <Link prefetch={false} href="/" onClick={addClassActive}>
            updates
          </Link>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            Library
          </Link>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            MDLists
          </Link>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            Followed Groups
          </Link>
          <Link prefetch={false} href="/" onClick={addClassActive}>
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
          <Link prefetch={false} href="/" onClick={addClassActive}>
            Advanced Search
          </Link>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            Recently added
          </Link>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            Latest Updates
          </Link>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            Random
          </Link>
        </div>
        <div>
          <h3>
            <FaUserFriends size={24} />
            Community
          </h3>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            Groups
            <span>
              <BiPlus size={24} />
            </span>
          </Link>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            Users
          </Link>
        </div>
        <div>
          <h3>
            <FaCat size={24} />
            MangaDex
          </h3>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            About Us
          </Link>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            Site Rules
          </Link>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            Announcements
          </Link>
          <Link prefetch={false} href="/" onClick={addClassActive}>
            Merch Store
            <span>
              <FaArrowAltCircleUp size={14} />
            </span>
          </Link>
        </div>
      </nav>
    </aside>
  )
}
