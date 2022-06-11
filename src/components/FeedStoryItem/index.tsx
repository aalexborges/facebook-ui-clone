import { memo } from 'react'

import { ReactComponent as PlusIcon } from '../../assets/storyPlusIcon.svg'

import type { User } from '../../data/user'

import {
  Container,
  Content,
  PreviewImage,
  TextContainer,
  Text,
  UserImage,
  PlusIconContainer,
  PlusIconContent,
} from './styles'

export type FeedStoryItemProps = {
  myStory?: boolean
  data: {
    user: User
    previewImageUrl?: string
  }
}

export const FeedStoryItem = memo(function FeedStoryItem({
  myStory,
  data,
}: FeedStoryItemProps) {
  return (
    <Container>
      <Content>
        <PreviewImage
          src={data.previewImageUrl || data.user.avatarUrl}
          alt={`Story de ${data.user.name}`}
        />
      </Content>

      {!myStory && (
        <UserImage
          loading="lazy"
          src={data.user.avatarUrl}
          alt={data.user.name}
        />
      )}

      <TextContainer myStory={myStory}>
        {myStory && (
          <PlusIconContainer>
            <PlusIconContent>
              <PlusIcon />
            </PlusIconContent>
          </PlusIconContainer>
        )}

        <Text myStory={myStory}>
          {myStory ? 'Criar Story' : data.user.name}
        </Text>
      </TextContainer>
    </Container>
  )
})
