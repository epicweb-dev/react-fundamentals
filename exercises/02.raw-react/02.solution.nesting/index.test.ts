import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'

await testStep('"Hello World" is rendered to the DOM', async () => {
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

	if (element.textContent === 'HelloWorld') {
		throw new Error(
			'Looks like you forgot to include the space between the spans',
		)
	}

	expect(element.textContent, 'element text is not correct').to.equal(
		'Hello World',
	)

	const [hello, world] = element.querySelectorAll('span')

	expect(hello, 'Hello span not found').to.be.instanceOf(HTMLElement)
	expect(world, 'World span not found').to.be.instanceOf(HTMLElement)

	expect(hello.textContent, 'hello text is not correct').to.equal('Hello')
	expect(world.textContent, 'world text is not correct').to.equal('World')
})
