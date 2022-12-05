'use client'

import styled from 'styled-components'
import { poppins } from '../../styles/globals'

export const TagsContainer = styled.div`
  margin-top: 0.75rem;
  overflow-wrap: break-word;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 200%;
    max-width: 95%;

    .hidden {
      display: none;

      &:hover {
        cursor: pointer;
        opacity: 0.9;
      }
    }

    &[data-paragraph='more'] {
      -webkit-line-clamp: 5;

      .hidden {
        display: inline-block;

        &::after {
          content: '...hidden';
          color: ${(props) => props.theme['--khaki-web']};
          border-bottom: 1px solid ${(props) => props.theme['--khaki-web']};
        }
      }
    }
  }

  span {
    font-family: ${poppins.style.fontFamily}, sans-serif;
    background: ${(props) => props.theme['--gray-900']};
    border-radius: 4px;
    padding: 0.25rem;
    font-size: 0.9rem;
    white-space: nowrap;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;

    &:nth-child(1) {
      background: ${(props) => props.theme.background};
    }

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }

  .more {
    &::after {
      content: 'More...';
      color: ${(props) => props.theme['--khaki-web']};
      border-bottom: 1px solid ${(props) => props.theme['--khaki-web']};
    }

    &[data-more='hidden'] {
      display: none;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`
