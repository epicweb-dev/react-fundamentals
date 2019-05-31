import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Usage from '../exercises-final/06'
// import Usage from '../exercises/06'

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {})
})

beforeEach(() => {
  console.log.mockClear()
})

test('calls the onSubmitUsername handler when the submit is fired', () => {
  const {getByLabelText, getByText} = render(<Usage />)
  const input = getByLabelText(/username/i)
  const submit = getByText(/submit/i)

  fireEvent.change(input, {target: {value: 'Jenny'}})
  fireEvent.click(submit)

  expect(console.log).toHaveBeenCalledWith('username', input.value)
  expect(console.log).toHaveBeenCalledTimes(1)
})
