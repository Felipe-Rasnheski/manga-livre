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
          <Link href="/" key={chapter.id} className="chapter">
            <div>
              <strong>
                <AiOutlineEye size={18} className="marginRight" />
                <Link href="/" className="linkTitle">
                  Ch.{chapter.attributes.chapter} - {chapter.attributes.title}
                </Link>
              </strong>

              <strong>
                <BiGroup size={18} />
                <button className="scanlation">
                  #{chapter.scanlation.name}
                </button>
              </strong>
            </div>
            <div>
              <strong>
                <BiTime size={18} className="marginRight" />
                {distanceToNow(chapter.attributes.publishAt)}
              </strong>
              <strong>
                <BiUser size={18} />
                <button className="scanlation">{chapter.whoPosted.name}</button>
              </strong>
            </div>
          </Link>
        )
      })}
    </MangaChaptersContainer>
  )
}
