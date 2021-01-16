// Basic Forms
// 💯 using refs
// http://localhost:3000/isolated/final/06.extra-1.tsx

import * as React from 'react'

//#region  UsernameForm
interface UsernameFormProps {
  onSubmitUsername: (username: string) => void
}

const UsernameForm: React.VFC<UsernameFormProps> = ({onSubmitUsername}) => {
  const usernameInputRef = React.useRef<HTMLInputElement>(null!)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
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
//#endregion UsernameForm

//#region App
const App: React.VFC = () => {
  const onSubmitUsername = (username: string): void =>
    alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
//#endregion App

export default App
