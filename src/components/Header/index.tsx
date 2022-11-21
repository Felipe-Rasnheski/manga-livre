import Link from 'next/link'
import { CaretCircleDoubleDown, MagnifyingGlass, User } from 'phosphor-react'
import { useState } from 'react'
import logo from '../../../public/logo.webp'
import {
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
  // eslint-disable-next-line prettier/prettier
  HeaderContainer
} from './styles'

export function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)
  return (
    <HeaderContainer>
      <div className={`container ${isToggleOpen && 'toggleOpen'}`}>
        <nav>
          <div className="logo">
            <Link
              href="/"
              style={{ backgroundImage: `url('${logo.src}')` }}
              title="Home"
            ></Link>
          </div>
          <div className="navbar">
            <Link href="/">Mangás</Link>
            <Link href="/">Categorias</Link>
            <Link href="/">Grupos</Link>
          </div>
        </nav>
        <div className="container-form">
          <form action="">
            <div className="toggleClose">
              <button onClick={(e) => e.preventDefault()}>
                Mangá Sortido! <CaretCircleDoubleDown size={16} weight="bold" />
              </button>
              <input type="text" />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsToggleOpen(!isToggleOpen)
              }}
            >
              <MagnifyingGlass size={26} weight="bold" />
            </button>
          </form>
        </div>
      </div>

      <AvatarContainer>
        <AvatarImage src="https://github.com/Felipe-Rasnheski.png" />

        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </HeaderContainer>
  )
}
