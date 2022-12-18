'use client'

import styled from 'styled-components'
import { poppins } from '../../styles/globals'

export const MangaChaptersContainer = styled.div`
  padding: 1.6rem;
  width: 100%;
  flex: 2;

  .hiddenOverflow {
    max-height: 153vh;
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 1.6rem;

    &[data-overflow='hidden'] {
      border-bottom: 2px solid ${(props) => props.theme.blue};
    }

    &[data-overflow='showall'] {
      max-height: fit-content;
    }
  }

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
    cursor: pointer;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      strong {
        display: flex;
        align-items: center;
      }

      span {
        padding: 0 0.25rem 0.25rem 0.25rem;
        color: ${(props) => props.theme['--gray-200']};
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

    .timeAndUser {
      min-width: 10rem;
    }

    .linkTitle {
      font-family: ${poppins.style.fontFamily}, sans-serif;
      text-decoration: none;
      color: ${(props) => props.theme['--gray-100']};
      box-shadow: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .showAll {
    text-align: center;

    button {
      padding: 0.5rem;
      background: transparent;
      border-radius: 4px;
      color: ${(props) => props.theme.blue};
      font-size: 1rem;
      font-family: ${poppins.style.fontFamily}, sans-serif;
      border: none;
      box-shadow: none;

      &:hover {
        box-shadow: inset 0 0 4px ${(props) => props.theme.blue};
        cursor: pointer;
        background: ${(props) => props.theme['--gray-700']};
      }

      &:focus {
        box-shadow: inset 0 0 4px ${(props) => props.theme.blue};
      }
    }

    &[data-show='hidden'] {
      display: none;
    }
  }
`
