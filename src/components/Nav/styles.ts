import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 680px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1480px) {
    max-width: 590px;
  }
`
