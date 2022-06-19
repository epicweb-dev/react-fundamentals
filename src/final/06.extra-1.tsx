// Basic Forms
// 💯 using refs
// http://localhost:3000/isolated/final/06.extra-1.js

import React, { useRef } from 'react'

type UsernameFormProps = { onSubmitUsername: (username: string) => void }

function UsernameForm({ onSubmitUsername }: UsernameFormProps) {
  const usernameInputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!usernameInputRef.current) {
      return
    }

    onSubmitUsername(usernameInputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={usernameInputRef} />
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
