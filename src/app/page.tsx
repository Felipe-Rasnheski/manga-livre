import { MangasCarousel } from '../components/Carousel'
import { getListSeasonal } from '../utils/getListSeasonal'

export default async function HomePage() {
  const mangas = await getListSeasonal()

  return (
    <div>
      <MangasCarousel mangas={mangas} />
    </div>
  )
}
