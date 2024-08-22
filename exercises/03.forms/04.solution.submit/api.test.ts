import { expect, testStep } from '@epic-web/workshop-utils/test'

await testStep('POST api/onboarding', async () => {
	const formData = new FormData()
	const name = 'Kody Koala'
	formData.set('name', name)
	const response = await fetch('api/onboarding', {
		method: 'POST',
		body: formData,
	})

	expect(response.status).toBe(200)
	expect(await response.text()).toContain(name)
})
