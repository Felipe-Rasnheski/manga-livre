'use client'

import Link from 'next/link'
import styles from '../../../../sass/css/mangaStyles.module.css'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BiGroup, BiTime, BiUser } from 'react-icons/bi'
import { IMangaChapter } from '../../../../types'
import { distanceToNow } from '../../../../utils/formatterDate'
import { getChapters } from '../utils/getChapters'

export function MangaChapters({
  mangaChapters,
  mangaId,
  links,
}: {
  mangaChapters: IMangaChapter[]
  mangaId: string
  links: any
}) {
  const [chapters, setChapters] = useState(mangaChapters)
  const offset = useRef(0)

  const isOverflowing = useCallback(() => {
    const container = document.getElementById('container')

    let isOverflowing: boolean = false

    if (container?.clientHeight !== undefined) {
      isOverflowing = container.scrollHeight > container.clientHeight
    }

    const content = document.getElementById('chaptersContent')

    if (isOverflowing) {
      container?.setAttribute('data-overflow', 'hidden')
      content?.setAttribute('data-show', 'hidden')
    } else {
      container?.removeAttribute('data-overflow')
      content?.removeAttribute('data-show')
    }
  }, [])

  useEffect(() => isOverflowing(), [isOverflowing])

  function handleShowOverflow() {
    const container = document.getElementById('container')
    container?.setAttribute('data-overflow', 'showall')

    const content = document.getElementById('chaptersContent')
    content?.removeAttribute('data-show')
  }

  async function handleMoreChapters() {
    offset.current = offset.current + 50
    const chapters = await getChapters(mangaId, offset.current)
  }

  if (mangaChapters.length === 0) {
    return (
      <div className={styles.chapters}>
        <h1>Available on:</h1>
        <Link href={links.engtl}>Manga Plus</Link>
      </div>
    )
  }

  return (
    <div className={styles.chapters}>
      <ul id="container">
        {chapters.map((chapter) => {
          return (
            <li key={chapter.id} className={styles.chapters__chapter}>
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
            </li>
          )
        })}
      </ul>
      <div className={styles.chapters__content} id="chaptersContent">
        <button
          onClick={handleShowOverflow}
          className={styles.chapters__content__showAll}
        >
          Show All
        </button>
        <button
          className={styles.chapters__content__more}
          onClick={handleMoreChapters}
        >
          More
        </button>
      </div>
    </div>
  )
}
