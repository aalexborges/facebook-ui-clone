import { useState } from 'react'

import numeral from 'numeral'

import { PostReactionsMap, Reaction } from '../PostReactionsMap'

import {
  BottomButton,
  BottomButtonIcon,
  BottomButtonText,
  BottomContainer,
  Container,
  NumberOfReactionsContainer,
  NumbersOfRightContainer,
  NumbersText,
  TopContainer,
} from './styles'

export type PostBottomProps = {
  typesOfReactions: Reaction[]
  comments: number
  reactions: number
  shares: number
  wasLiked?: boolean
}

export function PostBottom(props: PostBottomProps) {
  const [liked, setLiked] = useState(props.wasLiked)

  return (
    <Container data-testid="postBottomContainer">
      <TopContainer>
        <NumberOfReactionsContainer>
          <PostReactionsMap reactions={props.typesOfReactions} />

          <NumbersText>{numeral(props.reactions).format('0 a')}</NumbersText>
        </NumberOfReactionsContainer>

        <NumbersOfRightContainer>
          {props.comments > 0 && (
            <NumbersText>
              {numeral(props.comments).format('0 a')} comentários
            </NumbersText>
          )}

          {props.shares > 0 && (
            <NumbersText>
              {numeral(props.shares).format('0 a')} compartilhamentos
            </NumbersText>
          )}
        </NumbersOfRightContainer>
      </TopContainer>

      <BottomContainer>
        <BottomButton
          liked={liked}
          data-testid="PBLikeButton"
          onClick={() => setLiked(!liked)}
        >
          <BottomButtonIcon type={liked ? 'liked' : 'like'} />
          <BottomButtonText>Curtir</BottomButtonText>
        </BottomButton>

        <BottomButton>
          <BottomButtonIcon type="comment" />
          <BottomButtonText>Comentar</BottomButtonText>
        </BottomButton>

        <BottomButton>
          <BottomButtonIcon type="share" />
          <BottomButtonText>Compartilhar</BottomButtonText>
        </BottomButton>
      </BottomContainer>
    </Container>
  )
}
