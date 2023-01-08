import axios from 'axios'
import { IMangaBasic, Relation } from '../types/types'
import { apiUrl, coversUrl } from './urls'

export async function getPopular() {
  const mangasResponse = await axios
    .get(`${apiUrl}/manga`, {
      params: {
        limit: 12,
        includes: ['cover_art'],
      },
    })
    .then((response) => response.data.data)

  const mangas: IMangaBasic[] = await Promise.all(
    mangasResponse.map((manga: any) => {
      const coverData = manga.relationships.find(
        (relation: Relation) => relation.type === 'cover_art',
      )

      const { title, description, originalLanguage, altTitles } =
        manga.attributes

      const coverUrl = `${coversUrl}/covers/${manga.id}/${coverData.attributes.fileName}`

      const mangaTitle = title.en ? title.en : title[originalLanguage]

      const mangaDescription = description.en
        ? description.en
        : description[originalLanguage]

      return {
        id: manga.id,
        coverUrl,
        title: mangaTitle || altTitles[0],
        description: mangaDescription,
      }
    }),
  )

  const mangasFiltered = mangas.filter(
    (manga) => manga.coverUrl && manga.coverUrl && manga.description,
  )

  return mangasFiltered
}
