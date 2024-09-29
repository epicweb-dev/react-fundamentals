import { createRoot } from 'react-dom/client'

function App() {
	// 🐨 create a function called logFormData which accepts a FormData object
	// 🐨 console.log the FormData object like we do in the current onSubmit handler
	return (
		<form
			// 🐨 replace the string "api/onboarding" with the logFormData function
			action="api/onboarding"
			// 💣 delete the rest of these props
			//   💯 React has a warning if you leave method and encType around once
			//   you make the action a function. Feel free to check out what that
			//   warning says before removing them.
			method="POST"
			encType="multipart/form-data"
			onSubmit={event => {
				event.preventDefault()
				const formData = new FormData(event.currentTarget)
				console.log(Object.fromEntries(formData))
			}}
		>
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>
			<div>
				<label htmlFor="passwordInput">Password:</label>
				<input id="passwordInput" name="password" type="password" />
			</div>
			<div>
				<label htmlFor="ageInput">Age:</label>
				<input id="ageInput" name="age" type="number" min="0" max="200" />
			</div>
			<div>
				<label htmlFor="photoInput">Photo:</label>
				<input id="photoInput" name="photo" type="file" accept="image/*" />
			</div>
			<div>
				<label htmlFor="colorInput">Favorite Color:</label>
				<input id="colorInput" name="color" type="color" />
			</div>
			<div>
				<label htmlFor="startDateInput">Start Date:</label>
				<input id="startDateInput" name="startDate" type="date" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
