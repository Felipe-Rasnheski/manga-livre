'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react.es'
import Image from 'next/image'
import { SliderContainer } from './sliderApp/keenSlider'

interface IMangaSlideProps {
  mangas: {
    id: string
    description: string
    cover: string
    title: string
  }[]
}

export function MangaSlide({ mangas }: IMangaSlideProps) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: false,
      slides: {
        perView: 'auto',
        spacing: 16,
      },
    },
    [
      // add plugins here
    ],
  )

  return (
    <div ref={sliderRef} className="keen-slider">
      <SliderContainer>
        {mangas.map((manga) => {
          return (
            <li key={manga.id} className="keen-slider__slide">
              <Image
                src={manga.cover}
                width={256}
                height={363}
                priority
                alt=""
              />
              <div>
                <h3>{manga.title}</h3>
                <p>{manga.description}</p>
              </div>
            </li>
          )
        })}
      </SliderContainer>
    </div>
  )
}
