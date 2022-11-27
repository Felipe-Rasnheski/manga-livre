import Link from 'next/link'
import { BiBookmarkAlt, BiBookOpen, BiHome, BiPlus, BiX } from 'react-icons/bi'
import { FaArrowAltCircleUp, FaCat, FaUserFriends } from 'react-icons/fa'
import logo from '../../../public/logo.webp'
import { AsideContainer } from './styles'

export function Aside(element: HTMLElement) {
  function addClassActive() {
    const link = document.querySelector('a.active')
    link?.classList.remove('active')

    element.classList.add('active')
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
        <button
          onClick={() => {
            const aside = document.querySelector('#aside')
            aside?.setAttribute('data-menu', '')

            const nav = document.querySelector('#nav')
            nav?.setAttribute('data-nav', 'navShow')
          }}
        >
          <Link href="#home" className="active">
            <BiHome size={24} />
            Home
          </Link>
        </button>
        <div>
          <h3>
            <BiBookmarkAlt size={24} /> Follows
          </h3>
          <Link href="/" onClick={addClassActive}>
            updates
          </Link>
          <Link href="">Library</Link>
          <Link href="">MDLists</Link>
          <Link href="">Followed Groups</Link>
          <Link href="">Reading History</Link>
        </div>
        <div>
          <h3>
            <BiBookOpen size={24} /> Titles
            <span>
              <BiPlus size={24} />
            </span>
          </h3>
          <Link href="">Advanced Search</Link>
          <Link href="">Recently added</Link>
          <Link href="">Latest Updates</Link>
          <Link href="">Random</Link>
        </div>
        <div>
          <h3>
            <FaUserFriends size={24} />
            Community
          </h3>
          <Link href="">
            Groups
            <span>
              <BiPlus size={24} />
            </span>
          </Link>
          <Link href="">Users</Link>
        </div>
        <div>
          <h3>
            <FaCat size={24} />
            MangaDex
          </h3>
          <Link href="">About Us</Link>
          <Link href="">Site Rules</Link>
          <Link href="">Announcements</Link>
          <Link href="">
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
