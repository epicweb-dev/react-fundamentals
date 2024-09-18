import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'

await testStep('"Hello World" is rendered to the DOM', async () => {
	const rootElement = document.getElementById('root')
	expect(rootElement, 'root element not found').to.be.instanceOf(HTMLElement)

	const element = await dtl.waitFor(
		async () => {
			const element = rootElement!.querySelector('.container')
			expect(element, 'container element not found').to.be.instanceOf(
				HTMLElement,
			)
			return element
		},
		{ timeout: 5000 },
	)

	expect(element!.textContent, 'element text is not correct').to.equal(
		'Hello World',
	)
})

await testStep('The DOM element is created by React', () => {
	const element = document.querySelector('#root .container')
	expect(element, 'element not found').to.be.instanceOf(HTMLElement)
	if (!element) return

	const reactKeys = Object.keys(element).filter(key =>
		key.startsWith('__react'),
	)
	expect(
		reactKeys.length,
		'element was not created by React',
	).to.be.greaterThan(0)
})
