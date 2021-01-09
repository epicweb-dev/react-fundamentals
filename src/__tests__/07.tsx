import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {alfredTip} from '@kentcdodds/react-workshop-app/test-utils'
import * as utils from '../utils'
import {App} from '../final/07'
// import {App} from '../exercise/07'

jest.mock('../utils')

let alert = jest.spyOn(global, 'alert')
beforeAll(() => {
  alert.mockImplementation(() => {})
})

beforeEach(() => {
  alert.mockClear()
})

test('calls the onSubmitUsername handler when the submit is fired', () => {
  render(<App />)
  const input = screen.getByRole('textbox', {
    name: /username/i,
  }) as HTMLInputElement
  const submit = screen.getByRole('button', {name: /submit/i})

  const username = 'jenny'

  userEvent.type(input, username)
  userEvent.click(submit)

  expect(global.alert).toHaveBeenCalledWith(`You entered: ${username}`)
  expect(global.alert).toHaveBeenCalledTimes(1)

  const random = screen.queryByRole('button', {name: /random/i})
  // Never *ever* do this in a real-world test!! 😅
  // this is just how I know that you've moved on to the right extra credit
  if (random) {
    const randomUsername = 'TEST_RANDOM_USERNAME'
    ;(utils.getRandomUsername as jest.MockedFunction<
      typeof utils.getRandomUsername
    >).mockReturnValue(randomUsername)

    userEvent.click(random)

    alfredTip(() => {
      expect(input.value.length).toBeGreaterThan(0)
    }, `After clicking the "Random" button, the value of the input was empty. Make sure you're calling setUsername(getRandomUsername())`)

    alfredTip(() => {
      expect(input.value).not.toBe(username)
    }, `After clicking the "Random" button, the value of the input was unchanged. Make sure you're calling setUsername(getRandomUsername())`)

    alfredTip(() => {
      expect(input.value).toBe(randomUsername)
    }, `After clicking the "Random" button, the value of the input wasn't set to the getRandomUsername() value. Make sure you're calling setUsername(getRandomUsername())`)
  }
})
