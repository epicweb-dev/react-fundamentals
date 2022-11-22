// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitInfo}) {

  //  hook - more direct to accessing inputs
  const inputAge = React.useRef(null)
  const [error, setError] = React.useState('')
  const [name, setName] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = inputAge.current.value
    const username = e.target.username.value
    // we are using 'name' from the setter, not the 'e'
    onSubmitInfo(name,username,age)
  }

  // handleing error if uppercase chars are used
  const handleUsernameChange = (e) => {
    const inputValue = e.target.value
    const isValid = inputValue === inputValue.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  // directly not allowing upper case chars - transofrming to lowercase
  const handleNameChange = (e) => {
    const inputValue = e.target.value
    setName(inputValue.toLowerCase())
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">Name:</label>
        {/* start controlled input using 'value' */}
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          id="name"
          />
      </div>
      {/* end controlled input */}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleUsernameChange}
          type="text"
          id="username"
          />
      </div>
      <div
        style={{color: 'red'}}
        role="alert"
      >{error}</div>
      <div>
        <label htmlFor="age">Age:</label>
        <input ref={inputAge} type="text" id="age" />
      </div>
      <button type="submit" disabled={Boolean(error)} >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitInfo = (name, username, age) => {
    alert(`Hello ${name}!\nYour username is ${username} and you are ${age}`)
  }
  return <UsernameForm onSubmitInfo={onSubmitInfo} />
}

export default App
