'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BiGroup, BiTime, BiUser } from 'react-icons/bi'
import { MangaChapter } from '../../types/types'
import { distanceToNow } from '../../utils/formatterDate'
import { MangaChaptersContainer } from './styles'

export function MangaChapters({
  mangaChapters,
}: {
  mangaChapters: MangaChapter[]
}) {
  function isOverflowing() {
    const hiddenOverflow = document.getElementById('hiddenOverflow')

    let isOverflowing: boolean = false

    if (
      hiddenOverflow?.clientWidth !== undefined &&
      hiddenOverflow.clientHeight !== undefined
    ) {
      isOverflowing =
        hiddenOverflow.scrollHeight > hiddenOverflow.clientHeight ||
        hiddenOverflow.scrollWidth > hiddenOverflow.clientWidth
    }

    const showAll = document.getElementById('showAll')

    if (isOverflowing) {
      hiddenOverflow?.setAttribute('data-overflow', 'hidden')
      showAll?.setAttribute('data-show', 'all')
    } else {
      hiddenOverflow?.setAttribute('data-overflow', '')
      showAll?.setAttribute('data-show', 'hidden')
    }
  }

  function handleShowOverflow() {
    const hiddenOverflow = document.getElementById('hiddenOverflow')

    hiddenOverflow?.setAttribute('data-overflow', 'showall')

    const showAll = document.getElementById('showAll')
    showAll?.setAttribute('data-show', 'hidden')
  }

  useEffect(() => isOverflowing())

  if (typeof window !== 'undefined') {
    window.onresize = () => isOverflowing()
  }

  return (
    <MangaChaptersContainer>
      <div className="hiddenOverflow" id="hiddenOverflow" data-overflow="">
        {mangaChapters.map((chapter) => {
          return (
            <div key={chapter.id} className="chapter">
              <div>
                <strong>
                  <AiOutlineEye size={18} className="marginRight" />
                  <Link prefetch={false} href="/" className="linkTitle">
                    Ch.{chapter.attributes.chapter} - {chapter.attributes.title}
                  </Link>
                </strong>

                <strong>
                  <BiGroup size={18} />
                  <span className="scanlation">
                    #{chapter.scanlation.name || 'unknown'}
                  </span>
                </strong>
              </div>
              <div className="timeAndUser">
                <strong>
                  <BiTime size={18} className="marginRight" />
                  {distanceToNow(chapter.attributes.publishAt)}
                </strong>
                <strong>
                  <BiUser size={18} />
                  <span className="scanlation">{chapter.whoPosted.name}</span>
                </strong>
              </div>
            </div>
          )
        })}
      </div>
      <div className="showAll" id="showAll" data-show="">
        <button onClick={handleShowOverflow}>Show All</button>
      </div>
    </MangaChaptersContainer>
  )
}
