import axios, { AxiosResponse } from 'axios'
import MFA from 'mangadex-full-api'
import Image from 'next/image'
import { AiOutlineFlag } from 'react-icons/ai'
import { BiBookOpen, BiListPlus, BiStar, BiUpload } from 'react-icons/bi'
import { MangaContainer } from './styles'

type Params = {
  id: string
}

type Props = {
  params: Params
}

interface IManga {
  id: string
  attributes: {
    title: string
    tags: []
  }
  relationships: []
}

type data = { data: IManga[] }

export default async function Manga({ params }: Props) {
  const responseManga = await MFA.Manga.get(params.id, true)

  const responseCover = await MFA.Cover.get(responseManga.mainCover.id)

  const responseAuthor = await MFA.Author.get(responseManga.authors[0].id)

  const { data } = await axios.get<any, AxiosResponse<data, any>, any>(
    'https://api.mangadex.org/manga?limit=10&includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=cover_art&includes%5B%5D=author',
  )

  return (
    <MangaContainer>
      <div className="bannerBackground">
        <div
          style={{
            backgroundImage: `url(${responseCover.image512})`,
          }}
        >
          <span className="gradient" />
        </div>
      </div>
      <div>
        <Image src={responseCover.image256} width={200} height={310} alt="" />
        <div>
          <div>
            <span>
              <h1>{responseManga.title}</h1>
              {responseManga.localizedTitle.localString}
            </span>
            <span>{responseAuthor.name}</span>
          </div>
          <div>
            <div>
              <button>Add to library</button>
              <button>
                <BiStar />
              </button>
              <button>
                <BiListPlus />
              </button>
              <button>
                <BiBookOpen />
              </button>
              <button>
                <AiOutlineFlag />
              </button>
              <button>
                <BiUpload />
              </button>
            </div>
            <div>
              <span>{data.data[0].attributes.tags[0].attributes.name.en}</span>
            </div>
          </div>
        </div>
      </div>
    </MangaContainer>
  )
}
