import { createRoot } from 'react-dom/client'

function App() {
	return (
		<form
			action="api/onboarding"
			// 🦉 Follow these instructions in order. Test the behavior after each step
			// 1️⃣ 🐨 set the method to "POST" then update api.server.ts to handle the POST request
			// 2️⃣ 🐨 set the encType to "multipart/form-data"
			// 3️⃣ 🐨 add an onSubmit handler that calls event.preventDefault()
			// 4️⃣ 🐨 create a FormData object from the the form (💰 event.currentTarget)
			// 5️⃣ 🐨 log the result of Object.fromEntries(formData)
			// 6️⃣ 💯 as extra credit, see what happens if you remove the action, method, and encType
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
