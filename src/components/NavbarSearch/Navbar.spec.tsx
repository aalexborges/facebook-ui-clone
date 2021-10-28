import { fireEvent, render } from '@testing-library/react'

import { NavbarSearch } from '.'

test('NavbarSearch should renders', () => {
  const { getByPlaceholderText } = render(<NavbarSearch />)

  expect(getByPlaceholderText('Pesquisar no Facebook')).toBeTruthy()
  expect(getByPlaceholderText('Pesquisar no Facebook')).toBeInTheDocument()
})

test('NavbarSearch change value', () => {
  const { getByDisplayValue, getByPlaceholderText } = render(<NavbarSearch />)

  expect(getByPlaceholderText('Pesquisar no Facebook')).toBeTruthy()
  expect(getByPlaceholderText('Pesquisar no Facebook')).toBeInTheDocument()

  fireEvent.change(getByPlaceholderText('Pesquisar no Facebook'), {
    target: { value: 'Teste' },
  })

  expect(getByDisplayValue('Teste')).toBeTruthy()
  expect(getByDisplayValue('Teste')).toBe(
    getByPlaceholderText('Pesquisar no Facebook')
  )
})
