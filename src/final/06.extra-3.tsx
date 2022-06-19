// Controlled Forms
// 💯 Control the input value
// http://localhost:3000/isolated/final/06.extra-3.js

import React, { useState } from 'react'

type UsernameFormProps = { onSubmitUsername: (username: string) => void }

function UsernameForm({ onSubmitUsername }: UsernameFormProps) {
  const [username, setUsername] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
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
