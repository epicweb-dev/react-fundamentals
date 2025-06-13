import { createRoot } from 'react-dom/client'

function App() {
	return (
		<form action="api/onboarding">
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" type="text" />
			</div>
			<div>
				<label htmlFor="passwordInput">Password:</label>
				<input id="passwordInput" name="password" type="password" />
			</div>
			<div>
				<label htmlFor="ageInput">Age:</label>
				<input id="ageInput" name="age" type="numbre" min={0} max={200} />
			</div>
			<div>
				<label htmlFor="photoInput">Photo:</label>
				<input id="photoInput" name="photo" type='file' accept="image/*" />
			</div>
			<div>
				<label htmlFor="colorInput">Color:</label>
				<input id="colorInput" name="color" type='color' />
			</div>
			<div>
				<label htmlFor="startDateInput">StartDate:</label>
				<input id="startDateInput" name="startDate" type='date' />
			</div>
			{/* 🐨 add appropriate inputs for:
				- password
				- age (accepting numbers from 0 to 200)
				- photo (restricts the input to only accept image files)
				- color
				- startDate
			 */}
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
