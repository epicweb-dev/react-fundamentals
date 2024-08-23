import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'
const { screen } = dtl

import './index.tsx'

testStep(
	'Error boundary is rendered immediately due to render error',
	async () => {
		// Check if the error message is displayed
		const errorMessage = await screen.findByRole('alert')
		expect(errorMessage).toBeDefined()
		expect(errorMessage.textContent).toContain('There was an error:')

		// Check if the error message contains the specific error
		const errorDetails = await screen.findByText(/invalid time/i)
		expect(errorDetails).toBeDefined()

		// Ensure the form is not rendered
		const form = screen.queryByRole('form')
		expect(form).toBeNull()
	},
)
