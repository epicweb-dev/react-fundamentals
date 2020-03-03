import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import Usage from '../final/08'
// import Usage from '../exercise/08'

beforeAll(() => {
  jest.spyOn(console, 'info').mockImplementation(() => {})
})

beforeEach(() => {
  console.info.mockClear()
})

test('calls the onSubmitUsername handler when the submit is fired', () => {
  render(<Usage />)
  const input = screen.getByLabelText(/username/i)
  const submit = screen.getByText(/submit/i)

  let value = 'A'
  fireEvent.change(input, {target: {value}})
  expect(input.value).toBe('a')
  fireEvent.click(submit)

  expect(console.info).toHaveBeenCalledWith('username', input.value)
  expect(console.info).toHaveBeenCalledTimes(1)
})
