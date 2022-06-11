import type { FeedStoryItemProps } from '../components/FeedStoryItem'

import forest from '../assets/stories/forest.jpg'
import mountains from '../assets/stories/mountains.jpg'
import person from '../assets/stories/person.jpg'
import sky from '../assets/stories/sky.jpg'

import { contacts } from './contacts'

export const stories: FeedStoryItemProps['data'][] = [
  {
    user: contacts[0],
    previewImageUrl: sky,
  },
  {
    user: contacts[1],
    previewImageUrl: mountains,
  },
  {
    user: contacts[3],
    previewImageUrl: forest,
  },
  {
    user: contacts[13],
    previewImageUrl: person,
  },
]
