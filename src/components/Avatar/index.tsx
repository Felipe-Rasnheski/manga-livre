import { BiUser } from 'react-icons/bi'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImage src="https://github.com/Felipe-Rasnheski.png" />
      <AvatarFallback delayMs={600}>
        <BiUser />
      </AvatarFallback>
    </AvatarContainer>
  )
}
