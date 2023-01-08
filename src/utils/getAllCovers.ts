import axios from 'axios'
import { ICoverArt } from '../types/types'
import { apiUrl } from './urls'

export async function getAllCovers(mangaId: string) {
  const coversResponse: ICoverArt[] = await axios
    .get(`${apiUrl}/cover`, {
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
