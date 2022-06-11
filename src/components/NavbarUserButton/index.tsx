import { ButtonHTMLAttributes } from 'react'

import type { User } from '../../data/user'

import { Container, Text, UserImage } from './styles'

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  user: User
}

export function NavbarUserButton({ user, ...props }: Props) {
  return (
    <Container type="button" {...props}>
      <UserImage src={user.avatarUrl} alt={user.name} />

      <Text>{user.name.trim().split(' ')[0]}</Text>
    </Container>
  )
}
