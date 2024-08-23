import { expect, testStep } from '@epic-web/workshop-utils/test'

const response = await fetch(location.href)
const indexHtml = await response.text()
const node = document.createElement('div')
node.innerHTML = indexHtml

const inlineScript = node.querySelector('script[type="text/babel"]')
if (!inlineScript) {
	throw new Error('inlineScript not found')
}

await testStep('message function is created', async () => {
	const functionForm = inlineScript.textContent?.includes('function message')
	const declarationForm = inlineScript.textContent?.includes('const message = ')
	expect(functionForm || declarationForm, 'message function must be declared')
		.to.be.true
})

await testStep('message function is called', async () => {
	expect(inlineScript.textContent).to.include('message(')
})
