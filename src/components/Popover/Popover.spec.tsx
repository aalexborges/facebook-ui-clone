import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { Popover } from '.'

test('Popover shoulder render', async () => {
  const { getByRole, getByText, getByTestId, rerender } = render(
    <>
      <div data-testid="container" aria-label="Test"></div>
      <Popover />
    </>
  )

  expect(getByTestId('container')).toBeTruthy()
  expect(getByTestId('container')).toBeInTheDocument()
  expect(getByTestId('container')).toBeInstanceOf(HTMLDivElement)

  expect(getByRole('group')).toBeTruthy()
  expect(getByRole('group')).toBeInTheDocument()
  expect(getByRole('group')).toBeInstanceOf(HTMLDivElement)
  expect(getByRole('group')).toHaveStyle('opacity: 0;')

  expect(getByRole('group').children).toHaveLength(1)
  expect(getByRole('group').children[0]).toBeTruthy()
  expect(getByRole('group').children[0]).toBeInstanceOf(HTMLSpanElement)

  act(() => {
    fireEvent.mouseEnter(getByTestId('container'))
  })

  expect(getByRole('group')).toHaveStyle('opacity: 1;')

  expect(getByText('Test')).toBeTruthy()
  expect(getByText('Test')).toBeInTheDocument()
  expect(getByText('Test')).toBeInstanceOf(HTMLSpanElement)

  await act(async () => {
    fireEvent.mouseLeave(getByTestId('container'))
    await new Promise(resolve => setTimeout(resolve, 120))
  })

  expect(getByRole('group')).toHaveStyle('opacity: 0;')

  rerender(
    <>
      <div data-testid="container" aria-label="Test2" data-label-left></div>
      <Popover />
    </>
  )

  act(() => {
    fireEvent.mouseEnter(getByTestId('container'))
  })

  expect(getByText('Test2')).toBeTruthy()
  expect(getByText('Test2')).toBeInTheDocument()
  expect(getByText('Test2')).toBeInstanceOf(HTMLSpanElement)
  expect(getByRole('group')).toHaveStyle('opacity: 1;')
})
