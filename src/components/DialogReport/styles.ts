'use client'

import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 2;
`

export const ContainerDialog = styled.div``

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  padding: 1rem;
  background: ${(props) => props.theme['--gray-800']};
  box-shadow: none;
  width: 50vw;
  border-radius: 4px;
  padding: 3rem;
  height: 100vh;
  overflow-y: auto;
  margin: 2rem;

  .content {
    padding-bottom: 4rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .description {
    span {
      font-weight: bold;
    }

    .mangaReporting {
      margin: 1rem 0;
      display: flex;
      gap: 1rem;
      padding: 0.5rem;
      background: ${(props) => props.theme['--gray-700']};

      img {
        border-radius: 4px;
      }

      div {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
      }
    }

    .divider {
      display: block;
      height: 1px;
      width: 100%;
      background: ${(props) => props.theme['--gray-700']};
    }

    .reason {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .textarea {
        padding: 1rem;
        background: ${(props) => props.theme['--gray-700']};
        color: ${(props) => props.theme['--gray-200']};
        font-size: 1.1rem;

        &::placeholder {
          color: ${(props) => props.theme['--gray-400']};
        }
      }
    }
  }

  .closeAndSend {
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;

    button {
      border-radius: 4px;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      color: ${(props) => props.theme['--gray-100']};

      &:hover {
        transition: background-color 0.2s;
        cursor: pointer;
        background: ${(props) => props.theme['--gray-900']};
      }
    }

    .send {
      background: ${(props) => props.theme.background};
    }

    .cancel {
      background: ${(props) => props.theme['--gray-700']};

      &:hover {
        background: ${(props) => props.theme['--gray-700']};
      }
    }
  }

  &::-webkit-scrollbar {
    width: 0.75rem;
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
`

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  right: 1rem;
  background: transparent;
  color: ${(props) => props.theme['--gray-100']};
  border-radius: 50%;
  line-height: 0;
  padding: 0.25rem;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['--gray-900']};
  }
`
