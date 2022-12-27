import Image from 'next/image'
import Link from 'next/link'
import { BiGroup } from 'react-icons/bi'
import { ILatestUpdates } from '../../types/types'
import { distanceToNow } from '../../utils/formatterDate'
import { LatestContainer } from './styled'

export function LatestUpdates({ mangas }: { mangas: ILatestUpdates[] }) {
  return (
    <LatestContainer>
      <h1>Latest Updates</h1>
      <div className="grid">
        {mangas.map((manga) => {
          return (
            <Link
              prefetch={false}
              href={`/manga/${manga.id}`}
              key={manga.chapter.id}
              className="chapter"
            >
              <Image src={manga.coverUrl} width={70} height={100} alt="" />
              <div className="info">
                <div className="title">
                  <strong>{manga.title && Object.values(manga.title)}</strong>
                  <span>
                    ch.{' '}
                    {manga.newChapters && manga.newChapters?.length <= 4
                      ? manga.newChapters
                      : `${manga.newChapters?.slice(0, 3)}...`}{' '}
                    - {manga.chapter.title}
                  </span>
                </div>
                <div className="scanAndDate">
                  <button className="scan">
                    <BiGroup size={18} />
                    <span>{manga.chapter.scanlationName}</span>
                  </button>
                  <span>{distanceToNow(manga.chapter.publishAt)}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </LatestContainer>
  )
}
