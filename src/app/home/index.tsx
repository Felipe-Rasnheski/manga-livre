import styles from '../../sass/css/homeStyles.module.css'
import { LatestUpdates } from './LatestUpdates'
import { getLatestUpdates } from './utils/getLatestUpdates'

export async function Home() {
  // const recommendations = await getRecommendations()
  const latest = await getLatestUpdates()
  // const popular = await getPopular()
  // const recently = await getRecentlyAdded()

  // const [recommendations, latest, popular, recently] = await Promise.all([
  //   recommendationsPromise,
  //   latestUpdatesPromise,
  //   popularPromise,
  //   recentlyPromise,
  // ])

  return (
    <div className={styles.home}>
      {/* <Recommendations mangas={recommendations} /> */}
      <LatestUpdates mangas={latest} />
      {/* <Popular mangas={popular} /> */}
      {/* <RecentlyAdded mangas={recently} /> */}
    </div>
  )
}
