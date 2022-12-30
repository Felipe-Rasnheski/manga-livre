'use client'

import styled from 'styled-components'
import { poppins } from '../../../../../styles/globals'

export const MangaArtContainer = styled.div`
  a {
    display: inline-block;
    margin: 1rem 0 0;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: ${poppins.style.fontFamily}, sans-serif;
    color: ${(props) => props.theme['--gray-100']};

    &:hover {
      opacity: 0.7;
    }
  }

  .carousel.carousel-slider .control-arrow {
    z-index: 1;
  }

  .carousel .carousel-status {
    right: 2rem;
  }
`

export const ContainerImage = styled.div`
  display: inline-block;
  border-radius: 4px;
  position: relative;

  &:hover {
    .background {
      transition: all 0.2s ease-in-out;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .background {
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    position: absolute;
    background-color: transparent;
  }

  #carouselImage {
    object-position: center center;
    overflow: hidden;
    max-width: 100%;
    border-radius: 4px;
    object-fit: cover;
    z-index: 2;
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 0.5rem 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    font-family: ${poppins.style.fontFamily}, sans-serif;
    font-size: 1.1rem;
    text-align: start;
  }
`
