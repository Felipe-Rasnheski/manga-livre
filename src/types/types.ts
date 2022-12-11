export interface MangaBasic {
  id: string
  title: string
  coverUrl: string
  description: string
}

export interface tag {
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

export type AltTitle = { en: string } | any

export interface Manga extends MangaBasic {
  tags: tag[]
  title: string
  status: string
  altTitle: AltTitle
  createdAt: string
  authorName: string
  availableTranslatedLanguages: string[]
}

export type Relation = { id: string; type: string }

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
  relationships: Relation[]
  scanlation: {
    id: string
    name: string
  }
  whoPosted: {
    id: string
    name: string
  }
}

export interface CoverArt {
  id: string
  attributes: {
    volume: string
    fileName: string
  }
  relationships: Relation[]
}

export interface CustomList {
  id: string
  type: string
  attributes: {
    name: string
    visibility: string
    version: number
  }
  relationships: Relation[]
}
