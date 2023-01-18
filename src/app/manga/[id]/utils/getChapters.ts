import axios from 'axios'
import { IMangaChapter } from '../../../../types'
import { apiUrl } from '../../../../utils/urls'
import { getScanlationGroup } from './getScanlationGroup'
import { getUserWhoPostedChapter } from './getUserWhoPostedChapter'

export async function getChapters(mangaId: string, offset = 0, order = 'asc') {
  const chaptersResponse: IMangaChapter[] = await axios
    .get(`${apiUrl}/manga/${mangaId}/feed`, {
      params: {
        limit: 50,
        offset,
        translatedLanguage: ['en'],
        order: {
          chapter: order,
          volume: order,
          updatedAt: order,
          createdAt: order,
        },
      },
    })
    .then((response) => response.data.data)

  if (chaptersResponse.length === 0) {
    return []
  }

  const chaptersFiltered = chaptersResponse.filter((chapter, index, array) => {
    if (array[index + 1] === undefined) return chapter

    return chapter.attributes.chapter !== array[index + 1].attributes.chapter
  })

  const chaptersWhithScanlationGroup: IMangaChapter[] =
    await getScanlationGroup(chaptersFiltered)

  const chapters: IMangaChapter[] = await getUserWhoPostedChapter(
    chaptersWhithScanlationGroup,
  )

  return chapters
}
