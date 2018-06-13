import 'jest-dom/extend-expect'
import React from 'react'
import {render, Simulate} from 'react-testing-library'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  const {getByLabelText, getByTestId} = render(<FavoriteNumber />)
  const input = getByLabelText('Favorite Number')
  input.value = 10
  Simulate.change(input, {target: input})
  expect(getByTestId('error-message')).toHaveTextContent(/number.*invalid/)
})
