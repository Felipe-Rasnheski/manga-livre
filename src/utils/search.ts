import axios from 'axios'

export async function search(query: string) {
  const mangasResponse = await axios
    .get('https://api.mangadex.org/manga', {
      params: {
        limit: 10,
        title: query,
      },
    })
    .then((response) => response.data.data)

  console.log(mangasResponse)
}
