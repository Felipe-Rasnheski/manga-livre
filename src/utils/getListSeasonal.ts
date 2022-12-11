import axios from 'axios'
import { CustomList, MangaBasic, Relation } from '../types/types'
import { getPopular } from './getPopular'

export async function getListSeasonal() {
  const listMangas: CustomList = await axios
    .get('https://api.mangadex.org/list/4be9338a-3402-4f98-b467-43fb56663927')
    .then((response) => response.data.data)
    .catch(() => undefined)

  if (!listMangas) {
    return await getPopular()
  }

  const onlyMangas = listMangas.relationships.filter(
    (manga) => manga.type === 'manga',
  )

  const mangasResponse: MangaBasic[] = await Promise.all(
    onlyMangas.map(async (manga) => {
      const mangaResponse = await axios
        .get(`https://api.mangadex.org/manga/${manga.id}`, {
          params: {
            includes: ['cover_art'],
          },
        })
        .then((response) => response.data.data)

      const coverData = mangaResponse.relationships.find(
        (relation: Relation) => relation.type === 'cover_art',
      )

      const { title, description, originalLanguage, altTitles } =
        mangaResponse.attributes

      const coverUrl = `https://uploads.mangadex.org/covers/${manga.id}/${coverData.attributes.fileName}`

      let mangaTitle = title.en ? title.en : title[originalLanguage]

      if (mangaTitle === undefined) {
        mangaTitle = Object.values(altTitles[0]).toString()
      }

      let mangaDescription = description.en
        ? description.en
        : description[originalLanguage]

      if (mangaDescription === undefined) {
        mangaDescription = description
          ? Object.values(description[0]).toString()
          : Object.values(altTitles[0]).toString()
      }

      return {
        id: manga.id,
        coverUrl,
        title: mangaTitle,
        description: mangaDescription,
      }
    }),
  )

  return mangasResponse
}
