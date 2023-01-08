import axios from 'axios'
import { IMangaChapter } from '../types/types'
import { getScanlationGroup } from './getScanlationGroup'
import { getUserWhoPostedChapter } from './getUserWhoPostedChapter'
import { apiUrl } from './urls'

export async function getChapters(mangaId: string) {
  const chaptersResponse: IMangaChapter[] = await axios
    .get(`${apiUrl}/manga/${mangaId}/feed`, {
      params: {
        translatedLanguage: ['en'],
        order: {
          chapter: 'asc',
          volume: 'asc',
          updatedAt: 'asc',
          createdAt: 'asc',
        },
      },
    })
    .then((response) => response.data.data)

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
