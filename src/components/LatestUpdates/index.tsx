import Image from 'next/image'
import Link from 'next/link'
import { BiGroup } from 'react-icons/bi'
import { ILatestUpdates } from '../../types/types'
import { distanceToNow } from '../../utils/formatterDate'
import { LatestContainer } from './styled'

export function LatestUpdates({ mangas }: { mangas: ILatestUpdates[] }) {
  return (
    <LatestContainer>
      {mangas.map((manga) => {
        return (
          <Link
            href={`/manga/${manga.id}`}
            key={manga.chapter.id}
            className="chapter"
          >
            <Image src={manga.coverUrl} width={70} height={100} alt="" />
            <div className="info">
              <div className="title">
                <strong>{manga.title && Object.values(manga.title)}</strong>
                <span>
                  ch. {manga.chapter.chapter || '0'} - {manga.chapter.title}{' '}
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
    </LatestContainer>
  )
}
