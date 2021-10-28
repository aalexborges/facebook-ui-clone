import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { AsideRight } from '.'

test('AsideRight should test', () => {
  const { getByTestId, queryByTestId } = render(<AsideRight />)

  expect(getByTestId('asideRightContainer')).toBeTruthy()
  expect(getByTestId('asideRightContainer')).toBeInTheDocument()
  expect(getByTestId('asideRightContainer')).toBeInstanceOf(HTMLElement)
  expect(getByTestId('asideRightContainer').tagName).toEqual('ASIDE')

  expect(getByTestId('birthdayCard')).toBeTruthy()
  expect(getByTestId('birthdayCardClose')).toBeTruthy()

  act(() => {
    fireEvent.click(getByTestId('birthdayCardClose'))
  })

  expect(queryByTestId('birthdayCard')).toBeNull()
  expect(queryByTestId('birthdayCardClose')).toBeNull()
})
