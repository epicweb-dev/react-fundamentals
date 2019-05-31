// Dynamic Forms
import React from 'react'

function UsernameForm({onSubmitUsername, getErrorMessage}) {
  const [error, setError] = React.useState(getErrorMessage(''))

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(event.target.elements.username.value)
  }

  function handleChange(event) {
    setError(getErrorMessage(event.target.value))
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Username:</label>
      <input
        id="name-input"
        type="text"
        name="username"
        onChange={handleChange}
      />
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function Usage() {
  const onSubmitUsername = username => console.log('username', username)
  function getErrorMessage(value) {
    if (value.length < 3) {
      return `Value must be at least 3 characters, but is only ${value.length}`
    }
    if (!value.includes('s')) {
      return `Value does not include "s" but it should!`
    }
    return null
  }
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm
        onSubmitUsername={onSubmitUsername}
        getErrorMessage={getErrorMessage}
      />
    </div>
  )
}
Usage.title = 'Dynamic Forms'

export default Usage
