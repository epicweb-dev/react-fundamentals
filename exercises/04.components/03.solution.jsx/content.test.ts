import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'

await testStep('Proper elements are rendered to the DOM', async () => {
	const rootElement = document.getElementById('root')
	expect(rootElement, 'root element not found').to.be.instanceOf(HTMLElement)
	if (!rootElement) return

	const element = await dtl.waitFor(
		() => {
			const element = rootElement!.querySelector('.container')
			expect(element, 'container element not found').to.be.instanceOf(
				HTMLElement,
			)
			return element
		},
		{ timeout: 5000 },
	)

	if (!element) return

	const messages = Array.from(element.querySelectorAll('.message'))
	expect(messages, 'messages not found').to.have.length(2)
	const [helloMessage, goodbyeMessage] = messages
	expect(helloMessage.textContent).to.equal('Hello World')
	expect(goodbyeMessage.textContent).to.equal('Goodbye World')
})
