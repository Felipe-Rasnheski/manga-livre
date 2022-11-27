import MFA from 'mangadex-full-api'
import { MangaSlide } from './MangaSlide'

export default async function HomePage() {
  const response = await MFA.Manga.search({ limit: 10 })
  // https://api.mangadex.org/manga?includes%5B%5D=%27
  // MFA.resolveArray(response[0].mainCover)

  // const test = await MFA.Cover.get(response[0].mainCover.id)

  const mangas = await Promise.all(
    response.map(async (manga) => {
      const cover = await MFA.Cover.get(manga.mainCover.id)

      return {
        id: manga.id,
        cover: cover.image256,
        title: manga.title,
        description: manga.description,
      }
    }),
  )

  return (
    <div>
      <MangaSlide mangas={mangas} />
    </div>
  )
}
