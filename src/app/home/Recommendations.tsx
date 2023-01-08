'use client'

import Image from 'next/image'
import Link from 'next/link'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '../../sass/css/homeStyles.module.css'

import { Carousel } from 'react-responsive-carousel'
import { IManga } from '../../types'

export function Recommendations({ mangas }: { mangas: IManga[] }) {
  return (
    <div
      className={styles.home__recommendations}
      id="recommendations"
      data-width="shink"
    >
      <Carousel
        autoPlay
        interval={4000}
        emulateTouch
        swipeable
        infiniteLoop
        centerMode
        centerSlidePercentage={100}
        dynamicHeight={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {mangas.map((manga) => {
          return (
            <div
              key={manga.id}
              style={{ backgroundImage: `url(${manga.coverUrl})` }}
              className={styles.home__carousel__item}
            >
              <div className={styles.home__carousel__item__background}>
                <Link href={`/manga/${manga.id}`} prefetch={false}>
                  <div className={styles.home__carousel__item__image}>
                    <Image
                      src={manga.coverUrl}
                      width={256}
                      height={300}
                      priority
                      alt=""
                    />
                  </div>
                  <div className={styles.home__carousel__item__info}>
                    <strong>{manga.title}</strong>
                    <div>
                      <span>
                        {manga.tags[0] &&
                          Object.values(manga.tags[0].attributes.name)}
                      </span>
                      <span>
                        {manga.tags[1] &&
                          Object.values(manga.tags[1].attributes.name)}
                      </span>
                      <span>
                        {manga.tags[2] &&
                          Object.values(manga.tags[2].attributes.name)}
                      </span>
                    </div>
                    <p>{manga.description}</p>
                    <div className={styles.home__carousel__item__info__author}>
                      {manga.authorName}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
