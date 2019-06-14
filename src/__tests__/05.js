import React from 'react'
import chalk from 'chalk'
import {render, prettyDOM} from '@testing-library/react'
import Usage from '../exercises-final/05'
// import Usage from '../exercises/05'

test('renders the correct styles new', () => {
  const {container, getByText, getAllByText} = render(<Usage />)
  const allBoxes = getAllByText(/box/i)

  try {
    allBoxes.forEach(box => expect(box).toHaveClass('box'))
  } catch (error) {
    //
    //
    //
    // these comment lines are just here to keep the next line out of the codeframe
    // so it doesn't confuse people when they see the error message twice.
    error.message = `🚨  ${chalk.red(
      `One of the boxes is missing the className "box"`,
    )}\n\n${prettyDOM(container)}`

    throw error
  }

  try {
    allBoxes.forEach(box => expect(box).toHaveStyle('font-style: italic;'))
  } catch (error) {
    //
    //
    //
    // these comment lines are just here to keep the next line out of the codeframe
    // so it doesn't confuse people when they see the error message twice.
    error.message = `🚨  ${chalk.red(
      `One of the boxes is missing fontStyle: 'italic' in the style prop`,
    )}\n\n${prettyDOM(container)}`

    throw error
  }

  const small = getByText(/small/i)
  const medium = getByText(/medium/i)
  const large = getByText(/large/i)

  expect(small).toHaveClass('box--small')
  expect(small).toHaveStyle('background-color: lightblue;')

  expect(medium).toHaveClass('box--medium')
  expect(medium).toHaveStyle('background-color: pink;')

  expect(large).toHaveClass('box--large')
  expect(large).toHaveStyle('background-color: orange;')
})
