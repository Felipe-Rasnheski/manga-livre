import { CoverArt } from '../../types/types'
import { MangaArtContainer } from './styles'

export function MangaArt({ covers }: { covers: CoverArt[] }) {
  return (
    <MangaArtContainer>
      <h1>Art</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti
        consequatur, est odit perspiciatis dolores voluptate repellendus nulla,
        architecto mollitia et. Vero magni sunt, quis odit vitae autem ullam
        expedita.
      </div>
    </MangaArtContainer>
  )
}
