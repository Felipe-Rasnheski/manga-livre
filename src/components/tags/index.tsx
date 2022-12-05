'use client'

import { TagsContainer } from './styles'

type attributes = {
  name: {}
  version: number
  group: string
  description: {}
}

interface TagProps {
  id: string
  type: 'tag'
  attributes: attributes
  relationships: []
}

type TagsProps = {
  tags: TagProps[]
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

  return (
    <TagsContainer>
      <p id="tagsParagraph" data-paragraph="">
        {tags.map((tag: any) => {
          return <span key={tag.id}>{Object.values(tag.attributes.name)}</span>
        })}
        <strong className="hidden" onClick={handleMoreTags}></strong>
      </p>
      <strong className="more" id="more" onClick={handleMoreTags}></strong>
    </TagsContainer>
  )
}
