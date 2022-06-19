// Basic Forms
// http://localhost:3000/isolated/final/06.js

import React from 'react'

type UsernameFormProps = { onSubmitUsername: (username: string) => void }

type HandleSubmitTarget = React.FormEvent<HTMLFormElement>['target'] & {
  elements: {
    usernameInput: HTMLInputElement
  }
}

function UsernameForm({ onSubmitUsername }: UsernameFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const target = event.target as HandleSubmitTarget

    onSubmitUsername(target.elements.usernameInput.value)
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
  const onSubmitUsername = (username: string) => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
