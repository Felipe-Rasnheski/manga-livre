import axios from 'axios'
import { CoverArt } from '../types/types'

export async function getAllCovers(mangaId: string) {
  const coversResponse: CoverArt[] = await axios
    .get(`https://api.mangadex.org/cover`, {
      params: {
        limit: 100,
        manga: [mangaId],
        order: {
          volume: 'asc',
          createdAt: 'asc',
          updatedAt: 'asc',
        },
      },
    })
    .then((response) => response.data.data)

  return coversResponse
}
