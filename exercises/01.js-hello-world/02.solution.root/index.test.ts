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

await testStep('root element is not in the HTML', async () => {
	const response = await fetch(location.href)
	const text = await response.text()
	const node = document.createElement('div')
	node.innerHTML = text
	expect(
		node.querySelector('#root'),
		'root element found in the HTML when it should not be',
	).to.be.null
})
