# Forms

## 📝 Your Notes

Elaborate on your learnings here in `src/exercise/06.md`

## Background

In React, there actually aren't a ton of things you have to learn to interact
with forms beyond what you can do with regular DOM APIs and JavaScript. Which I
think is pretty awesome.

You can attach a submit handler to a form element with the `onSubmit` prop. This
will be called with the submit event which has a `target`. That `target` is a
reference to the `<form>` DOM node which has a reference to the elements of the
form which can be used to get the values out of the form!

## Exercise

Production deploys:

- [Exercise](http://react-fundamentals.netlify.app/isolated/exercise/06.js)
- [Final](http://react-fundamentals.netlify.app/isolated/final/06.js)

In this exercise, we have a form where you can submit a username and then you'll
get an "alert" showing what you typed.

🦉 There are several ways to get the value of the name input:

- Via their index: `event.target.elements[0].value`
- Via the elements object by their `name` or `id` attribute:
  `event.target.elements.usernameInput.value`
- There's another that I'll save for the extra credit

## Extra Credit

### 1. 💯 using refs

[Production deploy](http://react-fundamentals.netlify.app/isolated/final/06.extra-1.js)

Another way to get the value is via a `ref` in React. A `ref` is an object that
stays consistent between renders of your React component. It has a `current`
property on it which can be updated to any value at any time. In the case of
interacting with DOM nodes, you can pass a `ref` to a React element and React
will set the `current` property to the DOM node that's rendered.

So if you create an `inputRef` object via `React.useRef`, you could access the
value via: `inputRef.current.value`
(📜[https://reactjs.org/docs/hooks-reference.html#useref](https://reactjs.org/docs/hooks-reference.html#useref))

Try to get the usernameInput's value using a ref.

### 2. 💯 Validate lower-case

[Production deploy](http://react-fundamentals.netlify.app/isolated/final/06.extra-2.js)

With React, the way you use state is via a special "hook" called `useState`.
Here's a simple example of what that looks like:

```jsx
function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(count + 1)
  return <button onClick={increment}>{count}</button>
}
```

`React.useState` accepts a default initial value and returns an array. Typically
you'll destructure that array to get the state and a state updater function.

📜 [https://reactjs.org/docs/hooks-state.html](https://reactjs.org/docs/hooks-state.html)

In this extra credit, we're going to say that this username input only accepts
lower-case characters. So if someone types an upper-case character, that's
invalid input and we'll show an error message.

If we want our form to be dynamic, we'll need a few things:

1. Component state to store the dynamic values (an error message in our case)
2. A change handler on the input so we know what the value is as the user
   changes it and can update the error state.

Once we have that wired up then we can render the error message and disable the
submit button if there's an error.

💰 This one's a little more tricky, so here are a few things you need to do to
make this work:

1. Create a `handleChange` function that accepts the change `event` and uses
   `event.target.value` to get the value of the input. Remember this event will
   be triggered on the input, not the form.
2. Use the value of the input to determine whether there's an error. There's an
   error if the user typed any upper-case characters. You can check this really
   easily via `const isValid = value === value.toLowerCase()`
3. If there's an error, set the error state to `'Username must be lower case'`.
   (💰 here's how you do that:
   `setError(isValid ? null : 'Username must be lower case')`) and disable the
   submit button.
4. Finally, display the error in an element

You may consider adding a `role="alert"` to the element you use to display the
error to assist with screen reader users.

Make sure you pass `handleChange` to the `onChange` handler of the `input`.

### 3. 💯 Control the input value

[Production deploy](http://react-fundamentals.netlify.app/isolated/final/06.extra-3.js)

Sometimes you have form inputs which you want to programmatically control. Maybe
you want to set their value explicitly when the user clicks a button, or maybe
you want to change what the value is as the user is typing.

This is why React supports Controlled Form inputs. So far in our exercises, all
of the form inputs have been "uncontrolled" which means that the browser is
maintaining the state of the input by itself and we can be notified of changes
and "query" for the value from the DOM node.

If we want to explicitly update that value we could do this:
`inputNode.value = 'whatever'` but that's pretty imperative. Instead, React
allows us to programmatically set the `value` prop on the input like so:

```jsx
<input value={myInputValue} />
```

Once we do that, React ensures that the value of that input can never differ
from the value of the `myInputValue` variable.

Typically you'll want to provide an `onChange` handler as well so you can be
made aware of "suggested changes" to the input's value (where React is basically
saying "if I were controlling this value, here's what I would do, but you do
whatever you want with this").

Typically you'll want to store the input's value in a state variable (via
`React.useState`) and then the `onChange` handler will call the state updater to
keep that value up-to-date.

Wouldn't it be even cooler if instead of showing an error message we just didn't
allow the user to enter invalid input? Yeah! In this extra credit I've backed us up
and removed the error stuff and now we're going to control the input state and
control the input value. Anytime there's a change we'll call `.toLowerCase()` on
the value to ensure that it's always the lower case version of what the user
types.

So we can get rid of our `error` state and instead we'll manage state called
`username` (with `React.useState`) and we'll set the `username` to whatever the
input value is. We'll just lowercase the input value before doing so. Then we'll
pass that value to the `input`'s `value` prop and now it's impossible for users
to enter an invalid value!

## 🦉 Feedback

Fill out
[the feedback form](https://ws.kcd.im/?ws=React%20Fundamentals%20%E2%9A%9B&e=06%3A%20Forms&em=).
