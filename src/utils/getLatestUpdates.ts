import axios from 'axios'
import { AltTitle, IMangaChapter, Relation } from '../types/types'
import { apiUrl, coversUrl } from './urls'

export async function getLatestUpdates() {
  const latestResponse: IMangaChapter[] = await axios(`${apiUrl}/chapter`, {
    params: {
      includes: ['scanlation_group'],
      translatedLanguage: ['en'],
      contentRating: ['safe', 'suggestive'],
      order: { readableAt: 'desc' },
      limit: 20,
    },
  }).then((response) => response.data.data)

  const sameMangaTogether: any = {}

  latestResponse.forEach((ch) => {
    const manga = ch.relationships.find(
      (relation: Relation) => relation.type === 'manga',
    )

    if (manga) {
      if (!sameMangaTogether[manga.id]) {
        sameMangaTogether[manga.id] = {
          ...ch,
          newChapters: ch.attributes.chapter,
        }
      } else {
        const { newChapters } = sameMangaTogether[manga.id]

        sameMangaTogether[
          manga.id
        ].newChapters = `${newChapters}, ${ch.attributes.chapter}`
      }
    }
  })

  let chaptersOfTheSameMangaTogether = []

  for (const chapter in sameMangaTogether) {
    chaptersOfTheSameMangaTogether.push(sameMangaTogether[chapter])
  }

  chaptersOfTheSameMangaTogether = chaptersOfTheSameMangaTogether.slice(0, 10)

  const mangas = await Promise.all(
    chaptersOfTheSameMangaTogether.map(async (chapterData) => {
      const mangaRelation = chapterData.relationships.find(
        (relation: Relation) => relation.type === 'manga',
      )

      const mangaResponse = await axios(
        `${apiUrl}/manga/${mangaRelation?.id} `,
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

      const coverUrl = `${coversUrl}/covers/${mangaResponse.id}/${coverData.attributes.fileName}`

      const mangaTitle = title.en || title[originalLanguage] || altTitle

      const mangaDescription =
        description.en || description[originalLanguage] || altTitle

      const { publishAt, chapter, title: chapterTitle } = chapterData.attributes
      const scanlation = chapterData.relationships.find(
        (relation: Relation) => relation.type === 'scanlation_group',
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
        newChapters: chapterData.newChapters,
      }

      return manga
    }),
  )

  return mangas
}
