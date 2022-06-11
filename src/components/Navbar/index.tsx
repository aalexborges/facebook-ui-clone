import { useEffect, useState } from 'react'

// Assets
import { ReactComponent as BellIcon } from '../../assets/navbar/bellIcon.svg'
import { ReactComponent as CaretDownIcon } from '../../assets/navbar/caretDownIcon.svg'
import { ReactComponent as FBMessengerIcon } from '../../assets/navbar/fbMessengerIcon.svg'
import { ReactComponent as GridIcon } from '../../assets/navbar/gridIcon.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'

// Components
import { Nav } from '../Nav'
import { NavbarSearch } from '../NavbarSearch'
import { NavbarUserButton } from '../NavbarUserButton'
import { NavbarRoundedButton } from '../NavbarRoundedButton'

// Utils
import { user } from '../../data/user'

import { Container, Content, LeftContainer, RightContainer } from './styles'

export function Navbar() {
  const [notifications] = useState(2)

  useEffect(() => {
    document.title = `(${notifications}) Facebook`

    return () => {
      document.title = 'Facebook'
    }
  }, [notifications])

  return (
    <Container data-testid="navbarContainer">
      <LeftContainer>
        <Logo style={{ cursor: 'pointer' }} />
        <NavbarSearch />
      </LeftContainer>

      <Content>
        <Nav />
      </Content>

      <RightContainer>
        <NavbarUserButton user={user} />

        <NavbarRoundedButton aria-label="Menu" data-label-fixed>
          <GridIcon width={20} height={20} />
        </NavbarRoundedButton>

        <NavbarRoundedButton badge={4} aria-label="Messenger" data-label-fixed>
          <FBMessengerIcon />
        </NavbarRoundedButton>

        <NavbarRoundedButton
          badge={notifications}
          aria-label="Notificações"
          data-label-fixed
        >
          <BellIcon />
        </NavbarRoundedButton>

        <NavbarRoundedButton aria-label="Conta" data-label-fixed>
          <CaretDownIcon width={20} height={20} />
        </NavbarRoundedButton>
      </RightContainer>
    </Container>
  )
}
