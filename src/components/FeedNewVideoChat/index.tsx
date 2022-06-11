import { ButtonHTMLAttributes, memo, useRef } from 'react'

// Assets
import { ReactComponent as ChevronLeftIcon } from '../../assets/chevronLeftIcon.svg'
import { ReactComponent as ChevronRightIcon } from '../../assets/chevronRightIcon.svg'

// Utils
import { contacts } from '../../data/contacts'

import {
  Container,
  Content,
  FakeUserButton,
  LeftButton,
  RightButton,
  VideoButton,
  VideoButtonIcon,
} from './styles'

type UserButtonProps = ButtonHTMLAttributes<HTMLDivElement> & {
  imageURL: string
}

const UserButton = memo(function UserButton(props: UserButtonProps) {
  return (
    <FakeUserButton {...props}>
      <img src={props.imageURL} />
    </FakeUserButton>
  )
})

export const FeedNewVideoChat = memo(function FeedNewVideoChat() {
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const leftButtonRef = useRef<HTMLDivElement>(null)
  const rightButtonRef = useRef<HTMLDivElement>(null)

  let movedRight = 0
  const onMoveContent = (direction: 'left' | 'right') => {
    if (!contentRef.current || !containerRef.current) return
    const { clientWidth: contentWidth, style } = contentRef.current
    const { clientWidth: containerWidth } = containerRef.current

    movedRight = direction === 'left' ? movedRight - 1 : movedRight + 1

    let newPosition = movedRight * 250

    if (direction === 'right') {
      newPosition =
        newPosition > containerWidth - contentWidth
          ? contentWidth - containerWidth + 64
          : newPosition
    } else {
      newPosition = newPosition <= 0 ? 0 : newPosition
      movedRight = newPosition <= 0 ? 0 : movedRight
    }

    // Content style
    style.transform = `translateX(${
      direction === 'right' ? '-' : ''
    }${newPosition}px)`

    return { newPosition }
  }

  const onMoveContentLeft = () => {
    if (
      !contentRef.current ||
      !containerRef.current ||
      !leftButtonRef.current ||
      !rightButtonRef.current
    ) {
      return
    }

    const moved = onMoveContent('left')

    if (moved) {
      leftButtonRef.current.style.display =
        moved.newPosition === 0 ? 'none' : 'flex'
    }

    rightButtonRef.current.style.display = 'flex'
  }

  const onMoveContentRight = () => {
    if (
      !contentRef.current ||
      !containerRef.current ||
      !leftButtonRef.current ||
      !rightButtonRef.current
    ) {
      return
    }

    const moved = onMoveContent('right')

    if (
      moved &&
      moved.newPosition >=
        contentRef.current.clientWidth - containerRef.current.clientWidth
    ) {
      rightButtonRef.current.style.display = 'none'
    }

    leftButtonRef.current.style.display = 'flex'
  }

  return (
    <Container ref={containerRef} data-testid="feedNewVideoChatContainer">
      <LeftButton ref={leftButtonRef} onClick={onMoveContentLeft}>
        <ChevronLeftIcon />
      </LeftButton>

      <Content ref={contentRef}>
        <VideoButton>
          <VideoButtonIcon />
          Criar sala
        </VideoButton>

        {contacts.map(
          ({ avatarUrl, isOnline, name }, index) =>
            isOnline && (
              <UserButton key={index} imageURL={avatarUrl} aria-label={name} />
            )
        )}
      </Content>

      <RightButton ref={rightButtonRef} onClick={onMoveContentRight}>
        <ChevronRightIcon />
      </RightButton>
    </Container>
  )
})
