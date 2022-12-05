'use client'

import styled from 'styled-components'
import { poppins } from '../../../styles/globals'

export const MangaContainer = styled.div`
  margin-top: 5rem;

  .bannerBackground {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 18.5rem;
    filter: blur(4px);

    div {
      width: 100%;
      height: 100%;
      background-position: center 25%;
      background-size: cover;
      object-fit: cover;

      .gradient {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }

  .mangaInfo {
    padding: 0 1.6rem;

    .imageAndTitle {
      display: flex;
      height: 13.3rem;

      img {
        z-index: 1;
        border-radius: 4px;
      }

      .authorAndTitle {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        height: auto;

        h1 {
          font-family: ${poppins.style.fontFamily}, sans-serif;
          color: ${(props) => props.theme['--gray-100']};
          font-size: 4.5rem;
          line-height: 110%;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        strong {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          font-size: 1.2rem;
          color: ${(props) => props.theme['--gray-200']};

          span {
            font-family: ${poppins.style.fontFamily}, sans-serif;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }

    .containerActions {
      background: ${(props) => props.theme['--gray-800']};

      .actions {
        padding: 0.75rem 0;
        margin-left: 13.5rem;
        margin-bottom: 2rem;
        margin-right: 1.6rem;

        .buttons {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: ${(props) => props.theme['--gray-300']};
          height: 3rem;

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

          .library {
            font-family: ${poppins.style.fontFamily}, sans-serif;
            background: ${(props) => props.theme['--gray-900']};
            font-size: 1.2rem;
            width: 15rem;
          }
        }
      }

      & > div {
        padding: 0 1.6rem;
      }
    }
  }

  .statusContainer {
    padding: 0.25rem 0;

    .publicationStatus {
      display: flex;
      gap: 0.5rem;

      strong {
        font-family: ${poppins.style.fontFamily}, sans-serif;
        font-size: 0.8rem;
        text-transform: uppercase;
      }
    }

    .statistics {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;

      span {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .stars {
        color: ${(props) => props.theme['--grullo']};
      }

      .marks {
        color: ${(props) => props.theme['--gray-100']};
      }

      .eye {
        color: ${(props) => props.theme['--gray-500']};
      }
    }
  }
`

const STATUS_COLORS = {
  green: 'green',
  blue: 'blue',
  yellow: 'yellow',
  red: 'red',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  &::before {
    content: '';
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
