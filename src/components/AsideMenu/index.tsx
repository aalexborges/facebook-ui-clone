import { Scrollbars } from 'react-custom-scrollbars'

// Components
import { AsideMenuItems } from '../AsideMenuItems'
import { AsideMenuFooter } from '../AsideMenuFooter'

import { Container, GridContainer, HiddenTitle, Scroll } from './styles'

export function AsideMenu() {
  return (
    <Container data-testid="asideMenuContainer">
      <HiddenTitle>Menu do Facebook</HiddenTitle>

      <Scrollbars
        autoHide
        autoHideTimeout={400}
        autoHideDuration={200}
        renderThumbVertical={props => <Scroll {...props} />}
      >
        <GridContainer>
          <AsideMenuItems />

          <AsideMenuFooter />
        </GridContainer>
      </Scrollbars>
    </Container>
  )
}
