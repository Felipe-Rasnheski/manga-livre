import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { IMangaBasic } from '../../../../types/types'
import { RecentlyAddedContainer } from './styles'

export function RecentlyAdded({ mangas }: { mangas: IMangaBasic[] }) {
  return (
    <RecentlyAddedContainer>
      <div className="header">
        <h1>Recently Added</h1>
        <Link href="/">
          <FaArrowRight size={22} />
        </Link>
      </div>

      <div className="mangas">
        {mangas.map((manga) => {
          return (
            <Link
              href={`/manga/${manga.id}`}
              prefetch={false}
              className="manga"
              key={manga.id}
            >
              <Image src={manga.coverUrl} width={128} height={180} alt="" />
              <span>{manga.title}</span>
            </Link>
          )
        })}
      </div>
    </RecentlyAddedContainer>
  )
}
