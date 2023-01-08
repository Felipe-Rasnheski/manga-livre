import axios from 'axios'
import { IMangaChapter } from '../types/types'
import { apiUrl } from './urls'

export async function getScanlationGroup(chapters: IMangaChapter[]) {
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

        if (!scan) {
          return chapter
        }

        const scanlationResponse = await axios
          .get(`${apiUrl}/group/${scan?.id}`)
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
    .get(`${apiUrl}/group/${scanFirstChapter?.id}`)
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
