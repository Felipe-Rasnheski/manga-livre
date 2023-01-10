import Image from 'next/image'
import styles from '../../../sass/css/mangaStyles.module.css'

import { randomUUID } from 'crypto'
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
import { IMangaChapter } from '../../../types'
import { codes } from '../../../utils/mangadexLanguages'
import { MangaArt } from './components/Art'
import { MangaChapters } from './components/Chapters'
import { DialogReport } from './components/DialogReport'
import { RateManga } from './components/RateManga'
import { Tags } from './components/Tags'
import { getAllCovers } from './util/getAllCovers'
import { getManga } from './util/getManga'

type Params = {
  id: string
}

type Props = {
  params: Params
}

export default async function Manga({ params }: Props) {
  const manga = await getManga(params.id)
  // const chapters = await getChapters(params.id)
  const allCovers = await getAllCovers(params.id)

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
    <div className={styles.manga}>
      <div className={styles.manga__banner} data-width="shink" id="banner">
        <div
          style={{
            backgroundImage: `url(${manga.coverUrl})`,
          }}
          className={styles.manga__banner__image}
        >
          <span className={styles.manga__banner__gradient} />
        </div>
      </div>
      <div>
        <div className={styles.manga__content}>
          <Image
            src={manga.coverUrl}
            width={200}
            height={310}
            quality={100}
            priority
            alt=""
          />
          <div className={styles.manga__content__titleAndAuthor}>
            <h1>{manga.title}</h1>
            <strong>
              <span>{manga.altTitle && Object.values(manga.altTitle)}</span>
              <span>{manga.authorName}</span>
            </strong>
          </div>
        </div>
        <div className={styles.manga__background}>
          <div className={styles.manga__actions}>
            <div className={styles.manga__actions__buttons}>
              <button className={styles.manga__actions__buttons__library}>
                Add to library
              </button>
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
            <div className={styles.manga__status}>
              <div className={styles.manga__status__publication}>
                {manga.status === 'completed' && (
                  <span className={styles.manga__status__colorBlue} />
                )}
                {manga.status === 'ongoing' && (
                  <span className={styles.manga__status__colorGreen} />
                )}
                {manga.status === 'hiatus' && (
                  <span className={styles.manga__status__colorYellow} />
                )}
                {manga.status === 'cancelled' && (
                  <span className={styles.manga__status__colorRed} />
                )}
                <strong>
                  publication: {new Date(manga.createdAt).getFullYear()} ,
                  {manga.status}
                </strong>
              </div>
              <div className={styles.manga__status__statistics}>
                <span className={styles.manga__status__stars}>
                  <BiStar size={20} />
                  {manga.rating && String(manga.rating).slice(0, 3)}
                </span>
                <span className={styles.manga__status__marks}>
                  <BiBookmark size={20} />
                  {manga.follows &&
                    new Intl.NumberFormat('en', {
                      maximumSignificantDigits: 3,
                    }).format(manga.follows)}
                </span>
                <span className={styles.manga__status__eye}>
                  <AiOutlineEye size={20} />
                  N/A
                </span>
              </div>
            </div>
          </div>
          <div className={styles.manga__description}>
            <p>{manga.description}</p>
          </div>
          <div className={styles.manga__section}>
            <MangaChapters mangaChapters={chapters} />
            <div className={styles.manga__section__languageAndArt}>
              <div className={styles.manga__section__language}>
                <h2>Available languages</h2>
                <div className={styles.manga__section__links}>
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
              <MangaArt allCovers={allCovers} mangaId={manga.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
