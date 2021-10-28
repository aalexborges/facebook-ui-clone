import { ButtonHTMLAttributes } from 'react'

import { NavbarBadge } from '../NavbarBadge'

import { Container } from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  badge?: number
  active?: boolean
  'aria-label'?: string
}

export function NavItem({ badge, children, ...props }: Props) {
  return (
    <Container type="button" {...props}>
      {children}

      {badge && <NavbarBadge top={6} right={40} value={badge} />}
    </Container>
  )
}
