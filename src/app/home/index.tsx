import styles from '../../sass/css/homeStyles.module.css'

import { Recommendations } from './Recommendations'
import { getRecommendations } from './util/getRecommendations'

export async function Home() {
  const recommendations = await getRecommendations()
  // const latestUpdatesPromise = getLatestUpdates()
  // const popular = await getPopular()
  // const recentlyPromise = getRecentlyAdded()

  // const [recommendations, latest, popular, recently] = await Promise.all([
  //   recommendationsPromise,
  //   latestUpdatesPromise,
  //   popularPromise,
  //   recentlyPromise,
  // ])

  return (
    <div className={styles.home}>
      <Recommendations mangas={recommendations} />
      {/* <LatestUpdates mangas={latest} /> */}
      {/* <Popular mangas={popular} /> */}
      {/* <RecentlyAdded mangas={recently} /> */}
    </div>
  )
}
