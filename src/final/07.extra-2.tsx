// Dynamic Forms
// 💯 Validate lower-case
// http://localhost:3000/isolated/final/06.extra-2.js

import * as React from 'react'

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

function UsernameForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void
}) {
  const [error, setError] = React.useState<null | string>(null)

  function handleSubmit(event: React.SyntheticEvent<UsernameFormElement>) {
    event.preventDefault()
    onSubmitUsername(event.currentTarget.elements.usernameInput.value)
  }

  function handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    const {value} = event.currentTarget
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export {App}
