import { ReactComponent as Logo } from '../../assets/logo.svg'

import { Container } from './styles'

export function Lock() {
  return (
    <Container>
      <Logo />
      <h1>Facebook - UI Clone</h1>

      <h4>Este UI clone não é totalmente responsivo.</h4>
      <p>
        Para utiliza-lo, acesse de um dispositivo com uma resolução maior que
        <b> 1271px</b>.
      </p>
    </Container>
  )
}
