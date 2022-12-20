'use client'

import * as Avatar from '@radix-ui/react-avatar'
import styled from 'styled-components'

export const AvatarContainer = styled(Avatar.Root)`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['--gray-700']};
  color: ${(props) => props.theme['--gray-200']};
  border-radius: 8px 8px 0 0;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`
