import axios from 'axios'
import { MangasCarousel } from '../components/carousel'

export default async function HomePage() {
  // const response = await MFA.Manga.search({
  //   limit: 10,
  // })
  // https://api.mangadex.org/manga?includes%5B%5D=%27
  // MFA.resolveArray(response[0].mainCover)

  // const test = await MFA.Cover.get(response[0].mainCover.id)

  const response = await axios.get('https://api.mangadex.org/manga', {
    params: {
      title: '',
      limit: 10,
      includes: ['cover_art', 'author'],
    },
  })

  const mangas = response.data.data.map((manga: any) => {
    return {
      id: manga.id,
      cover: response.data.data[0].relationships[2].attributes.fileName,
      title: manga,
      description: manga.attributes.description,
    }
  })

  // const mangas = await Promise.all(
  //   response.map(async (manga) => {
  //     const cover = await MFA.Cover.get(manga.mainCover.id)

  return (
    <div>
      <MangasCarousel mangas={mangas} />
    </div>
  )
}
