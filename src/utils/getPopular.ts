import axios from 'axios'
import { MangaBasic } from '../types/types'

export async function getPopular() {
  const response = await axios
    .get('https://api.mangadex.org/manga', {
      params: {
        limit: 10,
        includes: ['cover_art'],
      },
    })
    .then((response) => response.data.data)

  const mangas: MangaBasic[] = await Promise.all(
    response.map((manga: any) => {
      const coverData = manga.relationships.find(
        (relation: any) => relation.type === 'cover_art',
      )

      const { title, description, originalLanguage } = manga.attributes

      const coverUrl = `https://uploads.mangadex.org/covers/${manga.id}/${coverData.attributes.fileName}`

      const mangaTitle = title.en ? title.en : title[originalLanguage]

      const mangaDescription = description.en
        ? description.en
        : description[originalLanguage]

      return {
        id: manga.id,
        coverUrl,
        title: mangaTitle,
        description: mangaDescription,
      }
    }),
  )

  return mangas
}
