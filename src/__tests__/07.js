import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Usage from '../exercises-final/07'
// import Usage from '../exercises/07'

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

  let value = 'a'
  fireEvent.change(input, {target: {value}})
  expect(submit).toBeDisabled() // too short
  expect(getByText(/at least 3 characters/i)).toBeInTheDocument()

  value = 'abcd'
  fireEvent.change(input, {target: {value}})
  expect(submit).toBeDisabled() // missing s
  expect(getByText(/Value.*"s".*should/)).toBeInTheDocument()

  value = 'Samwise'
  fireEvent.change(input, {target: {value}})
  fireEvent.click(submit)

  expect(console.log).toHaveBeenCalledWith('username', input.value)
  expect(console.log).toHaveBeenCalledTimes(1)
})
