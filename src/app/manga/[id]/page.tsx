import { randomUUID } from 'crypto'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineEye } from 'react-icons/ai'
import {
  BiBookmark,
  BiBookOpen,
  BiListPlus,
  BiStar,
  // eslint-disable-next-line prettier/prettier
  BiUpload
} from 'react-icons/bi'
import { codes } from '../../../mangadexLanguages'
import { IMangaChapter } from '../../../types/types'
import { getManga } from '../../../utils/getManga'
import { DialogReport } from './components/DialogReport'
import { MangaChapters } from './components/MangaChapters'
import { RateManga } from './components/RateManga'
import { Tags } from './components/Tags'
import { ChaptersContainer, MangaContainer, Status } from './styles'

type Params = {
  id: string
}

type Props = {
  params: Params
}

export default async function Manga({ params }: Props) {
  const manga = await getManga(params.id)
  // const chapters = await getChapters(params.id)
  // const allCoversPromise = getAllCovers(params.id)

  // const [manga, chapters, allCovers] = await Promise.all([
  //   mangaPromise,
  //   chaptersPromise,
  //   allCoversPromise,
  // ])

  const chapters: IMangaChapter[] = [
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
    {
      id: randomUUID(),
      type: 'chapter',
      attributes: {
        volume: '',
        chapter: '2',
        title: 'string testing',
        translatedLanguage: 'en',
        externalUrl: null,
        publishAt: `${new Date()}`,
        readableAt: `${new Date()}`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
        pages: 10,
        version: 1,
      },
      relationships: [
        { id: randomUUID(), type: '' },
        { id: randomUUID(), type: '' },
      ],
      scanlation: {
        id: randomUUID(),
        name: 'paradase is in the dark',
      },
      whoPosted: {
        id: randomUUID(),
        name: 'power',
      },
    },
  ]

  return (
    <MangaContainer>
      <div
        className="bannerBackground"
        data-width="shink"
        id="bannerBackground"
      >
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
              <span>{manga.altTitle && Object.values(manga.altTitle)}</span>
              <span>{manga.authorName}</span>
            </strong>
          </div>
        </div>
        <div className="background">
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
                  {manga.status === 'completed' && (
                    <Status statusColor="blue" />
                  )}
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
                    {manga.rating && String(manga.rating).slice(0, 3)}
                  </span>
                  <span className="marks">
                    <BiBookmark size={20} />
                    {manga.follows &&
                      new Intl.NumberFormat('en', {
                        maximumSignificantDigits: 3,
                      }).format(manga.follows)}
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
          <ChaptersContainer>
            <MangaChapters mangaChapters={chapters} />
            <div className="languageAndArt">
              <div className="language">
                <h2>Available languages</h2>
                <div className="links">
                  {manga.availableTranslatedLanguages.map(
                    (language: string) => {
                      const index = codes.findIndex(
                        (code) => Object.keys(code)[0] === language,
                      )
                      return (
                        <Link prefetch={false} href="/" key={randomUUID()}>
                          {codes[index] && Object.values(codes[index])}
                        </Link>
                      )
                    },
                  )}
                </div>
              </div>
              {/* <MangaArt allCovers={allCovers} mangaId={manga.id} /> */}
            </div>
          </ChaptersContainer>
        </div>
      </div>
    </MangaContainer>
  )
}
