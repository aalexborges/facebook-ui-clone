import { useState } from 'react'
import { RiAddFill } from 'react-icons/ri'
import { Scrollbars } from 'react-custom-scrollbars'

// Components
import { AsideBirthdayCard } from '../AsideBirthdayCard'
import { AsideContactButton } from '../AsideContactButton'
import { AsideContactsSection } from '../AsideContactsSection'
import { AsideSectionTitle } from '../AsideSectionTitle'
import { AsideSeparator } from '../AsideSeparator'

import { Container, Content, NewMessage, Scroll, Section } from './styles'

export function AsideRight() {
  const [showBirthdayCard, setShowBirthdayCard] = useState(true)

  return (
    <Container data-testid="asideRightContainer">
      <Scrollbars
        autoHide
        autoHideTimeout={400}
        autoHideDuration={200}
        renderThumbVertical={props => <Scroll {...props} />}
      >
        <Content>
          {showBirthdayCard && (
            <>
              <AsideBirthdayCard
                data-testid="birthdayCard"
                names={['Anderson Borges', 'Gabriela Barbosa']}
                onClose={() => setShowBirthdayCard(false)}
              />

              <AsideSeparator />
            </>
          )}

          <Section>
            <AsideContactsSection />
          </Section>

          <AsideSeparator />

          <Section>
            <AsideSectionTitle title="Conversas em grupo" />

            <AsideContactButton
              title="Criar novo grupo"
              icon={<RiAddFill size={22} />}
            />
          </Section>
        </Content>
      </Scrollbars>

      <NewMessage></NewMessage>
    </Container>
  )
}
