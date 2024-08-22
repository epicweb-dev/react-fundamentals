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
