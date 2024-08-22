import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'
const { screen, fireEvent } = dtl

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

await testStep('Start Date input is rendered', async () => {
	const startDateInput = await screen.findByLabelText(/start date/i)
	expect(startDateInput).toHaveAttribute('name', 'startDate')
	expect(startDateInput).toHaveAttribute('type', 'date')
})

await testStep('Submit button is rendered', () =>
	screen.findByRole('button', { name: /submit/i }),
)
