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
            <div>
              <Image src={manga.coverUrl} width={200} height={300} alt="" />
              <div className={styles.updates__manga__content}>
                <strong>{manga.title}</strong>
                <span>{manga.authorName}</span>
              </div>
            </div>
            <footer className={styles.updates__manga__footer}>
              <strong>ch. {manga.newChapters}</strong>
              <span>{manga.chapter.title}</span>
            </footer>
          </Link>
        )
      })}
    </div>
  )
}
