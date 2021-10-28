import { render } from '@testing-library/react'

import { AsideBirthdayCard } from '.'

test('AsideBirthdayCard should render', () => {
  const {
    findByText,
    queryByText,
    getByAltText,
    getByRole,
    getByText,
    rerender,
  } = render(<AsideBirthdayCard names={['People 1']} />)

  expect(getByAltText('Gift')).toBeTruthy()
  expect(getByAltText('Gift')).toBeInTheDocument()

  expect(getByText('Aniversário')).toBeTruthy()
  expect(getByText('Aniversário')).toBeInTheDocument()

  expect(getByRole('button')).toBeTruthy()
  expect(getByRole('button')).toBeInTheDocument()

  expect(getByText('People 1')).toBeTruthy()
  expect(getByText('People 1')).toBeInTheDocument()

  expect(getByText('faz aniversário hoje.')).toBeTruthy()
  expect(getByText('faz aniversário hoje.')).toBeInTheDocument()
  expect(getByText('faz aniversário hoje.')).toBeInstanceOf(HTMLSpanElement)

  rerender(<AsideBirthdayCard names={['People 1', 'People 2']} />)

  expect(findByText('fazem aniversário hoje.')).resolves.toBeTruthy()
  expect(findByText('fazem aniversário hoje.')).resolves.toBeInTheDocument()
  expect(findByText('fazem aniversário hoje.')).resolves.toBeInstanceOf(
    HTMLSpanElement
  )

  rerender(<AsideBirthdayCard names={['People 1', 'People 2', 'People 3']} />)

  expect(getByText('Aniversários')).toBeTruthy()
  expect(getByText('Aniversários')).toBeInTheDocument()

  expect(getByText('People 1')).toBeTruthy()
  expect(getByText('People 2')).toBeTruthy()
  expect(queryByText('People 3')).toBeNull()
})
