// Basic Forms
// http://localhost:3000/isolated/final/06.tsx

import * as React from 'react'

//#region  UsernameForm
interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

interface UsernameFormProps {
  onSubmitUsername: (username: string) => void
}

const UsernameForm: React.VFC<UsernameFormProps> = ({onSubmitUsername}) => {
  const handleSubmit: React.FormEventHandler<UsernameFormElement> = event => {
    event.preventDefault()
    onSubmitUsername(event.currentTarget.elements.usernameInput.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
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
//#endregion App

export default App
