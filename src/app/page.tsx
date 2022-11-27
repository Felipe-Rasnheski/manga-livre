import MFA from 'mangadex-full-api'
import Image from 'next/image'

export default async function HomePage() {
  const response = await MFA.Manga.search({ limit: 10 })
  // https://api.mangadex.org/manga?includes%5B%5D=%27
  // MFA.resolveArray(response[0].mainCover)

  // const test = await MFA.Cover.get(response[0].mainCover.id)

  const Mangas = await Promise.all(
    response.map(async (manga) => {
      const cover = await MFA.Cover.get(manga.mainCover.id)

      return {
        id: manga.id,
        cover,
        title: manga.title,
        description: manga.description,
      }
    }),
  )

  return (
    <div>
      {Mangas.map((manga) => {
        return (
          <div key={manga.id}>
            <Image
              src={manga.cover.image512}
              width={256}
              height={363}
              priority
              alt=""
            />
            <div>
              <h3>{manga.title}</h3>
              <p>{manga.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
