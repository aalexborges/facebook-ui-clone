import { AsideMenuButton } from '../AsideMenuButton'

// Assets
import BookmarkIcon from '../../assets/asideMenu/bookmarkIcon.png'
import ClockIcon from '../../assets/asideMenu/clockIcon.png'
import EventsIcon from '../../assets/asideMenu/eventsIcon.png'
import FlagIcon from '../../assets/asideMenu/flagIcon.png'
import FriendsIcon from '../../assets/asideMenu/friendsIcon.png'
import GroupsIcon from '../../assets/asideMenu/groupsIcon.png'
import JobIcon from '../../assets/asideMenu/jobIcon.png'
import MarketplaceIcon from '../../assets/asideMenu/marketplaceIcon.png'
import WatchIcon from '../../assets/asideMenu/watchIcon.png'

// Utils
import { user } from '../../utils/user'

import { Container } from './styles'

export function AsideMenuItems() {
  return (
    <Container>
      <AsideMenuButton label={user.name} imageUrl={user.avatarUrl} />

      <AsideMenuButton label="Amigos" imageUrl={FriendsIcon} />
      <AsideMenuButton label="Grupos" imageUrl={GroupsIcon} />
      <AsideMenuButton label="Empregos" imageUrl={JobIcon} />
      <AsideMenuButton label="Marketplace" imageUrl={MarketplaceIcon} />
      <AsideMenuButton label="Watch" imageUrl={WatchIcon} />
      <AsideMenuButton label="Lembranças" imageUrl={ClockIcon} />
      <AsideMenuButton label="Salvos" imageUrl={BookmarkIcon} />
      <AsideMenuButton label="Páginas" imageUrl={FlagIcon} />
      <AsideMenuButton label="Eventos" imageUrl={EventsIcon} />
      <AsideMenuButton label="Ver mais" viewMore />
    </Container>
  )
}
