import { Container } from './styles'

type Props = {
  value: number
  top?: number
  right?: number
}

export function NavbarBadge({ value, ...props }: Props) {
  return <Container {...props}>{value}</Container>
}
