import * as React from 'react'
import {render, screen, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../final/07'
// import App from '../exercise/07'

test('renders', () => {
  const {container} = render(<App />)
  const plus = screen.getByText(/add item/i)
  userEvent.click(plus)
  userEvent.click(plus)
  userEvent.click(plus)
  userEvent.click(plus)

  const orangeInput = screen.getByLabelText(/orange/i)
  const orangeContainer = screen.getByText(/orange/i).closest('li')
  const inOrange = within(orangeContainer)
  userEvent.type(orangeInput, 'sup dawg')
  userEvent.click(inOrange.getByText('remove'))

  const allLis = container.querySelectorAll('li')
  Array.from(allLis).forEach(li => {
    const label = li.querySelector('label')
    const input = li.querySelector('input')
    expect(label.textContent).toBe(input.value)
  })
})
