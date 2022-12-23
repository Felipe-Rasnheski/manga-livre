import axios from 'axios'
import { IMangaChapter } from '../types/types'
import { apiUrl } from './urls'

export async function getUserWhoPostedChapter(chapters: IMangaChapter[]) {
  const whoPostedFirstChapter = chapters[0].relationships.find(
    (relation) => relation.type === 'user',
  )

  const chaptersPublishedByOtherUser = chapters.some(
    (chapter) =>
      chapter.relationships.find((relation) => relation.type === 'user')?.id !==
      whoPostedFirstChapter?.id,
  )

  if (chaptersPublishedByOtherUser) {
    const chaptersWithUserWhoPosted: IMangaChapter[] = await Promise.all(
      chapters.map(async (chapter) => {
        const userWhoPosted = chapter.relationships.find(
          (relation) => relation.type === 'user',
        )

        if (!userWhoPosted) {
          return chapter
        }

        const userResponse = await axios
          .get(`${apiUrl}/user/${userWhoPosted?.id}`)
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
    .get(`${apiUrl}/user/${whoPostedFirstChapter?.id}`)
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
