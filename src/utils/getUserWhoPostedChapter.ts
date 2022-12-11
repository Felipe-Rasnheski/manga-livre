import axios from 'axios'
import { MangaChapter } from '../types/types'

export async function getUserWhoPostedChapter(chapters: MangaChapter[]) {
  const whoPostedFirstChapter = chapters[0].relationships.find(
    (relation) => relation.type === 'user',
  )

  const chaptersPublishedByOtherUser = chapters.some(
    (chapter) =>
      chapter.relationships.find((relation) => relation.type === 'user')?.id !==
      whoPostedFirstChapter?.id,
  )

  if (chaptersPublishedByOtherUser) {
    const chaptersWithUserWhoPosted: MangaChapter[] = await Promise.all(
      chapters.map(async (chapter) => {
        const userWhoPosted = chapter.relationships.find(
          (relation) => relation.type === 'user',
        )

        const userResponse = await axios
          .get(`https://api.mangadex.org/user/${userWhoPosted?.id}`)
          .then((response) => response.data.data)

        return {
          ...chapter,
          whoPosted: {
            id: userResponse.id,
            name: userResponse.attributes.username,
          },
        }
      }),
    )

    return chaptersWithUserWhoPosted
  }
  const whoPostedFirstChapterResponse = await axios
    .get(`https://api.mangadex.org/user/${whoPostedFirstChapter?.id}`)
    .then((response) => response.data.data)

  const chaptersWithUserWhoPosted = chapters.map((chapter) => {
    return {
      ...chapter,
      whoPosted: {
        id: whoPostedFirstChapterResponse.id,
        name: whoPostedFirstChapterResponse.attributes.username,
      },
    }
  })

  return chaptersWithUserWhoPosted
}
