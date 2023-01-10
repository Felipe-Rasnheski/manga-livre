'use client'

import styles from '../../../../sass/css/mangaStyles.module.css'

import { useEffect } from 'react'
import { ITag } from '../../../../types'

type TagsProps = {
  tags: ITag[]
}

export function Tags({ tags }: TagsProps) {
  function handleMoreTags() {
    const more = document.getElementById('more')

    const tagsParagraph = document.getElementById('tagsParagraph')
    const moreIsOpen = tagsParagraph?.getAttribute('data-paragraph')

    if (moreIsOpen === 'more') {
      tagsParagraph?.setAttribute('data-paragraph', '')
      more?.setAttribute('data-more', '')
    } else {
      tagsParagraph?.setAttribute('data-paragraph', 'more')
      more?.setAttribute('data-more', 'hidden')
    }
  }

  function isOverflown() {
    const tagsParagraph = document.getElementById('tagsParagraph')

    let isOverflowing: boolean = false

    if (
      tagsParagraph?.clientHeight !== undefined &&
      tagsParagraph?.clientWidth !== undefined
    ) {
      isOverflowing =
        tagsParagraph?.scrollHeight > tagsParagraph?.clientHeight ||
        tagsParagraph?.scrollWidth > tagsParagraph?.clientWidth
    }

    const more = document.getElementById('more')

    if (isOverflowing) {
      tagsParagraph?.setAttribute('data-paragraph', '')
      more?.setAttribute('data-more', '')
    } else {
      more?.setAttribute('data-more', 'hidden')
    }
  }

  useEffect(() => isOverflown(), [])

  if (typeof window !== 'undefined') {
    window.onresize = () => isOverflown()
  }

  return (
    <div className={styles.tags}>
      <p id="tagsParagraph" data-paragraph="">
        {tags.map((tag: any) => {
          return <span key={tag.id}>{Object.values(tag.attributes.name)}</span>
        })}
        <strong
          className={styles.tags__hidden}
          onClick={handleMoreTags}
        ></strong>
      </p>
      <strong
        className={styles.tags__more}
        id="more"
        onClick={handleMoreTags}
      ></strong>
    </div>
  )
}
