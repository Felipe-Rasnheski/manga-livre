import { Popular } from '../components/Popular'
import { Recommendations } from '../components/Recommendations'
import { getPopular } from '../utils/getPopular'
import { getRecommendations } from '../utils/getRecommendations'
import { PageContainer } from './styles'

export default async function HomePage() {
  const popularPromise = getPopular()
  const recomendationsPromise = getRecommendations()

  const [popular, recommendations] = await Promise.all([
    popularPromise,
    recomendationsPromise,
  ])

  return (
    <PageContainer id="pageContainer">
      <Recommendations mangas={recommendations} />
      <Popular mangas={popular} />
    </PageContainer>
  )
}
