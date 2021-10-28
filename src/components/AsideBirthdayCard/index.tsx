import { Fragment, HTMLAttributes } from 'react'
import { FiX } from 'react-icons/fi'

// Assets
import birthdayIcon from '../../assets/birthdayIcon.png'

import {
  CloseButton,
  Container,
  Content,
  Icon,
  Text,
  Title,
  TitleContainer,
} from './styles'

type Props = HTMLAttributes<HTMLDivElement> & {
  names: string[]
  onClose?: () => void
}

export function AsideBirthdayCard({ names, onClose, ...props }: Props) {
  return (
    <Container {...props}>
      <TitleContainer>
        <Icon src={birthdayIcon} alt="Gift" />
        <Title>{names.length > 1 ? 'Aniversários' : 'Aniversário'}</Title>

        <CloseButton
          data-testid="birthdayCardClose"
          type="button"
          onClick={onClose}
        >
          <FiX size={18} />
        </CloseButton>
      </TitleContainer>

      <Content>
        <Text>
          {names.map((name, index, array) => (
            <Fragment key={index}>
              {index < 2 && <strong>{name}</strong>}
              {array.length > 2 && index < array.length - 2 && ', '}
              {array.length === 2 && index === 0 && ' e '}
            </Fragment>
          ))}
          {names.length > 2 && ' e outros fazem aniversário hoje.'}
          {names.length === 2 && ' fazem aniversário hoje.'}
          {names.length === 1 && ' faz aniversário hoje.'}
        </Text>
      </Content>
    </Container>
  )
}
