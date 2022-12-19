'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { IManga } from '../../types/types'
import { CarouselItem, RecommendationsContainer } from './styles'

export function Recommendations({ mangas }: { mangas: IManga[] }) {
  return (
    <RecommendationsContainer id="recommendations" data-width="shink">
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
            <CarouselItem
              key={manga.id}
              style={{ backgroundImage: `url(${manga.coverUrl})` }}
            >
              <div className="background">
                <Link href={`/manga/${manga.id}`} prefetch={false}>
                  <div id="carouselImage">
                    <Image
                      src={manga.coverUrl}
                      className="image"
                      width={256}
                      height={300}
                      priority
                      alt=""
                    />
                  </div>
                  <div className="content">
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
                    <div className="author">{manga.authorName}</div>
                  </div>
                </Link>
              </div>
            </CarouselItem>
          )
        })}
      </Carousel>
    </RecommendationsContainer>
  )
}
