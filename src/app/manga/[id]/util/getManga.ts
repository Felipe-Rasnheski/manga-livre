import axios from 'axios'
import { AltTitle, IManga, Relation } from '../../../../types'
import { apiUrl, coversUrl } from '../../../../utils/urls'

export async function getManga(mangaId: string) {
  const mangaResponse = await axios
    .get(`${apiUrl}/manga/${mangaId}`, {
      params: {
        includes: ['cover_art', 'author', 'tag', 'scanlation_group'],
      },
    })
    .then((response) => response.data.data)

  const coverData = mangaResponse.relationships.find(
    (relation: Relation) => relation.type === 'cover_art',
  )

  const {
    tags,
    title,
    status,
    createdAt,
    altTitles,
    description,
    originalLanguage,
    availableTranslatedLanguages,
  } = mangaResponse.attributes

  const altTitle = altTitles
    .reverse()
    .find(
      (title: AltTitle) =>
        title.en ||
        title.ja ||
        Object.keys(title).toString() === originalLanguage,
    )

  const author = mangaResponse.relationships.find(
    (relation: Relation) => relation.type === 'author',
  )

  const coverUrl = `${coversUrl}/covers/${mangaId}/${coverData.attributes.fileName}`

  const mangaTitle = title.en ? title.en : title[originalLanguage]

  const mangaDescription = description.en
    ? description.en
    : description[originalLanguage]

  const statistics = await axios
    .get(`${apiUrl}/statistics/manga/${mangaId}`)
    .then((response) => response.data.statistics)

  const manga: IManga = {
    tags,
    status,
    altTitle,
    coverUrl,
    createdAt,
    id: mangaId,
    title: mangaTitle,
    availableTranslatedLanguages,
    description: mangaDescription,
    authorName: author.attributes.name,
    follows: statistics[mangaId].follows,
    rating: statistics[mangaId].rating.average,
  }

  return manga
}
