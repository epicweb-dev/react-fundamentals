// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  const inputRef = React.useRef(null)
  function handleSubmit(event) {
    event.preventDefault()
    let username = inputRef.current.value
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label type="username">Username:</label>
        <input
          type="text"
          name="usernameInput"
          ref={inputRef}
          value={'harshit'}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
