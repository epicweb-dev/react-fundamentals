import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {App} from '../final/07'
// import {App} from '../exercise/07'

let alert = jest.spyOn(global, 'alert')
beforeAll(() => {
  alert.mockImplementation(() => {})
})

beforeEach(() => {
  alert.mockClear()
})

test('calls the onSubmitUsername handler when the submit is fired', () => {
  render(<App />)
  const input = screen.getByLabelText(/username/i) as HTMLInputElement
  const submit = screen.getByText(/submit/i)

  const username = 'jenny'

  userEvent.type(input, username)
  userEvent.click(submit)

  expect(global.alert).toHaveBeenCalledWith(`You entered: ${username}`)
  expect(global.alert).toHaveBeenCalledTimes(1)
})
