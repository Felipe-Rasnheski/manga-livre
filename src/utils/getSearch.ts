import axios from 'axios'
import { Relation } from '../types/types'

export async function getSearch(query: string) {
  const mangasResponse = await axios
    .get('https://api.mangadex.org/manga', {
      params: {
        limit: 12,
        title: query,
        includes: ['cover_art'],
      },
    })
    .then((response) => response.data.data)

  const mangas = mangasResponse.map((manga: any) => {
    const coverData = manga.relationships.find(
      (relation: Relation) => relation.type === 'cover_art',
    )

    const { title, originalLanguage, altTitles, status } = manga.attributes

    const coverUrl = `https://uploads.mangadex.org/covers/${manga.id}/${coverData.attributes.fileName}`

    const mangaTitle = title.en ? title.en : title[originalLanguage]

    return {
      id: manga.id,
      title: mangaTitle || altTitles[0],
      coverUrl,
      status,
    }
  })

  return mangas
}
