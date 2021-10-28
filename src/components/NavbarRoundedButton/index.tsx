import { ButtonHTMLAttributes } from 'react'

import { NavbarBadge } from '../NavbarBadge'

import { Container } from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  badge?: number
}

export function NavbarRoundedButton({ badge, children, ...props }: Props) {
  return (
    <Container type="button" {...props}>
      {badge && <NavbarBadge top={-6} right={-6} value={badge} />}

      {children}
    </Container>
  )
}
