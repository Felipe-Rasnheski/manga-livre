import MFA from 'mangadex-full-api'
import Image from 'next/image'

export default async function HomePage() {
  const response = await MFA.Manga.search({ limit: 10 })
  // https://api.mangadex.org/manga?includes%5B%5D=%27
  // MFA.resolveArray(response[0].mainCover)
  const test = await MFA.Cover.get(response[0].mainCover.id)
  console.log(test.image256)

  return (
    <div>
      <Image src={test.image512} width={256} height={363} priority alt="" />
    </div>
  )
}
