import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'

await testStep('Proper elements are rendered to the DOM', async () => {
	const rootElement = document.getElementById('root')
	expect(rootElement, 'root element not found').to.be.instanceOf(HTMLElement)
	if (!rootElement) return

	const element = rootElement

	await dtl.waitFor(
		() => {
			const h1 = element.querySelector('h1')
			expect(h1, 'h1 not found').to.be.instanceOf(HTMLElement)
			expect(h1!.textContent).to.equal('Calculator')
		},
		{ timeout: 5000 },
	)

	const codeElements = Array.from(element.querySelectorAll('code'))
	expect(codeElements, 'code elements not found').to.have.length(4)

	const [plus, minus, times, divide] = codeElements

	expect(plus?.textContent).to.equal('1 + 2 = 3')
	expect(minus?.textContent).to.equal('1 - 2 = -1')
	expect(times?.textContent).to.equal('1 * 2 = 2')
	expect(divide?.textContent).to.equal('1 / 2 = 0.5')
})
