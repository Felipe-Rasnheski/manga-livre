'use client'

import { BiStar } from 'react-icons/bi'
import { RateMangaContainer } from './styles'

export function RateManga() {
  function handleRate() {
    const rateOptions = document.getElementById('rateOptions')
    const dataRate = rateOptions?.getAttribute('data-rate-options')

    if (dataRate === 'show') {
      rateOptions?.setAttribute('data-rate-options', '')
    } else {
      rateOptions?.setAttribute('data-rate-options', 'show')
    }
  }

  if (typeof window !== 'undefined') {
    window.onclick = () => {
      const rateOptions = document.getElementById('rateOptions')
      const dataRate = rateOptions?.getAttribute('data-rate-options')

      if (dataRate === 'show') {
        rateOptions?.setAttribute('data-rate-options', '')
      }
    }
  }

  return (
    <RateMangaContainer>
      <button
        onClick={(e) => {
          e.stopPropagation()
          setTimeout(handleRate, 20)
        }}
        id="button"
      >
        <BiStar size={28} title="Rate" />
      </button>

      <div className="rateOptions" id="rateOptions" data-rate-options="">
        <span>(10) Masterpiece</span>
        <span>(9) Great</span>
        <span>(8) Very Good</span>
        <span>(7) Good</span>
        <span>(6) Fine</span>
        <span>(5) Average</span>
        <span>(4) Bad</span>
        <span>(3) Very Bad</span>
        <span>(2) Horrible</span>
        <span>(1) Appalling</span>
        <span className="removeRating">Remove Rating</span>
      </div>
    </RateMangaContainer>
  )
}
