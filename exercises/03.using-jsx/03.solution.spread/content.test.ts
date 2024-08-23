import { expect, testStep } from '@epic-web/workshop-utils/test'

// wait for babel to compile and evaluate the JSX
await new Promise(resolve => setTimeout(resolve, 100))

await testStep('"Hello World" is rendered to the DOM', () => {
	const rootElement = document.getElementById('root')
	expect(rootElement, 'root element not found').to.be.instanceOf(HTMLElement)

	const element = rootElement!.querySelector('.container')
	expect(element, 'container element not found').to.be.instanceOf(HTMLElement)

	expect(element!.textContent, 'element text is not correct').to.equal(
		'Hello World',
	)
})
