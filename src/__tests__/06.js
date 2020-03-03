import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import Usage from '../final/06'
// import Usage from '../exercise/06'

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

  const username = 'Jenny'

  fireEvent.change(input, {target: {value: username}})
  fireEvent.click(submit)

  expect(console.info).toHaveBeenCalledWith('username', username)
  expect(console.info).toHaveBeenCalledTimes(1)
})
