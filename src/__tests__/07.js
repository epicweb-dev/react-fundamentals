import React from 'react'
import {render, screen, fireEvent, within} from '@testing-library/react'
import App from '../final/07'
// import App from '../exercise/07'

test('renders', () => {
  const {container} = render(<App />)
  const plus = screen.getByText(/add item/i)
  fireEvent.click(plus)
  fireEvent.click(plus)
  fireEvent.click(plus)
  fireEvent.click(plus)

  const orangeInput = screen.getByLabelText(/orange/i)
  const orangeContainer = screen.getByText(/orange/i).closest('li')
  const inOrange = within(orangeContainer)
  fireEvent.change(orangeInput, {target: {value: 'sup dawg'}})
  fireEvent.click(inOrange.getByText('remove'))

  const allLis = container.querySelectorAll('li')
  Array.from(allLis).forEach(li => {
    const label = li.querySelector('label')
    const input = li.querySelector('input')
    expect(label.textContent).toBe(input.value)
  })
})
