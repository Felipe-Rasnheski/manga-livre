'use client'

import styled from 'styled-components'
import { poppins } from '../../styles/globals'

export const MangaChaptersContainer = styled.div`
  padding: 1.6rem;
  width: 100%;
  flex: 2;

  .chapter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.5rem;
    color: ${(props) => props.theme['--gray-100']};
    background: ${(props) => props.theme['--gray-900']};
    text-decoration: none;
    border-left: 2px solid ${(props) => props.theme['--grullo']};
    border-radius: 4px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      strong {
        display: flex;
        align-items: center;
      }

      button {
        background: transparent;
        padding: 0 0.25rem 0.25rem 0.25rem;
        color: ${(props) => props.theme['--gray-200']};
        font-size: 1rem;
        border: none;
        border-radius: 4px;

        &:hover {
          background-color: ${(props) => props.theme['--gray-700']};
          cursor: pointer;
        }
      }

      .marginRight {
        margin-right: 0.25rem;
      }

      .userWhoPosted {
        color: ${(props) => props.theme['--gray-400']};
      }
    }

    .linkTitle {
      font-family: ${poppins.style.fontFamily}, sans-serif;
      text-decoration: none;
      color: ${(props) => props.theme['--gray-100']};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
