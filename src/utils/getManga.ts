import axios from 'axios'
import { Manga } from '../types/types'

export async function getManga(mangaId: string) {
  const mangaResponse = await axios
    .get(`https://api.mangadex.org/manga/${mangaId}`, {
      params: {
        includes: ['cover_art', 'author', 'artist', 'tag', 'group'],
      },
    })
    .then((response) => response.data.data)

  const coverData = mangaResponse.relationships.find(
    (relation: any) => relation.type === 'cover_art',
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
      (title: any) =>
        title.en ||
        title.ja ||
        Object.keys(title).toString() === originalLanguage,
    )

  const author = mangaResponse.relationships.find(
    (relation: any) => relation.type === 'author',
  )

  const coverUrl = `https://uploads.mangadex.org/covers/${mangaId}/${coverData.attributes.fileName}`

  const mangaTitle = title.en ? title.en : title[originalLanguage]

  const mangaDescription = description.en
    ? description.en
    : description[originalLanguage]

  const manga: Manga = {
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
  }

  return manga
}
