import axios from 'axios'
import { AltTitle, IMangaBasic, Relation } from '../../../types'
import { apiUrl, coversUrl } from '../../../utils/urls'

export async function getRecentlyAdded() {
  const mangasResponse = await axios
    .get(`${apiUrl}/manga`, {
      params: {
        limit: 15,
        includes: ['cover_art'],
        contentRating: ['safe', 'suggestive'],
        order: {
          createdAt: 'desc',
        },
      },
    })
    .then((response) => response.data.data)

  const mangas: IMangaBasic[] = mangasResponse.map((manga: any) => {
    const coverData = manga.relationships.find(
      (relation: Relation) => relation.type === 'cover_art',
    )

    const coverUrl = `${coversUrl}/covers/${manga.id}/${coverData.attributes.fileName}`

    const { title, altTitles, originalLanguage } = manga.attributes

    const altTitle = altTitles
      .reverse()
      .find(
        (title: AltTitle) =>
          title.en ||
          title.ja ||
          Object.keys(title).toString() === originalLanguage,
      )

    const mangaTitle = title.en ? title.en : title[originalLanguage]

    return {
      coverUrl,
      id: manga.id,
      title: mangaTitle || altTitle,
    }
  })

  return mangas
}
