// Basic Forms
// http://localhost:3000/isolated/final/06.js

import * as React from 'react'

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

function UsernameForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void
}) {
  function handleSubmit(event: React.SyntheticEvent<UsernameFormElement>) {
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

function App() {
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export {App}
