'use client'

import styled from 'styled-components'

export const SelectContainer = styled.div`
  position: relative;
  background: #1a1c21ff;
  width: 16rem;
  border-radius: 4px 4px 0 0;

  .reportReason {
    position: absolute;
    top: 0;
    left: 1rem;
    opacity: 0;

    &[data-report-reason='show'] {
      font-weight: 500;
      opacity: 1;
    }
  }

  .select {
    width: 100%;
    padding: 1rem 0.5rem 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid transparent;
    background-color: transparent;
    box-shadow: none;
    color: #f8f9faff;

    &:focus {
      border: 1px solid #e5d5a7;
    }

    .valueSelected {
      font-weight: 500;
    }

    &:has(.valueSelected[data-select='open']) {
      transition: all 0.2s;
      align-items: baseline;
      opacity: 0.6;
    }

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
    background: #1a1c21ff;
    width: inherit;
    border-radius: 0 0 4px 4px;
    padding-bottom: 0.5rem;

    span {
      transition: all 0.2s;
      font-weight: 500;
      display: block;
      padding: 0.5rem 1rem;

      &:hover {
        cursor: pointer;
        background: #121318ff;
      }

      &[data-option='active'] {
        background: #121318ff;
      }
    }

    &[data-select='close'] {
      transform: scaleY(0);
      display: none;
    }
  }
`
