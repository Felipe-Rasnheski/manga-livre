import axios from 'axios'
import { MangaChapter } from '../types/types'

export async function getScanlationGroup(chapters: MangaChapter[]) {
  const scanFirstChapter = chapters[0].relationships.find(
    (relation) => relation.type === 'scanlation_group',
  )

  const chaptersByOtherScanlation = chapters.some(
    (chapter) =>
      chapter.relationships.find(
        (relation) => relation.type === 'scanlation_group',
      )?.id !== scanFirstChapter?.id,
  )

  if (chaptersByOtherScanlation) {
    const fetchedForEachChapterScanlationGroup = await Promise.all(
      chapters.map(async (chapter) => {
        const scan = chapter.relationships.find(
          (relation) => relation.type === 'scanlation_group',
        )

        const scanlationResponse = await axios
          .get(`https://api.mangadex.org/group/${scan?.id}`)
          .then((response) => response.data.data)

        return {
          ...chapter,
          scanlation: {
            id: scanlationResponse.id,
            name: scanlationResponse.attributes.name,
          },
        }
      }),
    )

    return fetchedForEachChapterScanlationGroup
  }

  const scanlationResponse = await axios
    .get(`https://api.mangadex.org/group/${scanFirstChapter?.id}`)
    .then((response) => response.data.data)

  const fetchedScanlationGroupOneTimeForAllChapters = chapters.map(
    (chapter) => {
      return {
        ...chapter,
        scanlation: {
          id: scanlationResponse.id,
          name: scanlationResponse.attributes.name,
        },
      }
    },
  )

  return fetchedScanlationGroupOneTimeForAllChapters
}
