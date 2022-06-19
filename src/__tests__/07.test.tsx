import * as React from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../final/07'
// import App from '../exercise/07'

function assertIsNotNull<T>(value: T): asserts value is Exclude<T, null> {
  expect(value).not.toBeNull()
}

test('renders', async () => {
  const { container } = render(<App />)
  const plus = screen.getByText(/add item/i)
  await userEvent.click(plus)
  await userEvent.click(plus)
  await userEvent.click(plus)
  await userEvent.click(plus)

  const orangeInput = screen.getByLabelText(/orange/i)
  const orangeContainer = screen.getByText(/orange/i).closest('li')
  assertIsNotNull(orangeContainer)

  const inOrange = within(orangeContainer)
  await userEvent.type(orangeInput, 'sup dawg')
  await userEvent.click(inOrange.getByText('remove'))

  const allLis = container.querySelectorAll('li')
  Array.from(allLis).forEach(li => {
    const label = li.querySelector('label')
    const input = li.querySelector('input')

    assertIsNotNull(label)
    assertIsNotNull(input)

    expect(label.textContent).toBe(input.value)
  })
})
