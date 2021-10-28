import styled from 'styled-components'

export const Container = styled.footer`
  padding: 16px 8px;

  font: 400 1.3rem/1.2 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.secondaryText};
  text-align: center;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const Text = styled.span`
  font: inherit;
  color: inherit;

  display: inline-flex;
  align-items: center;

  & + span {
    margin-top: 2.5px;
  }
`

export const Link = styled.a`
  font: inherit;
  color: inherit;
  text-decoration: none;

  & + a {
    margin-left: 4px;
  }

  &:first-of-type {
    margin-left: 4px;
  }
`
