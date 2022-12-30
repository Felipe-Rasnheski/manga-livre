'use client'

import styled from 'styled-components'
import { poppins } from '../../../../styles/globals'

export const LatestContainer = styled.div`
  .grid {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1rem;
  }

  a {
    box-shadow: none;

    img {
      border-radius: 4px;
      border: 1px solid transparent;
      outline: 1px solid ${(props) => props.theme['--grullo']};
    }
  }

  .chapter {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    font-family: ${poppins.style.fontFamily}, sans-serif;
    background: ${(props) => props.theme['--gray-700']};
    text-decoration: none;
    color: ${(props) => props.theme['--gray-100']};

    .info {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }

    strong {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 1.2rem;

      &:hover {
        text-decoration: underline;
      }
    }

    .title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .scanAndDate {
      display: flex;
      justify-content: space-between;
      color: ${(props) => props.theme['--gray-300']};
    }

    .scan {
      font-family: ${poppins.style.fontFamily}, sans-serif;
      display: flex;
      gap: 0.25rem;
      align-items: center;
      background: transparent;
      color: ${(props) => props.theme['--gray-300']};
      font-size: 1rem;

      span {
        padding: 0.15rem 0.25rem;
        border-radius: 4px;

        &:hover {
          background: ${(props) => props.theme['--gray-900']};
          cursor: pointer;
        }
      }
    }
  }
`
