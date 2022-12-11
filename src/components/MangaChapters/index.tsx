import Link from 'next/link'
import { AiOutlineEye } from 'react-icons/ai'
import { MangaChapter } from '../../types/types'
import { MangaChaptersContainer } from './styles'

export function MangaChapters({
  mangaChapters,
}: {
  mangaChapters: MangaChapter[]
}) {
  return (
    <MangaChaptersContainer>
      {mangaChapters.map((chapter) => {
        return (
          <div key={chapter.id}>
            <div>
              <AiOutlineEye size={18} />
              <Link href="/">
                Ch.{chapter.attributes.chapter} - {chapter.attributes.title}
              </Link>
              <span>{chapter.scanlation.name}</span>
            </div>
          </div>
        )
      })}
    </MangaChaptersContainer>
  )
}
