import Image from 'next/image'
import Link from 'next/link'
import styles from '../../sass/css/updatesStyles.module.css'

import { getLatestUpdates } from './utils/getLatestUpdates'

export default async function Updates() {
  const latestUpdates = await getLatestUpdates(22)

  return (
    <div className={styles.updates}>
      {latestUpdates.map((manga) => {
        return (
          <Link
            href={`/manga/${manga.id}`}
            key={manga.id}
            className={styles.updates__manga}
          >
            <div className={styles.updates__manga__image}>
              <Image src={manga.coverUrl} width={200} height={300} alt="" />
            </div>
            <footer className={styles.updates__manga__footer}>
              <div></div>
              <div></div>
            </footer>
          </Link>
        )
      })}
    </div>
  )
}
