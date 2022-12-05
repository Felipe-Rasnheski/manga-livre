'use client'

import React from 'react'
import { BiStar } from 'react-icons/bi'
import { RateMangaContainer } from './styles'

export function RateManga() {
  function handleRate(element: React.MouseEvent<HTMLElement, MouseEvent>) {
    console.log(element)
  }

  return (
    <RateMangaContainer>
      <button onClick={(e) => handleRate(e)}>
        <BiStar size={28} title="Rate" />
      </button>
    </RateMangaContainer>
  )
}
