import { Recommendations } from '../components/Recommendations'
import { getRecommendations } from '../utils/getRecommendations'
import { PageContainer } from './styles'

export default async function HomePage() {
  // const popularPromise = getPopular()
  const recommendationsPromise = await getRecommendations()
  // const latestUpdatesPromise = getLatestUpdates()

  // const [popular, recommendations, latestUpdates] = await Promise.all([
  //   popularPromise,
  //   recommendationsPromise,
  //   latestUpdatesPromise,
  // ])

  return (
    <PageContainer id="pageContainer">
      <Recommendations mangas={recommendationsPromise} />
      {/* <LatestUpdates mangas={latestUpdates} />
      <Popular mangas={popular} /> */}
    </PageContainer>
  )
}
