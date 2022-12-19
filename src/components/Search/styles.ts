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
  width: 100%;

  div {
    width: 100%;
    padding: 1rem 4.8rem;
  }

  button {
    margin-left: auto;
    width: 60%;
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
`
