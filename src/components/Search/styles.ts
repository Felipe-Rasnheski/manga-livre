'use client'

import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const SearchContainer = styled.div`
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 15rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 1.1rem;
    background: ${(props) => props.theme['--gray-700']};
    color: ${(props) => props.theme['--gray-400']};

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme['--grullo']};
    }

    &:hover {
      cursor: pointer;
    }
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
  backdrop-filter: blur(1px);
`

export const DialogContent = styled(Dialog.Content)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  box-shadow: none;
  width: 60%;
  margin-right: 3.8rem;
  padding: 1rem 0 3.5rem 0;
  height: 100%;
  background: ${(props) => props.theme['--gray-800']};

  header {
    width: 100%;
    padding: 1rem;
    padding-top: 0;
  }

  button {
    margin-left: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 13rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 1.1rem;
    background: ${(props) => props.theme['--gray-700']};
    color: ${(props) => props.theme['--gray-400']};
    border-bottom: 1px solid ${(props) => props.theme['--grullo']};

    &:hover {
      cursor: pointer;
    }
  }

  input {
    width: 100%;
    background: transparent;
    font-size: 1.1rem;
    box-shadow: none;
    color: ${(props) => props.theme['--gray-100']};
  }

  .mangas {
    width: 100%;
    margin-left: auto;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
    height: 100%;
    min-height: fit-content;

    .manga {
      display: flex;
      gap: 0.5rem;
      background: ${(props) => props.theme['--gray-700']};
      color: ${(props) => props.theme['--gray-200']};
      border-radius: 4px;
      padding: 0.5rem;
      text-decoration: none;

      img {
        border-radius: 4px;
        object-fit: cover;
      }

      .info {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        h2 {
          color: ${(props) => props.theme['--gray-100']};
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;

          &:hover {
            text-decoration: underline;
          }
        }

        .favorites {
          display: flex;
          gap: 0.5rem;

          span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.15rem;

            &:first-child {
              color: ${(props) => props.theme['--grullo']};
            }
          }
        }
      }

      .status {
        display: flex;
        gap: 0.25rem;
        align-items: center;
        justify-content: center;
        padding: 0.15rem 0.5rem 0.35rem 0.4rem;
        border-radius: 4px;
        width: fit-content;
        line-height: 100%;
        background: ${(props) => props.theme['--gray-800']};
      }
    }

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px ${(props) => props.theme['--gray-600']};
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['--gray-600']};
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      box-shadow: inset 0 0 2px ${(props) => props.theme['--gray-800']};
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
    width: 0.6rem;
    height: 0.6rem;
    margin-top: 0.2rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
