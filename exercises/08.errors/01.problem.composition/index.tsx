import { createRoot } from 'react-dom/client'
// 🐨 bring in ErrorBoundary and FallbackProps type from react-error-boundary

// 🐨 Rename this to OnboardingForm
function App() {
	return (
		<form
			action="api/onboarding"
			method="POST"
			encType="multipart/form-data"
			onSubmit={event => {
				event.preventDefault()
				const formData = new FormData(event.currentTarget)
				console.log(Object.fromEntries(formData))
				const accountType = formData.get('accountType') as string
				console.log(accountType.toUpperCase())
			}}
		>
			<input type="hidden" name="orgId" value="123" />
			<div>
				<label htmlFor="accountTypeSelection">Account Type:</label>
				<select
					id="accountTypeSelection"
					name="accountType"
					defaultValue="student"
				>
					<option value="">--Please select an option--</option>
					<option value="admin">Admin</option>
					<option value="teacher">Teacher</option>
					<option value="parent">Parent</option>
					<option value="student">Student</option>
				</select>
			</div>
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
				<input
					id="ageInput"
					name="age"
					type="number"
					min="0"
					max="200"
					defaultValue={18}
				/>
			</div>
			<div>
				<label htmlFor="photoInput">Photo:</label>
				<input id="photoInput" name="photo" type="file" accept="image/*" />
			</div>
			<div>
				<label htmlFor="colorInput">Favorite Color:</label>
				<input
					id="colorInput"
					name="color"
					type="color"
					defaultValue="#002E5D"
				/>
			</div>
			<fieldset>
				<legend>Visibility:</legend>
				<label>
					<input name="visibility" type="radio" value="public" defaultChecked />
					Public
				</label>
				<label>
					<input name="visibility" type="radio" value="private" />
					Private
				</label>
			</fieldset>
			<div>
				<label>
					<input name="waiver" type="checkbox" defaultChecked />
					Waiver Signed
				</label>
			</div>
			<div>
				<label htmlFor="startDateInput">Start Date:</label>
				<input
					id="startDateInput"
					name="startDate"
					type="date"
					// 💰 you can comment this out to avoid the runtime error
					defaultValue={new Date('today').toISOString().slice(0, 10)}
					// defaultValue={new Date().toISOString().slice(0, 10)}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

// 🐨 create an ErrorFallback component here that accepts FallbackProps
// and renders the error.message
// 💯 you can make it look nice if you want
// 📜 https://github.com/bvaughn/react-error-boundary#errorboundary-with-fallbackcomponent-prop

// 🐨 make a component called "App" that renders the OnboardingForm inside an
// ErrorBoundary with the ErrorFallback as the FallbackComponent
// 🦉 as a tip, you could use the onError prop if you wanted to report errors to
// a reporting service like Sentry.io

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
