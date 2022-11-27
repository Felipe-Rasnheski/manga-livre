import styled from 'styled-components'
import { poppins } from '../globals'

export const CarouselContainer = styled.div`
  .root {
    ul.control-dots {
      margin-top: 50px;
    }
  }
`

export const CarouselItem = styled.div`
  display: flex;
  margin-right: 2rem;
  color: ${(props) => props.theme['--gray-300']};
  overflow: hidden;

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-family: ${poppins.style.fontFamily}, sans-serif;
    font-weight: 700;
  }

  div {
  }

  p {
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 14;
    -webkit-box-orient: vertical;
    line-break: auto;
    overflow: hidden;
    line-height: 130%;
    font-size: 0.9rem;
    font-family: ${poppins.style.fontFamily}, sans-serif;
    font-weight: 500;
  }
`
