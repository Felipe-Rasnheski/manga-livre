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
  return (
    <HeaderContainer>
      <nav data-nav id="nav">
        <div className="menuAndLogo">
          <button
            className="menu"
            onClick={() => {
              const aside = document.querySelector('#aside')
              aside?.setAttribute('data-menu', 'menuShow')

              const nav = document.querySelector('#nav')
              nav?.setAttribute('data-nav', 'navHidden')
            }}
          >
            <BiMenuAltLeft size={32} />
          </button>
          <Link
            href="/"
            className="logo"
            style={{ backgroundImage: `url('${logo.src}')` }}
            title="Home"
          />
        </div>

        <div className="formAndAvatar">
          <Link href="/">
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
