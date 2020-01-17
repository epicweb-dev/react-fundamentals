// Controlled Forms

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add state here for the `username` using React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // 🐨 this change is not required, but since we're controlling the username
    // state ourselves anyway, we know what the value is without having to
    // reach through the form's elements, so you can pass `username` here instead
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  // 🐨 add an event handler here called `handleChange` which accepts the event
  // and calls setUsername with the lower case version of the input's value
  // 💰 event.target.value.toLowerCase()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          // 🐨 add an onChange prop here and pass `handleChange`
          // 🐨 set the value here to the `username` state
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:
http://ws.kcd.im/?ws=React%20Fundamentals%20&e=Controlled%20Forms&em=
*/

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  const onSubmitUsername = username => console.info('username', username)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default Usage
