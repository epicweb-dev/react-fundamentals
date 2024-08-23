import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'
const { screen } = dtl

import './index.tsx'

await testStep('Form is rendered', () => {
	return dtl.waitFor(() => {
		const form = document.querySelector('form')
		expect(form).toBeInTheDocument()
		return form
	})
})

await testStep('Username input is rendered', async () => {
	const usernameInput = await screen.findByLabelText(/username/i)
	expect(usernameInput).toHaveAttribute('name', 'username')
})

await testStep('Password input is rendered', async () => {
	const passwordInput = await screen.findByLabelText(/password/i)
	expect(passwordInput).toHaveAttribute('name', 'password')
	expect(passwordInput).toHaveAttribute('type', 'password')
})

await testStep('Age input is rendered', async () => {
	const ageInput = await screen.findByLabelText(/age/i)
	expect(ageInput).toHaveAttribute('name', 'age')
	expect(ageInput).toHaveAttribute('type', 'number')
	expect(ageInput).toHaveAttribute('min', '0')
	expect(ageInput).toHaveAttribute('max', '200')
})

await testStep('Account Type select is rendered', async () => {
	const accountTypeSelect = await screen.findByLabelText(/account type/i)
	expect(accountTypeSelect).toHaveAttribute('name', 'accountType')
	expect(accountTypeSelect.tagName.toLowerCase()).toBe('select')

	const options = accountTypeSelect.querySelectorAll('option')
	expect(options).toHaveLength(5)
	expect(options[0]).toHaveTextContent('--Please select an option--')
	expect(options[1]).toHaveTextContent('Admin')
	expect(options[2]).toHaveTextContent('Teacher')
	expect(options[3]).toHaveTextContent('Parent')
	expect(options[4]).toHaveTextContent('Student')
})

await testStep('Photo input is rendered', async () => {
	const photoInput = await screen.findByLabelText(/photo/i)
	expect(photoInput).toHaveAttribute('name', 'photo')
	expect(photoInput).toHaveAttribute('type', 'file')
	expect(photoInput).toHaveAttribute('accept', 'image/*')
})

await testStep('Favorite Color input is rendered', async () => {
	const colorInput = await screen.findByLabelText(/favorite color/i)
	expect(colorInput).toHaveAttribute('name', 'color')
	expect(colorInput).toHaveAttribute('type', 'color')
})

await testStep('Visibility radio buttons are rendered', async () => {
	const publicRadio = await screen.findByLabelText(/public/i)
	const privateRadio = await screen.findByLabelText(/private/i)

	expect(publicRadio).toHaveAttribute('name', 'visibility')
	expect(publicRadio).toHaveAttribute('type', 'radio')
	expect(publicRadio).toHaveAttribute('value', 'public')

	expect(privateRadio).toHaveAttribute('name', 'visibility')
	expect(privateRadio).toHaveAttribute('type', 'radio')
	expect(privateRadio).toHaveAttribute('value', 'private')
})

await testStep('Waiver Signed input is rendered', async () => {
	const waiverSignedInput = await screen.findByLabelText(/waiver signed/i)
	expect(waiverSignedInput).toHaveAttribute('name', 'waiver')
	expect(waiverSignedInput).toHaveAttribute('type', 'checkbox')
})

await testStep('Start Date input is rendered', async () => {
	const startDateInput = await screen.findByLabelText(/start date/i)
	expect(startDateInput).toHaveAttribute('name', 'startDate')
	expect(startDateInput).toHaveAttribute('type', 'date')
})

await testStep('Submit button is rendered', () =>
	screen.findByRole('button', { name: /submit/i }),
)
