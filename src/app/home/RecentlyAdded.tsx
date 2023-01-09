import Image from 'next/image'
import Link from 'next/link'
import styles from '../../sass/css/homeStyles.module.css'

import { FaArrowRight } from 'react-icons/fa'
import { IMangaBasic } from '../../types'

export function RecentlyAdded({ mangas }: { mangas: IMangaBasic[] }) {
  return (
    <div className={styles.recently}>
      <div className={styles.recently__header}>
        <h1>Recently Added</h1>
        <Link href="/">
          <FaArrowRight size={22} />
        </Link>
      </div>

      <div className={styles.recently__mangas}>
        {mangas.map((manga) => {
          return (
            <Link
              href={`/manga/${manga.id}`}
              prefetch={false}
              className={styles.recently__mangas__manga}
              key={manga.id}
            >
              <Image src={manga.coverUrl} width={128} height={180} alt="" />
              <span>{manga.title}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
