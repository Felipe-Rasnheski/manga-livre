'use client'

import styled from 'styled-components'

export const PageContainer = styled.div`
  width: calc(100vw - 1.5rem);
  overflow: hidden;
  padding: 0 0 0 1.5rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &[data-width='shink'] {
    max-width: calc(100vw - 15rem - 1.5rem);
  }
`
