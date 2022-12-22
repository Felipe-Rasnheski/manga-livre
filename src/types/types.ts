export interface MangaBasic {
  id: string
  title: string
  coverUrl: string
  description: string
  status: string
}

export interface Tag {
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

export interface IManga extends MangaBasic {
  tags: Tag[]
  title: string
  status: string
  altTitle: AltTitle
  createdAt: string
  authorName: string
  availableTranslatedLanguages: string[]
}

export type Relation = { id: string; type: string } | any

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

export interface ILatestUpdates {
  tags: Tag[]
  status: string
  altTitle: AltTitle
  coverUrl: string
  createdAt: string
  id: string
  title: string
  availableTranslatedLanguages: string[]
  description: string
  authorName: string
  chapter: {
    id: string
    title: string
    chapter: string | null
    publishAt: string
    scanlationName: string
  }
}

export interface DirectoryItem {
  s: string
  i: string
  o: string
  ss: string
  ps: string
  t: string
  v: string
  vm: string
  y: string
  a: string[]
  al: string[]
  l: string
  lt: number
  g: string[]
  h: boolean
}
