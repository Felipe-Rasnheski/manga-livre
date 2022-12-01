import MFA from 'mangadex-full-api'
import Image from 'next/image'
import { MangaContainer } from './styles'

type Params = {
  id: string
}

type Props = {
  params: Params
}

export default async function Manga({ params }: Props) {
  const responseManga = await MFA.Manga.get(params.id)

  const responseCover = await MFA.Cover.get(responseManga.mainCover.id)

  const responseAuthor = await MFA.Author.get(responseManga.authors[0].id)

  return (
    <MangaContainer>
      <div className="bannerBackground">
        <div style={{ backgroundImage: `url(${responseCover.image512})` }}>
          <span className="gradient" />
        </div>
      </div>
      <div>
        <Image src={responseCover.image256} width={200} height={310} alt="" />
        <div>
          <div>
            <span>
              <h1>{responseManga.title}</h1>
              {responseManga.localizedTitle.localString}
            </span>
            <span>{responseAuthor.name}</span>
          </div>
        </div>
      </div>
    </MangaContainer>
  )
}
