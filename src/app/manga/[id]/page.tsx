import axios from 'axios'
import Image from 'next/image'
import { BiBookOpen, BiListPlus, BiStar, BiUpload } from 'react-icons/bi'
import { DialogReport } from '../../../components/Dialogs/DialogReport'
import { MangaContainer } from './styles'

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

  const { title, altTitles, description, originalLanguage, tags } =
    data.attributes

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

  const coverUrl = `https://uploads.mangadex.org/covers/${data.id}/${coverData.attributes.fileName}`
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
            <h1>{title?.en}</h1>
            <strong>
              <span>{Object.values(altTitle)}</span>
              <span>{author.attributes.name}</span>
            </strong>
          </div>
        </div>
        <div className="containerActions">
          <div className="actions">
            <div className="buttons">
              <button>Add to library</button>
              <button>
                <BiStar size={28} title="Rate" />
              </button>
              <button>
                <BiListPlus size={28} title="Add to list" />
              </button>
              <button>
                <BiBookOpen size={28} title="Read" />
              </button>

              <DialogReport
                mangaId={data.id}
                imageUrl={coverUrl}
                title={title.en}
              />

              <button>
                <BiUpload size={28} title="Upload" />
              </button>
            </div>
            <div className="tags">
              {tags.map((tag: any) => {
                return (
                  <span key={tag.id}>{Object.values(tag.attributes.name)}</span>
                )
              })}
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias laboriosam reprehenderit quibusdam, animi ea delectus est
            vero. Ea enim quam ad maxime perspiciatis harum? Obcaecati eos
            maiores et ea. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Rem at cupiditate similique corporis eaque, impedit magnam
            voluptatibus totam incidunt repellat porro facilis explicabo
            distinctio debitis ex ratione provident repudiandae minima. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            officia, provident quo consequuntur dolorum animi debitis veniam
            inventore autem tenetur asperiores perferendis. Ipsum repudiandae
            assumenda eius, ad consequatur doloremque explicabo?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias laboriosam reprehenderit quibusdam, animi ea delectus est
            vero. Ea enim quam ad maxime perspiciatis harum? Obcaecati eos
            maiores et ea. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Rem at cupiditate similique corporis eaque, impedit magnam
            voluptatibus totam incidunt repellat porro facilis explicabo
            distinctio debitis ex ratione provident repudiandae minima. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            officia, provident quo consequuntur dolorum animi debitis veniam
            inventore autem tenetur asperiores perferendis. Ipsum repudiandae
            assumenda eius, ad consequatur doloremque explicabo?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias laboriosam reprehenderit quibusdam, animi ea delectus est
            vero. Ea enim quam ad maxime perspiciatis harum? Obcaecati eos
            maiores et ea. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Rem at cupiditate similique corporis eaque, impedit magnam
            voluptatibus totam incidunt repellat porro facilis explicabo
            distinctio debitis ex ratione provident repudiandae minima. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            officia, provident quo consequuntur dolorum animi debitis veniam
            inventore autem tenetur asperiores perferendis. Ipsum repudiandae
            assumenda eius, ad consequatur doloremque explicabo?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias laboriosam reprehenderit quibusdam, animi ea delectus est
            vero. Ea enim quam ad maxime perspiciatis harum? Obcaecati eos
            maiores et ea. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Rem at cupiditate similique corporis eaque, impedit magnam
            voluptatibus totam incidunt repellat porro facilis explicabo
            distinctio debitis ex ratione provident repudiandae minima. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            officia, provident quo consequuntur dolorum animi debitis veniam
            inventore autem tenetur asperiores perferendis. Ipsum repudiandae
            assumenda eius, ad consequatur doloremque explicabo?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias laboriosam reprehenderit quibusdam, animi ea delectus est
            vero. Ea enim quam ad maxime perspiciatis harum? Obcaecati eos
            maiores et ea. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Rem at cupiditate similique corporis eaque, impedit magnam
            voluptatibus totam incidunt repellat porro facilis explicabo
            distinctio debitis ex ratione provident repudiandae minima. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            officia, provident quo consequuntur dolorum animi debitis veniam
            inventore autem tenetur asperiores perferendis. Ipsum repudiandae
            assumenda eius, ad consequatur doloremque explicabo?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias laboriosam reprehenderit quibusdam, animi ea delectus est
            vero. Ea enim quam ad maxime perspiciatis harum? Obcaecati eos
            maiores et ea. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Rem at cupiditate similique corporis eaque, impedit magnam
            voluptatibus totam incidunt repellat porro facilis explicabo
            distinctio debitis ex ratione provident repudiandae minima. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            officia, provident quo consequuntur dolorum animi debitis veniam
            inventore autem tenetur asperiores perferendis. Ipsum repudiandae
            assumenda eius, ad consequatur doloremque explicabo?
          </div>
        </div>
      </div>
    </MangaContainer>
  )
}
