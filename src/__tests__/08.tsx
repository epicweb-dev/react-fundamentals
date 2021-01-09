import * as React from 'react'
import {render, screen, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {alfredTip} from '@kentcdodds/react-workshop-app/test-utils'
import {App} from '../final/08'
// import {App} from '../exercise/08'

let error = jest.spyOn(console, 'error')
beforeAll(() => {
  error.mockImplementation(() => {})
})

beforeEach(() => {
  error.mockClear()
})

test('renders', () => {
  const {container} = render(<App />)
  const plus = screen.getByText(/add item/i)

  // DO NOT DO THIS IN NORMAL TESTS!
  const isUsingKey = !error.mock.calls.length
  if (!isUsingKey) return

  userEvent.click(plus)
  userEvent.click(plus)
  userEvent.click(plus)
  userEvent.click(plus)

  const orangeInput = screen.getByLabelText(/orange/i)
  const orangeContainer = screen.getByText(/orange/i).closest('li')
  if (!orangeContainer) {
    alfredTip(true, `🚨  Can't find the li for "orange"`)
    return
  }

  const inOrange = within(orangeContainer)
  userEvent.type(orangeInput, 'sup dawg')
  userEvent.click(inOrange.getByText('remove'))

  const allLis = container.querySelectorAll('li')
  Array.from(allLis).forEach(li => {
    const label = li.querySelector('label')
    const input = li.querySelector('input')
    if (!label || !input) {
      throw new Error(
        '🚨  Please make sure to not remove the label and input in the li elements',
      )
    }
    expect(label.textContent).toBe(input.value)
  })
})
