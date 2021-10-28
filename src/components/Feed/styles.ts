import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1185px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.div`
  width: 680px;
  max-width: 100%;

  display: flex;
  flex-direction: column;

  @media (max-width: 1480px) {
    max-width: 590px;
  }
`
