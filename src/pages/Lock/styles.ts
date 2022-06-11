import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 16px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.bodyBackground};

  & > svg {
    width: 48px;
    height: 48px;
    margin-bottom: 8px;
  }

  & > h1 {
    margin-bottom: 32px;
    text-align: center;
  }

  & > h4 {
    text-align: center;
    margin-bottom: 8px;
  }

  & > p {
    text-align: center;
  }
`
