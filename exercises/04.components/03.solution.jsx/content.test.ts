import { expect, testStep } from '@epic-web/workshop-utils/test'

// wait for babel to compile and evaluate the JSX
await new Promise(resolve => setTimeout(resolve, 100))

await testStep('Proper elements are rendered to the DOM', () => {
	const rootElement = document.getElementById('root')
	expect(rootElement, 'root element not found').to.be.instanceOf(HTMLElement)
	if (!rootElement) return

	const element = rootElement.querySelector('.container')
	expect(element, 'container element not found').to.be.instanceOf(HTMLElement)
	if (!element) return

	const messages = Array.from(element.querySelectorAll('.message'))
	expect(messages, 'messages not found').to.have.length(2)
	const [helloMessage, goodbyeMessage] = messages
	expect(helloMessage.textContent).to.equal('Hello World')
	expect(goodbyeMessage.textContent).to.equal('Goodbye World')
})
