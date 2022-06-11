import { user } from '../../data/user'

import {
  ButtonsContainer,
  Container,
  FakeButton,
  FakeButtonIcon,
  FakeInput,
  FakeInputText,
  HiddenTitle,
  RowContainer,
  UserImage,
} from './styles'

export function FeedNewPost() {
  return (
    <Container>
      <RowContainer>
        <HiddenTitle>Criar uma publicação</HiddenTitle>

        <UserImage
          src={user.avatarUrl}
          aria-label={`Linha do tempo de ${user.name}`}
        />

        <FakeInput>
          <FakeInputText>
            No que você está pensando, {user.name.trim().split(' ')[0]}?
          </FakeInputText>
        </FakeInput>
      </RowContainer>

      <ButtonsContainer>
        <FakeButton>
          <FakeButtonIcon type="liveVideo" />
          Vídeo ao vivo
        </FakeButton>

        <FakeButton>
          <FakeButtonIcon type="photo" />
          Foto/vídeo
        </FakeButton>

        <FakeButton>
          <FakeButtonIcon type="feeling" />
          Sentimento/atividade
        </FakeButton>
      </ButtonsContainer>
    </Container>
  )
}
