'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../../sass/css/mangaStyles.module.css'

import { ICoverArt } from '../../../../types'

export function MangaArt({
  allCovers,
  mangaId,
}: {
  allCovers: ICoverArt[]
  mangaId: string
}) {
  const

  return (
    <div className={styles.art} id="art">
      <Link href="/" prefetch={false}>
        Art...
      </Link>
      <ul className={styles.art__slide}>
        {allCovers.map((cover) => {
          return (
            <li key={cover.id} className={styles.art__content}>
              <div className={styles.art__content__background}></div>
              <Image
                src={`https://uploads.mangadex.org/covers/${mangaId}/${cover.attributes.fileName}`}
                width={256}
                height={512}
                quality={100}
                alt=""
                className={styles.art__content__Image}
              />
              <footer>Volume {cover.attributes.volume}</footer>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
