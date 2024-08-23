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

await testStep('Age input is rendered with default value', async () => {
	const ageInput = await screen.findByLabelText(/age/i)
	expect(ageInput).toHaveAttribute('name', 'age')
	expect(ageInput).toHaveAttribute('type', 'number')
	expect(ageInput).toHaveAttribute('min', '0')
	expect(ageInput).toHaveAttribute('max', '200')
	expect(ageInput).toHaveValue(18)
})

await testStep(
	'Account Type select is rendered with default value',
	async () => {
		const accountTypeSelect = await screen.findByLabelText(/account type/i)
		expect(accountTypeSelect).toHaveAttribute('name', 'accountType')
		expect(accountTypeSelect.tagName.toLowerCase()).toBe('select')
		expect(accountTypeSelect).toHaveValue('student')

		const options = accountTypeSelect.querySelectorAll('option')
		expect(options).toHaveLength(5)
		expect(options[0]).toHaveTextContent('--Please select an option--')
		expect(options[1]).toHaveTextContent('Admin')
		expect(options[2]).toHaveTextContent('Teacher')
		expect(options[3]).toHaveTextContent('Parent')
		expect(options[4]).toHaveTextContent('Student')
	},
)

await testStep('Photo input is rendered', async () => {
	const photoInput = await screen.findByLabelText(/photo/i)
	expect(photoInput).toHaveAttribute('name', 'photo')
	expect(photoInput).toHaveAttribute('type', 'file')
	expect(photoInput).toHaveAttribute('accept', 'image/*')
})

await testStep(
	'Favorite Color input is rendered with default value',
	async () => {
		const colorInput = await screen.findByLabelText(/favorite color/i)
		expect(colorInput).toHaveAttribute('name', 'color')
		expect(colorInput).toHaveAttribute('type', 'color')
		expect(colorInput).toHaveValue('#002e5d')
	},
)

await testStep(
	'Visibility radio buttons are rendered with public checked by default',
	async () => {
		const publicRadio = await screen.findByLabelText(/public/i)
		const privateRadio = await screen.findByLabelText(/private/i)

		expect(publicRadio).toHaveAttribute('name', 'visibility')
		expect(publicRadio).toHaveAttribute('type', 'radio')
		expect(publicRadio).toHaveAttribute('value', 'public')
		expect(publicRadio).toBeChecked()

		expect(privateRadio).toHaveAttribute('name', 'visibility')
		expect(privateRadio).toHaveAttribute('type', 'radio')
		expect(privateRadio).toHaveAttribute('value', 'private')
		expect(privateRadio).not.toBeChecked()
	},
)

await testStep(
	'Waiver Signed input is rendered and checked by default',
	async () => {
		const waiverSignedInput = await screen.findByLabelText(/waiver signed/i)
		expect(waiverSignedInput).toHaveAttribute('name', 'waiver')
		expect(waiverSignedInput).toHaveAttribute('type', 'checkbox')
		expect(waiverSignedInput).toBeChecked()
	},
)

await testStep('Start Date input is rendered with default value', async () => {
	const startDateInput = await screen.findByLabelText(/start date/i)
	expect(startDateInput).toHaveAttribute('name', 'startDate')
	expect(startDateInput).toHaveAttribute('type', 'date')
	expect(startDateInput).toHaveValue(new Date().toISOString().slice(0, 10))
})

await testStep('Submit button is rendered', () =>
	screen.findByRole('button', { name: /submit/i }),
)
