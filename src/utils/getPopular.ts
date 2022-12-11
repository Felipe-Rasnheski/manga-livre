import axios from 'axios'
import { MangaBasic, Relation } from '../types/types'

export async function getPopular() {
  const mangasResponse = await axios
    .get('https://api.mangadex.org/manga', {
      params: {
        limit: 15,
        includes: ['cover_art'],
      },
    })
    .then((response) => response.data.data)

  const mangas: MangaBasic[] = await Promise.all(
    mangasResponse.map((manga: any) => {
      const coverData = manga.relationships.find(
        (relation: Relation) => relation.type === 'cover_art',
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
