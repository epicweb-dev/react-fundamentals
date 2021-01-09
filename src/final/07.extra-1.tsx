// Basic Forms
// 💯 using refs
// http://localhost:3000/isolated/final/06.extra-1.js

import * as React from 'react'

function UsernameForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void
}) {
  const usernameInputRef = React.useRef<HTMLInputElement>(null)

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    if (usernameInputRef.current) {
      onSubmitUsername(usernameInputRef.current.value)
    }
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
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export {App}
