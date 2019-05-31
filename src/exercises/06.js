// Basic Forms
import React from 'react'

// In React, there actually aren't a ton of things you have to learn to interact
// with forms beyond what you can do with regular DOM APIs and JavaScript. Which
// I think is pretty awesome.
//
// You can attach a submit handler to a form element with the `onSubmit` prop.
// This will be called with the submit event which has a `target`. That `target`
// is a reference to the `<form>` DOM node which has a reference to the elements
// of the form which can be used to get the values out of the form!

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🦉 There are several ways to get the value of the name input:
  //
  //    Via their index:
  //    event.target.elements[0]
  //
  //    Via the elements object by their name:
  //    event.target.elements.username.value
  //
  //    Or you could create a React ref for the input and get the value from
  //    inputRef.current.value
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the above options), and call `onSubmitUsername` with the
  // value of the input (you'll get `onSubmitUsername` from props).

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  return (
    <form>
      <label>Username:</label>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  )
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
function Usage() {
  const onSubmitUsername = username => console.log('username', username)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
Usage.title = 'Basic Forms'

export default Usage
