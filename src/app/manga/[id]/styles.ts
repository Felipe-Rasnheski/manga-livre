'use client'

import styled from 'styled-components'

export const MangaContainer = styled.div`
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
    margin-top: 0.5rem;

    .imageAndTitle {
      padding: 0 1.6rem;
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
          font-size: 4.5rem;
        }

        strong {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          font-size: 1.2rem;
        }
      }
    }

    .containerActions {
      background: ${(props) => props.theme['--gray-800']};

      .actions {
        padding: 0.75rem 0;
        margin-left: 15.2rem;
        margin-bottom: 2rem;

        div {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: ${(props) => props.theme['--gray-300']};

          button {
            height: 100%;
            padding: 0.5rem 0.75rem;
            color: ${(props) => props.theme['--gray-300']};
            background: ${(props) => props.theme['--gray-600']};
            border-radius: 4px;

            &:nth-child(1) {
              background: ${(props) => props.theme['--gray-900']};
              font-size: 1.2rem;
              width: 15rem;
            }

            &:hover {
              cursor: pointer;
              color: ${(props) => props.theme['--gray-100']};
              opacity: 0.7;
            }
          }
        }

        .buttons {
          height: 3rem;
        }

        .tags {
          display: flex;
          margin-top: 0.75rem;
          gap: 0.5rem;

          span {
            background: ${(props) => props.theme['--gray-900']};
            border-radius: 4px;
            padding: 0 0.25rem 0.25rem 0.25rem;
            font-size: 0.9rem;

            &:nth-child(1) {
              background: ${(props) => props.theme.background};
            }

            &:hover {
              cursor: pointer;
            }
          }
        }
      }

      & > div {
        padding: 0 1.6rem;
      }
    }
  }
`