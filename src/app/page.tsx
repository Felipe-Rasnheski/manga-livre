import axios from 'axios'
import { MangasCarousel } from '../components/Carousel'

export default async function HomePage() {
  const response = await axios.get('https://api.mangadex.org/manga', {
    params: {
      title: '',
      limit: 10,
      includes: ['cover_art'],
    },
  })

  const mangas = await Promise.all(
    response.data.data.map((manga: any) => {
      const coverData = manga.relationships.find(
        (relation: any) => relation.type === 'cover_art',
      )

      const { title, description, originalLanguage } = manga.attributes

      const cover = `https://uploads.mangadex.org/covers/${manga.id}/${coverData.attributes.fileName}`

      const mangaTitle = title.en ? title.en : title[originalLanguage]

      const mangaDescription = description.en
        ? description.en
        : description[originalLanguage]

      return {
        id: manga.id,
        cover,
        mangaTitle,
        mangaDescription,
      }
    }),
  )

  return (
    <div>
      <MangasCarousel mangas={mangas} />
    </div>
  )
}
