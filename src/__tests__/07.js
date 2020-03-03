import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import Usage from '../final/07'
// import Usage from '../exercise/07'

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
  expect(submit).toBeDisabled() // upper-case
  expect(screen.getByText(/lower case/i)).toBeInTheDocument()

  value = 'a'
  fireEvent.change(input, {target: {value}})
  fireEvent.click(submit)

  expect(console.info).toHaveBeenCalledWith('username', input.value)
  expect(console.info).toHaveBeenCalledTimes(1)
})
