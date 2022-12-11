import axios from 'axios'
import { MangaChapter } from '../types/types'
import { FilterRepeatedChapters } from './filterRepeatedChapters'
import { getScanlationGroup } from './getScanlationGroup'

export async function getChapters(mangaId: string) {
  const chaptersResponse: MangaChapter[] = await axios
    .get(`https://api.mangadex.org/manga/${mangaId}/feed`, {
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

  const chapters = FilterRepeatedChapters(chaptersResponse)

  const chaptersWhithScanlationGroup: MangaChapter[] = await getScanlationGroup(
    chapters,
  )

  return chaptersWhithScanlationGroup
}
