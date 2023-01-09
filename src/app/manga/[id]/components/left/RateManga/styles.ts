'use client'

import styled from 'styled-components'
import { poppins } from '../../../../../styles/globals'

export const RateMangaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    height: 100%;
    display: block;
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

  .rateOptions {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 100%;
    background: ${(props) => props.theme['--gray-800']};
    padding: 0.25rem 0;
    display: none;
    transform: scaleY(0);

    span {
      font-family: ${poppins.style.fontFamily}, sans-serif;
      display: block;
      white-space: nowrap;
      padding: 0.25rem 0.5rem;
      width: 100%;
      text-align: center;

      &:hover {
        cursor: pointer;
        background: ${(props) => props.theme['--gray-700']};
      }
    }

    &[data-rate-options='show'] {
      transform: scaleY(1);
      display: block;
    }
  }
`
