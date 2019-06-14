import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Usage from '../exercises-final/06'
// import Usage from '../exercises/06'

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

  const username = 'Jenny'

  fireEvent.change(input, {target: {value: username}})
  fireEvent.click(submit)

  expect(console.info).toHaveBeenCalledWith('username', username)
  expect(console.info).toHaveBeenCalledTimes(1)
})
