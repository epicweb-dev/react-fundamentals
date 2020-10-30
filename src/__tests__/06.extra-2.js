import * as React from 'react'
import {alfredTip} from '@kentcdodds/react-workshop-app/test-utils'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
  userEvent.type(input, value)
  expect(submit).toBeDisabled() // upper-case

  const output = screen.getByText(/lower case/i)
  expect(output).toBeInTheDocument()
  alfredTip(
    output.getAttribute('role') !== 'alert',
    'Add an attribute `role="alert"` to the div to help with screen reader users.',
  )
  userEvent.clear(input)
  value = 'a'
  userEvent.type(input, value)
  userEvent.click(submit)

  expect(global.alert).toHaveBeenCalledWith(`You entered: ${input.value}`)
  expect(global.alert).toHaveBeenCalledTimes(1)
})
