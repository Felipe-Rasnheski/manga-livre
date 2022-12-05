'use client'

import styled from 'styled-components'

export const RateMangaContainer = styled.div`
  button {
    height: 100%;
    padding: 0.5rem 0.75rem;
    color: ${(props) => props.theme['--gray-300']};
    background: ${(props) => props.theme['--gray-600']};
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme['--gray-100']};
      opacity: 0.7;
    }
  }
`
