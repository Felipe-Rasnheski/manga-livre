export interface IMangaBasic {
  id: string
  title: string
  coverUrl: string
  description: string
  status: string
  rating?: number
  follows?: number
}

export interface ITag {
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

export interface IManga extends IMangaBasic {
  tags: ITag[]
  title: string
  status: string
  altTitle: AltTitle
  createdAt: string
  authorName: string
  availableTranslatedLanguages: string[]
}

export type Relation = { id: string; type: string } | any

export interface IMangaChapter {
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

export interface ICoverArt {
  id: string
  attributes: {
    volume: string
    fileName: string
  }
  relationships: Relation[]
}

export interface ICustomList {
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
  tags: ITag[]
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
  newChapters?: string[]
}

export interface IDirectoryItem {
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
