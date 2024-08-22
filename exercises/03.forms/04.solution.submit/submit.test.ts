import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'
const { screen, fireEvent } = dtl

import './index.tsx'

// Mock console.log
const originalLog = console.log
const mockLogs: Array<any> = []
console.log = (...args) => {
	// Forward all args to the originalLog
	originalLog(...args)

	// Check if the log is coming from the onSubmit function
	const stack = new Error().stack
	if (stack?.includes('onSubmit')) {
		mockLogs.push(args)
	}
}

try {
	await testStep('Form submission logs correct data', async () => {
		// Fill out the form
		const usernameInput = await screen.findByLabelText(/username/i)
		const passwordInput = await screen.findByLabelText(/password/i)
		const ageInput = await screen.findByLabelText(/age/i)
		const colorInput = await screen.findByLabelText(/favorite color/i)
		const startDateInput = await screen.findByLabelText(/start date/i)
		const submitButton = await screen.findByRole('button', { name: /submit/i })

		fireEvent.change(usernameInput, { target: { value: 'testuser' } })
		fireEvent.change(passwordInput, { target: { value: 'password123' } })
		fireEvent.change(ageInput, { target: { value: '25' } })
		fireEvent.change(colorInput, { target: { value: '#ff0000' } })
		fireEvent.change(startDateInput, { target: { value: '2023-01-01' } })

		// Submit the form
		fireEvent.click(submitButton)

		// Assert that console.log was called with the correct form data
		expect(mockLogs[0][0]).toEqual(
			expect.objectContaining({
				username: 'testuser',
				password: 'password123',
				age: '25',
				color: '#ff0000',
				startDate: '2023-01-01',
			}),
		)
	})
} finally {
	// Restore original console.log after tests
	console.log = originalLog
}
