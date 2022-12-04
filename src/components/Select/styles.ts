'use client'

import styled from 'styled-components'

export const SelectContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme['--gray-700']};
  width: 16rem;
  border-radius: 4px 4px 0 0;

  .floatMsg {
    position: absolute;
    top: 0;
    left: 1rem;

    &[data-select='close'] {
      opacity: 0;
    }
  }

  .select {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      svg {
        &[data-icon='hidden'] {
          opacity: 0;
          width: 0;
          transform: scaleY(0);
        }
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .options {
    position: absolute;
    background: ${(props) => props.theme['--gray-700']};
    width: inherit;
    border-radius: 0 0 4px 4px;
    padding-bottom: 0.5rem;

    span {
      display: block;
      padding: 0.5rem 1rem;

      &:hover {
        cursor: pointer;
        background: ${(props) => props.theme['--gray-900']};
      }

      &[data-option='active'] {
        background: ${(props) => props.theme['--gray-900']};
      }
    }

    &[data-select='close'] {
      transform: scaleY(0);
      display: none;
    }
  }
`
