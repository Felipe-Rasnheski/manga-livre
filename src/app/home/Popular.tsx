'use client'

import Image from 'next/image'
import Link from 'next/link'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../sass/css/carousel.css'
import styles from '../../sass/css/homeStyles.module.css'

import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { IMangaBasic } from '../../types'

type PopularProps = { mangas: IMangaBasic[] }

export function Popular({ mangas }: PopularProps) {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33)

  function getSlidePercentage() {
    const carousel = document.getElementById('carouselContainer')

    let slidePercentage = 33

    if (typeof window !== 'undefined' && carousel) {
      if (carousel?.clientWidth > 1100) {
        slidePercentage = 33
      }

      if (carousel?.clientWidth < 1101 && carousel?.clientWidth > 1000) {
        slidePercentage = 40
      }

      if (carousel?.clientWidth < 1001 && carousel?.clientWidth > 800) {
        slidePercentage = 45
      }

      if (carousel?.clientWidth < 801 && carousel?.clientWidth > 600) {
        slidePercentage = 60
      }

      if (carousel?.clientWidth < 601 && carousel?.clientWidth > 550) {
        slidePercentage = 70
      }

      if (carousel?.clientWidth < 551) {
        slidePercentage = 75
      }
    }
    setCenterSlidePercentage(slidePercentage)
  }

  if (typeof window !== 'undefined') {
    window.onresize = () => getSlidePercentage()
  }

  useEffect(() => getSlidePercentage(), [])

  return (
    <div id="carouselContainer" className={styles.popular}>
      <h1>Most Famous</h1>
      <Carousel
        autoPlay
        interval={4000}
        emulateTouch
        swipeable
        infiniteLoop
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        centerMode
        centerSlidePercentage={centerSlidePercentage}
        dynamicHeight={false}
        className={styles.popular__carousel}
      >
        {mangas.map((manga) => {
          return (
            <div key={manga.id} className={styles.popular__carousel__item}>
              <Link prefetch={false} href={`/manga/${manga.id}`}>
                <div className={styles.popular__carousel__item__image}>
                  <Image
                    src={manga.coverUrl}
                    width={256}
                    height={300}
                    priority
                    alt=""
                  />
                </div>
                <div>
                  <h3>{manga.title}</h3>
                  <p>{manga.description}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
