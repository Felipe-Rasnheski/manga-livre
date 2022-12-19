import { PageContainer } from './styles'

export const dynamic = 'auto'
export const revalidate = 60 * 60
export const fetchCache = 'auto'

export default async function HomePage() {
  // const recommendationsPromise = getRecommendations()
  // const latestUpdatesPromise = getLatestUpdates()
  // const popularPromise = getPopular()
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
      {/* <Recommendations mangas={recommendations} />
      <LatestUpdates mangas={latestUpdates} />
      <Popular mangas={popular} />
      <RecentlyAdded mangas={recentlyAdded} /> */}
    </PageContainer>
  )
}
