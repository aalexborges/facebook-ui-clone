import { memo, ReactNode } from 'react'

import { Button, ButtonsContainer, Container, Title } from './styles'

type Props = {
  title: string
  children?: ReactNode
}

export const AsideSectionTitleButton = memo(Button)

export function AsideSectionTitle({ title, children }: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      <ButtonsContainer>{children}</ButtonsContainer>
    </Container>
  )
}
