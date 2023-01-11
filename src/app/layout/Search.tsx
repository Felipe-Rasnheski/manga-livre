'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../sass/css/layoutStyles.module.css'

import { useRef, useState } from 'react'
import { BiBookmark, BiMessage, BiSearch, BiStar } from 'react-icons/bi'
import { FaRegEye } from 'react-icons/fa'
import { IMangaBasic } from '../../types'
import { getSearch } from './utils/getSearch'

export function Search() {
  const [researchedMangas, setResearchedMangas] = useState<IMangaBasic[]>([])
  const doingSearch = useRef(false)

  async function firstSearch() {
    const mangas: IMangaBasic[] = await getSearch('')
    setResearchedMangas(mangas)
  }

  const handleSearch = async (query: string) => {
    doingSearch.current = true

    let searchData: IMangaBasic[] = await getSearch(query)

    const queryInput = document.getElementById(
      'searchInput',
    ) as HTMLInputElement

    if (query !== queryInput.value) {
      searchData = await getSearch(queryInput.value)
    }

    doingSearch.current = false

    setResearchedMangas(searchData)
  }

  return (
    <div className={styles.search}>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button onClick={firstSearch} className={styles.search__button}>
            <span>Search</span>
            <BiSearch size={28} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Close asChild>
            <Dialog.Overlay className={styles.search__overlay} />
          </Dialog.Close>
          <Dialog.Content className={styles.search__content}>
            <header>
              <button>
                <input
                  onChange={(e) => {
                    if (!doingSearch.current) {
                      handleSearch(e.currentTarget.value)
                    }
                  }}
                  id="searchInput"
                  autoFocus
                  type="text"
                  placeholder="Search"
                />
                <BiSearch size={28} />
              </button>
            </header>
            <div className={styles.search__content__mangas}>
              {researchedMangas.map((manga) => {
                return (
                  <div key={manga.id}>
                    <Dialog.Close asChild>
                      <Link
                        className={styles.search__manga}
                        href={`manga/${manga.id}`}
                      >
                        <Image
                          src={manga.coverUrl}
                          width={56}
                          height={80}
                          alt=""
                        />
                        <div className={styles.search__manga__info}>
                          <h2>{manga.title}</h2>
                          <div
                            className={styles.search__manga__info__favorites}
                          >
                            <span>
                              <BiStar size={16} />
                              {manga.rating && String(manga.rating).slice(0, 3)}
                            </span>
                            <span>
                              <BiBookmark size={16} />
                              {manga.follows &&
                                new Intl.NumberFormat('en', {
                                  maximumSignificantDigits: 3,
                                }).format(manga.follows)}
                            </span>
                            <span>
                              <FaRegEye size={16} />
                              N/A
                            </span>
                            <span>
                              <BiMessage size={16} />
                              N/A
                            </span>
                          </div>
                          <div className={styles.search__manga__status}>
                            {manga.status === 'completed' && (
                              <strong
                                className={
                                  styles.search__manga__status__colorBlue
                                }
                              />
                            )}
                            {manga.status === 'ongoing' && (
                              <strong
                                className={
                                  styles.search__manga__status__colorGreen
                                }
                              />
                            )}
                            {manga.status === 'hiatus' && (
                              <strong
                                className={
                                  styles.search__manga__status__colorYellow
                                }
                              />
                            )}
                            {manga.status === 'cancelled' && (
                              <strong
                                className={
                                  styles.search__manga__status__colorRed
                                }
                              />
                            )}
                            <span>{manga.status}</span>
                          </div>
                        </div>
                      </Link>
                    </Dialog.Close>
                  </div>
                )
              })}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
