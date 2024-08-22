import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'

const originalError = console.error
const errors: Array<string> = []
console.error = (...args: any[]) => {
	errors.push(args[0])
	originalError(...args)
}

import './index.tsx'

const { screen } = dtl

await testStep('Wait for Add Item button', async () => {
	await screen.findByRole('button', { name: /add item/i })
})

await testStep('Key prop is provided (no console errors)', async () => {
	try {
		expect(errors).toHaveLength(0)
	} finally {
		console.error = originalError
	}
})
