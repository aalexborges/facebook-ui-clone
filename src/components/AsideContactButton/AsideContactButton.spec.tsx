import { render } from '@testing-library/react'

import { AsideContactButton } from '.'

test('AsideContactButton should render', () => {
  const { getByText, getByAltText, queryByAltText, queryByRole, rerender } =
    render(<AsideContactButton title="Test" />)

  expect(getByText('Test')).toBeTruthy()
  expect(getByText('Test')).toBeInTheDocument()

  rerender(<AsideContactButton title="Test" icon={<span>Span</span>} />)

  expect(getByText('Span')).toBeTruthy()
  expect(getByText('Span')).toBeInTheDocument()
  expect(getByText('Span')).toBeInstanceOf(HTMLSpanElement)

  rerender(
    <AsideContactButton
      title="Test"
      user={{
        avatarUrl: 'https://github.com/alexborgesdev.png',
        isOnline: true,
      }}
    />
  )

  expect(queryByRole('img')).toBeTruthy()
  expect(getByAltText('Test')).toBeTruthy()
  expect(getByAltText('Test')).toBeInTheDocument()
  expect(getByAltText('Test')).toBeInstanceOf(HTMLImageElement)

  rerender(
    <AsideContactButton
      title="Test"
      user={{
        avatarUrl: 'https://github.com/alexborgesdev.png',
        isOnline: true,
      }}
      icon={<span>Span</span>}
    />
  )

  expect(queryByAltText('Test')).toBeNull()
  expect(queryByRole('img')).toBeNull()

  expect(getByText('Span')).toBeTruthy()
  expect(getByText('Span')).toBeInTheDocument()
  expect(getByText('Span')).toBeInstanceOf(HTMLSpanElement)
})
