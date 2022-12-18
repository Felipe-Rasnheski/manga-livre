import axios from 'axios'
import { AltTitle, MangaChapter, Relation } from '../types/types'

export async function getLatestUpdates() {
  const latestResponse: MangaChapter[] = await axios(
    'https://api.mangadex.org/chapter',
    {
      params: {
        includes: ['scanlation_group'],
        translatedLanguage: ['en'],
        contentRating: ['safe', 'suggestive'],
        order: { readableAt: 'desc' },
        limit: 10,
      },
    },
  ).then((response) => response.data.data)

  const mangas = await Promise.all(
    latestResponse.map(async (chapterData) => {
      const mangaRelation = chapterData.relationships.find(
        (relation: Relation) => relation.type === 'manga',
      )

      // const mangaHasAlreadyBeenFetched = index !== array.indexOf(chapterData)
      // console.log(mangaHasAlreadyBeenFetched)

      const mangaResponse = await axios(
        `https://api.mangadex.org/manga/${mangaRelation?.id}`,
        {
          params: {
            includes: ['cover_art', 'author', 'tag'],
          },
        },
      ).then((response) => response.data.data)

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

      const coverUrl = `https://uploads.mangadex.org/covers/${mangaResponse.id}/${coverData.attributes.fileName}`

      const mangaTitle = title.en || title[originalLanguage] || altTitle

      const mangaDescription =
        description.en || description[originalLanguage] || altTitle

      const { publishAt, chapter, title: chapterTitle } = chapterData.attributes
      const scanlation = chapterData.relationships.find(
        (relation) => relation.type === 'scanlation_group',
      )

      const manga = {
        tags,
        status,
        altTitle,
        coverUrl,
        createdAt,
        id: mangaResponse.id,
        title: mangaTitle,
        availableTranslatedLanguages,
        description: mangaDescription,
        authorName: author.attributes.name,
        chapter: {
          id: chapterData.id,
          title:
            chapterTitle ||
            Object.values(title).toString() ||
            Object.values(altTitle).toString(),
          chapter,
          publishAt,
          scanlationName: scanlation ? scanlation.attributes.name : 'unknown',
        },
      }

      return manga
    }),
  )

  return mangas
}
