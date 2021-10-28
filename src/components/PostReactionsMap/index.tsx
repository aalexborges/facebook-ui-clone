import HaHaIcon from '../../assets/postReactions/hahaIcon.svg'
import HeartIcon from '../../assets/postReactions/heartIcon.svg'
import LikeIcon from '../../assets/postReactions/likeIcon.svg'
import SadIcon from '../../assets/postReactions/sadIcon.svg'
import UauIcon from '../../assets/postReactions/uauIcon.svg'

import { Container } from './styles'

export type Reaction = 'like' | 'heart' | 'haHa' | 'uau' | 'sad' | 'grr'

type Props = {
  reactions: Reaction[]
  size?: number
}

export function PostReactionsMap({ reactions, size }: Props) {
  function getIcon(reaction: Reaction) {
    if (reaction === 'haHa') return <img src={HaHaIcon} alt="HaHa" />
    else if (reaction === 'heart') return <img src={HeartIcon} alt="Heart" />
    else if (reaction === 'like') return <img src={LikeIcon} alt="Like" />
    else if (reaction === 'sad') return <img src={SadIcon} alt="Sad" />
    else if (reaction === 'uau') return <img src={UauIcon} alt="Uau" />
    else return null
  }

  return (
    <>
      {reactions.map((reaction, index) => (
        <Container size={size} move={{ left: index > 0, index }} key={index}>
          {getIcon(reaction)}
        </Container>
      ))}
    </>
  )
}
