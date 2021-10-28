import styled from 'styled-components'

export const Container = styled.div`
  z-index: 10;

  width: 100%;
  height: 56px;

  top: 0;
  left: 0;
  position: fixed;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.navbarBackground};
`

export const LeftContainer = styled.div`
  z-index: 1;
  padding: 0 16px;

  display: flex;
  align-items: center;
  flex-direction: row;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 110px;
  position: absolute;

  display: flex;
  align-items: center;
  flex-direction: row;
`

export const RightContainer = styled.div`
  z-index: 0;
  padding: 0 16px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-end;
`
