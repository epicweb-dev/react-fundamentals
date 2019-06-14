import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Usage from '../exercises-final/07'
// import Usage from '../exercises/07'

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
  expect(submit).toBeDisabled() // upper-case
  expect(getByText(/lower case/i)).toBeInTheDocument()

  value = 'a'
  fireEvent.change(input, {target: {value}})
  fireEvent.click(submit)

  expect(console.info).toHaveBeenCalledWith('username', input.value)
  expect(console.info).toHaveBeenCalledTimes(1)
})
