import pageScreenImg from '../assets/pageScreenCapture.png'

import type { PostAuthorProps } from '../components/PostAuthor'
import type { PostBottomProps } from '../components/PostBottom'

import { user } from './user'
import { Contact, contacts } from './contacts'

export type PostType = PostAuthorProps &
  PostBottomProps & {
    text?: string
    image?: { uri: string; backgroundColor?: string }
  }

export const posts: PostType[] = [
  {
    user: user,
    text: 'Essa é um copia da interface do Facebook, feito com React.js. 🚀 \nDesign retirado em 23/10/2021.',
    visibleTo: 'public',
    createdAt: 1635018589459,
    typesOfReactions: ['like', 'heart', 'uau', 'haHa'],

    reactions: 25000,
    comments: 1500,
    shares: 8000,
  },
  {
    user: user,
    text: 'Print de como tá ficando minha copia da interface do Facebook',
    image: { uri: pageScreenImg },

    visibleTo: 'public',
    createdAt: 1635012749795,
    typesOfReactions: ['like', 'uau'],

    reactions: 1500,
    comments: 786,
    shares: 0,
  },
  {
    user: <Contact>contacts.find(({ name }) => name === 'Laura Martins'),
    update: {
      profilePicture: true,
    },
    text: '😊🥰',
    image: {
      uri:
        contacts.find(({ name }) => name === 'Laura Martins')?.avatarUrl || '',
      backgroundColor: '#126b90',
    },

    visibleTo: 'public',
    createdAt: 1634732724154,
    typesOfReactions: ['heart', 'like', 'uau'],

    reactions: 5218,
    comments: 832,
    shares: 0,
  },
  {
    user: <Contact>contacts.find(({ name }) => name === 'Estevan Melo'),
    text: 'Viva a natureza! 😊🌲🍃🦊',
    image: {
      uri: 'https://unsplash.com/photos/Yui5vfKHuzs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dHJhdmVsfHwwfHx8fDE2MzQ5Nzc5MTE&force=true&w=1920',
      backgroundColor: '#d6dbd8',
    },

    visibleTo: 'public',
    createdAt: 1633371880787,
    typesOfReactions: ['like', 'uau', 'heart'],

    reactions: 536,
    comments: 102,
    shares: 226,
  },
]
