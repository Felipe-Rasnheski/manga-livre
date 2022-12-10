'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { MangaArt } from '../MangaArt'
import { MangaFeed } from '../MangaFeed'
import { MangaRelated } from '../MangaRelated'
import { MangaTabsContainer } from './styles'

type MangaTabsProps = { mangaId: string }

export function MangaTabs({ mangaId }: MangaTabsProps) {
  const searchParams = useSearchParams()

  const router = useRouter()
  const tab = searchParams.get('tab')

  return (
    <MangaTabsContainer>
      <header>
        <Link
          href={{ pathname: `/manga/${mangaId}`, query: { tab: 'chapters' } }}
          className={`${tab === 'chapters' || tab === null ? 'active' : ''}`}
        >
          Chapters
        </Link>
        <Link
          href={{ pathname: `/manga/${mangaId}`, query: { tab: 'art' } }}
          className={`${tab === 'art' ? 'active' : ''}`}
        >
          Art
        </Link>
        <Link
          href={{ pathname: `/manga/${mangaId}`, query: { tab: 'related' } }}
          className={`${tab === 'related' ? 'active' : ''}`}
        >
          Related
        </Link>
      </header>
      {tab === null && <MangaFeed mangaId={mangaId} />}
      {tab === 'chapters' && <MangaFeed mangaId={mangaId} />}
      {tab === 'art' && <MangaArt />}
      {tab === 'related' && <MangaRelated />}
    </MangaTabsContainer>
  )
}
