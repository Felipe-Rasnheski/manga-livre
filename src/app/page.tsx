import { MangasCarousel } from '../components/Carousel'
import { getPopular } from '../utils/getPopular'

export default async function HomePage() {
  const mangas = await getPopular()

  return (
    <div>
      <MangasCarousel mangas={mangas} />
    </div>
  )
}
