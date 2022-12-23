'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { MangaBasic } from '../../types/types'
import { CarouselItem, PopularContainer } from './styles'

type PopularProps = { mangas: MangaBasic[] }

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

  window.onresize = () => getSlidePercentage()

  useEffect(() => getSlidePercentage(), [])

  return (
    <PopularContainer id="carouselContainer">
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
        className="carousel"
      >
        {mangas.map((manga) => {
          return (
            <CarouselItem key={manga.id}>
              <Link prefetch={false} href={`/manga/${manga.id}`}>
                <div id="carouselImage">
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
            </CarouselItem>
          )
        })}
      </Carousel>
    </PopularContainer>
  )
}
