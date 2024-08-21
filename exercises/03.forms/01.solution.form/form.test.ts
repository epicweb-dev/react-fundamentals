import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'
const { screen } = dtl

import './index.tsx'

await testStep('Form is rendered', () =>
	dtl.waitFor(() => document.querySelector('form')),
)

await testStep('Username input is rendered', async () => {
	const usernameInput = await screen.findByLabelText(/username/i)
	expect(usernameInput).toHaveAttribute('name', 'username')
})

await testStep('Submit button is rendered', () =>
	screen.findByRole('button', { name: /submit/i }),
)
