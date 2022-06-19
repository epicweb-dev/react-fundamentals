import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../final/06'
// import App from '../exercise/06'

let windowAlertSpy: jest.SpyInstance<void, Parameters<typeof window['alert']>>
const global = window || globalThis

beforeAll(() => {
  windowAlertSpy = jest.spyOn(global, 'alert').mockImplementation(() => { })
})

beforeEach(() => {
  windowAlertSpy.mockClear()
})

test('calls the onSubmitUsername handler when the submit is fired', async () => {
  render(<App />)
  const input = screen.getByLabelText(/username/i)
  const submit = screen.getByText(/submit/i)

  const username = 'jenny'

  await userEvent.type(input, username)
  await userEvent.click(submit)

  expect(global.alert).toHaveBeenCalledWith(`You entered: ${username}`)
  expect(global.alert).toHaveBeenCalledTimes(1)
})
