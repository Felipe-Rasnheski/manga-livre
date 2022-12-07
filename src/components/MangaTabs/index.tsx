'use client'

import { useState } from 'react'
import { MangaArt } from '../MangaArt'
import { MangaFeed } from '../MangaFeed'
import { MangaRelated } from '../MangaRelated'
import { MangaTabsContainer } from './styles'

type MangaTabsProps = { mangaId: string }

export function MangaTabs({ mangaId }: MangaTabsProps) {
  const [tab, setTab] = useState('chapters')

  return (
    <MangaTabsContainer>
      <header>
        <button
          onClick={() => setTab('chapters')}
          className={`${tab === 'chapters' && 'active'}`}
        >
          Chapters
        </button>
        <button
          onClick={() => setTab('art')}
          className={`${tab === 'art' && 'active'}`}
        >
          Art
        </button>
        <button
          onClick={() => setTab('related')}
          className={`${tab === 'related' && 'active'}`}
        >
          Related
        </button>
      </header>
      {tab === 'chapters' && <MangaFeed mangaId={mangaId} />}
      {tab === 'art' && <MangaArt />}
      {tab === 'related' && <MangaRelated />}
    </MangaTabsContainer>
  )
}
