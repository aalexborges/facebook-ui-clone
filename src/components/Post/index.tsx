import { memo } from 'react'

// Components
import { PostAuthor } from '../PostAuthor'
import { PostBottom } from '../PostBottom'

// Utils
import { PostType } from '../../utils/posts'

import { Container, ImageContainer, Text, TextContainer } from './styles'

export const Post = memo(function Post({ text, image, ...props }: PostType) {
  return (
    <Container>
      <PostAuthor {...props} />

      {text && (
        <TextContainer>
          <Text>{text}</Text>
        </TextContainer>
      )}

      {image && (
        <ImageContainer backgroundColor={image.backgroundColor}>
          <img src={image.uri} />
        </ImageContainer>
      )}

      <PostBottom {...props} />
    </Container>
  )
})
