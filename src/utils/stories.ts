import type { FeedStoryItemProps } from '../components/FeedStoryItem'

import { contacts } from './contacts'

export const stories: FeedStoryItemProps['data'][] = [
  {
    user: contacts[0],
    previewImageUrl:
      'https://unsplash.com/photos/pVeq8qcbBfk/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2MzU0Mjc4NDQ&force=true&w=640',
  },
  {
    user: contacts[1],
    previewImageUrl:
      'https://unsplash.com/photos/Ky_efuDUNLk/download?ixid=MnwxMjA3fDB8MXxhbGx8MTd8fHx8fHwyfHwxNjM1NDI3ODQ0&force=true&w=640',
  },
  {
    user: contacts[3],
    previewImageUrl:
      'https://unsplash.com/photos/nZ3wRaM86ZI/download?ixid=MnwxMjA3fDB8MXxhbGx8NTV8fHx8fHwyfHwxNjM1NDI3ODQz&force=true&w=640',
  },
  {
    user: contacts[13],
    previewImageUrl:
      'https://unsplash.com/photos/8ly6dvEAwy8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM1NDI4OTg3&force=true&w=640',
  },
]
