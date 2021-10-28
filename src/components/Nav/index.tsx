// Assets
import { ReactComponent as FriendsIcon } from '../../assets/navbar/friendsIcon.svg'
import { ReactComponent as GroupIcon } from '../../assets/navbar/groupIcon.svg'
import { ReactComponent as HomeIcon } from '../../assets/navbar/homeIcon.svg'
import { ReactComponent as MarketplaceIcon } from '../../assets/navbar/marketplaceIcon.svg'
import { ReactComponent as WatchIcon } from '../../assets/navbar/watchIcon.svg'

// Components
import { NavItem } from '../NavItem'

import { Container } from './styles'

export function Nav() {
  return (
    <Container>
      <NavItem active aria-label="Página Inicial" data-label-fixed>
        <HomeIcon />
      </NavItem>

      <NavItem aria-label="Amigos" data-label-fixed badge={1}>
        <FriendsIcon />
      </NavItem>

      <NavItem aria-label="Watch" data-label-fixed badge={8}>
        <WatchIcon />
      </NavItem>

      <NavItem aria-label="Marketplace" data-label-fixed>
        <MarketplaceIcon />
      </NavItem>

      <NavItem aria-label="Grupos" data-label-fixed>
        <GroupIcon />
      </NavItem>
    </Container>
  )
}
