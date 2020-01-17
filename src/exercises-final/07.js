// Dynamic Forms

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function Usage() {
  const onSubmitUsername = username => console.info('username', username)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default Usage
