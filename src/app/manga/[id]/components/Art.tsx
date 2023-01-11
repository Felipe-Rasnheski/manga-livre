'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi'
import styles from '../../../../sass/css/mangaStyles.module.css'

import { ICoverArt } from '../../../../types'

export function MangaArt({
  allCovers,
  mangaId,
}: {
  allCovers: ICoverArt[]
  mangaId: string
}) {
  const [artToShow, setArtToShow] = useState<ICoverArt>(allCovers[0])

  const artIndex = useRef(0)

  function previous() {
    if (artIndex.current === 0) {
      artIndex.current = allCovers.length - 1
      setArtToShow(allCovers[artIndex.current])
      return
    }

    artIndex.current--
    setArtToShow(allCovers[artIndex.current])
  }

  const next = useCallback(() => {
    if (artIndex.current + 1 > allCovers.length - 1) {
      artIndex.current = 0
      setArtToShow(allCovers[artIndex.current])
      return
    }

    artIndex.current++
    setArtToShow(allCovers[artIndex.current])
  }, [setArtToShow, allCovers])

  useEffect(() => {
    const intervalId = setInterval(() => next(), 7500)
    return () => clearInterval(intervalId)
  }, [next])

  return (
    <div className={styles.art} id="art">
      <h2>Art</h2>
      <div className={styles.art__content}>
        <button onClick={previous}>
          <BiCaretLeft size={22} />
        </button>
        <ul className={styles.art__slide}>
          <li key={artToShow.id}>
            <div className={styles.art__slide__background}></div>
            <Image
              src={`https://uploads.mangadex.org/covers/${mangaId}/${artToShow.attributes.fileName}`}
              width={256}
              height={452}
              quality={100}
              alt=""
              className={styles.art__content__Image}
            />
            <footer>Volume {artToShow.attributes.volume}</footer>
          </li>
        </ul>
        <button onClick={next}>
          <BiCaretRight size={22} />
        </button>
      </div>
    </div>
  )
}
