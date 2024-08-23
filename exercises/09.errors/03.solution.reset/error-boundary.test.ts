import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'
const { screen } = dtl
import { userEvent } from '@testing-library/user-event'

const user = userEvent.setup()

import './index.tsx'

testStep('Error boundary is rendered after form submission', async () => {
	// submit the form
	await user.click(await screen.findByRole('button', { name: /submit/i }))

	// Check if the error message is displayed
	const errorMessage = await screen.findByRole('alert')
	expect(errorMessage).toBeDefined()
	expect(errorMessage.textContent).toContain('There was an error:')

	// Check if the error message contains the specific error
	const errorDetails = await screen.findByText(/toUpperCase/i)
	expect(errorDetails).toBeDefined()

	// Ensure the form is not rendered after error
	const form = screen.queryByRole('form')
	expect(form).toBeNull()
})

testStep('Clicking "Try again" resets the error boundary', async () => {
	// Click the "Try again" button
	const tryAgainButton = await screen.findByRole('button', {
		name: /try again/i,
	})
	await user.click(tryAgainButton)

	// Verify that the submit button appears again
	const submitButton = await screen.findByRole('button', { name: /submit/i })
	expect(submitButton).toBeDefined()

	// Ensure the error message is no longer present
	const errorMessage = screen.queryByRole('alert')
	expect(errorMessage).toBeNull()
})
