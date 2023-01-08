import styles from '../../sass/css/homeStyles.module.css'
import { Recommendations } from './Recommendations'
import { getRecommendations } from './util/getRecommendations'

export async function Home() {
  const mangas = await getRecommendations()

  return (
    <div id="home" className={styles.home} data-width="shink">
      <Recommendations mangas={mangas} />
    </div>
  )
}
