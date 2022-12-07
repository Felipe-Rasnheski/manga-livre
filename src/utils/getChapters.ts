import axios from 'axios'
import { MangaChapter } from '../types/types'

export async function getChapters(mangaId: string) {
  const mangaChapters: MangaChapter[] = await axios
    .get(`https://api.mangadex.org/manga/${mangaId}/feed`, {
      params: {
        translatedLanguage: ['en'],
      },
    })
    .then((response) => response.data.data)

  mangaChapters.sort((a, b) => {
    if (Number(a.attributes.chapter) < Number(b.attributes.chapter)) return 1
    if (Number(a.attributes.chapter) > Number(b.attributes.chapter)) return -1

    return 0
  })

  return mangaChapters
}
