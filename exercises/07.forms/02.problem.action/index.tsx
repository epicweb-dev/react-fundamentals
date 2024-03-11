import * as ReactDOM from 'react-dom/client'

function App() {
	return (
		// 🐨 add an action prop pointing to "api/onboarding"
		<form>
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
