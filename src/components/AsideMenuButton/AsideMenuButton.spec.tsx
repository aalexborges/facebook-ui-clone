import { render } from '@testing-library/react'

import { AsideMenuButton } from '.'

test('AsideMenuButton should render', () => {
  const { getByAltText, getByText, rerender } = render(
    <AsideMenuButton label="Test" imageUrl="test" />
  )

  expect(getByAltText('Test')).toBeTruthy()
  expect(getByAltText('Test')).toBeInTheDocument()
  expect(getByAltText('Test')).toBeInstanceOf(HTMLImageElement)

  rerender(<AsideMenuButton label="Test" icon={<span>span</span>} />)

  expect(getByText('span')).toBeTruthy()
  expect(getByText('span')).toBeInTheDocument()
  expect(getByText('span')).toBeInstanceOf(HTMLSpanElement)
})
