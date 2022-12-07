export interface MangaBasic {
  id: string
  title: string
  coverUrl: string
  description: string
}

export type tag = {
  id: string
  type: string
  attributes: {
    name: {}
    version: number
    group: string
    description: {}
  }
  relationships: []
}
type altTitle = { en: string } | any

export interface Manga extends MangaBasic {
  tags: tag[]
  title: string
  status: string
  altTitle: altTitle
  createdAt: string
  authorName: string
}

export interface MangaChapter {
  id: string
  type: 'chapter'
  attributes: {
    volume: string
    chapter: string
    title: string
    translatedLanguage: string
    externalUrl: string | null
    publishAt: string
    readableAt: string
    createdAt: string
    updatedAt: string
    pages: number
    version: number
  }
  relationships: any
}
