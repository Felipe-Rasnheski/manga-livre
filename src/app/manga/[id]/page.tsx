import axios from 'axios'
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
import { RateManga } from '../../../components/RateManga'
import { Tags } from '../../../components/tags'
import { MangaContainer, Status } from './styles'

type Params = {
  id: string
}

type Props = {
  params: Params
}

export default async function Manga({ params }: Props) {
  // 'https://api.mangadex.org/manga?limit=10&includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=cover_art&includes%5B%5D=author',
  const response = await axios.get(
    `https://api.mangadex.org/manga/${params.id}`,
    {
      params: {
        includes: ['cover_art', 'author', 'artist', 'tag'],
      },
    },
  )
  const { data } = response.data

  const coverData = data.relationships.find(
    (relation: any) => relation.type === 'cover_art',
  )

  const {
    title,
    altTitles,
    description,
    originalLanguage,
    tags,
    status,
    createdAt,
  } = data.attributes

  const altTitle = altTitles
    .reverse()
    .find(
      (title: any) =>
        title.en ||
        title.ja ||
        Object.keys(title).toString() === originalLanguage,
    )

  const author = data.relationships.find(
    (relation: any) => relation.type === 'author',
  )

  const mangaTitle = title.en ? title.en : title[originalLanguage]
  const coverUrl = `https://uploads.mangadex.org/covers/${data.id}/${coverData.attributes.fileName}`
  const mangaDescription = description.en
    ? description.en
    : description[originalLanguage]

  return (
    <MangaContainer>
      <div className="bannerBackground">
        <div
          style={{
            backgroundImage: `url(${coverUrl})`,
          }}
        >
          <span className="gradient" />
        </div>
      </div>
      <div className="mangaInfo">
        <div className="imageAndTitle">
          <Image src={coverUrl} width={200} height={310} priority alt="" />
          <div className="authorAndTitle">
            <h1>{mangaTitle}</h1>
            <strong>
              <span>{Object.values(altTitle)}</span>
              <span>{author.attributes.name}</span>
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
                mangaId={data.id}
                imageUrl={coverUrl}
                title={mangaTitle}
              />

              <button>
                <BiUpload size={28} title="Upload" />
              </button>
            </div>
            <Tags tags={tags} />
            <div className="statusContainer">
              <div className="publicationStatus">
                {status === 'completed' && <Status statusColor="blue" />}
                {status === 'ongoing' && <Status statusColor="green" />}
                {status === 'hiatus' && <Status statusColor="yellow" />}
                {status === 'cancelled' && <Status statusColor="red" />}
                <strong>
                  publication: {new Date(createdAt).getFullYear()} ,{status}
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
        <div>
          <p>{mangaDescription}</p>
        </div>
      </div>
    </MangaContainer>
  )
}
