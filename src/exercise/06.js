// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const onSubmit = e => {
    e.preventDefault()
    onSubmitUsername(e.target.elements.username.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
