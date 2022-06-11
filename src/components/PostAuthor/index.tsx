import moment from 'moment'

// Assets
import { ReactComponent as MoreIcon } from '../../assets/postMoreIcon.svg'

// Utils
import type { User } from '../../data/user'
import capitalize from '../../utils/capitalize'

import {
  Container,
  DateInfo,
  MoreButton,
  UserButton,
  UserInfoContainer,
  UserName,
  VisibleTo,
} from './styles'

export type PostAuthorProps = {
  user: User
  update?: {
    profileBanner?: boolean
    profilePicture?: boolean
  }
  visibleTo: 'public' | 'friends' | 'friends of friends'
  createdAt: number | Date
}

export function PostAuthor(props: PostAuthorProps) {
  function formatData() {
    if (moment().diff(props.createdAt, 'day') > 0) {
      return moment(props.createdAt).format('LLL')
    } else return capitalize(moment(props.createdAt).fromNow(), true)
  }

  function visibleToLabel() {
    if (props.visibleTo === 'public') return 'Público'
    else if (props.visibleTo === 'friends') return 'Somente amigos'
    else if (props.visibleTo === 'friends of friends')
      return 'Amigos e amigos de amigos'
  }

  return (
    <Container>
      <UserButton isOnline={props.user.isOnline}>
        <img src={props.user.avatarUrl} alt={props.user.name} />
      </UserButton>

      <UserInfoContainer>
        <UserName>
          <strong>{props.user.name}</strong>

          <span>
            {props.update?.profilePicture
              ? 'atualizou a foto do perfil.'
              : props.update?.profileBanner && 'atualizou a foto de capa.'}
          </span>
        </UserName>

        <DateInfo>
          {formatData()} ·{' '}
          <VisibleTo type={props.visibleTo} aria-label={visibleToLabel()} />
        </DateInfo>
      </UserInfoContainer>

      <MoreButton>
        <MoreIcon />
      </MoreButton>
    </Container>
  )
}
