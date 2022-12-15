import { AltTitle, DirectoryItem, Manga, Relation } from '../types/types'

export async function getRecommendations() {
  let matchedResults = []

  const mangaResponse = await fetch(
    'https://manga4life.com/search/?sort=vm&desc=true',
  )

  const html = await mangaResponse.text()

  try {
    const directory = JSON.parse(
      html.split('vm.Directory = ')[1].split('];')[0] + ']',
    )

    matchedResults = directory
      .sort(
        (a: DirectoryItem, b: DirectoryItem) =>
          normalizeNumber(b.v) - normalizeNumber(a.v),
      )
      .slice(0, 15)
      .map((v: DirectoryItem) => v.s)
  } catch (err) {
    throw new Error('Initial search went wrong')
  }

  const recommendations: Manga[] = await Promise.all(
    matchedResults.map(async (mangaName: string) => {
      const mangaResponse = await fetch(
        `https://api.mangadex.org/manga?title=${mangaName}&includes[]=cover_art&includes[]=author`,
      )
        .then((response) => response.json())
        .then((data) => data.data[0])

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

      const coverUrl = `https://uploads.mangadex.org/covers/${mangaResponse.id}/${cover.attributes.fileName}`

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

      const manga: Manga = {
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

  return recommendations
}

function normalizeNumber(input: string): number {
  const normalized = Number(
    input.slice(input.split('').findIndex((v) => v !== '0')),
  )

  return normalized
}
