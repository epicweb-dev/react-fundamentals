import { createRoot } from 'react-dom/client'

function App() {
	function logFormData(formData: FormData) {
		console.log(Object.fromEntries(formData))
	}
	return (
		<form action={logFormData}>
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
					defaultValue={new Date().toISOString().slice(0, 10)}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
