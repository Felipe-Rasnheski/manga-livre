'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { MangaBasic } from '../../types/types'
import { CarouselItem, PopularContainer } from './styles'

type PopularProps = { mangas: MangaBasic[] }

export function Popular({ mangas }: PopularProps) {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33)

  if (typeof window !== 'undefined') {
    window.onresize = () => {
      if (window.innerWidth < 1100) {
        setCenterSlidePercentage(33)
      }

      if (window.innerWidth < 1101 && window.innerWidth > 1000) {
        setCenterSlidePercentage(40)
      }

      if (window.innerWidth < 1001 && window.innerWidth > 800) {
        setCenterSlidePercentage(45)
      }

      if (window.innerWidth < 801 && window.innerWidth > 600) {
        setCenterSlidePercentage(60)
      }

      if (window.innerWidth < 601 && window.innerWidth > 550) {
        setCenterSlidePercentage(70)
      }

      if (window.innerWidth < 551) {
        setCenterSlidePercentage(75)
      }
    }
  }

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
        className="root"
      >
        {mangas.map((manga) => {
          return (
            <CarouselItem key={manga.id}>
              <Link href={`/manga/${manga.id}`}>
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