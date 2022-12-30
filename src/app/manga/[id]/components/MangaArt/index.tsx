'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import { ICoverArt } from '../../../../../types/types'
import { ContainerImage, MangaArtContainer } from './styles'

export function MangaArt({
  allCovers,
  mangaId,
}: {
  allCovers: ICoverArt[]
  mangaId: string
}) {
  return (
    <MangaArtContainer>
      <Link href="/" prefetch={false}>
        Art...
      </Link>
      <Carousel
        autoPlay
        swipeable
        infiniteLoop
        emulateTouch
        interval={4000}
        showThumbs={false}
        dynamicHeight={false}
        showIndicators={false}
        centerSlidePercentage={100}
      >
        {allCovers.map((cover) => {
          return (
            <ContainerImage key={cover.id} className="cover">
              <div className="background"></div>
              <Image
                src={`https://uploads.mangadex.org/covers/${mangaId}/${cover.attributes.fileName}`}
                width={256}
                height={512}
                alt=""
                id="carouselImage"
              />
              <footer>Volume {cover.attributes.volume}</footer>
            </ContainerImage>
          )
        })}
      </Carousel>
    </MangaArtContainer>
  )
}
