'use client'

import styled from 'styled-components'
import { poppins } from '../../styles/globals'

export const RecommendationsContainer = styled.div`
  max-height: 15rem;
  width: inherit;
  position: relative;
  margin-bottom: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 1rem;

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
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 6px;
  height: 100%;

  .background {
    padding: 1rem;
    border-radius: 4px;
    overflow: hidden;
    max-height: 15rem;

    background: linear-gradient(
      rgba(12, 9, 15, 0.7),
      rgba(12, 9, 15, 0.8),
      rgba(12, 9, 15, 0.99)
    );
  }

  a {
    display: flex;
    text-decoration: none;
    color: ${(props) => props.theme['--gray-100']};
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

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 1rem;
    max-height: 13rem;
    text-align: start;
    font-family: ${poppins.style.fontFamily};

    strong {
      font-size: 1.7rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    span {
      background: ${(props) => props.theme['--gray-900']};
      border-radius: 4px;
      padding: 0.25rem;
      font-size: 0.9rem;
      white-space: nowrap;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;

      &:nth-child(1) {
        background: ${(props) => props.theme.background};
      }
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .author {
      margin-top: auto;
      font-weight: bold;
    }
  }
`
