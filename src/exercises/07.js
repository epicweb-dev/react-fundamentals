// Dynamic Forms

import React from 'react'

// If we want our form to be dynamic, we'll need a few things:
// 1. Component state to store the dynamic values (an error message in our case)
// 2. A change handler on the input so we know what the value is as the user changes it
//
// In our usage example below, we're provided a prop called `getErrorMessage`.
// This serves as our simple validation. If it returns a string, that's an error
// message we should display below the input. We'll store this value in state
// and use that to know whether to render the message as well as whether to
// disable the submit button.

function UsernameForm({onSubmitUsername, getErrorMessage}) {
  // 🐨 add some state (with React.useState) for the error.
  // 💰 initialize it to whatever comes back from `getErrorMessage('')`

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  // 🐨 create a `handleChange` function that takes the value of the input and
  // updates the `error` state to whatever is returned from `getErrorMessage`
  // with the input's value.
  // 💰 remember that your change handler will get called with an event that
  // has a `target` property that references the DOM node that is responsible
  // for the event, so you can get the value from event.target.value

  // 🐨 add an `onChange` handler to the `input`
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"

          // 🐨 add your onChange handler here
        />
      </div>
      {/* 🐨 if there's an error, then render it in a div here */}
      {/* 🐨 add a disabled prop to this button that's set to true if there's an error */}
      <button type="submit">Submit</button>
    </form>
  )
}

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:
http://ws.kcd.im/?ws=React%20Fundamentals%20&e=Dynamic%20Forms&em=
*/

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  const onSubmitUsername = username => console.log('username', username)
  function getErrorMessage(value) {
    if (value.length < 3) {
      return `Value must be at least 3 characters, but is only ${value.length}`
    }
    if (!value.includes('s')) {
      return `Value does not include "s" but it should!`
    }
    return null
  }
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm
        onSubmitUsername={onSubmitUsername}
        getErrorMessage={getErrorMessage}
      />
    </div>
  )
}
Usage.title = 'Dynamic Forms'

export default Usage
