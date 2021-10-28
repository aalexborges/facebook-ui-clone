import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  background-color: ${({ theme }) => theme.bodyBackground};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
input,
button,
textarea {
  font: 400 1.6rem/1.25 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.primaryText};
}
`

export default GlobalStyle
