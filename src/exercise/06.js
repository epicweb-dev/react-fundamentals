// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = event.target.elements.username.value
    onSubmitUsername(value)
  }
  
  const handleChange = (event) => {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase();
    setError(isLowerCase ? null : 'Username must be lower case')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input id='username' type="text" onChange={handleChange} />
      </div>
      <div style={{color: 'red'}} > {error} </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
