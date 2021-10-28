import { AsideMenu } from '../../components/AsideMenu'
import { AsideRight } from '../../components/AsideRight'
import { Feed } from '../../components/Feed'
import { Navbar } from '../../components/Navbar'
import { Popover } from '../../components/Popover'

import { Container, Main } from './styles'

export function Home() {
  return (
    <Container>
      <Navbar />

      <Main>
        <AsideMenu />
        <Feed />
        <AsideRight />
      </Main>

      <Popover />
    </Container>
  )
}
