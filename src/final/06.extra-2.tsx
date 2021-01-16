// Dynamic Forms
// 💯 Validate lower-case
// http://localhost:3000/isolated/final/06.extra-2.tsx

import * as React from 'react'

//#region  UsernameForm
interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

interface UsernameFormProps {
  onSubmitUsername: (username: string) => void
}

const UsernameForm: React.VFC<UsernameFormProps> = ({onSubmitUsername}) => {
  const [error, setError] = React.useState<null | string>(null)

  const handleSubmit: React.FormEventHandler<UsernameFormElement> = event => {
    event.preventDefault()
    onSubmitUsername(event.currentTarget.elements.usernameInput.value)
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {value} = event.currentTarget
    const isLowerCase: boolean = value === value.toLowerCase()
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
//#endregion UsernameForm

//#region App
const App: React.VFC = () => {
  const onSubmitUsername = (username: string): void =>
    alert(`You entered: ${username}`)

  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}
//#endregion App

export default App
