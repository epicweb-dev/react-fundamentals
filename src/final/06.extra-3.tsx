// Controlled Forms
// 💯 Control the input value
// http://localhost:3000/isolated/final/06.extra-3.tsx

import * as React from 'react'

//#region  UsernameForm
interface UsernameFormProps {
  onSubmitUsername: (username: string) => void
}

const UsernameForm: React.VFC<UsernameFormProps> = ({onSubmitUsername}) => {
  const [username, setUsername] = React.useState<string>('')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    onSubmitUsername(username)
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
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
