// Dynamic Forms

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(event.target.elements.username.value)
  }

  function handleChange(event) {
    const isLowerCase = event.target.value === event.target.value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
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
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}
Usage.title = 'Dynamic Forms'

export default Usage
