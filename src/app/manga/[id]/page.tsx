import Image from 'next/image'
import { AiOutlineEye } from 'react-icons/ai'
import {
  BiBookmark,
  BiBookOpen,
  BiListPlus,
  BiStar,
  // eslint-disable-next-line prettier/prettier
  BiUpload
} from 'react-icons/bi'
import { DialogReport } from '../../../components/Dialogs/DialogReport'
import { MangaTabs } from '../../../components/MangaTabs'
import { RateManga } from '../../../components/RateManga'
import { Tags } from '../../../components/Tags'
import { getChapters } from '../../../utils/getChapters'
import { getManga } from '../../../utils/getManga'
import { MangaContainer, Status } from './styles'

type Params = {
  id: string
}

type Props = {
  params: Params
}

export default async function Manga({ params }: Props) {
  const mangaPromise = getManga(params.id)
  const chaptersPromise = getChapters(params.id)

  const [manga, chapters] = await Promise.all([mangaPromise, chaptersPromise])

  console.log(chapters)

  return (
    <MangaContainer>
      <div className="bannerBackground">
        <div
          style={{
            backgroundImage: `url(${manga.coverUrl})`,
          }}
        >
          <span className="gradient" />
        </div>
      </div>

      <div className="mangaInfo">
        <div className="imageAndTitle">
          <Image
            src={manga.coverUrl}
            width={200}
            height={310}
            priority
            alt=""
          />
          <div className="authorAndTitle">
            <h1>{manga.title}</h1>
            <strong>
              <span>{Object.values(manga.altTitle)}</span>
              <span>{manga.authorName}</span>
            </strong>
          </div>
        </div>
        <div className="containerActions">
          <div className="actions">
            <div className="buttons">
              <button className="library">Add to library</button>
              <RateManga />
              <button>
                <BiListPlus size={28} title="Add to list" />
              </button>
              <button>
                <BiBookOpen size={28} title="Read" />
              </button>

              <DialogReport
                mangaId={manga.id}
                imageUrl={manga.coverUrl}
                title={manga.title}
              />

              <button>
                <BiUpload size={28} title="Upload" />
              </button>
            </div>
            <Tags tags={manga.tags} />
            <div className="statusContainer">
              <div className="publicationStatus">
                {manga.status === 'completed' && <Status statusColor="blue" />}
                {manga.status === 'ongoing' && <Status statusColor="green" />}
                {manga.status === 'hiatus' && <Status statusColor="yellow" />}
                {manga.status === 'cancelled' && <Status statusColor="red" />}
                <strong>
                  publication: {new Date(manga.createdAt).getFullYear()} ,
                  {manga.status}
                </strong>
              </div>
              <div className="statistics">
                <span className="stars">
                  <BiStar size={20} />
                  9.51
                </span>
                <span className="marks">
                  <BiBookmark size={20} />
                  98k
                </span>
                <span className="eye">
                  <AiOutlineEye size={20} />
                  N/A
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <p>{manga.description}</p>
        </div>
        <MangaTabs mangaId={manga.id} />
      </div>
    </MangaContainer>
  )
}
