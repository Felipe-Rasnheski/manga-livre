import MFA from 'mangadex-full-api'
import Image from 'next/image'

export default async function HomePage() {
  const response = await MFA.Manga.search({ limit: 10 })
  // MFA.resolveArray(response[0].mainCover)
  const test = await MFA.Cover.get(response[0].mainCover.id)
  console.log(test.image256)
  return (
    <div>
      <Image src={test.image512} width={256} height={363} alt="" />
    </div>
  )
}
