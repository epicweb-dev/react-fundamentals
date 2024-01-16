import * as ReactDOM from 'react-dom/client'

function App() {
	return (
		<form>
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>
			{/* 🐨 add appropriate inputs for:
				- password
				- photo
				- color
				- startDate
			 */}
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
