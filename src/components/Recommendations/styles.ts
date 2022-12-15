'use client'

import styled from 'styled-components'

export const RecommendationsContainer = styled.div`
  max-height: 15rem;
  width: inherit;
  position: relative;
  margin-bottom: 1.5rem;

  &[data-width='shink'] {
    width: calc(100vw - 1.5rem - 15rem);
  }

  .carousel.carousel-slider .control-arrow {
    position: absolute;
    inset: unset;
    bottom: 0.5rem;
    border-radius: 50%;
    padding: 0.2rem 0.75rem 0.3rem 0.75rem;
    background: ${(props) => props.theme['--gray-800']};
  }

  .carousel.carousel-slider .control-next {
    right: 0;
    margin-right: 4rem;
  }

  .carousel.carousel-slider .control-prev {
    right: 7rem;
  }
`

export const CarouselItem = styled.div`
  max-height: 15rem;
  position: relative;
  background-position: center 20%;
  border-radius: 4px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem;
  height: 100%;

  a {
    display: flex;
  }

  #carouselImage {
    min-height: 14rem;
    min-width: 10rem;
    max-height: 14rem;
    max-width: 10rem;
    border-radius: 4px 4px 0 0;
  }

  .image {
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    max-width: 100%;
    border-radius: 4px 4px 0 0;
  }
`
