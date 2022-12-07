'use client'

import styled from 'styled-components'
import { poppins } from '../../styles/globals'

export const MangaTabsContainer = styled.div`
  padding: 1.6rem;

  header {
    padding: 0.25rem;
    background: ${(props) => props.theme['--gray-700']};
    width: fit-content;
    display: flex;
    gap: 0.5rem;

    button {
      border: none;
      font-size: 1.1rem;
      font-weight: bold;
      font-family: ${poppins.style.fontFamily}, sans-serif;
      background: transparent;
      color: ${(props) => props.theme['--gray-500']};
      padding: 0.25rem;

      &.active {
        transition: all 0.2s ease;
        color: ${(props) => props.theme['--gray-100']};
        background: ${(props) => props.theme['--gray-500']};
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
`
