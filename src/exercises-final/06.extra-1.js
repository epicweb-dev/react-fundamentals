// Basic Forms

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
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

function Usage() {
  const onSubmitUsername = username => console.log('username', username)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
Usage.title = 'Basic Forms'

export default Usage
