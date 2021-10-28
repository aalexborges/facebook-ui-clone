import { FaGithub, FaLinkedin, FaUnsplash } from 'react-icons/fa'

import { Container, Link, Text } from './styles'

export function AsideMenuFooter() {
  return (
    <Container>
      <Text>
        Created by Alex Borges Ramos -{' '}
        <Link
          href="https://github.com/AlexBorgesDev"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={16} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alexborgesramos/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={16} />
        </Link>
      </Text>

      <Text>
        Images by{' '}
        <Link href="https://unsplash.com/" target="_blank" rel="noreferrer">
          Unsplash
        </Link>
        <Link href="https://unsplash.com/" target="_blank" rel="noreferrer">
          <FaUnsplash size={16} />
        </Link>
      </Text>
    </Container>
  )
}
