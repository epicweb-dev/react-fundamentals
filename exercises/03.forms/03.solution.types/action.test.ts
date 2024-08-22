import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'

import './index.tsx'

const form = await dtl.waitFor(() => {
	const form = document.querySelector('form')
	expect(form).toBeInTheDocument()
	return form
})

await testStep('Form has correct action', async () => {
	expect(form).toHaveAttribute('action', 'api/onboarding')
})
