'use client'

import Link from 'next/link'
import styles from '../../../../sass/css/mangaStyles.module.css'

import { useEffect } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BiGroup, BiTime, BiUser } from 'react-icons/bi'
import { IMangaChapter } from '../../../../types'
import { distanceToNow } from '../../../../utils/formatterDate'

export function MangaChapters({
  mangaChapters,
}: {
  mangaChapters: IMangaChapter[]
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
    <div className={styles.chapters}>
      <div
        className={styles.chapters__hiddenOverflow}
        id="hiddenOverflow"
        data-overflow=""
      >
        {mangaChapters.map((chapter) => {
          return (
            <div key={chapter.id} className={styles.chapters__chapter}>
              <div>
                <strong>
                  <AiOutlineEye size={18} />
                  <Link
                    prefetch={false}
                    href="/"
                    className={styles.chapters__chapter__title}
                  >
                    Ch.{chapter.attributes.chapter} - {chapter.attributes.title}
                  </Link>
                </strong>
                <strong>
                  <BiGroup size={18} />
                  <span>
                    #{chapter.scanlation ? chapter.scanlation.name : 'Unknown'}
                  </span>
                </strong>
              </div>
              <div className={styles.chapters__chapter__timeAndUser}>
                <strong>
                  <BiTime size={18} />
                  {distanceToNow(chapter.attributes.publishAt)}
                </strong>
                <strong>
                  <BiUser size={18} />
                  <span>{chapter.whoPosted.name}</span>
                </strong>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.chapters__showAll} id="showAll" data-show="">
        <button onClick={handleShowOverflow}>Show All</button>
      </div>
    </div>
  )
}
