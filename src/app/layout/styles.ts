'use client'

import styled from "styled-components"

export const LayoutContainer = styled.div`
  display: flex;

  .content {
    display: block;
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100vw;

    &[data-width='shink'] {
      max-width: calc(100vw - 15rem);
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
