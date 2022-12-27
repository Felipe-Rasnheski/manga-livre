import { LatestUpdates } from '../components/LatestUpdates'
import { getLatestUpdates } from '../utils/getLatestUpdates'
import { PageContainer } from './styles'

export const dynamic = 'auto'
export const revalidate = 3600
export const fetchCache = 'auto'

export default async function HomePage() {
  // const recommendationsPromise = getRecommendations()
  const latestUpdates = await getLatestUpdates()
  // const popular = await getPopular()
  // const recentlyAddedPromise = getRecentlyAdded()

  // const [recommendations, latestUpdates, popular, recentlyAdded] =
  //   await Promise.all([
  //     recommendationsPromise,
  //     latestUpdatesPromise,
  //     popularPromise,
  //     recentlyAddedPromise,
  // ])

  return (
    <PageContainer id="pageContainer" data-width="shink">
      {/* <Recommendations mangas={recommendations} /> */}
      <LatestUpdates mangas={latestUpdates} />
      {/* <Popular mangas={popular} /> */}
      {/* <RecentlyAdded mangas={recentlyAdded} /> */}
    </PageContainer>
  )
}
