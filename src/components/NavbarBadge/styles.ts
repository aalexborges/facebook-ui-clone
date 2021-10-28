import styled from 'styled-components'

export const Container = styled.span<{ top?: number; right?: number }>`
  width: 19px;
  height: 19px;

  font: 400 1.3rem/1 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.white};

  top: ${({ top }) => top || -6}px;
  right: ${({ right }) => right || -6}px;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.notificationBadgeBackground};
`
