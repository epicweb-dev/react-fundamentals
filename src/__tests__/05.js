import {alfredTip} from '@kentcdodds/react-workshop-app/test-utils'
import chalk from 'chalk'
import {render, screen, prettyDOM} from '@testing-library/react'
// import App from '../final/05'
import App from '../exercise/05'

test('renders the correct styles new', async () => {
  render(<App />)
  const allBoxes = screen.getAllByText(/box/i)

  const className = 'box'
  allBoxes.forEach(box => {
    alfredTip(
      () => {
        expect(box).toHaveClass(className)
      },
      () =>
        `
This box is missing the className "${className}"

${chalk.reset(prettyDOM(box))}
    `.trim(),
    )
  })

  allBoxes.forEach(box => {
    alfredTip(
      () => {
        expect(box).toHaveStyle('font-style: italic;')
      },
      () =>
        `
This box is missing fontStyle: 'italic' in the style prop

${chalk.reset(prettyDOM(box))}
    `.trim(),
    )
  })

  const small = screen.getByText(/small/i)
  const medium = screen.getByText(/medium/i)
  const large = screen.getByText(/large/i)

  expect(small).toHaveClass('box--small')
  expect(small).toHaveStyle('background-color: lightblue;')

  expect(medium).toHaveClass('box--medium')
  expect(medium).toHaveStyle('background-color: pink;')

  expect(large).toHaveClass('box--large')
  expect(large).toHaveStyle('background-color: orange;')
})
