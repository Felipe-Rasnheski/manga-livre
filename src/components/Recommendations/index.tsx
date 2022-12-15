'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Manga } from '../../types/types'
import { CarouselItem, RecommendationsContainer } from './styles'

export function Recommendations({ mangas }: { mangas: Manga[] }) {
  return (
    <RecommendationsContainer id="recommendations">
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
      >
        {mangas.map((manga) => {
          return (
            <CarouselItem
              key={manga.id}
              style={{ backgroundImage: `url(${manga.coverUrl})` }}
            >
              <Link href={`/manga/${manga.id}`}>
                <div id="carouselImage">
                  <Image
                    src={manga.coverUrl}
                    width={256}
                    height={300}
                    priority
                    className="image"
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
    </RecommendationsContainer>
  )
}
