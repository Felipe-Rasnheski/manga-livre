import { MangaChapter } from '../types/types'

export function filterRepeatedChapters(chapters: MangaChapter[]) {
  const filtered = chapters.filter((chapter, index, array) => {
    if (array[index + 1] === undefined) return chapter

    return chapter.attributes.chapter !== array[index + 1].attributes.chapter
  })

  return filtered
}
