import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import App from '../final/06.extra-2'
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

  let value = 'A'
  fireEvent.change(input, {target: {value}})
  expect(submit).toBeDisabled() // upper-case
  expect(screen.getByText(/lower case/i)).toBeInTheDocument()

  value = 'a'
  fireEvent.change(input, {target: {value}})
  fireEvent.click(submit)

  expect(global.alert).toHaveBeenCalledWith(`You entered: ${input.value}`)
  expect(global.alert).toHaveBeenCalledTimes(1)
})
