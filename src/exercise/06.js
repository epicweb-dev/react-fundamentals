// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from "react";

function UsernameForm({ onSubmitUsername }) {
  const inputRef = React.useRef("");
  const [error, setError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const username = inputRef.current.value;
    onSubmitUsername(username);
  }

  function handleChange({ target }) {
    const { value } = target;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : "Username must be lowercase");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          ref={inputRef}
          id="username"
          name="username"
          type="text"
        />
      </div>
      <div role="alert" style={{ color: "red" }}>
        {error}
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  );
}

export default App;
