// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const inputRef = React.useRef();

  const [value, setValue] = React.useState('');
  // const [error, setError] = React.useState(null);

  // const isValid = (value) => value === value.toLowerCase();

  const handleChange = (e) => {
    const { value } = e.target;

    // const isLowerCase = isValid(value);

    // setError(isLowerCase ? null : 'Username must be lowercase!');

    setValue(value.toLowerCase());

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { value } = inputRef.current;
    onSubmitUsername(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start' }}>
        <label htmlFor="usernameInput">Username:</label>
        <input onChange={handleChange} id="usernameInput" type="text" value={value} />
        {/* <span role="alert" style={{ color: 'red', fontSize: '12px' }}>{error}</span> */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
