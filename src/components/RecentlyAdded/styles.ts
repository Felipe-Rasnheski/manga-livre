'use client'

import styled from 'styled-components'
import { poppins } from '../../styles/globals'

export const RecentlyAddedContainer = styled.div`
  margin: 1.5rem 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      padding: 0.25em;
      color: ${(props) => props.theme['--gray-100']};
      border-radius: 4px;

      &:hover {
        color: ${(props) => props.theme['--gray-300']};
      }
    }
  }

  .mangas {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }

  .manga {
    display: block;
    height: 15rem;
    width: 9rem;
    text-align: center;
    color: ${(props) => props.theme['--gray-200']};
  }

  img {
    border-radius: 4px;
    object-fit: cover;
  }

  span {
    font-family: ${poppins.style.fontFamily}, sans-serif;
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
