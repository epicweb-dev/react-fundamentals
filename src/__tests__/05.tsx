import {render} from '@testing-library/react'
import {alfredTip} from '@kentcdodds/react-workshop-app/test-utils'
import {App} from '../final/05'
// import {App} from '../exercise/05'

test('renders the correct styles new', () => {
  render(<App />)
  const codeStrings = Array.from(document.body.querySelectorAll('code')).map(
    c => c.textContent,
  )
  alfredTip(() => {
    expect(codeStrings.join('\n')).toMatchInlineSnapshot(`
      "1 + 2 = 3
      1 - 2 = -1
      1 * 2 = 2
      1 / 2 = 0.5"
    `)
  }, 'Looks like the output for the calculator changed. Make sure the logic of the Calculator and App components remain unchanged in this exercise. You only need to change the TypeScript typings.')
})
