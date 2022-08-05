// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// ---- MAIN EXERCISE 6

// 🐨 add a submit event handler here (`handleSubmit`).
// 💰 Make sure to accept the `event` as an argument and call
// `event.preventDefault()` to prevent the default behavior of form submit
// events (which refreshes the page).
// 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//
// 🐨 get the value from the username input (using whichever method
// you prefer from the options mentioned in the instructions)
// 💰 For example: event.target.elements[0].value
// 🐨 Call `onSubmitUsername` with the value of the input

// 🐨 add the onSubmit handler to the <form> below

// 🐨 make sure to associate the label to the input.
// to do so, set the value of 'htmlFor' prop of the label to the id of input

// function UsernameForm({onSubmitUsername}) {
//   const handleSubmit = event => {
//     event.preventDefault()
//     onSubmitUsername(event.target.elements.usernameInput.value)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// ---- Extra 6.1 USING REFS

// function UsernameForm({onSubmitUsername}) {
//   const inputRef = React.useRef(null)

//   const handleSubmit = event => {
//     event.preventDefault()
//     // onSubmitUsername(event.target.elements.usernameInput.value)
//     onSubmitUsername(inputRef.current.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" ref={inputRef} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// // ------ Extra 6.2 VALIDATE LOWERCASE ----

// const UsernameForm = ({onSubmitUsername}) => {
//   const inputRef = React.useRef(null)
//   const [errorMsg, setErrorMsg] = React.useState(undefined)

//   const handleSubmit = event => {
//     event.preventDefault()
//     onSubmitUsername(inputRef.current.value)
//   }

//   const handleChange = event => {
//     const value = event.target.value

//     const isValid = value === value.toLowerCase()
//     setErrorMsg(isValid ? undefined : 'Username must be lower case')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           ref={inputRef}
//           onChange={handleChange}
//         />
//         {errorMsg && <p role="alert">{errorMsg} cake </p>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// ------ Extra 6.3  CONTROL THE INPUT VALUE ----

const UsernameForm = ({onSubmitUsername}) => {
  const inputRef = React.useRef(null)
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  const handleChange = event => {
    const value = event.target.value

    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={inputRef}
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => {
    alert(`You entered: ${username}`)
  }

  return (
    <>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </>
  )
}

export default App
