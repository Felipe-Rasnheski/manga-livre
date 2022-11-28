import styled from 'styled-components'
import { poppins } from '../globals'

export const CarouselContainer = styled.div`
  h1 {
    margin: 0 0 0.5rem 1.5rem;
  }

  .root {
    ul.control-dots {
      margin-top: 50px;
      position: relative;
      margin-top: 0;

      li.dot {
        padding: 0.3rem;
      }
    }
  }
`

export const CarouselItem = styled.div`
  max-width: 23.75rem;
  margin-right: 1.51rem;
  position: relative;
  max-height: 15rem;
  background: ${(props) => props.theme['--gray-700']};
  border-radius: 0 4px 4px 0;

  a {
    display: flex;
    text-decoration: none;
  }

  #carouselImage {
    object-position: center center;
    min-width: 6rem;
    width: 7rem;
    height: 15rem;
    overflow: hidden;
    max-width: 100%;
    border-radius: 4px 0 0 4px;

    img {
      border-radius: 4px 0 0 4px;
      object-fit: cover;
    }
  }

  h3 {
    font-family: ${poppins.style.fontFamily}, sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme['--gray-200']};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 0.25rem;
  }

  p {
    max-width: 17rem;
    padding: 0 0.65rem;
    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: start;
    line-break: break-all;
    line-height: 130%;
    line-break: auto;
    font-size: 0.9rem;
    font-family: ${poppins.style.fontFamily}, sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme['--gray-300']};
  }
`
