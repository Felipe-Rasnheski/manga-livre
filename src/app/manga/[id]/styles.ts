'use client'

import styled from 'styled-components'

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
        margin-left: 15.2rem;
        margin-bottom: 2rem;
        margin-right: 1.6rem;

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

            &:hover {
              cursor: pointer;
              color: ${(props) => props.theme['--gray-100']};
              opacity: 0.7;
            }
          }

          .library {
            background: ${(props) => props.theme['--gray-900']};
            font-size: 1.2rem;
            width: 15rem;
          }
        }

        .buttons {
          height: 3rem;
        }
      }

      & > div {
        padding: 0 1.6rem;
      }
    }
  }
`
