import { MangaFeedContainer } from './styles'

interface MangaFeedProps {
  mangaId: string
}

export function MangaFeed({ mangaId }: MangaFeedProps) {
  return (
    <MangaFeedContainer>
      <h1>Chapters</h1>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        minus facilis assumenda obcaecati, dolorem ex aperiam veniam mollitia?
        Dicta quaerat nemo inventore nam culpa facilis eveniet fugit quasi quae
        laborum!
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        minus facilis assumenda obcaecati, dolorem ex aperiam veniam mollitia?
        Dicta quaerat nemo inventore nam culpa facilis eveniet fugit quasi quae
        laborum!
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        minus facilis assumenda obcaecati, dolorem ex aperiam veniam mollitia?
        Dicta quaerat nemo inventore nam culpa facilis eveniet fugit quasi quae
        laborum!
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        minus facilis assumenda obcaecati, dolorem ex aperiam veniam mollitia?
        Dicta quaerat nemo inventore nam culpa facilis eveniet fugit quasi quae
        laborum!
      </div>
    </MangaFeedContainer>
  )
}
