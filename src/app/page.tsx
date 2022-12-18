import { LatestUpdates } from '../components/LatestUpdates'
import { Popular } from '../components/Popular'
import { Recommendations } from '../components/Recommendations'
import { getLatestUpdates } from '../utils/getLatestUpdates'
import { getPopular } from '../utils/getPopular'
import { getRecommendations } from '../utils/getRecommendations'
import { PageContainer } from './styles'

export default async function HomePage() {
  const popularPromise = getPopular()
  const recomendationsPromise = getRecommendations()
  const latestUpdatesPromise = getLatestUpdates()

  const [popular, recommendations, latestUpdates] = await Promise.all([
    popularPromise,
    recomendationsPromise,
    latestUpdatesPromise,
  ])

  return (
    <PageContainer id="pageContainer">
      <Recommendations mangas={recommendations} />
      <LatestUpdates mangas={latestUpdates} />
      <Popular mangas={popular} />
    </PageContainer>
  )
}
