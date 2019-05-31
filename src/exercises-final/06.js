// Basic Forms
import React from 'react'

function UsernameForm({onSubmitUsername}) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(event.target.elements.username.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Username:</label>
      <input id="name-input" type="text" name="username" />
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
