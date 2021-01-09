// Basic Forms
// http://localhost:3000/isolated/exercise/07.tsx

import * as React from 'react'

function UsernameForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void
}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument
  // 🦺 the `event` type should be `React.FormEvent<HTMLFormElement>`

  // 💰 make sure to call `event.preventDefault()` to prevent the default
  // behavior of form submit events (which refreshes the page).
  //
  // 🐨 create a `formElements` variable from the `event.currentTarget.elements`.
  // 🦺 You'll need to give it a type that makes the rest of the code compile (check the tip in the instructions)
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: formElements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export {App}
