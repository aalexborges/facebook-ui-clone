import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 1px;

  margin: 16px 0;
  padding: 0 8px;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.divider};
`
