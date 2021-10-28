import { ButtonHTMLAttributes, memo, ReactNode } from 'react'

import { Container, Title, UserImage, UserImageContainer } from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  user?: { avatarUrl: string; isOnline: boolean }
  title: string
  icon?: ReactNode
  isOnline?: boolean
}

export const AsideContactButton = memo(function AsideContactButton({
  user,
  icon,
  title,
  ...props
}: Props) {
  return (
    <Container type="button" {...props}>
      <UserImageContainer isOnline={user?.isOnline}>
        {user && !icon && <UserImage src={user.avatarUrl} alt={title} />}

        {icon && icon}
      </UserImageContainer>

      <Title>{title}</Title>
    </Container>
  )
})
