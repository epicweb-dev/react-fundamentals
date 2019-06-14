import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Usage from '../exercises-final/08'
// import Usage from '../exercises/08'

beforeAll(() => {
  jest.spyOn(console, 'info').mockImplementation(() => {})
})

beforeEach(() => {
  console.info.mockClear()
})

test('calls the onSubmitUsername handler when the submit is fired', () => {
  const {getByLabelText, getByText} = render(<Usage />)
  const input = getByLabelText(/username/i)
  const submit = getByText(/submit/i)

  let value = 'A'
  fireEvent.change(input, {target: {value}})
  expect(input.value).toBe('a')
  fireEvent.click(submit)

  expect(console.info).toHaveBeenCalledWith('username', input.value)
  expect(console.info).toHaveBeenCalledTimes(1)
})
