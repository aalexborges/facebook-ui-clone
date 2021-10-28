import 'moment/locale/pt-br'
import 'numeral/locales/pt-br'

import React from 'react'
import ReactDOM from 'react-dom'

import moment from 'moment'
import numeral from 'numeral'

import { ThemeProvider } from 'styled-components'

import { Home } from './pages/Home'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

moment.locale('pt-br')
numeral.locale('pt-br')

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
