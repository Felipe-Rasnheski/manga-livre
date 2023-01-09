import Image from 'next/image'
import Link from 'next/link'
import styles from '../../sass/css/homeStyles.module.css'

import { BiGroup } from 'react-icons/bi'
import { ILatestUpdates } from '../../types'
import { distanceToNow } from '../../utils/formatterDate'

export function LatestUpdates({ mangas }: { mangas: ILatestUpdates[] }) {
  return (
    <div className={styles.latest}>
      <h1>Latest Updates</h1>
      <div className={styles.latest__grid}>
        {mangas.map((manga) => {
          return (
            <Link
              prefetch={false}
              href={`/manga/${manga.id}`}
              key={manga.chapter.id}
              className={styles.latest__chapter}
            >
              <Image src={manga.coverUrl} width={70} height={100} alt="" />
              <div className={styles.latest__chapter__info}>
                <div className={styles.latest__chapter__title}>
                  <strong>{manga.title && Object.values(manga.title)}</strong>
                  <span>
                    ch. {manga.newChapters} - {manga.chapter.title}
                  </span>
                </div>
                <div className={styles.latest__chapter__scanAndDate}>
                  <button className={styles.latest__chapter__scan}>
                    <BiGroup size={22} />
                    <span>{manga.chapter.scanlationName}</span>
                  </button>
                  <span>{distanceToNow(manga.chapter.publishAt)}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
