import styled from 'styled-components'
import { poppins } from '../../styles/globals'

export const CarouselContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  padding: 0 1.5rem;

  h1 {
    margin-bottom: 0.3rem;
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
  min-width: 350px;
  max-width: 23.75rem;
  margin-right: 1.5rem;
  position: relative;
  max-height: 15rem;
  background: ${(props) => props.theme['--gray-700']};
  border-radius: 0 4px 4px 0;

  a {
    display: flex;
    text-decoration: none;
  }

  #carouselImage {
    position: relative;
    display: inline-block;
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
    width: auto;
    padding: 0 0.65rem;
    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: normal;
    overflow-wrap: anywhere;
    text-align: start;
    line-height: 130%;
    line-break: strict;
    font-size: 0.9rem;
    font-family: ${poppins.style.fontFamily}, sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme['--gray-300']};
  }

  @media (max-width: 541px) {
    max-width: 21rem;
  }

  @media (min-width: 580px) {
    max-width: fit-content;
    width: 25rem;
  }

  @media (min-width: 700px) {
    width: max-content;
    max-width: fit-content;
  }

  @media (min-width: 900px) {
  }
`
