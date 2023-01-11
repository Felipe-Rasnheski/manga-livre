import { AltTitle, IDirectoryItem, IManga, Relation } from '../../../types'
import { apiUrl, coversUrl } from '../../../utils/urls'

export async function getRecommendations() {
  let matchedResults = []

  const mangaResponse = await fetch(
    'https://manga4life.com/search/?sort=vm&desc=true',
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  )

  const html = await mangaResponse.text()

  try {
    const directory = JSON.parse(
      html.split('vm.Directory = ')[1].split('];')[0] + ']',
    )

    matchedResults = directory
      .sort(
        (a: IDirectoryItem, b: IDirectoryItem) =>
          normalizeNumber(b.v) - normalizeNumber(a.v),
      )
      .slice(0, 15)
      .map((v: IDirectoryItem) => v.s)
  } catch (err) {
    throw new Error('Initial search went wrong')
  }

  const recommendations: IManga[] = await Promise.all(
    matchedResults.map(async (mangaName: string) => {
      let mangaResponse

      try {
        mangaResponse = await fetch(
          `${apiUrl}/manga?title=${mangaName}&includes[]=cover_art&includes[]=author`,
        )
          .then((response) => response.json())
          .then((data) => data.data[0])
      } catch {
        return null
      }

      const cover = mangaResponse.relationships.find(
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

      const coverUrl = `${coversUrl}/covers/${mangaResponse.id}/${cover.attributes.fileName}`

      let mangaTitle = title.en ? title.en : title[originalLanguage]

      if (mangaTitle === undefined && altTitles) {
        mangaTitle = Object.values(altTitles[0]).toString()
      }

      let mangaDescription = description.en
        ? description.en
        : description[originalLanguage]

      if (mangaDescription === undefined && altTitles) {
        mangaDescription = Object.values(altTitles[0]).toString()
      }

      const manga: IManga = {
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
      }

      return manga
    }),
  )

  return recommendations.filter((recommendation) => recommendation !== null)
}

function normalizeNumber(input: string): number {
  const normalized = Number(
    input.slice(input.split('').findIndex((v) => v !== '0')),
  )

  return normalized
}
