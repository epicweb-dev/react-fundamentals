import React from 'react'
import {render, fireEvent, within} from '@testing-library/react'
import Usage from '../exercises-final/09'
// import Usage from '../exercises/09'

test('renders', () => {
  const {getByText, getByLabelText, container} = render(<Usage />)
  const plus = getByText(/add item/i)
  fireEvent.click(plus)
  fireEvent.click(plus)
  fireEvent.click(plus)
  fireEvent.click(plus)

  const orangeInput = getByLabelText(/orange/i)
  const orangeContainer = getByText(/orange/i).closest('li')
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
