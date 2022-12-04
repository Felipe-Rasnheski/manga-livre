import axios from 'axios'
import { MangasCarousel } from '../components/Carousel'

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
      includes: ['cover_art'],
    },
  })

  const mangas = await Promise.all(
    response.data.data.map(async (manga: any) => {
      const coverData = manga.relationships.find(
        (relation: any) => relation.type === 'cover_art',
      )

      const cover = `https://uploads.mangadex.org/covers/${manga.id}/${coverData.attributes.fileName}`

      return {
        id: manga.id,
        cover,
        title: manga.attributes.title.en,
        description: manga.attributes.description.en,
      }
    }),
  )

  return (
    <div>
      <MangasCarousel mangas={mangas} />
    </div>
  )
}
