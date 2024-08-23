import { expect, testStep } from '@epic-web/workshop-utils/test'

const response = await fetch(location.href)
const indexHtml = await response.text()
const node = document.createElement('div')
node.innerHTML = indexHtml

const inlineScript = node.querySelector('script[type="text/babel"]')
if (!inlineScript) {
	throw new Error('inlineScript not found')
}

await testStep('className is interpolated', async () => {
	expect(inlineScript.textContent).to.include('className={')
	expect(inlineScript.textContent).not.to.include('className="')
})

await testStep('children is interpolated', async () => {
	expect(
		inlineScript.textContent,
		'children should be interpolated',
	).not.to.include('>Hello World<')
	expect(inlineScript.textContent).to.include('{children}')
})
