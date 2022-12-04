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
    }
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
