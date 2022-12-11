import Link from 'next/link'
import { AiOutlineEye } from 'react-icons/ai'
import { BiGroup, BiTime, BiUser } from 'react-icons/bi'
import { MangaChapter } from '../../types/types'
import { distanceToNow } from '../../utils/formatterDate'
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
              <strong>
                <AiOutlineEye size={18} />
                <Link href="/">
                  Ch.{chapter.attributes.chapter} - {chapter.attributes.title}
                </Link>
              </strong>

              <span>
                <BiGroup size={18} /> {chapter.scanlation.name}
              </span>
            </div>
            <div>
              <span>
                <BiTime size={18} />
                {distanceToNow(chapter.attributes.publishAt)}
              </span>
              <span>
                <BiUser size={18} />
                {chapter.whoPosted.name}
              </span>
            </div>
          </div>
        )
      })}
    </MangaChaptersContainer>
  )
}
