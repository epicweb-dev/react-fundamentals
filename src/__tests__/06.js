import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../final/06'
// import App from '../exercise/06'

beforeAll(() => {
  jest.spyOn(global, 'alert').mockImplementation(() => {})
})

beforeEach(() => {
  global.alert.mockClear()
})

test('calls the onSubmitUsername handler when the submit is fired', () => {
  render(<App />)
  const input = screen.getByLabelText(/username/i)
  const submit = screen.getByText(/submit/i)

  const username = 'Jenny'

  userEvent.type(input, username)
  userEvent.click(submit)

  expect(global.alert).toHaveBeenCalledWith(`You entered: ${username}`)
  expect(global.alert).toHaveBeenCalledTimes(1)
})
