'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { CarouselContainer, CarouselItem } from '../styles/app/carousel'

interface IMangaSlideProps {
  mangas: {
    id: string
    description: string
    cover: string
    title: string
  }[]
}

export function MangasCarousel({ mangas }: IMangaSlideProps) {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33)

  onresize = () => {
    if (window.innerWidth > 1000) {
      setCenterSlidePercentage(33)
    }

    if (window.innerWidth < 1000 && window.innerWidth > 700) {
      setCenterSlidePercentage(50)
    }

    if (window.innerWidth < 701 && window.innerWidth > 500) {
      setCenterSlidePercentage(60)
    }

    if (window.innerWidth < 501) {
      setCenterSlidePercentage(80)
    }
  }

  console.log(centerSlidePercentage)

  return (
    <CarouselContainer>
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
        width={'100vw'}
        centerMode
        centerSlidePercentage={centerSlidePercentage}
        dynamicHeight={false}
        className="root"
      >
        {mangas.map((manga) => {
          return (
            <CarouselItem key={manga.id}>
              <Link href="/">
                <div id="carouselImage">
                  <Image
                    src={manga.cover}
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
    </CarouselContainer>
  )
}
