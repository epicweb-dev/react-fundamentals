import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'

await testStep('Proper elements are rendered to the DOM', async () => {
	const rootElement = document.getElementById('root')
	expect(rootElement, 'root element not found').to.be.instanceOf(HTMLElement)
	if (!rootElement) return

	const element = rootElement

	const p = await dtl.waitFor(
		async () => {
			const p = element.querySelector('p')
			expect(p, '<p> not found').to.be.instanceOf(HTMLElement)
			return p
		},
		{ timeout: 5000 },
	)

	const ul = element.querySelector('ul')
	expect(ul, '<ul> not found').to.be.instanceOf(HTMLElement)
	expect(ul).to.have.class('sams-food')
	const lis = element.querySelectorAll('li')
	expect(lis, '<li> elements not found').to.have.length(2)

	expect(p!.textContent, 'p text is not correct').to.equal(
		"Here's Sam's favorite food:",
	)

	const [greenEggs, ham] = ul!.querySelectorAll('li')

	expect(greenEggs.textContent, 'green eggs text is not correct').to.equal(
		'Green eggs',
	)
	expect(ham.textContent, 'ham text is not correct').to.equal('Ham')
})
