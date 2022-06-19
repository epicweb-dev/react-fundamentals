// Dynamic Forms
// 💯 Validate lower-case
// http://localhost:3000/isolated/final/06.extra-2.js

import React, { useState } from 'react'

type UsernameFormProps = { onSubmitUsername: (username: string) => void }

type HandleSubmitTarget = React.FormEvent<HTMLFormElement>['target'] & {
  elements: {
    usernameInput: HTMLInputElement
  }
}

function UsernameForm({ onSubmitUsername }: UsernameFormProps) {
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const target = event.target as HandleSubmitTarget

    onSubmitUsername(target.elements.usernameInput.value)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      <div role="alert" style={{ color: 'red' }}>
        {error}
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username: string) => alert(`You entered: ${username}`)
  return (
    <div style={{ minWidth: 400 }}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default App
