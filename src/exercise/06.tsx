// Basic Forms
// http://localhost:3000/isolated/exercise/06.tsx

import * as React from 'react'

//#region UsernameForm
interface UsernameFormProps {
  onSubmitUsername: (username: string) => void
}

const UsernameForm: React.VFC<UsernameFormProps> = ({onSubmitUsername}) => {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form>
      <div>
        {
          /*
           * 💣 remove the curly brackets and disable the eslint comment to
           * suppress the jsx-a11y/label-has-associated-control error.
           */
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label>Username:</label>
        }
        <input type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
//#endregion UsernameForm

//#region App
const App: React.VFC = () => {
  const onSubmitUsername = (username: string): void =>
    alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

//#region App

export default App
