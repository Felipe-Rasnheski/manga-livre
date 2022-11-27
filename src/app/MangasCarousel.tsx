'use client'

import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { CarouselContainer, CarouselItem } from '../styles/app/Carousel'

interface IMangaSlideProps {
  mangas: {
    id: string
    description: string
    cover: string
    title: string
  }[]
}

export function MangasCarousel({ mangas }: IMangaSlideProps) {
  return (
    <CarouselContainer>
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
        centerSlidePercentage={30}
        dynamicHeight={false}
        className="root"
      >
        {mangas.map((manga) => {
          return (
            <CarouselItem key={manga.id}>
              <Image
                src={manga.cover}
                width={256}
                height={363}
                priority
                alt=""
              />
              <div>
                <h3>{manga.title}</h3>
                <div>
                  <p>{manga.description}</p>
                </div>
              </div>
            </CarouselItem>
          )
        })}
      </Carousel>
    </CarouselContainer>
  )
}
