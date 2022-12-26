import axios from 'axios'
import { IMangaBasic } from '../types/types'
import { apiUrl } from './urls'

export async function getStatistics(mangas: IMangaBasic[]) {
  const ids = mangas.map((manga) => manga.id)

  const mangaResponse = await axios
    .get(`${apiUrl}/statistics/manga`, {
      params: {
        manga: ids,
      },
    })
    .then((response) => response.data.statistics)

  const mangasWithStatistics = mangas.map((manga) => {
    const statistics = mangaResponse[manga.id]

    return {
      ...manga,
      rating: statistics.rating.average,
      follows: statistics.follows,
    }
  })

  return mangasWithStatistics
}
