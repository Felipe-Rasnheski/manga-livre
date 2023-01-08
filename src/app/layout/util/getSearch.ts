import axios from 'axios'

import { Relation } from '../../../types'
import { getStatistics } from '../../../utils/getStatistics'
import { apiUrl, coversUrl } from '../../../utils/urls'

export async function getSearch(query: string) {
  const mangasResponse = await axios
    .get(`${apiUrl}/manga`, {
      params: {
        limit: 12,
        title: query,
        includes: ['cover_art'],
        order: {
          followedCount: 'desc',
        },
        contentRating: ['safe', 'suggestive'],
        hasAvailableChapters: true,
      },
    })
    .then((response) => response.data.data)

  const mangas = mangasResponse.map((manga: any) => {
    const coverData = manga.relationships.find(
      (relation: Relation) => relation.type === 'cover_art',
    )

    const { title, originalLanguage, altTitles, status } = manga.attributes

    const coverUrl = `${coversUrl}/covers/${manga.id}/${coverData.attributes.fileName}`

    const mangaTitle = title.en ? title.en : title[originalLanguage]

    const altTitle = Object.values(altTitles[0]).toString()

    return {
      id: manga.id,
      title: mangaTitle || altTitle,
      coverUrl,
      status,
    }
  })

  const mangasWithStatistics = await getStatistics(mangas)

  return mangasWithStatistics
}
